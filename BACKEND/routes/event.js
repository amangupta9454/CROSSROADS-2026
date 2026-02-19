const express = require('express');
const { registerEventTeam } = require('../controllers/eventRegisterController');

const router = express.Router();

router.post('/event-register', registerEventTeam);

module.exports = router;