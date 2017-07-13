const models = require('../models');
const bcrypt = require('bcrypt');

module.exports = {
	getAllEmployee : (req, res)=>{
		models.Employee.findAll()
		.then(response=>{
			res.json(response);
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

			models.Role.findAll({})
				.then(responseRole=>{
					let role = ''
					responseRole.map(roleValue=>{
						if(roleValue.dataValues.id === id_role){
							role = roleValue.dataValues.type
							return role
						}
					})
					finalResult.id = response.dataValues.id;
					finalResult.username = response.dataValues.username;
					finalResult.password = response.dataValues.password;
					finalResult.role = role
					finalResult.success = true
					finalResult.message = "Employee has been added"
					res.json(finalResult)
				})
				.catch(err=>{
					console.log(err)
				})
		})
		.catch(err=>{
			res.json(err)
		})
	},
	editEmployee: (req, res)=>{
		let finalResult = {
			id: null,
			username: '',
			password: '',
			role: '',
			success: false,
			message: ''
		}
		models.Employee.findOne({
			where:{
				id: req.params.id
			}
		})
		.then(query=>{
      query.updateAttributes({
        username : req.body.username || query.dataValues.username,
        password : bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)) || query.dataValues.password,
        id_role : req.body.id_role || query.dataValues.id_role,
        createdAt : query.dataValues.createdAt,
        updatedAt : new Date()
      })
      .then((response)=>{
				models.Role.findAll({})
				.then(responseRole=>{
					let role = ''
					responseRole.map(roleValue=>{
						if(roleValue.dataValues.id === id_role){
							role = roleValue.dataValues.type
							return role
						}
					})
					finalResult.id = response.dataValues.id;
					finalResult.username = response.dataValues.username;
					finalResult.password = response.dataValues.password;
					finalResult.role = role
					finalResult.success = true
					finalResult.message = "Employee has been updated"
					res.json(finalResult)
				})
				.catch(err=>{
					console.log(err)
				})
      })
      .catch((error)=>{
        res.json(error)
      })
		})
		.catch(err=>{
			res.json(err)
		})
	},
	deleteEmployee:(req, res)=>{
		let finalResult = {
			record:null,
			success: false,
			message: ''
		}
		models.Employee.destroy({
			where:{
				id: req.params.id
			}
		})
		.then(response=>{
			finalResult.record = response
			finalResult.success = true
			finalResult.message = 'Employee has been delete'
			res.json('finalResult')
		})
		.catch(err=>{
			res.json(err)
		})
	}
}