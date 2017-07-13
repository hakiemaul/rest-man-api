const models = require('../models');

module.exports = {
	getAllOrders: (req, res)=>{
		models.Order.findAll({})
		.then(response=>{
			res.json(response)
		})
		.catch(err=>{
			res.json(err)
		})
	},
	addOrdering:(req, res)=>{
		let finalResult = {
			id: null,
			no_meja: null,
			total_price: null,
			success: false,
			message: ''
		}
		models.Order.create({
			no_meja: req.body.no_meja,
			total_price: req.body.total_price
		})
		.then(response=>{
			
			finalResult.id = response.dataValues.id
			finalResult.no_meja = response.dataValues.no_meja
			finalResult.total_price = response.dataValues.total_price
			finalResult.success = true
			finalResult.message = 'Order Added'
			res.json(finalResult)
		})
		.catch(err=>{
			res.json(err)
		})
	}
}