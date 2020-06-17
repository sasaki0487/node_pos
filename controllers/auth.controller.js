const Account = require('../models/account.model');

exports.auth = function(req,res){
	var user = req.body.username;
	var pass = req.body.password;
	if(user && pass){
		Account.count({'username': user,'password': pass},(err, count) => {
			if(err){
				return res.send('401');
			}
			else if(count == 1){
				req.session.loggedin = true;
				req.session.username = user;
				return res.send('200');
			}
			else{
				return res.send('400');
			}
			res.end();
		});
	}
	else{
		res.send('Please enter Username and Password');
		res.end();
	}
}