var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var authController = require('./controllers/auth.controller');

var app = express('');
mongoose.connect('mongodb://127.0.0.1:27017/app');

app.use(session({
	secret: 'secret:D',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.post('/auth', authController.auth);
app.get('/', (req,res) => {
	if (req.session.loggedin) {
		res.send('Welcome back, ' + req.session.username + '!');
	} else {
		res.render('index.ejs');
	}
	res.end();
});


app.listen(3000,() =>{
	console.log("Listening on localhost:3000");
});