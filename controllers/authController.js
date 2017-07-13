const models = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports={
	login: (req, res)=>{
    let finalResult = {
      id: null,
      username: null,
      password: null,
      role:null,
      token: null,
      success: false,
      message: ''
    }

    let username = req.body.username.toLowerCase()

		models.Employee.findOne({
			where:{
				username:username
			}
		})
		.then(response=>{
			if(bcrypt.compareSync(req.body.password, response.dataValues.password)){
				let id_role = response.dataValues.id_role
				// let responseRoles = null
				// models.Role.findAll({})
				// .then(responseRole=>{
				// 	console.log(responseRole)
				// })
				// .catch(err=>{
				// 	console.log(err)
				// })

				// console.log(responseRoles)
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

				let token = jwt.sign({
					username: response.dataValues.username,
					role: role
				}, 'secret')

				finalResult.id = response.dataValues.id
				finalResult.username = response.dataValues.username
				finalResult.role = role
				finalResult.token = token
				finalResult.success = true
				finalResult.message = 'Login Success'
				res.json(finalResult)
			}
		}) 
		.catch(err=>{
			res.send(err)
		})
	}
}