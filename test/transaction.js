const chai = require('chai');
const chaiHttp = require('chai-http');
require('dotenv').config();

const server = require('../app');
const models = require('../models');
chai.use(chaiHttp);

describe('Transaction Test', ()=>{

  beforeEach((done) => {
    // runs before each test in this block
    models.Transaction.create({
			id_order: 1,
			pay: 20000,
			refund: 0
    },(err, res)=>{
    	done()
    })
  });

  afterEach((done) => {
		models.Transaction.destroy({},(err, res)=>{
			done()
		})
  });

	describe('Read - Read data Transaction',()=>{
		it('Should be return length Transaction 1 from databases',(done)=>{
	    models.Transaction.findAll()
	    .then((err, res) => {
	    	if(err){
	    		res.status.have(500);
	    		done(err);
	    	}else{
	    		res.status.have(200);
	    		res.body.length.should.equal(1);
	    		done();
	    	}
	    });
		});

		it('Should be return length Transaction 1 from url /transaction',(done)=>{
			chai.request(server)
			.get('/transaction')
			.end((err, res) => {
	    	if(err){
	    		res.status.have(500);
	    		done(err);
	    	}else{
	    		res.status.have(200);
	    		res.body.length.should.equal(1);
	    		done();
	    	}
	    });
		});
	});

	describe('Create - Add Transaction', ()=>{
		it('Should be return all field / property when trying to Add data Transaction', (done)=>{
			chai.request(server)
			.post('/transaction/add')
			.send({
				id_order: 2,
				pay: 20000,
				refund: 0
			})
			.end((err, result)=>{
				if(err){
					res.status.have(500);
					done(err);
				}else{
					res.status.have(200);
					res.body.should.have.property('id');
					res.body.should.have.property('id_order');
					res.body.should.have.property('pay');
					res.body.should.have.property('refund');
					done();
				}
			});
		});

		it('Should be return success true when trying Add data Transaction', (done)=>{
			chai.request(server)
			.post('/Transaction/add')
			.send({
				id_order: 2,
				pay: 20000,
				refund: 0
			})
			.end((err, res)=>{
				if(err){
					res.status.have(500);
					done(err);
				}else{
					res.status.have(200);
					res.body.success.sould.be.equal(true);
					done();
				}
			});
		});

		it('Should be return success false when trying Register if field pay is empty', (done)=>{
			chai.request(server)
			.post('/Transaction/add')
			.send({
				id_order: 2,
				pay: null,
				refund: 0
			})
			.end((err, res)=>{
				if(err){
					res.status.have(500);
					done(err);
				}else{
					res.status.have(200);
					res.body.success.sould.be.equal(false);
					done();
				}
			});
		});

		it('Should be return success false when trying Register if field price is empty', (done)=>{
			chai.request(server)
			.post('/Transaction/add')
			.send({
				name: 'Test Transaction Create success true',
				description: 'Test Transaction Create Description success true',
				price: null
			})
			.end((err, res)=>{
				if(err){
					res.status.have(500);
					done(err);
				}else{
					res.status.have(200);
					res.body.success.sould.be.equal(false);
					done();
				}
			});
		});
	});

	describe('Update - Update data Transaction',()=>{
		it('Should be return success true when trying to update data Transaction', (done)=>{
			models.Transaction.create({
				name: 'Transaction update',
				description: 'Transaction update Description',
				price: 15000
			})
			.then((err, query)=>{
				chai.request(server)
				.put('/Transaction/'+query.id)
				.send({
					name: 'Transaction update baru',
					description: 'Transaction update Description baru',
					price: 15000,
					updatedAt: new Date()
				})
				.end((err,res)=>{
					if(err){
						res.status.have(500);
						done(err);
					}else{
						res.status.have(200);
						res.body.success.should.be.equal(true);
						done();
					}
				});
			});
		});

		it('Should be return success false when trying to update data Transaction if field name is empty', (done)=>{
			models.Transaction.create({
				name: 'Transaction Update Baru False',
				description: 'Transaction update Description baru',
				price: 15000
			})
			.then((err, query)=>{
				chai.request(server)
				.put('/Transaction/'+query.id)
				.send({
					name: '',
					description: 'Transaction update Description baru',
					price: 15000,
					updatedAt: new Date()
				})
				.end((err,res)=>{
					if(err){
						res.status.have(500);
						done(err);
					}else{
						res.status.have(200);
						res.body.success.should.be.equal(false);
						done();
					}
				});
			});
		});
	});

	describe('Delete - Delete data Transaction', ()=>{
		it('Should be return success true when trying to delete Transaction',(done)=>{
			models.Transaction.create({
				name: 'Transaction Makan Delete',
				description: 'Transaction update Description baru',
				price: 15000
			})
			.then((err, query)=>{
				chai.request(server)
				.delete('/Transaction/'+query.id)
				.end((err,res)=>{
					if(err){
						res.status.have(500);
						done(err);
					}else{
						res.status.have(200);
						res.body.success.should.be.equal(true);
						done();
					}
				});
			});
		})
	});
});