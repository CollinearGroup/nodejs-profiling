const { exec } = require('child_process')
const path = require('path')

const OUT_DIR = 'prof'

let files = [
  // './src/forLoops.js',
  // './src/emitters.js',
  // './src/fs-extra.js',
  // './src/object-copy.js',
  // './src/restify.js',
  // './src/winston.js',
  './src/winston3.js',
  // './src/sockets.js',
  // './src/bunyan.js',
  // './src/streams.js',
]

for (file of files) {
  const file_name = path.basename(file, '.js')
  const cmd = `node --prof --logfile=${OUT_DIR}/${file_name}.isolate.log --no-logfile-per-isolate ${file}`
  exec(cmd).on('close', () => {
    const processCmd = `node --prof-process ${OUT_DIR}/${file_name}.isolate.log > ${OUT_DIR}/${file_name}-profile.txt`
    exec(processCmd).on('close', () => {
    })
  })
}