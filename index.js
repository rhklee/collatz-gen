#!/usr/bin/env node

const generateCollatz = {
  generate(n) {
    if(n < 1) throw new Error(`A positive integer was expected. Instead n = ${n}`)

    const results = []
    function recurGenerate(m, arr) {
      arr.push(m)
      if(m === 1) {
        return arr
      }

      let nextVal
      if(m % 2 === 0) 
        nextVal = m / 2
      else 
        nextVal = 3 * m + 1
      return recurGenerate(nextVal, arr)
    }

    return recurGenerate(n, results)
  }
}

if(process.argv.length === 3) {
  const seed = +process.argv[2]
  if(Number.isNaN(seed))
    throw new TypeError(`Input was not type number. Input was = ${process.argv[2]}`)

  const collatzSeq = generateCollatz.generate(seed).join(' ')
  console.log(`collatz(${seed}) = ${collatzSeq}`)
}