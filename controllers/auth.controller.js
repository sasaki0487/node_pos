const Account = require('../models/account.model');

exports.auth = function(req,res){
	var user = req.body.username;
	var pass = req.body.password;
	if(user && pass){
		Account.countDocuments({'username': user,'password': pass},(err, count) => {
			if(err){
				return res.status(401).send({'res':''});
			}
			else if(count == 1){
				req.session.loggedin = true;
				req.session.username = user;
				return res.status(200).send({'res':''});
			}
			else{
				return res.status(400).send({'res':'Wrong ID or Password!'});
			}
		});
	}
	else{
		 return res.status(400).send({'res':'Please enter Username and Password'});
	}
}