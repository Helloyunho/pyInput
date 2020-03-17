const pyInput = require('../src')

const run = async () => {
  let done = false
  while (!done) {
    const num = await pyInput('Type a number: ')

    const numParsed = parseInt(num)

    if (isNaN(numParsed)) {
      console.log('This is not a number! Try again.')
    } else {
      console.log(`Here is the number that powered: ${numParsed ** 2}`)
      done = true
    }
  }
}

run()
