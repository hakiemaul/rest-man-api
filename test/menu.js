const chai = require('chai');
const chaiHttp = require('chai-http');
require('dotenv').config();

const server = require('../app');
const models = require('../models');
chai.use(chaiHttp);

describe('Menu Test', ()=>{

  beforeEach((done) => {
    // runs before each test in this block
    models.Menu.create({
			name: 'Test Menu',
			description: 'Test Menu',
			price: 20000
    },(err, res)=>{
    	done()
    })
  });

  afterEach((done) => {
		models.Menu.destroy({},(err, res)=>{
			done()
		})
  });

	describe('Read - Read data Menu',()=>{
		it('Should be return length Menu 1 from databases',(done)=>{
	    models.Menu.findAll()
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

		it('Should be return length Menu 1 from url /menu',(done)=>{
			chai.request(server)
			.get('/menu')
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

	describe('Create - Add Menu', ()=>{
		it('Should be return all field / property when trying to Add data Menu', (done)=>{
			chai.request(server)
			.post('/menu/add')
			.send({
				name: 'Test Menu Create',
				description: 'Test Menu Create Description',
				price: 15000
			})
			.end((err, result)=>{
				if(err){
					res.status.have(500);
					done(err);
				}else{
					res.status.have(200);
					res.body.should.have.property('id');
					res.body.should.have.property('name');
					res.body.should.have.property('description');
					res.body.should.have.property('price');
					done();
				}
			});
		});

		it('Should be return success true when trying Add data Menu', (done)=>{
			chai.request(server)
			.post('/menu/add')
			.send({
				name: 'Test Menu Create success true',
				description: 'Test Menu Create Description success true',
				price: 15000
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

		it('Should be return success false when trying Register if field name is empty', (done)=>{
			chai.request(server)
			.post('/menu/add')
			.send({
				name: '',
				description: 'Test Menu Create Description success false',
				price: 15000
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
			.post('/menu/add')
			.send({
				name: 'Test Menu Create success true',
				description: 'Test Menu Create Description success true',
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

	describe('Update - Update data Menu',()=>{
		it('Should be return success true when trying to update data Menu', (done)=>{
			models.Menu.create({
				name: 'Menu update',
				description: 'Menu update Description',
				price: 15000
			})
			.then((err, query)=>{
				chai.request(server)
				.put('/menu/'+query.id)
				.send({
					name: 'Menu update baru',
					description: 'Menu update Description baru',
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

		it('Should be return success false when trying to update data Menu if field name is empty', (done)=>{
			models.Menu.create({
				name: 'Menu Update Baru False',
				description: 'Menu update Description baru',
				price: 15000
			})
			.then((err, query)=>{
				chai.request(server)
				.put('/menu/'+query.id)
				.send({
					name: '',
					description: 'Menu update Description baru',
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

	describe('Delete - Delete data Menu', ()=>{
		it('Should be return success true when trying to delete Menu',(done)=>{
			models.Menu.create({
				name: 'Menu Makan Delete',
				description: 'Menu update Description baru',
				price: 15000
			})
			.then((err, query)=>{
				chai.request(server)
				.delete('/menu/'+query.id)
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