const readline = require('readline')

/**
 * Python-like input
 * @param {...any} messages - Messages that will prints out
 * @return {Promise<string>} Recevied input
 */
const pyInput = (...messages) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  process.stdout.write(...messages)
  return new Promise((resolve, reject) => {
    try {
      const temp = line => {
        rl.off('line', temp)
        rl.close()
        return resolve(line)
      }
      rl.on('line', temp)
    } catch (err) {
      if (err) {
        rl.close()
        return reject(err)
      }
    }
  })
}

module.exports = pyInput
