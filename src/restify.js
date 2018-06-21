let restify = require('restify')

const server = restify.createServer({
  name: 'ohma-server'
})
// v4 which had get_opts
// server.use(restify.acceptParser(server.acceptable))
// server.use(restify.bodyParser())
// server.use(restify.CORS())
// server.use(restify.gzipResponse())

// v7 which still has get_opts
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