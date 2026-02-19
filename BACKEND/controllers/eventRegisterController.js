const EventTeam = require('../models/EventTeam');
const Counter = require('../models/Counter');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const registerEventTeam = async (req, res) => {
  try {
    const {
      teamName,
      leaderName,
      leaderEmail,
      leaderMobile,
      leaderWhatsapp,
      college,
      branch,
      year,
      event,
      teamSize,
      members = []
    } = req.body;

    // Basic server-side validation
    if (!teamName || !leaderName || !leaderEmail || !leaderMobile || !leaderWhatsapp) {
      return res.status(400).json({ message: 'Leader details are required' });
    }

    if (teamSize < 1 || teamSize > 4) {
      return res.status(400).json({ message: 'Team size must be between 1 and 4' });
    }

    if (teamSize > 1 && (!members || members.length !== teamSize - 1)) {
      return res.status(400).json({ message: `Exactly ${teamSize - 1} team member(s) required` });
    }

    // Generate team ID
    const currentYear = new Date().getFullYear();
    const counterId = `event_${currentYear}`;

    const counter = await Counter.findByIdAndUpdate(
      counterId,
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    const serial = String(counter.seq).padStart(3, '0');
    const teamId = `HIET/CR/${currentYear}/${serial}`;

    // Save team
    const newTeam = await EventTeam.create({
      teamId,
      teamName,
      leader: {
        name: leaderName,
        email: leaderEmail,
        mobile: leaderMobile,
        whatsapp: leaderWhatsapp
      },
      college,
      branch,
      year,
      event,
      teamSize: parseInt(teamSize),
      members,
      appliedAt: new Date()
    });

    // Prepare member list for email
    const memberListHtml = members.length > 0
      ? members.map((m, i) => `
        <tr>
          <td style="padding:10px; border-bottom:1px solid #e5e7eb;">Member ${i + 1}</td>
          <td style="padding:10px; border-bottom:1px solid #e5e7eb;">${m.name}</td>
          <td style="padding:10px; border-bottom:1px solid #e5e7eb;">${m.email}</td>
        </tr>
      `).join('')
      : '<tr><td colspan="3" style="padding:10px; text-align:center;">Solo Participant</td></tr>';

    // Send confirmation email
    const mailOptions = {
      from: `"CROSSROADS 2026 Events" <${process.env.EMAIL_USER}>`,
      to: leaderEmail,
      subject: `Team Registration Confirmed – ${teamName} (${teamId})`,
      html: `
        <div style="font-family:'Segoe UI',sans-serif; max-width:680px; margin:auto; background:#0f172a; color:#e2e8f0; padding:30px; border-radius:16px;">
          
          <div style="background:linear-gradient(135deg,#0ea5e9,#6366f1); padding:40px 30px; text-align:center; border-radius:16px 16px 0 0; color:white;">
            <h1 style="margin:0; font-size:36px;">CROSSROADS 2026</h1>
            <p style="margin:8px 0 0; font-size:18px; opacity:0.9;">Event Registration Confirmed!</p>
            <div style="margin-top:20px; background:rgba(255,255,255,0.2); display:inline-block; padding:10px 24px; border-radius:999px; font-weight:600;">
              Team ID: <strong>${teamId}</strong>
            </div>
          </div>

          <div style="padding:35px 30px; background:#1e293b; border-radius:0 0 16px 16px;">
            <p style="font-size:17px; line-height:1.7;">Dear <strong>${leaderName}</strong>,</p>
            <p style="font-size:16px; line-height:1.7;">
              Your team <strong>${teamName}</strong> has been successfully registered for the 
              <strong>${event.replace(/-/g, ' ').toUpperCase()}</strong> event!
            </p>

            <div style="margin:30px 0; padding:24px; background:#0f172a; border-radius:12px; border:1px solid #334155;">
              <h3 style="margin-top:0; color:#0ea5e9; font-size:22px;">Registration Summary</h3>
              
              <table style="width:100%; font-size:15.5px; border-collapse:collapse;">
                <tr><td style="padding:10px 0; font-weight:600; color:#94a3b8;">Team Name</td><td>${teamName}</td></tr>
                <tr><td style="padding:10px 0; font-weight:600; color:#94a3b8;">Team Size</td><td>${teamSize}</td></tr>
                <tr><td style="padding:10px 0; font-weight:600; color:#94a3b8;">Leader</td><td>${leaderName} (${leaderEmail})</td></tr>
                <tr><td style="padding:10px 0; font-weight:600; color:#94a3b8;">College</td><td>${college}</td></tr>
                <tr><td style="padding:10px 0; font-weight:600; color:#94a3b8;">Branch & Year</td><td>${branch} • ${year}</td></tr>
                <tr><td style="padding:10px 0; font-weight:600; color:#94a3b8;">Event</td><td>${event.replace(/-/g, ' ').toUpperCase()}</td></tr>
              </table>
            </div>

            <div style="margin:30px 0; padding:24px; background:#0f172a; border-radius:12px; border:1px solid #334155;">
              <h3 style="margin-top:0; color:#fb923c; font-size:20px;">Team Members</h3>
              <table style="width:100%; font-size:15px; border-collapse:collapse;">
                <tr style="background:#1e293b;">
                  <th style="padding:12px; text-align:left;">Role</th>
                  <th style="padding:12px; text-align:left;">Name</th>
                  <th style="padding:12px; text-align:left;">Email</th>
                </tr>
                <tr style="background:#1e293b;">
                  <td style="padding:10px; border-bottom:1px solid #334155;">Leader</td>
                  <td style="padding:10px; border-bottom:1px solid #334155;">${leaderName}</td>
                  <td style="padding:10px; border-bottom:1px solid #334155;">${leaderEmail}</td>
                </tr>
                ${memberListHtml}
              </table>
            </div>

            <div style="margin:30px 0; padding:20px; background:#1e293b; border-left:5px solid #0ea5e9; border-radius:8px;">
              <h3 style="margin-top:0; color:#0ea5e9;">Next Steps</h3>
              <ul style="padding-left:20px; line-height:1.8;">
                <li>Save your <strong>Team ID (${teamId})</strong> — it's your unique reference</li>
                <li>Check spam/junk if you don't see further updates</li>
                <li>Reach out to <strong>crossroads20255@gmail.com</strong> for any questions</li>
              </ul>
            </div>

            <div style="text-align:center; margin:40px 0;">
              <a href="https://hiet-crossroads.online/"
                 style="display:inline-block; background:linear-gradient(135deg,#0ea5e9,#6366f1); color:white; padding:16px 36px; border-radius:999px; text-decoration:none; font-weight:600; font-size:17px; box-shadow:0 10px 25px rgba(14,165,233,0.3);">
                Visit CROSSROADS 2026 Website
              </a>
            </div>

            <hr style="border:none; border-top:1px solid #334155; margin:40px 0;">

            <p style="text-align:center; color:#94a3b8; font-size:14px;">
              Warm Regards,<br>
              <strong style="color:#0ea5e9;">CROSSROADS 2026 Team</strong><br>
              <a href="mailto:crossroads20255@gmail.com" style="color:#60a5fa;">crossroads20255@gmail.com</a>
            </p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: 'Team registered successfully',
      teamId
    });

  } catch (err) {
    console.error('[Event Registration Error]', err);
    res.status(500).json({ message: 'Server error during registration' });
  }
};

module.exports = { registerEventTeam };