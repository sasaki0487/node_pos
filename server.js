var express = require('express')
var session = require('express-session')
var bodyParser = require('body-parser')
var path = require('path')

var indexRouter = require('./routes/index')
var productRouter = require('./routes/product')

var app = express('')

app.set('view engine', 'ejs')
app.use(
    session({
        secret: 'secret:D',
        resave: true,
        saveUninitialized: true,
    })
)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', indexRouter)
app.use('/product', productRouter)
app.use(express.static('public'))

app.listen(3000, () => {
    console.log('Listening on localhost:3000')
})
