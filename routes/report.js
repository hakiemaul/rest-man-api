const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

router.post('/daily',reportController.reportDaily);
router.post('/weekly',reportController.reportWeekly);
router.post('/monthly', reportController.reportMonthly);

module.exports = router