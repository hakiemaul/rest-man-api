const models = require('../models');

module.exports = {
	getAllTransaction : (req, res)=>{
		models.Transaction.findAll({})
		.then(response=>{
			res.json(response)
		})
		.catch(err=>{
			res.json(err)
		})
	}
}