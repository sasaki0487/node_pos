const mongoose = require('mongoose');
const schema = mongoose.Schema;

let accountSchema = new schema({
	username: {type: String, required: true},
	password: {type: String, required: true}
});

module.exports = mongoose.model('Account', accountSchema);