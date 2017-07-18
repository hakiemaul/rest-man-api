const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

router.get('/daily',reportController.reportDaily);
router.post('/weekly',reportController.reportWeekly);

module.exports = router