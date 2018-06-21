const fs = require('fs-extra')

fs.ensureDirSync('.tmp')

const runSync = () => {
  const syncRunLimit = 1000
  for (let i = 0; i < syncRunLimit; i++) {
    fs.writeFileSync('testFile.txt', 'The slow brown fox.')
  }
}

const runAsync = () => {
  const runLimit = 1000
  const pipeDataLimit = 10
  for (let i = 0; i < runLimit; i++) {
    const stream = fs.createWriteStream(`.tmp/testStreamFile.${i}`)
    for (let pipedDataCount = 0; pipedDataCount < pipeDataLimit; pipedDataCount++) {
      stream.write(`${pipedDataCount}: The less slow brown fox.\n`)
    }
    stream.end()
  }
}

runSync()
runAsync()