let restify = require('restify')

const server = restify.createServer({
  name: 'ohma-server'
})

server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.bodyParser())
server.use(restify.plugins.gzipResponse())


server.get('/api', function (req, res) {
  res.send(200)
})

setTimeout(() => {
  server.close()
}, 2000);

server.listen(9523, function () {})
