const bunyan = require('bunyan')

const log = bunyan.createLogger({
  name: 'foo',
  streams: [{
    path: '.tmp/bunyan.log',
  }, {
    stream: process.stdout
  }]
})

const limit = 100
let runCount = 0
while (runCount++ < limit) {
  const logLimit = 100
  for (let logCount = 0; logCount < logLimit; logCount++) {
    log.info(`${logCount}: A new message!`, {
      word: 'of',
      truth: 42
    })
  }
}
