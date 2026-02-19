const mongoose = require('mongoose');

const eventTeamSchema = new mongoose.Schema({
  teamId: {
    type: String,
    required: true,
    unique: true
  },
  teamName: {
    type: String,
    required: true,
    trim: true
  },
  leader: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    whatsapp: { type: String, required: true }
  },
  college: { type: String, required: true },
  branch: { type: String, required: true },
  year: { type: String, required: true },
  event: { type: String, required: true },
  teamSize: { type: Number, required: true, min: 1, max: 4 },
  members: [{
    name: { type: String, required: true },
    email: { type: String, required: true }
  }],
  appliedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('EventTeam', eventTeamSchema);