const models = require('../models');
const bcrypt = require('bcrypt');

module.exports = {
	getAllMenu : (req, res)=>{
		models.Menu.findAll({
			include: [
		     { model: models.Category}
		  ]
		})
		.then(response=>{
			res.json(response);
		})
		.catch(err=>{
			res.json(err);
		})
	},
	addMenu:(req, res)=>{
		let finalResult = {
      id: null,
      name: null,
      description: null,
      price:null,
      urlImg:null,
      category:null,
      success: false,
      message: ''
    }

		models.Menu.create({
      name: req.body.name,
      description: req.body.description,
      price:req.body.price,
      urlImg:req.body.urlImg,
      id_category:req.body.id_category
		})
		.then(response=>{
			let id_category = response.dataValues.id_category
			models.Category.findAll({})
			.then(responseCategory=>{
				let Category = ''
				responseCategory.map(CategoryValue=>{
					if(CategoryValue.dataValues.id === id_category){
						Category = CategoryValue.dataValues.name
						return Category
					}
				})
				finalResult.id = response.dataValues.id;
				finalResult.name = response.dataValues.name;
				finalResult.description = response.dataValues.description;
				finalResult.price = response.dataValues.price;
				finalResult.urlImg = response.dataValues.urlImg;
				finalResult.category = Category
				finalResult.success = true
				finalResult.message = "Menu has been added"
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
	editMenu: (req, res)=>{
		let finalResult = {
      id: null,
      name: null,
      description: null,
      price:null,
      urlImg:null,
      id_category:null,
      success: false,
      message: ''
    }
		models.Menu.findOne({
			where:{
				id: req.params.id
			}
		})
		.then(query=>{
      query.updateAttributes({
	      name: req.body.name || query.dataValues.name,
	      description: req.body.description || query.dataValues.description,
	      price:req.body.price || query.dataValues.price,
	      urlImg:req.body.urlImg || query.dataValues.urlImg,
	      id_category:req.body.id_category || query.dataValues.id_category,
        createdAt : query.dataValues.createdAt,
        updatedAt : new Date()
      })
      .then((response)=>{
				models.Category.findAll({})
				.then(responseCategory=>{
					let Category = ''
					responseCategory.map(CategoryValue=>{
						if(CategoryValue.dataValues.id === response.id_category){
							Category = CategoryValue.dataValues.type
							return Category
						}
					})
					finalResult.id = response.dataValues.id;
					finalResult.name = response.dataValues.name;
					finalResult.description = response.dataValues.description;
					finalResult.price = response.dataValues.price;
					finalResult.urlImg = response.dataValues.urlImg;
					finalResult.Category = Category
					finalResult.success = true
					finalResult.message = "Menu has been updated"
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
	deleteMenu:(req, res)=>{
		let finalResult = {
			record:null,
			success: false,
			message: ''
		}
		models.Menu.destroy({
			where:{
				id: req.params.id
			}
		})
		.then(response=>{
			finalResult.record = response
			finalResult.success = true
			finalResult.message = 'Menu has been delete'
			res.json('finalResult')
		})
		.catch(err=>{
			res.json(err)
		})
	}
}