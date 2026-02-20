// controllers/adminController.js
const EventTeam = require('../models/EventTeam');
const jwt = require('jsonwebtoken');
const ExcelJS = require('exceljs');

const login = (req, res) => {
  const { username, password } = req.body;
  
  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  }
  res.status(401).json({ msg: 'Invalid credentials' });
};

const getAnalytics = async (req, res) => {
  try {
    const total = await EventTeam.countDocuments();
    const eventWise = await EventTeam.aggregate([
      { $group: { _id: '$event', count: { $sum: 1 }, details: { $push: '$$ROOT' } } }
    ]);
    res.json({ total, eventWise });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const exportExcel = async (req, res) => {
  try {
    // Only fetch teams that have NOT been exported yet
    const teams = await EventTeam.find({ exported: false });

    if (teams.length === 0) {
      return res.status(404).json({ msg: 'No new teams to export' });
    }

    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'CROSSROADS 2026 Admin';

    const sheet = workbook.addWorksheet('Registrations');

    // Exact column headers you requested
    const headers = [
      'STUDENT ID',
      'TEAM NAME',
      'TEAM LEADER NAME',
      'EVENT NAME',
      'TEAM SIZE',
      'COLLEGE NAME',
      'TEAM LEADER EMAIL ID',
      'TEAM LEADER MOBILE NUMBER'
    ];

    sheet.addRow(headers);
    sheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
    sheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4F46E5' } };
    sheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };

    // Event name mapping
    const eventDisplayNames = {
      'code-puzzle':         'CODE PUZZLE',
      'project-exhibition':  'PROJECT EXHIBITION',
      'robo-race':           'ROBO RACE',
      'technical-poster':    'TECHNICAL POSTER',
      'rangoli-competition': 'RANGOLI COMPETITION',
      'food-without-fire':   'FOOD WITHOUT FIRE',
      'dance-competition':   'DANCE COMPETITION',
      'rock-band':           'ROCK BAND',
      'short-film-maker':    'SHORT FILM MAKER',
      'treasure-hunt':       'TREASURE HUNT',
      'cultural-events':     'CULTURAL EVENT'
    };

    teams.forEach(team => {
      const eventDisplay = eventDisplayNames[team.event] || team.event.toUpperCase();

      sheet.addRow([
        team.teamId,                    // STUDENT ID
        team.teamName,                  // TEAM NAME
        team.leader.name,               // TEAM LEADER NAME
        eventDisplay,                   // EVENT NAME
        team.teamSize,                  // TEAM SIZE
        team.college,                   // COLLEGE NAME
        team.leader.email,              // TEAM LEADER EMAIL ID
        team.leader.mobile              // TEAM LEADER MOBILE NUMBER
      ]);
    });

    // Auto-size columns
    sheet.columns.forEach(column => {
      let dataMax = 0;
      column.eachCell({ includeEmpty: true }, cell => {
        const columnLength = cell.value ? cell.value.toString().length : 10;
        if (columnLength > dataMax) dataMax = columnLength;
      });
      column.width = Math.min(Math.max(dataMax + 2, 12), 40);
    });

    // Mark all these records as exported
    const ids = teams.map(t => t._id);
    await EventTeam.updateMany(
      { _id: { $in: ids } },
      { $set: { exported: true } }
    );

    // Send file
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename=crossroads-registrations-${new Date().toISOString().split('T')[0]}.xlsx`);

    await workbook.xlsx.write(res);
    res.end();

  } catch (err) {
    console.error('Excel export error:', err);
    res.status(500).json({ msg: 'Failed to generate Excel file' });
  }
};

module.exports = { login, getAnalytics, exportExcel };