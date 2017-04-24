var song, analyzer, lifeArray, cnv
var firstRun = true
var pixelSize = 10
var bins = 0
var aliveColor = '#ff0000'
var canvasWidth = 720
var canvasHeight = 360
var bgColor = '#000'
var soundbarColor = '#fff'
var fps = 24

function initializeLifeArray() {
  //creates initial lifeArray
  lifeArray = []
  for (var y = 0; y < canvasHeight; y+=pixelSize) {
    var _array = []
    for (var x = 0; x < canvasWidth; x+=pixelSize) {
      var int8 = new Int8Array(2)
      // [isAlive, isSoundbar]
      _array.push(int8)
    }
    lifeArray.push(_array)
  }
}

function checkNeighbors(x, y) {
  // returns number of alive
  alive = 0
  neighbors = [[x+1, y], [x-1, y], [x, y+1], [x, y-1],
               [x+1, y+1], [x-1, y-1], [x+1, y-1], [x-1, y+1]]

  for (var i = 0; i < neighbors.length; i++) {
    var _x = neighbors[i][0]
    var _y = neighbors[i][1]

    // wrap around
    if (_x < 0) {
      _x = lifeArray[0].length - 1
    } else if (_x >= lifeArray[0].length) {
      _x = 0
    }

    if (_y > 0 && _y < lifeArray.length && lifeArray[_y][_x][0]) {
      alive++
    }
  }
  return alive
}

function preload() {
  song = loadSound('static/audio/deorro_small.mp3')
}

function setup() {
  document.getElementById('instructions').classList.remove('hidden')

  if (windowWidth < canvasWidth) {
    canvasWidth = 300
    canvasHeight = 150
    pixelSize = 5
  }
  // get bins
  var n = 1
  while (bins < canvasWidth / pixelSize) {
    bins = 2**n
    n++
  }
  fft = new p5.FFT(0.8, bins)

  analyzer = new p5.Amplitude()
  analyzer.setInput(song)

  cnv = createCanvas(canvasWidth, canvasHeight)
  cnv.parent('sketch-holder')

  stroke(bgColor)
  frameRate(fps)
  song.onended(generateEnding)

  initializeLifeArray()
  seedLife()
  noLoop()
}

function drawWaveform() {
  var waveform = fft.waveform()
  var bottomline = lifeArray.length - 1
  var maxAmp = Math.round(lifeArray[bottomline].length / 4)

  for (var i = 0; i < lifeArray[bottomline].length; i++) {
    var amplitude = waveform[i] * maxAmp

    if (amplitude < 0) {
      continue
    }

    if (waveform[i] > .9) {
      // generate some cool stuff here
      generateUpGlider(i, bottomline - j - 3)
    }

    for (var j = 0; j <= maxAmp; j++) {
      if (amplitude >= j) {
        lifeArray[bottomline - j][i][1] = 1
        lifeArray[bottomline - j][i][0] = 1
      } else if (lifeArray[bottomline - j][i][1]) {
        // leave normal cells alone, deactivate soundbars
        lifeArray[bottomline - j][i][1] = 0
        lifeArray[bottomline - j][i][0] = 0
      }
    }
  }
}

var events = {
  39: function() {
    initializeLifeArray()
    generateClock(30, 1)
    delete events[39]
  },
  86: function() {
    initializeLifeArray()
    generateClock(30, 1)
    delete events[86]
  },
  151: function() {
    initializeLifeArray()
    generateGalaxy(8, 3)
    generateGalaxy(30, 3)
    generateGalaxy(52, 3)
    delete events[151]
  },
}

function checkSpecialEvents(time) {
  time = Math.round(time)
  if (events[time]) {
    events[time]()
  }
}

function setFrameRateFromLevel(level) {
  // set framerate according to current sound levels
  // in multiples of 3
  rate = 6 + Math.ceil(level * 54 / 3.0) * 3
  frameRate(rate)
}

function draw() {
  setFrameRateFromLevel(analyzer.getLevel())
  background(0)
  checkSpecialEvents(song.currentTime())
  drawWaveform()

  if (firstRun) {
    firstRun = false
    drawGeneration()
    return
  }

  // check state change
  _lifeArray = _.cloneDeep(lifeArray)

  for (var y = 0; y < lifeArray.length; y++) {
    for (var x = 0; x < lifeArray[y].length; x++) {
      var cell = lifeArray[y][x]
      //skip soundbars
      if (cell[1]) {
        continue
      }
      var liveNeighbors = checkNeighbors(x, y)
      if (cell[0]) {
        if (!(liveNeighbors === 2 || liveNeighbors === 3)) {
          _lifeArray[y][x][0] = 0
        }
      } else {
        if (liveNeighbors === 3) {
          _lifeArray[y][x][0] = 1
        }
      }
    }
  }

  lifeArray = _lifeArray
  drawGeneration()
}

function drawGeneration() {
  for (var y = 0; y < lifeArray.length; y++) {
    for (var x = 0; x < lifeArray[y].length; x++) {
      var cell = lifeArray[y][x]
      if (cell[0]) {
        fill(cell[1] ? soundbarColor : aliveColor)
        rect(x * pixelSize, y * pixelSize, pixelSize, pixelSize)
      }
    }
  }
}

function togglePlay() {
  if (song.isPlaying()) {
    document.getElementById('instructions').classList.remove('hidden')
    song.pause()
    noLoop()
  } else {
    document.getElementById('instructions').classList.add('hidden')
    song.play()
    loop()
  }
}

function play() {
  document.getElementById('instructions').classList.add('hidden')
  if (!song.isPlaying()) {
    song.play()
    loop()
  }
}

function mousePressed() {
  play()
}

function keyPressed() {
  if (keyCode === 32) {
    togglePlay()
  }
}
