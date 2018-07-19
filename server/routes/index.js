var routes = require('express').Router()
// var values = require('../values/values')

var signup = require('./signup.js')

// routes.use('/models', models);
routes.use('/api/signup', signup)

// app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }))

routes.get('/api', (req, res) => {
  res.status(200).json({ message: 'Connected!' })
})

routes.get('/.well-known/acme-challenge/K_2RjEaeymUHc7iTWe-RdAFQjPLNdCdIuI1B2fnOpyk', (req, res) => {
  res.send('K_2RjEaeymUHc7iTWe-RdAFQjPLNdCdIuI1B2fnOpyk.8QUstrwiUKpP7oZH0ycw6DC0Y1dZwoHI7v5syvojMU8')
})

// routes.get('/api/getValues', (req, res) => res.json(values))

module.exports = routes
