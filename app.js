const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('sequelize');

const employees = require('./routes/employee');
const roles = require('./routes/role');
const auth = require('./routes/auth');
const categories = require('./routes/category');
const menu = require('./routes/menu');
const orders = require('./routes/order');
const transactions = require('./routes/transaction');

const app = express();

app.set('port',process.env.PORT || 3000);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/employee', employees);
app.use('/role', roles);
app.use('/auth', auth);
app.use('/category', categories);
app.use('/menu', menu);
app.use('/order', orders);
app.use('/transaction', transactions);


app.listen(app.get('port'),()=>{
	console.log("Express Run to http://localhost/:"+app.get('port'));
})