const chai = require('chai');
const chaiHttp = require('chai-http');
require('dotenv').config();

const server = require('../app');
const models = require('../models');
chai.use(chaiHttp);

describe('Category Test',()=>{
  beforeEach((done) => {
    // runs before each test in this block
    models.Category.create({
				name: 'Category'
    },(err, res)=>{
    	done()
    })
  });

  afterEach((done) => {
		models.Category.destroy({},(err, res)=>{
			done()
		})
  });

  describe('Read - Read category',()=>{
  	it('Should be return length category 1',(done)=>{
  		chai.request(server)
			.get('/category')
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

  describe('Create - Add category',()=>{
  	it('Should be return all field category when trying to add category',(done)=>{
  		chai.request(server)
  		.post('/category/add')
  		.send({
  			name: 'Category 2'
  		})
  		.end((err, res)=>{
  			if(err){
  				res.status.have(500);
  				done(err);
  			}else{
  				res.status.have(200);
  				res.body.should.have.property('id');
  				res.body.should.have.property('name');
  				done();
  			}
  		});
  	});

  	it('Should be return success false while trying to add category with field name is empty',(done)=>{
  		chai.request(server)
  		.post('/category/add')
  		.send({
  			name: null
  		})
  		.end((err, res)=>{
  			if(err){
  				res.status.have(500);
  				done(err);
  			}else{
  				res.status.have(200);
  				res.body.success.should.be.equal(false)
  				done();
  			}
  		});
  	});
  });

  describe('Update - Update data category',()=>{
		it('Should be return success true when trying to update data category', (done)=>{
			models.Category.create({
				name: 'Category Update'
			})
			.then((err, query)=>{
				chai.request(server)
				.put('/category/'+query.id)
				.send({
					name: 'Category di update'
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

		it('Should be return success false when trying to update data employee if field name is empty', (done)=>{
			models.Employee.create({
				name: 'Category Update'
			})
			.then((err, query)=>{
				chai.request(server)
				.put('/category/'+query.id)
				.send({
					name: null
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
	});

	describe('Delete - Delete data category', ()=>{
		it('Should be return success true when trying to delete category',(done)=>{
			models.Employee.create({
				name: 'Category Delete'
			})
			.then((err, query)=>{
				chai.request(server)
				.delete('/category/'+query.id)
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