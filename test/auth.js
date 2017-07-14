const chai = require('chai');
const chaiHttp = require('chai-http');
require('dotenv').config();

const server = require('../app');

const should = chai.should();
chai.use(chaiHttp);

describe('Auth Test',()=>{
	describe('Login - Test login with admin access',()=>{
		it('Should be return role Admin when Admin trying to login',(done)=>{
			chai.request(server)
			.post('/auth/login')
			.send({
				username: 'resto-man',
				password: 'resto-man'
			})
			.end((err, res)=>{
				if(err){
					res.status.have(500);
					done(err);
				}else{
					res.status.have(200);
					res.should.be.json;
					res.body.username.should.to.equal('resto-man');
					res.body.role.should.to.equal('admin');
					res.body.success.should.to.equal(true);
					done();
				}
			});
		});

		it('Should be return all field Admin when Admin trying to login',(done)=>{
			chai.request(server)
			.post('/auth/login')
			.send({
				username: 'resto-man',
				password: 'resto-man'
			})
			.end((err, res)=>{
				if(err){
					res.status.have(500);
					done(err);
				}else{
					res.status.have(200);
					res.should.be.json;
					res.body.should.have.property('id');
					res.body.should.have.property('username');
					res.body.should.have.property('role');
					res.body.should.have.property('success');
					res.body.should.have.property('token')
					done();
				}
			});
		});
	});

	describe('Login - Test login with waiters access',()=>{
		it('Should be return role waiter when waiters trying to login',(done)=>{
			chai.request(server)
			.post('/auth/login')
			.send({
				username: 'waiters',
				password: 'waiters-resto-man'
			})
			.end((err, res)=>{
				if(err){
					res.status.have(500);
					done(err);
				}else{
					res.status.have(200);
					res.should.be.json;
					res.body.username.should.to.equal('waiters');
					res.body.role.should.to.equal('waiter');
					res.body.success.should.to.equal(true);
					done();
				}
			});
		});

		it('Should be return all field Waiter when Waiter trying to login',(done)=>{
			chai.request(server)
			.post('/auth/login')
			.send({
				username: 'waiters',
				password: 'waiters-resto-man'
			})
			.end((err, res)=>{
				if(err){
					res.status.have(500);
					done(err);
				}else{
					res.status.have(200);
					res.should.be.json;
					res.body.should.have.property('id');
					res.body.should.have.property('username');
					res.body.should.have.property('role');
					res.body.should.have.property('success');
					res.body.should.have.property('token')
					done();
				}
			});
		});
	});

	describe('Login - Test login with casier access',()=>{
		it('Should be return role casier when casier trying to login',(done)=>{
			chai.request(server)
			.post('/auth/login')
			.send({
				username: 'casier',
				password: 'casier-resto-man'
			})
			.end((err, res)=>{
				if(err){
					res.status.have(500);
					done(err);
				}else{
					res.status.have(200);
					res.should.be.json;
					res.body.username.should.to.equal('casier');
					res.body.role.should.to.equal('casier');
					res.body.success.should.to.equal(true);
					done();
				}
			});
		});

		it('Should be return all field casier when Waiter trying to login',(done)=>{
			chai.request(server)
			.post('/auth/login')
			.send({
				username: 'casier',
				password: 'casier-resto-man'
			})
			.end((err, res)=>{
				if(err){
					res.status.have(500);
					done(err);
				}else{
					res.status.have(200);
					res.should.be.json;
					res.body.should.have.property('id');
					res.body.should.have.property('username');
					res.body.should.have.property('role');
					res.body.should.have.property('success');
					res.body.should.have.property('token')
					done();
				}
			});
		});
	});

	describe('Login - Test login with access wrong',()=>{
		it('Should be return status false when trying to login with wrong username or password', (done) => {
      chai.request(serverHost).post('/auth/login').send({
        username: 'resto-man',
        password: 'pwd-wrong'
      }).end((err, res) => {
        if (err) {
					res.status.have(500);
          done(err)
        } else {
          res.should.have.status(200);
          res.should.be.json;
          res.body.success.should.to.equal(false)
          done()
        }
      });
    });

    it('Should be return token null when trying to login with wrong username or password', (done) => {
      chai.request(serverHost).post('/auth/login').send({
        username: 'resto-man',
        password: 'pwd-wrong'
      }).end((err, res) => {
        if (err) {
					res.status.have(500);
          done(err)
        } else {
          res.should.have.status(200);
          res.should.be.json;
          res.body.token.should.to.equal(null)
          done()
        }
      });
    });
	});
});