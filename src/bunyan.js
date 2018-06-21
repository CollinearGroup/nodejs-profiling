const bunyan = require('bunyan')

const log = bunyan.createLogger({
  name: 'foo',
  streams: [{
    path: '.tmp/bunyan.log',
  }, {
    stream: process.stdout
  }]
});

// bunyan.add(new bunyan.transports.Console())

const intervalLimit = 100
let runCount = 0
const intervalId = setInterval(() => {
  if (runCount++ > intervalLimit) {
    clearInterval(intervalId)
    return
  }
  const logLimit = 100
  for (let logCount = 0; logCount < logLimit; logCount++)  {
    log.info(`${logCount}: A new message!`, {word: 'of', truth: 42})
  }
}, 10)