#!/usr/bin/env node

"use strict"

const collatzModule = require('../lib/index')

if(process.argv.slice(2).length > 0) {
  const seed = +process.argv[2]

  const isQuietMode = ['--quiet', '-q'].some(f => process.argv.includes(f))

  const collatzSeq = collatzModule.generateCollatz(seed).join(' ')

  console.log(`${isQuietMode ? "" : `collatz(${seed}) = `}${collatzSeq}`)
}