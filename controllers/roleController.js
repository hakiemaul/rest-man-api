const models = require('../models');

module.exports = {
	getAllRole : (req, res)=>{
		models.Role.find({})
		.then(response=>{
			res.json({
				status: "success",
				response: response
			});
		})
		.catch(err=>{
			res.send(err);
		})
	}
}