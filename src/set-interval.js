let intervalLimit = 100
let runCount = 0
const intervalId = setInterval(() => {
  if (runCount++ > intervalLimit) {
    clearInterval(intervalId)
    return
  }
}, 0)
