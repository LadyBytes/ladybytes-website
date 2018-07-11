const express = require('express')
const path = require('path')
const cluster = require('cluster')
const os = require('os')
const numCPUs = os.cpus().length



const PORT = process.env.PORT || 5000


const values = require('./values/values')

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`)

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`)
  })
} else {
  const app = express()

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')))

  // Answer API requests.
  app.get('/api', function(req, res) {
    res.set('Content-Type', 'application/json')
    res.send('{"message":"Hello from the custom server!"}')
  })

  app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }))

  app.get('/api/getValues', (req, res) => res.json(values))

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'))
  })

  app.post('/api/signup',urlencode, function(request, response) {
  console.log(request.body)
    var newLadybyte = request.body
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (
      !newLadybyte.email ||
      !newLadybyte.name ||
      !re.test(newLadybyte.email.toLowerCase())
    ) {
      response.sendStatus(400)
      return false
    }
    console.log(newLadybyte)
    client.hset(
      'ladybytes-emails',
      newLadybyte.name,
      newLadybyte.email,
      function(error) {
        if (error) throw error

        response.status(201).json(newLadybyte.name)
      }
    )
  })

  app.listen(PORT, function() {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`)
  })
}
