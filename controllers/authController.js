const models = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
module.exports={
	login: (req, res)=>{
		models.Employee.findOne({
			where:{
				username:req.body.username
			}
		})
		.then(response=>{
			if(bcrypt.compareSync(req.body.password, response.dataValues.password)){
				const data = {
					username : query.dataValues.first_name,
          id_role : query.dataValues.id_role
				}
          var token = jwt.sign(data,'secret')
          res.json({
          	data: data,
          	token: token
          })
			}
		}) 
		.catch(err=>{
			res.send(err)
		})
	}
}