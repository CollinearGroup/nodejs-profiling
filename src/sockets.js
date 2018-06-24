const net = require('net')

const server = net.createServer(sock => {
  sock.on('data', data => {
    const packages = data.toString().split('\n')
    packages.forEach(package => {
      try {
        // console.log(JSON.parse(package));
      } catch (e) {
        // Do nothing
      }
    });
  });
})
server.listen(9400)


const socket = new net.Socket()
socket.on('ready', () => {
  write_a_ton(socket)
})
socket.on('end', () => {
  server.close()
})
socket.connect({
  port: 9400
})

const write_a_ton = socket => {
  const limit = 10000
  for (let count = 0; count < limit; count++) {
    const message = {
      id: count,
      message: `Package ${count} incoming!`,
    }
    socket.write(JSON.stringify(message) + '\n')
  }
  socket.end()
}
