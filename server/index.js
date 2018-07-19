var express = require('express')
var path = require('path')
var helmet = require('helmet')
const compression = require('compression');

var routes = require('./routes/index.js')

var PORT = process.env.PORT || 5000

var app = express()
app.use(helmet())
app.use(compression());



app.get('/.well-known/acme-challenge/K_2RjEaeymUHc7iTWe-RdAFQjPLNdCdIuI1B2fnOpyk', (req, res) => {
  res.send('K_2RjEaeymUHc7iTWe-RdAFQjPLNdCdIuI1B2fnOpyk.8QUstrwiUKpP7oZH0ycw6DC0Y1dZwoHI7v5syvojMU8')
})
// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/dist')))
app.use('/', routes)

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/dist', 'index.html'))
})

// Turn on that server!
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
