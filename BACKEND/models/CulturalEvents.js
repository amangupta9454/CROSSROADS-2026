const mongoose = require('mongoose');
const registrationSchema = require('./Registration').schema;

module.exports = mongoose.model('CulturalEvents', registrationSchema);