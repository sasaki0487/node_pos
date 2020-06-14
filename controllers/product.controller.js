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

exports.update = function(req,res){
	var id = req.body.id;
	var name = req.body.name;
	var stock = req.body.stock;
	var inPrice = req.body.inPrice;
	var outPrice = req.body.outPrice;
	if(id){
		Product.findOneAndUpdate({'id':id},
		{
			'id':id,
			'name':name,
			'stock':stock,
			'inPrice':inPrice,
			'outPrice':outPrice
		},
		{upsert:true},
		(err,doc) =>{
			if(err){
				console.log(err);
				return res.send(500,{error:err});
			}
			else{
				return res.send('Updated.');
			}
		});
	}
}