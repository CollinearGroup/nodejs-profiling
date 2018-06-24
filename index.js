const {
  execSync
} = require('child_process')
const fs = require('fs-extra')
const path = require('path')

const OUT_DIR = 'prof'
const IN_DIR = './src'

const files = fs.readdirSync(IN_DIR)
for (file of files) {
  const base_name = path.basename(file, '.js')
  const isolate_file = `${OUT_DIR}/${base_name}.isolate.log` 
  const cmd = `node --prof --logfile=${isolate_file} --no-logfile-per-isolate ${IN_DIR}/${file}`
  execSync(cmd)
  console.log(`Running ${file}...`);
  const process_cmd = `node --prof-process ${isolate_file} > ${OUT_DIR}/${base_name}-profile.txt`
  execSync(process_cmd)
  fs.removeSync(isolate_file)
}
