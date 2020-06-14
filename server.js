var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var authController = require('./controllers/auth.controller');
var productController = require('./controllers/product.controller');

var app = express('');

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.set('view engine', 'ejs');
app.use(session({
	secret: 'secret:D',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());



app.post('/auth', authController.auth);
app.post('/search', productController.search);
app.post('/register', productController.register);
app.post('/update', productController.update)
app.get('/search', (req,res) =>{
	res.render('search');
});
app.get('/login', (req,res) => {
	if(req.session.loggedin) {
		res.redirect('/');
	}
	else{
		res.render('login');
	}
});
app.get('/', (req,res) => {
	if (req.session.loggedin) {
		res.render('main')
	} else {
		res.redirect('/login');
	}
	res.end();
});


app.listen(3000,() =>{
	console.log("Listening on localhost:3000");
});