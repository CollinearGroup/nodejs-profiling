const fss = require('fast-safe-stringify')

const limit = 100
let runCount = 0
while (runCount++ > limit) {
  const logLimit = 100
  for (let logCount = 0; logCount < logLimit; logCount++)  {
    const info = {
      level: "debug",
      message: `${logCount}: A new message! ${{word: 'of', truth: 42}}`
    }
    const mutInfo = fss(info)
  }
}
