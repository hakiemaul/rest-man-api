const models = require('../models');
const bcrypt = require('bcrypt');

module.exports = {
	getAllEmployee : (req, res)=>{
		models.Employee.findAll()
		.then(response=>{
			res.json({
				success: true,
				response: response
			});
		})
		.catch(err=>{
			res.json(err);
		})
	},
	addEmployee:(req, res)=>{
		models.Employee.create({
			username: req.body.username,
			password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
			createdAt: new Date(),
			updatedAt: new Date(),
			id_role: req.body.id_role
		})
		.then(response=>{
			res.json({
				success:true,
				response:response
			})
		})
		.catch(err=>{
			res.json(err)
		})
	},
	deleteEmployee:(req, res)=>{
		models.Employee.destroy
	}
}