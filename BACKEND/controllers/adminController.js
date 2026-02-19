// controllers/adminController.js
const EventTeam = require('../models/EventTeam');
const jwt = require('jsonwebtoken');

const login = (req, res) => {
  const { username, password } = req.body;

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  }

  res.status(401).json({ msg: 'Invalid credentials' });
};

const getAnalytics = async (req, res) => {
  try {
    const total = await EventTeam.countDocuments();

    const eventWise = await EventTeam.aggregate([
      {
        $group: {
          _id: '$event',
          count: { $sum: 1 },
          details: { $push: '$$ROOT' }
        }
      }
    ]);

    res.json({ total, eventWise });
  } catch (err) {
    console.error('Analytics error:', err);
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};

const exportExcel = async (req, res) => {
  try {
    const registrations = await EventTeam.find(); // or .find({ exported: false }) if you add the field later

    if (registrations.length === 0) {
      return res.status(404).json({ msg: 'No registrations found' });
    }

    const ExcelJS = require('exceljs');
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'CROSSROADS 2026 Admin';

    // ── Main sheet ──
    const mainSheet = workbook.addWorksheet('All Teams');

    const headers = [
      'Team ID',
      'Team Name',
      'Leader Name',
      'Leader Email',
      'Leader Mobile',
      'Leader WhatsApp',
      'College',
      'Branch',
      'Year',
      'Event',
      'Team Size',
      'Members (JSON)',
      'Applied At',
    ];

    mainSheet.addRow(headers);
    mainSheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
    mainSheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4F46E5' } };
    mainSheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };

    registrations.forEach(team => {
      mainSheet.addRow([
        team.teamId,
        team.teamName,
        team.leader.name,
        team.leader.email,
        team.leader.mobile,
        team.leader.whatsapp,
        team.college,
        team.branch,
        team.year,
        team.event,
        team.teamSize,
        JSON.stringify(team.members || []),
        team.appliedAt,
      ]);
    });

    mainSheet.columns.forEach(col => { col.width = 20; });

    // ── Per-event sheets ──
    const events = [...new Set(registrations.map(t => t.event))];

    for (const ev of events) {
      if (!ev) continue;
      const eventTeams = registrations.filter(t => t.event === ev);
      if (eventTeams.length === 0) continue;

      let sheetName = ev
        .replace(/-/g, ' ')
        .split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
        .substring(0, 28);

      const sheet = workbook.addWorksheet(sheetName || 'Unknown');

      sheet.addRow(headers);
      sheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
      sheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF667EEA' } };
      sheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };

      eventTeams.forEach(team => {
        sheet.addRow([
          team.teamId,
          team.teamName,
          team.leader.name,
          team.leader.email,
          team.leader.mobile,
          team.leader.whatsapp,
          team.college,
          team.branch,
          team.year,
          team.event,
          team.teamSize,
          JSON.stringify(team.members || []),
          team.appliedAt,
        ]);
      });

      sheet.columns.forEach(col => { col.width = 20; });
    }

    // Optional: mark as exported (add field to schema if needed)
    // await EventTeam.updateMany({ _id: { $in: registrations.map(r => r._id) } }, { exported: true });

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename=crossroads-teams-${new Date().toISOString().split('T')[0]}.xlsx`);

    await workbook.xlsx.write(res);
    res.end();

  } catch (err) {
    console.error('Excel export failed:', err);
    res.status(500).json({ msg: 'Failed to generate Excel', error: err.message });
  }
};

module.exports = { login, getAnalytics, exportExcel };