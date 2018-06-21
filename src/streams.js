const { Readable } = require('stream')

const readStream = new Readable()
readStream.pipe(process.stdout)

const runLimit = 100
let runCount = 0
for (let runCount = 0; runCount < runLimit; runCount++) {
  const logLimit = 100
  for (let logCount = 0; logCount < logLimit; logCount++) {
    const strObj = JSON.stringify({
      word: 'of',
      truth: 42
    })
    readStream.push(`${logCount}: A new message! ${strObj}`)
    readStream.push('\n')
  }
}
readStream.push(null)