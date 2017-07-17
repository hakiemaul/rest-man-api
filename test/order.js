const chai = require('chai');
const chaiHttp = require('chai-http');
require('dotenv').config();

const server = require('../app');
const models = require('../models');
chai.use(chaiHttp);

describe('Order Test', ()=>{

 //  beforeEach((done) => {
 //    models.Order.create({
 //    	total_price: 50000,
	// 		no_meja: 'B1',
	// 		id_employee: 2,
	// 		status: true
 //    })
 //    .then(response=>{
 //    	done()
 //    })
 //    .catch(err=>{
 //    	done(err)
 //    })
 //  });

 //  afterEach((done) => {
	// 	models.Order.destroy({})
 //    .then(response=>{
 //    	done()
 //    })
 //    .catch(err=>{
 //    	done(err)
 //    })
 //  });

	// describe('Read - Read data Order',()=>{
	// 	it('Should be return length Order 1 from databases',(done)=>{
	//     models.Order.findAll()
	//     .then((err, res) => {
	//     	if(err){
	//     		res.should.have.status(500);
	//     		done(err);
	//     	}else{
	//     		res.should.have.status(200);
	//     		res.length.should.equal(1);
	//     		done();
	//     	}
	//     });
	// 	});

	// 	it('Should be return length Order 1 from url /Order',(done)=>{
	// 		chai.request(server)
	// 		.get('/order')
	// 		.end((err, res) => {
	//     	if(err){
	//     		res.should.have.status(500);
	//     		done(err);
	//     	}else{
	//     		res.should.have.status(200);
	//     		res.length.should.equal(1);
	//     		done();
	//     	}
	//     });
	// 	});
	// });

	describe('Create - Add Order', ()=>{
		it('Should be return all field / property when trying to Add data Order', (done)=>{
			chai.request(server)
			.post('/order')
			.send({
	    	total_price: 50000,
				no_meja: 'B1',
				id_employee: 2
			})
			.end((err, res)=>{
				if(err){
					res.should.have.status(500);
					done(err);
				}else{
					res.should.have.status(200);
					res.body.should.have.property('id');
					res.body.should.have.property('total_price');
					res.body.should.have.property('no_meja');
					res.body.should.have.property('id_employee');
					done();
				}
			});
		});

		it('Should be return success true when trying Add data Order', (done)=>{
			chai.request(server)
			.post('/order')
			.send({
	    	total_price: 50000,
				no_meja: 'B1',
				id_employee: 2
			})
			.end((err, res)=>{
				if(err){
					res.should.have.status(500);
					done(err);
				}else{
					res.should.have.status(200);
					res.body.success.should.be.equal(true);
					done();
				}
			});
		});

		it('Should be return success false when trying Add if field no_meja is empty', (done)=>{
			chai.request(server)
			.post('/order')
			.send({
	    	total_price: 50000,
				no_meja: '',
				id_employee: 2
			})
			.end((err, res)=>{
				if(err){
					res.should.have.status(500);
					done(err);
				}else{
					res.should.have.status(200);
					res.body.success.should.be.equal(false);
					done();
				}
			});
		});
	});

	// describe('Update - Update data Order',()=>{
	// 	it('Should be return success true when trying to update data Order', (done)=>{
	// 		models.Order.create({
	//     	total_price: 50000,
	// 			no_meja: 'A1',
	// 			id_employee: 2
	// 		})
	// 		.then((err, query)=>{
	// 			chai.request(server)
	// 			.put('/order/'+query.id)
	// 			.send({
	// 	    	total_price: 50000,
	// 				no_meja: 'B1',
	// 				id_employee: 2
	// 			})
	// 			.end((err,res)=>{
	// 				if(err){
	// 					res.should.have.status(500);
	// 					done(err);
	// 				}else{
	// 					res.should.have.status(200);
	// 					res.body.success.should.be.equal(true);
	// 					done();
	// 				}
	// 			});
	// 		});
	// 	});

	// 	it('Should be return success false when trying to update data Order if field no_meja is empty', (done)=>{
	// 		models.Order.create({
	//     	total_price: 50000,
	// 			no_meja: 'B1',
	// 			id_employee: 2,
	// 			status: true
	// 		})
	// 		.then((err, query)=>{
	// 			chai.request(server)
	// 			.put('/order/'+query.id)
	// 			.send({
	// 	    	total_price: 50000,
	// 				no_meja: null,
	// 				id_employee: 2,
	// 				updatedAt: new Date()
	// 			})
	// 			.end((err,res)=>{
	// 				if(err){
	// 					res.should.have.status(500);
	// 					done(err);
	// 				}else{
	// 					res.should.have.status(200);
	// 					res.body.success.should.be.equal(false);
	// 					done();
	// 				}
	// 			});
	// 		});
	// 	});
	// });

	// describe('Delete - Delete data Order', ()=>{
	// 	it('Should be return success true when trying to delete Order',(done)=>{
	// 		models.Order.create({
	//     	total_price: 50000,
	// 			no_meja: 'B1',
	// 			id_employee: 2
	// 		})
	// 		.then((err, query)=>{
	// 			chai.request(server)
	// 			.delete('/order/'+query.id)
	// 			.end((err,res)=>{
	// 				if(err){
	// 					res.should.have.status(500);
	// 					done(err);
	// 				}else{
	// 					res.should.have.status(200);
	// 					res.body.success.should.be.equal(true);
	// 					done();
	// 				}
	// 			});
	// 		});
	// 	})
	// });
});