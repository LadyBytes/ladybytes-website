var signup = require('express').Router()
var bodyParser = require('body-parser')
var urlencode = bodyParser.urlencoded({ extended: false })

// Redis connection
var redis = require('redis')
if (process.env.REDISTOGO_URL) {
  var rtg = require('url').parse(process.env.REDISTOGO_URL)
  var client = redis.createClient(rtg.port, rtg.hostname)
  client.auth(rtg.auth.split(':')[1])
} else {
  var client = redis.createClient()
  client.select((process.env.NODE_ENV || 'development').length)
}

signup.post('/', urlencode, function(request, response) {
  console.log(request.body)
  var newLadybyte = request.body
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!newLadybyte.email || !newLadybyte.name || !re.test(newLadybyte.email.toLowerCase())) {
    response.sendStatus(400)
    return false
  }
  console.log(newLadybyte)
  client.hset('ladybytes-emails', newLadybyte.name, newLadybyte.email, function(error) {
    if (error) throw error

    response.status(201).json(newLadybyte.name)
  })
})

module.exports = signup
