const Product = require('../models/product.model');

exports.search = (req,res) => {
	var id = req.body.productID;
	if(id){
		Product.find({'id':id},(err,data) => {
			if(err){
				console.log(err);
				res.end();
			}
			else if(data.length){
				res.render('searchResult',{product:data});
			}
			else{
				res.send("ID not found!");
				res.end();
			}
		});
	}
}

exports.register = (req,res) => {
	var id = req.body.id;
	var name = req.body.name;
	var stock = req.body.stock;
	var inPrice = req.body.inPrice;
	var outPrice = req.body.outPrice;
	Product.create(
	{
		'id':id,
		'name':name,
		'stock':stock,
		'inPrice':inPrice,
		'outPrice':outPrice
	},
	(err,doc) => {
		if(err){
			console.log(err);
			return res.status(500).send({error:err});
		}
		else{
			return res.status(200).send({'res':'Registered.'});
		}
	});
}

exports.update = (req,res) => {
	var id = req.body.id;
	var name = req.body.name;
	var stock = req.body.stock;
	var inPrice = req.body.inPrice;
	var outPrice = req.body.outPrice;
	var company = req.body.company;
	if(id){
		Product.findOneAndUpdate({'id':id},
		{
			'id':id,
			'name':name,
			'stock':stock,
			'inPrice':inPrice,
			'outPrice':outPrice,
			'company':company
		},
		{upsert:true},
		(err,doc) =>{
			if(err){
				console.log(err);
				return res.send(500,{error:err});
			}
			else{
				return res.status(200).send({'res':'Updated.'});
			}
		});
	}
}

exports.delete = (req,res) => {
	var id = req.body.id;
	if(id){
		Product.findOneAndDelete({'id':id},
			(err,doc) =>{
				if(err){
					console.log(err);
					return res.send(500,{error:err});
				}
				else{
					return res.status(200).send({'res':'Deleted.'});
			}
		});
	}
}

exports.getRegisterId = (req,res) => {
	Product.find({},{'id':1,'_id':0}).sort({'id':1}).exec((err,data)=>{
		if(err){
			console.log(err);
			return res.status(500).send({error:err});
		}
		else{
			for(idx = 1 ; idx <= data.length ; ++idx){
				if(data[idx-1].id != idx){
					break;
				}
			}
			return res.status(200).send({ID:idx});
		}

	});
}