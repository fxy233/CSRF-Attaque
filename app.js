var express = require('express')
var path = require('path')
var router = require('./router')
var cookieParser = require('cookie-parser')
var app = express()

app.use('/public/',express.static(path.join(__dirname,'public')))
app.use('/node_modules/',express.static(path.join(__dirname,'node_modules')))
app.set('views',path.join(__dirname,'./views/'))
app.use(cookieParser())
app.engine('.html',require('express-art-template'))
app.use(router)


app.listen(3001,function (){
    console.log('Server running on the port 3001...')
})
