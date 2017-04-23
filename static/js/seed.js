var initialX = 0
var initialY = 0

function _plot(x, y, color) {
  try {
    lifeArray[y + initialY][x + initialX].isAlive = true
  } catch (err) {
    //pass
  }
}

function seedLife() {
  //D
  _plot(1, 1)
  _plot(2, 1)
  _plot(3, 1)

  _plot(1, 2)
  _plot(4, 2)

  _plot(1, 3)
  _plot(4, 3)

  _plot(1, 4)
  _plot(4, 4)

  _plot(1, 5)
  _plot(2, 5)
  _plot(3, 5)

  //E
  _plot(6, 1)
  _plot(7, 1)
  _plot(8, 1)
  _plot(9, 1)

  _plot(6, 2)

  _plot(6, 3)
  _plot(7, 3)
  _plot(8, 3)

  _plot(6, 4)

  _plot(6, 5)
  _plot(7, 5)
  _plot(8, 5)
  _plot(9, 5)

  //O
  _plot(12, 1)
  _plot(13, 1)

  _plot(11, 2)
  _plot(11, 3)
  _plot(11, 4)

  _plot(14, 2)
  _plot(14, 3)
  _plot(14, 4)

  _plot(12, 5)
  _plot(13, 5)

  //R
  _plot(16, 1)
  _plot(17, 1)
  _plot(18, 1)

  _plot(16, 2)
  _plot(19, 2)

  _plot(16, 3)
  _plot(17, 3)
  _plot(18, 3)
  _plot(19, 3)

  _plot(16, 4)
  _plot(18, 4)

  _plot(16, 5)
  _plot(19, 5)

  //R
  _plot(21, 1)
  _plot(22, 1)
  _plot(23, 1)

  _plot(21, 2)
  _plot(24, 2)

  _plot(21, 3)
  _plot(22, 3)
  _plot(23, 3)
  _plot(24, 3)

  _plot(21, 4)
  _plot(23, 4)

  _plot(21, 5)
  _plot(24, 5)

  //O
  _plot(27, 1)
  _plot(28, 1)

  _plot(26, 2)
  _plot(26, 3)
  _plot(26, 4)

  _plot(29, 2)
  _plot(29, 3)
  _plot(29, 4)

  _plot(27, 5)
  _plot(28, 5)

  //T
  _plot(7, 8)
  _plot(8, 8)
  _plot(9, 8)

  _plot(8, 9)
  _plot(8, 10)
  _plot(8, 11)
  _plot(8, 12)

  //U
  _plot(11, 8)
  _plot(11, 9)
  _plot(11, 10)
  _plot(11, 11)

  _plot(12, 12)
  _plot(13, 12)
  _plot(14, 12)
  _plot(14, 11)
  _plot(14, 10)
  _plot(14, 9)
  _plot(14, 8)

  //R
  _plot(16, 8)
  _plot(17, 8)
  _plot(18, 8)

  _plot(16, 9)
  _plot(19, 9)

  _plot(16, 10)
  _plot(17, 10)
  _plot(18, 10)
  _plot(19, 10)

  _plot(16, 11)
  _plot(18, 11)

  _plot(16, 12)
  _plot(19, 12)

  //N
  _plot(21, 8)
  _plot(21, 9)
  _plot(21, 10)
  _plot(21, 11)
  _plot(21, 12)

  _plot(22, 9)
  _plot(23, 10)

  _plot(24, 8)
  _plot(24, 9)
  _plot(24, 10)
  _plot(24, 11)
  _plot(24, 12)

  //B
  _plot(11, 15)
  _plot(12, 15)

  _plot(11, 16)
  _plot(13, 16)

  _plot(11, 17)
  _plot(12, 17)
  _plot(13, 17)
  _plot(14, 17)

  _plot(11, 18)
  _plot(14, 18)

  _plot(11, 19)
  _plot(12, 19)
  _plot(13, 19)

  //A
  _plot(17, 15)
  _plot(18, 15)
  _plot(16, 16)
  _plot(19, 16)
  _plot(16, 17)
  _plot(19, 17)

  _plot(16, 18)
  _plot(17, 18)
  _plot(18, 18)
  _plot(19, 18)

  _plot(16, 19)
  _plot(19, 19)

  //C
  _plot(21, 16)
  _plot(21, 17)
  _plot(21, 18)

  _plot(22, 15)
  _plot(23, 15)
  _plot(24, 15)

  _plot(22, 19)
  _plot(23, 19)
  _plot(24, 19)

  //K
  _plot(26, 15)
  _plot(26, 16)
  _plot(26, 17)
  _plot(26, 18)
  _plot(26, 19)

  _plot(27, 17)
  _plot(28, 16)
  _plot(28, 18)
  _plot(29, 15)
  _plot(29, 19)

  //T
  _plot(22, 22)
  _plot(23, 22)
  _plot(24, 22)

  _plot(23, 23)
  _plot(23, 24)
  _plot(23, 25)
  _plot(23, 26)

  //I
  _plot(26, 22)
  _plot(27, 22)
  _plot(28, 22)

  _plot(27, 23)
  _plot(27, 24)
  _plot(27, 25)
  _plot(27, 26)

  _plot(26, 26)
  _plot(28, 26)

  //M
  _plot(30, 22)
  _plot(30, 23)
  _plot(30, 24)
  _plot(30, 25)
  _plot(30, 26)

  _plot(31, 23)
  _plot(32, 24)
  _plot(33, 23)

  _plot(34, 22)
  _plot(34, 23)
  _plot(34, 24)
  _plot(34, 25)
  _plot(34, 26)

  //E
  _plot(36, 22)
  _plot(37, 22)
  _plot(38, 22)
  _plot(39, 22)

  _plot(36, 23)

  _plot(36, 24)
  _plot(37, 24)
  _plot(38, 24)

  _plot(36, 25)

  _plot(36, 26)
  _plot(37, 26)
  _plot(38, 26)
  _plot(39, 26)
}

function generateGlider(x, y) {
  _plot(x + 1, y)
  _plot(x + 2, y + 1)
  _plot(x, y + 2)
  _plot(x + 1, y + 2)
  _plot(x + 2, y + 2)
}

function generateUpGlider(x, y) {
  // Generates a glider that flies upwards in a random horizontal direction
  _plot(x, y)
  _plot(x + 1, y)
  _plot(x + 2, y)
  _plot(x + 1, y + 2)
  if (random() < .5) {
    _plot(x + 2, y + 1)
  } else {
    _plot(x, y + 1)
  }
}
