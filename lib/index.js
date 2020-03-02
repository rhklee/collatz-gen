
'use strict'

const collatzModule = {
  generateCollatz (n) {
    if (Number.isNaN(n)) throw new TypeError('Input was not type number.')
    if (n < 1) throw new Error(`A positive integer was expected. Instead n = ${n}`)

    const results = []
    function recurGenerate (m, arr) {
      arr.push(m)
      if (m === 1) {
        return arr
      }

      let nextVal
      if (m % 2 === 0) { nextVal = m / 2 } else { nextVal = 3 * m + 1 }
      return recurGenerate(nextVal, arr)
    }

    return recurGenerate(n, results)
  }
}

module.exports = collatzModule
