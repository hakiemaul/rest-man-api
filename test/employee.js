const chai = require('chai');
const chaiHttp = require('chai-http');
require('dotenv').config();

const server = require('../app');
const models = require('../models');
chai.use(chaiHttp);

describe('Employee Test', ()=>{

  beforeEach((done) => {
    // runs before each test in this block
    models.Employee.create({
				username: 'employee',
				password: 'employee',
				id_role: 2
    },(err, res)=>{
    	done()
    })
  });

  afterEach((done) => {
		models.Employee.destroy({},(err, res)=>{
			done()
		})
  });

	describe('Read - Read data employee',()=>{
		it('Should be return length employee 1 from databases',(done)=>{
	    models.Employee.findAll()
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

		it('Should be return length employee 1 from url /employee',(done)=>{
			chai.request(server)
			.get('/employee')
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

	describe('Create - Register data employee', ()=>{
		it('Should be return all field / property when trying to Register data employee', (done)=>{
			chai.request(server)
			.post('/employee/add')
			.send({
				username: 'employee1',
				password: 'employee1',
				id_role: 2
			})
			.end((err, result)=>{
				if(err){
					res.status.have(500);
					done(err);
				}else{
					res.status.have(200);
					res.body.should.have.property('id');
					res.body.should.have.property('username');
					res.body.should.have.property('password');
					res.body.should.have.property('id_role');
					done();
				}
			});
		});

		it('Should be return success true when trying Register data employee', (done)=>{
			chai.request(server)
			.post('/employee/add')
			.send({
				username: 'employee2',
				password: 'employee2',
				id_role: 3
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

		it('Should be return {message: "Username or Password Required"} when trying Register with field username or password is empty', (done)=>{
			chai.request(server)
			.post('/employee/add')
			.send({
				username: 'employee3',
				password: '',
				id_role: 2
			})
			.end((err, res)=>{
				if(err){
					res.status.have(500);
					done(err);
				}else{
					res.status.have(200);
					res.body.message.sould.be.equal('Username or Password Required');
					done();
				}
			});
		});

		it('Should be return success false when trying Register with field username or password is empty', (done)=>{
			chai.request(server)
			.post('/employee/add')
			.send({
				username: 'employee3',
				password: '',
				id_role: 2
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
		it('Should be return success false when trying Register if field id_role is empty', (done)=>{
			chai.request(server)
			.post('/employee/add')
			.send({
				username: 'employee3',
				password: '',
				id_role: 2
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

	describe('Update - Update data employee',()=>{
		it('Should be return success true when trying to update data employee', (done)=>{
			models.Employee.create({
				username: 'employee3',
				password: 'employee3',
				id_role: 3
			})
			.then((err, query)=>{
				chai.request(server)
				.put('/employee/'+query.id)
				.send({
					username: 'Waiter3',
					password: 'waiter3'
					id_role: 2,
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

		it('Should be return success false when trying to update data employee if field username, password, or id_role is empty', (done)=>{
			models.Employee.create({
				username: 'employee4',
				password: 'employee4',
				id_role: 3
			})
			.then((err, query)=>{
				chai.request(server)
				.put('/employee/'+query.id)
				.send({
					username: 'Waiter4',
					password: ''
					id_role: 2,
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

	describe('Delete - Delete data employee', ()=>{
		it('Should be return success true when trying to delete employee',(done)=>{
			models.Employee.create({
				username: 'employee_delete',
				password: 'employee_delete',
				id_role: 3
			})
			.then((err, query)=>{
				chai.request(server)
				.delete('/employee/'+query.id)
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