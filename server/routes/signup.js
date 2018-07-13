var signup = require('express').Router()
var bodyParser = require('body-parser')
var urlencode = bodyParser.urlencoded({ extended: false })
var transporter = require('./mailer/mailer.js')
var client = require('./db/client.js')

signup.post('/', urlencode, function(request, response) {
  var newLadybyte = request.body
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!newLadybyte.email || !newLadybyte.name || !re.test(newLadybyte.email.toLowerCase())) {
    response.sendStatus(400)
    return false
  }
  // save new sign up to DB
  client.hset('ladybytes-emails', newLadybyte.name, newLadybyte.email, function(error) {
    if (error) throw error
    response.status(201).json(newLadybyte.name)
  })

  // const emails = [newLadybyte.email, process.env.GMAIL_USER ]

  let emails = (process.env.ENV = 'production') ? [newLadybyte.email, process.env.GMAIL_USER] : process.env.GMAIL_USER

  // send email to me and them
  let mailOptions = {
    from: process.env.GMAIL_USER, // sender address
    to: emails, // list of receivers
    subject: 'Welcome to LadyBytes!', // Subject line
    text: `You just signed up for Ladybytes.io. Great call! \n I will reach out to you shortly to get you all caught up. \n\n Have a lovely day. \n Lisa Wagner `,
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message sent: %s', info.messageId)
  })
})

module.exports = signup
