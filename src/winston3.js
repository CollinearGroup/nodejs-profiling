const winston = require('winston')

winston.level = 'info'

winston.add(new winston.transports.File({
  filename: '.tmp/app.log'
}))

winston.add(new winston.transports.Console())

const intervalLimit = 100
let runCount = 0
const intervalId = setInterval(() => {
  if (runCount++ > intervalLimit) {
    clearInterval(intervalId)
    return
  }
  const logLimit = 100
  for (let logCount = 0; logCount < logLimit; logCount++)  {
    winston.debug(`${logCount}: A new message!`, {word: 'of', truth: 42})
  }
}, 10)