const express = require('express');
const router = express.Router();
const { login, getAnalytics, exportExcel } = require('../controllers/adminController');
const protect = require('../middleware/auth');

router.post('/login', login);
router.get('/analytics', protect, getAnalytics);
router.get('/export', protect, exportExcel);

module.exports = router;