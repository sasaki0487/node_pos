const Product = require('../models/product.model');

exports.search = function(req,res){
	var id = req.body.productID;
	if(id){
		Product.find((err,ids) => {
			if(err){
				console.log(err);
			}
			else{
				res.render('main',{products:ids});
			}
		});
	}
	//res.end();
}

exports.register = function(req,res){
	res.end();
}