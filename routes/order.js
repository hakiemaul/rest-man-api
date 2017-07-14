const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/',orderController.getAllOrders);
router.post('/add',orderController.addOrder);

module.exports = router