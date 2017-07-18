var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var reportSchema = new Schema({
	finalResult : [],
	totalTrx : [Schema.Types.Mixed],
	sum : []
})

module.exports = mongoose.model('Report',reportSchema)