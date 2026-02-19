const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const { login, getAnalytics, exportExcel } = require('../controllers/adminController');

router.post('/login', login);
router.get('/analytics', protect, getAnalytics);
router.get('/export', protect, exportExcel);

module.exports = router;