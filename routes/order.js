const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/',orderController.getAllOrders);
router.post('/',orderController.addOrder);
router.get('/:id', orderController.getDetailOrder)

module.exports = router