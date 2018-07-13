var signup = require('express').Router()
var bodyParser = require('body-parser')
var urlencode = bodyParser.urlencoded({ extended: false })
// var mailer = require('mailer/')
var client = require('./db/client.js')

signup.post('/', urlencode, function(request, response) {
  var newLadybyte = request.body
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!newLadybyte.email || !newLadybyte.name || !re.test(newLadybyte.email.toLowerCase())) {
    response.sendStatus(400)
    return false
  }

  client.hset('ladybytes-emails', newLadybyte.name, newLadybyte.email, function(error) {
    if (error) throw error
    response.status(201).json(newLadybyte.name)
  })


  // let transporter = nodemailer.createTransport(transport[, defaults])
  


})

module.exports = signup
