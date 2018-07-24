var files = require('express').Router()
var bodyParser = require('body-parser')
var urlencode = bodyParser.urlencoded({ extended: false })

files.get('/resume', urlencode, function(req, res) {
  var file = __dirname + '/resume_wagner_18.pdf'

  res.download(file, function(err) {
    if (err) {
      console.log('Error')
      console.log(err)
    } else {
      console.log('Resume downloaded')
    }
  })
})

module.exports = files
