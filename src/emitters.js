const { EventEmitter } = require('events')
const conversationLimit = 10000,
  forLimit = 100000
let conversationCount = 0

const run = () => {

  // Billy will just emit a sterotypical male response.
  const Billy = new EventEmitter()
  Billy.on('listen', function() {
    // Done
    if (conversationCount++ === conversationLimit) {
      process.exit()
    }
    // Run half as long as sally.
    let counter = 0
    for (let i = 0; i < forLimit / 2; i++) {
      counter ** 2 / 2
    }
    process.nextTick(() => {
      this.emit('say', 'uhuh..')
    })
  })

  // Sally has better emotional intelligence
  const Sally = new EventEmitter()
  Sally.on('listen', function() {
    let counter = 0
    for (let i = 0; i < forLimit; i++) {
      counter ** 2 / 2
    }
    process.nextTick(() => {
      this.emit('say', `Really? That's so interesting!`)
    })
  })

  // Put them into a long loop.
  Sally.on('say', () => {
    Billy.emit('listen')
  })
  Billy.on('say', () => {
    Sally.emit('listen')
  })

  // Start the intellectual conversation.
  Sally.emit('say', 'Hello')
}

run()
// setInterval(() => {}, 100)