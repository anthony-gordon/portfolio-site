var path = require('path')
var express = require('express')
const bodyParser = require('body-parser')
const usersRoute = require('./routes/imagesRoute')

var server = express()

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.json())

server.use('/api/v1', usersRoute)



module.exports = server