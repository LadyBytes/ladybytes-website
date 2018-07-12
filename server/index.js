var express = require('express')
var path = require('path')

var helmet = require('helmet')

var routes = require('./routes/index.js')

var bodyParser = require('body-parser')
var urlencode = bodyParser.urlencoded({ extended: false })

var PORT = process.env.PORT || 5000

var app = express()
app.use(helmet())

// Priority serve any static files.
//
////
app.use(express.static(path.resolve(__dirname, '../react-ui/build')))
app.use('/', routes)

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'))
})

// Answer API requests.

//

// // All remaining requests return the React app, so it can handle routing.
// app.get('*', function(request, response) {
//   response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'))
// })

// Turn on that server!
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
