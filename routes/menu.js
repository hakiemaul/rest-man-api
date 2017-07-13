const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

router.get('/',menuController.getAllMenu);
router.post('/add',menuController.addMenu);
router.put('/edit/:id',menuController.editMenu);
router.delete('/delete/:id',menuController.deleteMenu);

module.exports = router