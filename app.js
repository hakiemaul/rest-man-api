const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var sequelize = require('sequelize');

var employees = require('./routes/employee');
var roles = require('./routes/role');
var auth = require('./routes/auth');
var categories = require('./routes/category');
var menu = require('./routes/menu');

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


app.listen(app.get('port'),()=>{
	console.log("Express Run to http://localhost/:"+app.get('port'));
})