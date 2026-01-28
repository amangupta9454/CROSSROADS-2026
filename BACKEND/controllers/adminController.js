const Registration = require('../models/Registration');
const jwt = require('jsonwebtoken');
const ExcelJS = require('exceljs');

const login = (req, res) => {
  const { username, password } = req.body;
  // ← You should change these in production
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ msg: 'Invalid credentials' });
  }
};

const getAnalytics = async (req, res) => {
  try {
    const total = await Registration.countDocuments();
    const eventWise = await Registration.aggregate([
      {
        $group: {
          _id: '$event.value',
          count: { $sum: 1 },
          details: { $push: '$$ROOT' }
        }
      }
    ]);
    res.json({ total, eventWise });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const exportExcel = async (req, res) => {
  try {
    const registrations = await Registration.find({ exported: false });
    if (registrations.length === 0) return res.status(404).json({ msg: 'No new data to export' });

    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'CROSSROADS 2026 Admin';

    // Overall Sheet
    const overallSheet = workbook.addWorksheet('Overall');
    const headers = [
      'Unique ID', 'Team Name', 'Leader Name', 'Leader Mobile', 'Leader WhatsApp', 'Leader Email',
      'Leader Roll No', 'Event', 'Category', 'Team Size', 'Team Members (JSON)', 'Institution',
      'Student Type', 'Course', 'Branch', 'Year', 'Class', 'ID Proof', 'Created At'
    ];
    overallSheet.addRow(headers);
    overallSheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
    overallSheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4F46E5' } };
    overallSheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };

    registrations.forEach(reg => {
      overallSheet.addRow([
        reg.uniqueId, reg.teamName, reg.leaderName, reg.leaderMobile, reg.leaderWhatsapp, reg.leaderEmail,
        reg.leaderRollNo, reg.event.label, reg.event.category, reg.teamSize, JSON.stringify(reg.teamMembers),
        reg.institution, reg.studentType, reg.course, reg.branch, reg.year, reg.class, reg.idProof, reg.createdAt
      ]);
    });
    overallSheet.columns.forEach(col => { col.width = 20; });

    // Event-wise sheets
    const events = [...new Set(registrations.map(r => r.event.value))];
    for (const event of events) {
      const eventRegs = registrations.filter(r => r.event.value === event);
      const sheetName = event.charAt(0).toUpperCase() + event.slice(1).replace(/-/g, ' ');
      const sheet = workbook.addWorksheet(sheetName);
      sheet.addRow(headers);
      sheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
      sheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF667EEA' } };
      sheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };

      eventRegs.forEach(reg => {
        sheet.addRow([
          reg.uniqueId, reg.teamName, reg.leaderName, reg.leaderMobile, reg.leaderWhatsapp, reg.leaderEmail,
          reg.leaderRollNo, reg.event.label, reg.event.category, reg.teamSize, JSON.stringify(reg.teamMembers),
          reg.institution, reg.studentType, reg.course, reg.branch, reg.year, reg.class, reg.idProof, reg.createdAt
        ]);
      });
      sheet.columns.forEach(col => { col.width = 20; });
    }

    // Mark as exported
    await Registration.updateMany(
      { _id: { $in: registrations.map(r => r._id) } },
      { exported: true }
    );

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=crossroads-registrations.xlsx');

    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: err.message });
  }
};

module.exports = { login, getAnalytics, exportExcel };