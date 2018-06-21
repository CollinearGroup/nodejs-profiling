const winston = require('winston')

function logFileFormatter(options) {
  let sep = ' - '
  let date = new Date().toISOString()
  let level = sep + options.level.toUpperCase()
  let msg = options.message ? sep + options.message : ''
  let data = ''
  if (options.meta) {
    data = sep + JSON.stringify(options.meta)
  }

  // Log source file and line number if log level is debug or lower
  let caller = ''
  if (['debug', 'silly'].indexOf(winston.level) >= 0) {
    caller = getLogSource()
  }

  return date + level + caller + msg + data
}

function getLogSource() {
  let caller = ' [] '
  let validIndex

  // Get execution stack
  let stack = ((new Error()).stack).split('\n')

  // Skip lines we don't care about, stop as soon as we find the one we want
  for (validIndex = 1; validIndex < stack.length; validIndex += 1) {
    if (stack[validIndex].match(/node_modules/)) { // Skip node_modules
    } else if (stack[validIndex].match(/mtUtil.js/)) { // skip the utility code
    } else if (!(stack[validIndex].match('\/'))) { // skip lines that don't have a file reference
    } else {
      break
    }
  }

  // Split the line we got and use only the last part of it
  if (stack[validIndex]) {
    let parts = (stack[validIndex]).split('/')
    let location = parts[parts.length - 1]
    location = location.replace(/:\d*\)/, '')
    caller = ' [' + location + '] '
  }
  return caller
}
0

winston.level = 'debug'

winston.add(winston.transports.File, {
  filename: '.tmp/app.log',
  json: false,
  datePattern: '.yyyy-MM-dd',
  formatter: logFileFormatter,
  handleExceptions: true
})



const intervalLimit = 100
let runCount = 0
const intervalId = setInterval(() => {
  if (runCount++ > intervalLimit) {
    clearInterval(intervalId)
    return
  }
  const logLimit = 100
  for (let logCount = 0; logCount < logLimit; logCount++)  {
    winston.info(`${logCount}: A new message!`, {word: 'of', truth: 42})
  }
}, 10)