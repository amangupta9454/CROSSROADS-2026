const express = require('express');
const multer = require('multer');
const { submitRegistration } = require('../controllers/registrationController');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.single('idProof'), submitRegistration);

module.exports = router;