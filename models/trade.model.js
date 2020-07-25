const mongoose = require('mongoose');
const schema = mongoose.Schema;

let tradeSchema = new schema({
	id: {type: String, required: true},
	totalPrice: {type: Number, required: true},
	date: {type: Date, required: true}
});

let tradeDetailSchema = new schema({
    id: {type: String, required: true},
    tradeId: {type: String, require: true},
	productId: {type: String, required: true},
	amount: {type: Number, required: true},
	date: {type: Date, required: true}
});

module.exports = {Trade: mongoose.model('Trade', productSchema) , TradeDetail: mongoose.model('TradeDetail', tradeDetailSchema)};