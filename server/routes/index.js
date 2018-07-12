var routes = require('express').Router();
var values = require('../values/values')

var signup = require('./signup.js');

// routes.use('/models', models);
routes.use('/api/signup', signup);

// app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }))

routes.get('/api', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.get('/api/getValues', (req, res) => res.json(values))



module.exports = routes;
