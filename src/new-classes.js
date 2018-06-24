const intervalLimit = 100
const logLimit = 100
let runCount = 0

while (runCount++ < intervalLimit) {
  for (let logCount = 0; logCount < logLimit; logCount++) {
    setTimeout(() => {
      const info = {
        name: "Ang",
        age: 100
      }
    }, 10);
  }
}
