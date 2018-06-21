const { exec } = require('child_process')
const path = require('path')

const OUT_DIR = 'prof'

let files = [
  // './src/forLoops.js',
  './src/emitters.js',
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