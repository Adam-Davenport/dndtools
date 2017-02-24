var mongoose = require('mongoose')
var classSchema = new mongoose.Schema({
	name: String,
	hd: Number,
	bab: String,
	spellcasting: Boolean,
	spellprogression: String,
	fort: Boolean,
	ref: Boolean,
	will: Boolean,
	features: [{
		name: String,
		description: String
	}]
})
module.exports = mongoose.model('Class', classSchema)
