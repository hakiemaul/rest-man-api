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
		let finalResult = {
      id: null,
      username: null,
      password: null,
      role:null,
      success: false,
      message: ''
    }

		models.Employee.create({
			username: req.body.username,
			password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
			id_role: req.body.id_role
		})
		.then(response=>{
			let id_role = response.dataValues.id_role
			let role = ''
			switch(id_role){
				case 1:
					role = 'Admin';
				break;

				case 2:
					role = 'Waiter';
				break;

				case 3 :
					role = 'Cashier'
				break;
			}

			finalResult.id = response.dataValues.id;
			finalResult.username = response.dataValues.username;
			finalResult.password = response.dataValues.password;
			finalResult.role = role
			finalResult.success = true
			finalResult.message = "Employee Added"
			res.json(finalResult)
		})
		.catch(err=>{
			res.json(err)
		})
	}
}