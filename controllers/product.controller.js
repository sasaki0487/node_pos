const Product = require('../models/product.model');

exports.search = function(req,res){
	var id = req.body.productID;
	if(id){
		Product.find({'id':id},(err,data) => {
			if(err){
				console.log(err);
				res.end();
			}
			else{
				res.render('searchResult',{product:data});
			}
		});
	}
}

exports.register = function(req,res){
	res.end();
}