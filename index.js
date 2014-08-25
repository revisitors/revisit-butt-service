var bodyParser = require('body-parser')
var dataUriToBuffer = require('data-uri-to-buffer')
var bg = require('butts-gm')
var express = require('express')
var app = express()
var port = Number(process.env.PORT || 3000)

app.use(bodyParser.json({limit: '2mb'}))
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.sendFile( __dirname + '/index.html')
})

app.post('/service', function(req, res) {
  var imgBuff = dataUriToBuffer(req.body.content.data)
  bg(imgBuff, function(err, buttified) {
    if (err) {
      console.log(err)
      res.end(500)
    }
    var dataUri = 'data:' + imgBuff.type + ';base64,' + buttified.toString('base64')
    req.body.content.data = dataUri
    res.json(req.body)
  })
})

app.listen(port)
console.log('server running on port: ', port)
