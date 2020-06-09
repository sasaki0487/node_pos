const Account = require('../models/account.model');

exports.auth = function(req,res){
	var user = req.body.username;
	var pass = req.body.password;
	if(user && pass){
		Account.count({'username': user,'password': pass},(err, count) => {
			if(err){
				res.send('DB access error!');
			}
			else if(count == 1){
				req.session.loggedin = true;
				req.session.username = user;
				res.redirect('/');
			}
			else{
				res.send('Wrong username or password!');
			}
			res.end();
		});
	}
	else{
		res.send('Please enter Username and Password');
		res.end();
	}
}