const CronJob = require('cron').CronJob
const kue = require('kue')
const queue = kue.createQueue()
const nodemailer = require('nodemailer')
require('dotenv').config()

const models = require('../models')

module.exports = {
	triggerReport : (result)=>{
		console.log(result)
		// var dateFrom = new Date(from)
		// var dayNow = dateFrom.getDate()
		// var monthNow = dateFrom.getMonth()
		// var yearNow = dateFrom.getYear()

// 		new CronJob(`0 0 0 ${dayNow} ${monthNow} *`, function() {
			// models.Transaction.findAll({
			// 	where:{
			//     createdAt : {
			//     	$between: [dateFrom, to]
			//     }
			// 	}
			// })
			// .then(response=>{
			// 	console.log(response)
			// })
			// .catch(err=>{
			// 	console.log(err)
			// })

// 		}, null, true, 'Asia/Jakarta');
	},
	automatedReports : ()=>{
		var dateNow = new Date()
		const milisecond = 24 * 60 * 60 * 1000;
		const lastDate = Date.parse(dateNow) - milisecond;
		const resultDate = new Date(lastDate)
		const dayNow = dateNow.getDate()
		const monthNow = dateNow.getMonth()

		new CronJob(`0 0 0 ${dayNow} ${monthNow} *`, function() {
			models.Transaction.findAll({
				where:{
			    createdAt : {
			    	$between: [resultDate, dateNow]
			    }
				},
				include:[
					{
						model: models.Order,
						include:[
				  		{
						    model: models.Employee
						  },
						  {
						    model: models.Menu,
						    include:[
						    	{
						    		model: models.Category
						    	}
						    ]
						  }
						]
					}
				]
			})
			.then(response=>{
				console.log(response)

			})
			.catch(err=>{
				console.log(err)
			})

		}, null, true, 'Asia/Jakarta');
	},
	reportTested : (req,res)=>{

	}
}

		
/*
			var job = queue.create('email', {
			    subject: 'Transaction Report / Day',
			    message: `Hi ${response.name}, Ini email baru dari Dyan Kastutara, Oke Kan?`,
			    to : response.email
				})
				.save(function(err){
				   if( !err ) console.log("Cron job sukses", job.id );
				});

			queue.process('email', function(job, done){
		  	email(job.data, done);
			});


			function email(job, done){
				let transporter = nodemailer.createTransport({
        		service : 'gmail',
				    host: 'smtp.gmail.com',
				    port: 587,
				    secure: false, // secure:true for port 465, secure:false for port 587
				    auth: {
				        user: process.env.EMAIL,
				        pass: process.env.PASS
				    }
				});

				// setup email data with unicode symbols
				let mailOptions = {
				    from: '"Dyan Kastutara" <dyankastutara19@gmail.com>', // sender address
				    to: job.to, // list of receivers
				    subject: job.subject, // Subject line
				    text: job.message // plain text body
				};

				// send mail with defined transport object
				transporter.sendMail(mailOptions, (error, info) => {
				    if (error) {
				        return console.log(error);
				    }
				    console.log('Message %s sent: %s', info.messageId, info.response);
				    return done()
				});
			}

			*/