// const chai = require('chai');
// const chaiHttp = require('chai-http');
// require('dotenv').config();

// const server = require('../app');
// const models = require('../models');
// chai.use(chaiHttp);

// describe('Menu Order Test', ()=>{

//   beforeEach((done) => {
//     models.MenuOrder.create({
// 			id_order: 1,
// 			id_menu: 1,
// 			qty_item: 1,
// 			total: 20000
//     })
//     .then(response=>{
//     	done()
//     })
//     .catch(err=>{
//     	done(err)
//     })
//   });

//   afterEach((done) => {
// 		models.MenuOrder.destroy()
//     .then(response=>{
//     	done()
//     })
//     .catch(err=>{
//     	done(err)
//     })
//   });

// 	describe('Read - Read data Menu Order',()=>{
// 		it('Should be return length Menu Order 1 from databases',(done)=>{
// 	    models.MenuOrder.findAll()
// 	    .then((err, res) => {
// 	    	if(err){
// 	    		res.should.have.status(500);
// 	    		done(err);
// 	    	}else{
// 	    		res.should.have.status(200);
// 	    		res.length.should.equal(1);
// 	    		done();
// 	    	}
// 	    });
// 		});

// 		it('Should be return length Menu Order 1 from url /MenuOrder',(done)=>{
// 			chai.request(server)
// 			.get('/menu-order')
// 			.end((err, res) => {
// 	    	if(err){
// 	    		res.should.have.status(500);
// 	    		done(err);
// 	    	}else{
// 	    		res.should.have.status(200);
// 	    		res.length.should.equal(1);
// 	    		done();
// 	    	}
// 	    });
// 		});
// 	});

// 	describe('Create - Add MenuOrder', ()=>{
// 		it('Should be return all field / property when trying to Add data Menu Order', (done)=>{
// 			chai.request(server)
// 			.post('/order/add')
// 			.send({
// 				id_order: 1,
// 				id_menu: 1,
// 				qty_item: 1,
// 				total: 20000
// 			})
// 			.end((err, result)=>{
// 				if(err){
// 					res.should.have.status(500);
// 					done(err);
// 				}else{
// 					res.should.have.status(200);
// 					res.body.should.have.property('id');
// 					res.body.should.have.property('id_order');
// 					res.body.should.have.property('id_menu');
// 					res.body.should.have.property('qty_item');
// 					res.body.should.have.property('total');
// 					done();
// 				}
// 			});
// 		});

// 		it('Should be return success true when trying Add data MenuOrder', (done)=>{
// 			chai.request(server)
// 			.post('/menu-order/add')
// 			.send({
// 				id_order: 1,
// 				id_menu: 1,
// 				qty_item: 1,
// 				total: 20000
// 			})
// 			.end((err, res)=>{
// 				if(err){
// 					res.should.have.status(500);
// 					done(err);
// 				}else{
// 					res.should.have.status(200);
// 					res.body.success.sould.be.equal(true);
// 					done();
// 				}
// 			});
// 		});

// 		it('Should be return success false when trying Register if field qty_item is empty', (done)=>{
// 			chai.request(server)
// 			.post('/menu-order/add')
// 			.send({
// 				id_order: 1,
// 				id_menu: 1,
// 				qty_item: null,
// 				total: 20000
// 			})
// 			.end((err, res)=>{
// 				if(err){
// 					res.should.have.status(500);
// 					done(err);
// 				}else{
// 					res.should.have.status(200);
// 					res.body.success.sould.be.equal(false);
// 					done();
// 				}
// 			});
// 		});
// 	});

// 	describe('Update - Update data MenuOrder',()=>{
// 		it('Should be return success true when trying to update data MenuOrder', (done)=>{
// 			models.MenuOrder.create({
// 				id_order: 1,
// 				id_menu: 1,
// 				qty_item: 1,
// 				total: 20000
// 			})
// 			.then((err, query)=>{
// 				chai.request(server)
// 				.put('/menu-order/'+query.id)
// 				.send({
// 					id_order: 1,
// 					id_menu: 2,
// 					qty_item: 1,
// 					total: 25000,
// 					updatedAt: new Date()
// 				})
// 				.end((err,res)=>{
// 					if(err){
// 						res.should.have.status(500);
// 						done(err);
// 					}else{
// 						res.should.have.status(200);
// 						res.body.success.should.be.equal(true);
// 						done();
// 					}
// 				});
// 			});
// 		});

// 		it('Should be return success false when trying to update data MenuOrder if field qty_item is empty', (done)=>{
// 			models.MenuOrder.create({
// 				id_order: 1,
// 				id_menu: 1,
// 				qty_item: 1,
// 				total: 20000
// 			})
// 			.then((err, query)=>{
// 				chai.request(server)
// 				.put('/menu-order/'+query.id)
// 				.send({
// 					id_order: 1,
// 					id_menu: 2,
// 					qty_item: null,
// 					total: 25000,
// 					updatedAt: new Date()
// 				})
// 				.end((err,res)=>{
// 					if(err){
// 						res.should.have.status(500);
// 						done(err);
// 					}else{
// 						res.should.have.status(200);
// 						res.body.success.should.be.equal(false);
// 						done();
// 					}
// 				});
// 			});
// 		});
// 	});

// 	describe('Delete - Delete data MenuOrder', ()=>{
// 		it('Should be return success true when trying to delete MenuOrder',(done)=>{
// 			models.MenuOrder.create({
// 				id_order: 1,
// 				id_menu: 1,
// 				qty_item: 1,
// 				total: 20000
// 			})
// 			.then((err, query)=>{
// 				chai.request(server)
// 				.delete('/menu-order/'+query.id)
// 				.end((err,res)=>{
// 					if(err){
// 						res.should.have.status(500);
// 						done(err);
// 					}else{
// 						res.should.have.status(200);
// 						res.body.success.should.be.equal(true);
// 						done();
// 					}
// 				});
// 			});
// 		})
// 	});
// });