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

// const getAnalytics = async (req, res) => {
//   try {
//     const total = await EventTeam.countDocuments();
//     const eventWise = await EventTeam.aggregate([
//       { $group: { _id: '$event', count: { $sum: 1 }, details: { $push: '$$ROOT' } } }
//     ]);
//     res.json({ total, eventWise });
//   } catch (err) {
//     res.status(500).json({ msg: err.message });
//   }
// };

const exportExcel = async (req, res) => {
  try {
    // Only fetch teams that have NOT been exported yet
    const teams = await EventTeam.find({ exported: false });

    if (teams.length === 0) {
      return res.status(404).json({ msg: 'No new teams to export' });
    }

    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'CROSSROADS 2026 Admin';
    workbook.created = new Date();
    workbook.modified = new Date();

    // ── Overall Sheet ──
    const overallSheet = workbook.addWorksheet('Overall');
    
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

    overallSheet.addRow(headers);
    overallSheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
    overallSheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4F46E5' } };
    overallSheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };

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
      const eventDisplay = eventDisplayNames[team.event] || team.event.toUpperCase().replace(/-/g, ' ');

      overallSheet.addRow([
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

    overallSheet.columns.forEach(col => { col.width = 22; });

    // ── Separate sheet per event ──
    const uniqueEvents = [...new Set(teams.map(t => t.event))];

    for (const eventValue of uniqueEvents) {
      const eventTeams = teams.filter(t => t.event === eventValue);
      if (eventTeams.length === 0) continue;

      // Clean sheet name (max 31 chars, no invalid chars)
      let sheetName = (eventDisplayNames[eventValue] || eventValue.toUpperCase().replace(/-/g, ' '))
        .substring(0, 28);

      const eventSheet = workbook.addWorksheet(sheetName);

      eventSheet.addRow(headers);
      eventSheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
      eventSheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF667EEA' } };
      eventSheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };

      eventTeams.forEach(team => {
        const eventDisplay = eventDisplayNames[team.event] || team.event.toUpperCase().replace(/-/g, ' ');

        eventSheet.addRow([
          team.teamId,
          team.teamName,
          team.leader.name,
          eventDisplay,
          team.teamSize,
          team.college,
          team.leader.email,
          team.leader.mobile
        ]);
      });

      eventSheet.columns.forEach(col => { col.width = 22; });
    }

    // Mark all exported records
    const ids = teams.map(t => t._id);
    await EventTeam.updateMany(
      { _id: { $in: ids } },
      { $set: { exported: true } }
    );

    // Send file
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename=crossroads-registrations-${new Date().toISOString().split('T')[0]}.xlsx`
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (err) {
    console.error('Excel export error:', err);
    res.status(500).json({ msg: 'Failed to generate Excel file', error: err.message });
  }
};
// controllers/adminController.js

const getAnalytics = async (req, res) => {
  try {
    const total = await EventTeam.countDocuments();

    // Today's registrations (midnight to midnight in UTC — adjust if you want IST exactly)
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0); // midnight today UTC

    const todayEnd = new Date(todayStart);
    todayEnd.setDate(todayEnd.getDate() + 1); // midnight tomorrow

    const todayCount = await EventTeam.countDocuments({
      appliedAt: { $gte: todayStart, $lt: todayEnd }
    });

    const eventWise = await EventTeam.aggregate([
      { $group: { _id: '$event', count: { $sum: 1 }, details: { $push: '$$ROOT' } } }
    ]);

    res.json({
      total,
      today: todayCount,
      eventWise
    });

  } catch (err) {
    console.error('Analytics error:', err);
    res.status(500).json({ msg: 'Server error fetching analytics' });
  }
};

module.exports = { login, getAnalytics, exportExcel };