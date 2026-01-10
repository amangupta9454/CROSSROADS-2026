const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  uniqueId: { type: String, required: true, unique: true },
  teamName: { type: String, required: true },
  leaderName: { type: String, required: true },
  leaderMobile: { type: String, required: true },
  leaderWhatsapp: { type: String, required: true },
  leaderEmail: { type: String, required: true },
  leaderRollNo: { type: String, required: true },
  event: { value: String, label: String, category: String },
  teamSize: { type: Number, required: true },
  teamMembers: [{ name: String, email: String }],
  institution: { type: String, required: true },
  studentType: { type: String, enum: ['college', 'school'], required: true },
  course: { type: String },
  branch: { type: String },
  year: { type: Number },
  class: { type: Number },
  idProof: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Registration', registrationSchema);