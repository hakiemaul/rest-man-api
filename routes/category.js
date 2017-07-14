const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/',categoryController.getAllCategory);
router.post('/add',categoryController.addCategory);
router.put('/edit/:id',categoryController.editCategory);
router.delete('/delete/:id',categoryController.deleteCategory);

module.exports = router