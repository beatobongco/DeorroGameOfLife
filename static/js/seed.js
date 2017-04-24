function _plot(x, y, color) {
  try {
    lifeArray[y][x][0] = 1
  } catch (err) {
    //pass
  }
}

function genWordTurn(x, y) {
  function rplot(i, j) {
    _plot(x + i, y + j)
  }
  //T
  rplot(0, 0)
  rplot(1, 0)
  rplot(2, 0)

  rplot(1, 1)
  rplot(1, 2)
  rplot(1, 3)
  rplot(1, 4)

  //U
  rplot(4, 0)
  rplot(4, 1)
  rplot(4, 2)
  rplot(4, 3)

  rplot(5, 4)
  rplot(6, 4)
  rplot(7, 4)
  rplot(7, 3)
  rplot(7, 2)
  rplot(7, 1)
  rplot(7, 0)

  //R
  rplot(9, 0)
  rplot(10, 0)
  rplot(11, 0)

  rplot(9, 1)
  rplot(12, 1)

  rplot(9, 2)
  rplot(10, 2)
  rplot(11, 2)
  rplot(12, 2)

  rplot(9, 3)
  rplot(11, 3)

  rplot(9, 4)
  rplot(12, 4)

  //N
  rplot(14, 0)
  rplot(14, 1)
  rplot(14, 2)
  rplot(14, 3)
  rplot(14, 4)

  rplot(15, 1)
  rplot(16, 2)

  rplot(17, 0)
  rplot(17, 1)
  rplot(17, 2)
  rplot(17, 3)
  rplot(17, 4)
}

function seedLife() {
  function rplot(x, y) {
    _plot(x + 10, y)
  }
  //D
  rplot(1, 1)
  rplot(2, 1)
  rplot(3, 1)

  rplot(1, 2)
  rplot(4, 2)

  rplot(1, 3)
  rplot(4, 3)

  rplot(1, 4)
  rplot(4, 4)

  rplot(1, 5)
  rplot(2, 5)
  rplot(3, 5)

  //E
  rplot(6, 1)
  rplot(7, 1)
  rplot(8, 1)
  rplot(9, 1)

  rplot(6, 2)

  rplot(6, 3)
  rplot(7, 3)
  rplot(8, 3)

  rplot(6, 4)

  rplot(6, 5)
  rplot(7, 5)
  rplot(8, 5)
  rplot(9, 5)

  //O
  rplot(12, 1)
  rplot(13, 1)

  rplot(11, 2)
  rplot(11, 3)
  rplot(11, 4)

  rplot(14, 2)
  rplot(14, 3)
  rplot(14, 4)

  rplot(12, 5)
  rplot(13, 5)

  //R
  rplot(16, 1)
  rplot(17, 1)
  rplot(18, 1)

  rplot(16, 2)
  rplot(19, 2)

  rplot(16, 3)
  rplot(17, 3)
  rplot(18, 3)
  rplot(19, 3)

  rplot(16, 4)
  rplot(18, 4)

  rplot(16, 5)
  rplot(19, 5)

  //R
  rplot(21, 1)
  rplot(22, 1)
  rplot(23, 1)

  rplot(21, 2)
  rplot(24, 2)

  rplot(21, 3)
  rplot(22, 3)
  rplot(23, 3)
  rplot(24, 3)

  rplot(21, 4)
  rplot(23, 4)

  rplot(21, 5)
  rplot(24, 5)

  //O
  rplot(27, 1)
  rplot(28, 1)

  rplot(26, 2)
  rplot(26, 3)
  rplot(26, 4)

  rplot(29, 2)
  rplot(29, 3)
  rplot(29, 4)

  rplot(27, 5)
  rplot(28, 5)

  genWordTurn(22, 8)

  //B
  rplot(11, 15)
  rplot(12, 15)

  rplot(11, 16)
  rplot(13, 16)

  rplot(11, 17)
  rplot(12, 17)
  rplot(13, 17)
  rplot(14, 17)

  rplot(11, 18)
  rplot(14, 18)

  rplot(11, 19)
  rplot(12, 19)
  rplot(13, 19)

  //A
  rplot(17, 15)
  rplot(18, 15)
  rplot(16, 16)
  rplot(19, 16)
  rplot(16, 17)
  rplot(19, 17)

  rplot(16, 18)
  rplot(17, 18)
  rplot(18, 18)
  rplot(19, 18)

  rplot(16, 19)
  rplot(19, 19)

  //C
  rplot(21, 16)
  rplot(21, 17)
  rplot(21, 18)

  rplot(22, 15)
  rplot(23, 15)
  rplot(24, 15)

  rplot(22, 19)
  rplot(23, 19)
  rplot(24, 19)

  //K
  rplot(26, 15)
  rplot(26, 16)
  rplot(26, 17)
  rplot(26, 18)
  rplot(26, 19)

  rplot(27, 17)
  rplot(28, 16)
  rplot(28, 18)
  rplot(29, 15)
  rplot(29, 19)

  //T
  rplot(12, 22)
  rplot(13, 22)
  rplot(14, 22)

  rplot(13, 23)
  rplot(13, 24)
  rplot(13, 25)
  rplot(13, 26)

  //I
  rplot(16, 22)
  rplot(17, 22)
  rplot(18, 22)

  rplot(17, 23)
  rplot(17, 24)
  rplot(17, 25)
  rplot(17, 26)

  rplot(16, 26)
  rplot(18, 26)

  //M
  rplot(20, 22)
  rplot(20, 23)
  rplot(20, 24)
  rplot(20, 25)
  rplot(20, 26)

  rplot(21, 23)
  rplot(22, 24)
  rplot(23, 23)

  rplot(24, 22)
  rplot(24, 23)
  rplot(24, 24)
  rplot(24, 25)
  rplot(24, 26)

  //E
  rplot(26, 22)
  rplot(27, 22)
  rplot(28, 22)
  rplot(29, 22)

  rplot(26, 23)

  rplot(26, 24)
  rplot(27, 24)
  rplot(28, 24)

  rplot(26, 25)

  rplot(26, 26)
  rplot(27, 26)
  rplot(28, 26)
  rplot(29, 26)

  //PULSAR
  generateClock(45, 1)
}

function generateUpGlider(x, y) {
  // Generates a glider that flies upwards in a random horizontal direction
  _plot(x, y)
  _plot(x + 1, y)
  _plot(x + 2, y)
  _plot(x + 1, y + 2)
  _plot(x + 2, y + 1)

  // if (random() < .5) {
  //   _plot(x + 2, y + 1)
  // } else {
  //   _plot(x, y + 1)
  // }
}

function generatePulsar(x, y) {
  function rplot(i, j) {
    _plot(x + i, y + j)
  }
  rplot(2, 0)
  rplot(3, 0)
  rplot(4, 0)

  rplot(8, 0)
  rplot(9, 0)
  rplot(10, 0)

  rplot(0, 2)
  rplot(5, 2)
  rplot(7, 2)
  rplot(12, 2)

  rplot(0, 3)
  rplot(5, 3)
  rplot(7, 3)
  rplot(12, 3)

  rplot(0, 4)
  rplot(5, 4)
  rplot(7, 4)
  rplot(12, 4)

  rplot(2, 5)
  rplot(3, 5)
  rplot(4, 5)

  rplot(8, 5)
  rplot(9, 5)
  rplot(10, 5)

  rplot(2, 7)
  rplot(3, 7)
  rplot(4, 7)

  rplot(8, 7)
  rplot(9, 7)
  rplot(10, 7)

  rplot(0, 8)
  rplot(5, 8)
  rplot(7, 8)
  rplot(12, 8)

  rplot(0, 9)
  rplot(5, 9)
  rplot(7, 9)
  rplot(12, 9)

  rplot(0, 10)
  rplot(5, 10)
  rplot(7, 10)
  rplot(12, 10)

  rplot(2, 12)
  rplot(3, 12)
  rplot(4, 12)

  rplot(8, 12)
  rplot(9, 12)
  rplot(10, 12)
}

function generateClock(x, y) {
  function rplot(i, j) {
    _plot(x + i, y + j)
  }
  rplot(6, 0)
  rplot(7, 0)
  rplot(6, 1)
  rplot(7, 1)

  rplot(0, 4)
  rplot(1, 4)
  rplot(0, 5)
  rplot(1, 5)

  rplot(10, 6)
  rplot(11, 6)
  rplot(10, 7)
  rplot(11, 7)

  rplot(4, 10)
  rplot(5, 10)
  rplot(4, 11)
  rplot(5, 11)

  rplot(4, 3)
  rplot(5, 3)
  rplot(6, 3)
  rplot(7, 3)

  rplot(4, 8)
  rplot(5, 8)
  rplot(6, 8)
  rplot(7, 8)

  rplot(3, 4)
  rplot(3, 5)
  rplot(3, 6)
  rplot(3, 7)

  rplot(8, 4)
  rplot(8, 5)
  rplot(8, 6)
  rplot(8, 7)

  rplot(4, 5)
  rplot(5, 6)
  rplot(6, 6)
}

function generateGalaxy(x, y) {
  function rplot(i, j) {
    _plot(x + i, y + j)
  }
  rplot(0, 0)
  rplot(1, 0)
  rplot(2, 0)
  rplot(3, 0)
  rplot(4, 0)
  rplot(5, 0)
  rplot(0, 1)
  rplot(1, 1)
  rplot(2, 1)
  rplot(3, 1)
  rplot(4, 1)
  rplot(5, 1)

  rplot(3, 7)
  rplot(4, 7)
  rplot(5, 7)
  rplot(6, 7)
  rplot(7, 7)
  rplot(8, 7)
  rplot(3, 8)
  rplot(4, 8)
  rplot(5, 8)
  rplot(6, 8)
  rplot(7, 8)
  rplot(8, 8)

  rplot(7, 0)
  rplot(7, 1)
  rplot(7, 2)
  rplot(7, 3)
  rplot(7, 4)
  rplot(7, 5)
  rplot(8, 0)
  rplot(8, 1)
  rplot(8, 2)
  rplot(8, 3)
  rplot(8, 4)
  rplot(8, 5)

  rplot(0, 3)
  rplot(0, 4)
  rplot(0, 5)
  rplot(0, 6)
  rplot(0, 7)
  rplot(0, 8)
  rplot(1, 3)
  rplot(1, 4)
  rplot(1, 5)
  rplot(1, 6)
  rplot(1, 7)
  rplot(1, 8)
}

function generateEnding() {
  if (Math.round(song.currentTime()) >= Math.round(song.duration()) - 2) {
    firstRun = true
    initializeLifeArray()
    seedLife()
    noLoop()
  }
}
