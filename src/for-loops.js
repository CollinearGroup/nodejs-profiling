// Setup some numbers and loops.
const outterLoops = 10000, innerLoops = 5000
const numArray = []
for (let i = 0; i < innerLoops; i++) {
  numArray.push(i)
}

function run() {
  runOutterLoops(outterLoops)
}

// Simple for loop
function runOutterLoops(num) {
  for (let i = 0; i < num; i++) {
    runInnerLoops(numArray)

    // Run again at half speed
    runInnerLoops(numArray.slice(0, numArray.length - 1))
  }
}

// Simple for/of loop
const runInnerLoops = numArray => {
  let result = 0
  for (num of numArray) {
    result += num
  }
}

run()
