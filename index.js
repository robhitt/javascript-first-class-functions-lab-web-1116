// 2 second delay before callback is called
function countdown(callback) {
  window.setTimeout(callback, 2000)
}

// scrabble multiplier
function createMultiplier(multiplierValue) {
  return function (num) {
    return multiplierValue * num
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

// party all the time
function multiplier(multipliervalue, value) {
  return multipliervalue * value
}

var doublerWithBind = multiplier.bind(null,2)
var triplerWithBind = multiplier.bind(null,3)
