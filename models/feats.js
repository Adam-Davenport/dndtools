var mongoose = require('mongoose')
var featSchema = new mongoose.Schema({
	name: String,
	type: String,
	prereqs: String,
	benefits: String,
	special: String
})
module.exports = mongoose.model('Feat', featSchema)