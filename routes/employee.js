const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/',employeeController.getAllEmployee);
router.post('/',employeeController.addEmployee);

module.exports = router