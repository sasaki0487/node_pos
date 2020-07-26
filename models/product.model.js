const mongoose = require('mongoose');
const schema = mongoose.Schema;

let productSchema = new schema({
	id: {type: String, required: true},
	name: {type: String, required: true},
	stock: {type: Number, required: true},
	inPrice: {type: Number, required: true},
	outPrice: {type: Number, required: true},
	company: {type: String, required: true}
});

module.exports = mongoose.model('Product', productSchema);