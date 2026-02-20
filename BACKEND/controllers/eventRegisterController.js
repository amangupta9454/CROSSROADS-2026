// const EventTeam = require('../models/EventTeam');
// const Counter = require('../models/Counter');
// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   }
// });

// const registerEventTeam = async (req, res) => {
//   try {
//     const {
//       teamName,
//       leaderName,
//       leaderEmail,
//       leaderMobile,
//       leaderWhatsapp,
//       college,
//       branch,
//       year,
//       event,
//       teamSize,
//       members = []
//     } = req.body;

//     // Basic server-side validation
//     if (!teamName || !leaderName || !leaderEmail || !leaderMobile || !leaderWhatsapp) {
//       return res.status(400).json({ message: 'Leader details are required' });
//     }

//     if (teamSize < 1 || teamSize > 4) {
//       return res.status(400).json({ message: 'Team size must be between 1 and 4' });
//     }

//     if (teamSize > 1 && (!members || members.length !== teamSize - 1)) {
//       return res.status(400).json({ message: `Exactly ${teamSize - 1} team member(s) required` });
//     }

//     // Generate team ID
//     const currentYear = new Date().getFullYear();
//     const counterId = `event_${currentYear}`;

//     const counter = await Counter.findByIdAndUpdate(
//       counterId,
//       { $inc: { seq: 1 } },
//       { new: true, upsert: true }
//     );

//     const serial = String(counter.seq).padStart(3, '0');
//     const teamId = `HIET/CR/${currentYear}/${serial}`;

//     // Save team
//     const newTeam = await EventTeam.create({
//       teamId,
//       teamName,
//       leader: {
//         name: leaderName,
//         email: leaderEmail,
//         mobile: leaderMobile,
//         whatsapp: leaderWhatsapp
//       },
//       college,
//       branch,
//       year,
//       event,
//       teamSize: parseInt(teamSize),
//       members,
//       appliedAt: new Date()
//     });

//     // Prepare member list for email
//     const memberListHtml = members.length > 0
//       ? members.map((m, i) => `
//         <tr>
//           <td style="padding:10px; border-bottom:1px solid #e5e7eb;">Member ${i + 1}</td>
//           <td style="padding:10px; border-bottom:1px solid #e5e7eb;">${m.name}</td>
//           <td style="padding:10px; border-bottom:1px solid #e5e7eb;">${m.email}</td>
//         </tr>
//       `).join('')
//       : '<tr><td colspan="3" style="padding:10px; text-align:center;">Solo Participant</td></tr>';

//     // Send confirmation email
//     const mailOptions = {
//       from: `"CROSSROADS 2026 Events" <${process.env.EMAIL_USER}>`,
//       to: leaderEmail,
//       subject: `Team Registration Confirmed – ${teamName} (${teamId})`,
//       html: `
//         <div style="font-family:'Segoe UI',sans-serif; max-width:720px; margin:auto; background:#0b1120; color:#e2e8f0; padding:0; border-radius:20px; overflow:hidden; box-shadow:0 25px 60px rgba(0,0,0,0.5);">
  
//   <!-- HEADER -->
//   <div style="background:linear-gradient(135deg,#0ea5e9,#6366f1,#9333ea); padding:55px 30px; text-align:center; color:white; position:relative;">
    
//     <h1 style="margin:0; font-size:42px; letter-spacing:1px;">CROSSROADS 2026</h1>
//     <p style="margin:12px 0 0; font-size:18px; opacity:0.95;">✨ Registration Successfully Confirmed ✨</p>

//     <div style="margin-top:25px; background:rgba(255,255,255,0.15); backdrop-filter:blur(10px); display:inline-block; padding:12px 28px; border-radius:999px; font-weight:600; font-size:16px; border:1px solid rgba(255,255,255,0.25);">
//       🎟 Team ID: <strong>${teamId}</strong>
//     </div>
//   </div>

//   <!-- BODY -->
//   <div style="padding:40px 35px; background:#111827;">
    
//     <p style="font-size:18px; line-height:1.7;">Hello <strong>${leaderName}</strong>,</p>
//     <p style="font-size:16px; line-height:1.8; color:#cbd5e1;">
//       Your team <strong style="color:#38bdf8;">${teamName}</strong> has been officially registered for 
//       <strong style="color:#f59e0b;">${event.replace(/-/g, ' ').toUpperCase()}</strong>.
//     </p>

//     <!-- REGISTRATION SUMMARY -->
//     <div style="margin:35px 0; padding:28px; background:rgba(255,255,255,0.03); border-radius:16px; border:1px solid rgba(255,255,255,0.08);">
//       <h3 style="margin-top:0; font-size:22px; color:#0ea5e9;">📋 Registration Summary</h3>

//       <table style="width:100%; font-size:15.5px; border-collapse:collapse;">
//         <tr><td style="padding:12px 0; font-weight:600; color:#94a3b8;">Team Name</td><td>${teamName}</td></tr>
//         <tr><td style="padding:12px 0; font-weight:600; color:#94a3b8;">Team Size</td><td><span style="background:#1f2937; padding:6px 14px; border-radius:20px;">${teamSize}</span></td></tr>
//         <tr><td style="padding:12px 0; font-weight:600; color:#94a3b8;">Leader</td><td>${leaderName} (${leaderEmail})</td></tr>
//         <tr><td style="padding:12px 0; font-weight:600; color:#94a3b8;">College</td><td>${college}</td></tr>
//         <tr><td style="padding:12px 0; font-weight:600; color:#94a3b8;">Branch & Year</td><td>${branch} • ${year}</td></tr>
//         <tr><td style="padding:12px 0; font-weight:600; color:#94a3b8;">Event</td><td><strong style="color:#f59e0b;">${event.replace(/-/g, ' ').toUpperCase()}</strong></td></tr>
//       </table>
//     </div>

//     <!-- TEAM MEMBERS -->
//     <div style="margin:35px 0; padding:28px; background:rgba(255,255,255,0.03); border-radius:16px; border:1px solid rgba(255,255,255,0.08);">
//       <h3 style="margin-top:0; font-size:20px; color:#fb923c;">👥 Team Members</h3>

//       <table style="width:100%; font-size:15px; border-collapse:collapse;">
//         <tr style="background:#1f2937;">
//           <th style="padding:14px; text-align:left;">Role</th>
//           <th style="padding:14px; text-align:left;">Name</th>
//           <th style="padding:14px; text-align:left;">Email</th>
//         </tr>

//         <tr>
//           <td style="padding:12px; border-bottom:1px solid #1f2937;">Leader</td>
//           <td style="padding:12px; border-bottom:1px solid #1f2937;">${leaderName}</td>
//           <td style="padding:12px; border-bottom:1px solid #1f2937;">${leaderEmail}</td>
//         </tr>

//         ${memberListHtml}
//       </table>
//     </div>

//     <!-- WHATSAPP CTA -->
//     <div style="margin:50px 0; padding:45px 30px; background:linear-gradient(135deg,#065f46,#047857,#059669); border-radius:24px; text-align:center; box-shadow:0 15px 40px rgba(5,150,105,0.4);">
//       <h3 style="margin:0 0 20px; font-size:22px; color:white;">📱 Join the Official WhatsApp Group</h3>

//       <a href="https://chat.whatsapp.com/KTyS5UeLX1q3wVX7omGqcg"
//          style="display:inline-block; padding:18px 48px; background:white; color:#047857; text-decoration:none; border-radius:999px; font-size:18px; font-weight:bold; box-shadow:0 8px 20px rgba(0,0,0,0.3);">
//         Join Now →
//       </a>
//     </div>

//     <!-- NEXT STEPS -->
//     <div style="margin:35px 0; padding:24px; background:#0f172a; border-left:5px solid #38bdf8; border-radius:10px;">
//       <h3 style="margin-top:0; color:#38bdf8;">🚀 Next Steps</h3>
//       <ul style="padding-left:22px; line-height:1.9; color:#cbd5e1;">
//         <li>Keep your <strong>Team ID (${teamId})</strong> safe for verification</li>
//         <li>Monitor your email for further updates & schedules</li>
//         <li>Contact <strong>crossroads20255@gmail.com</strong> for assistance</li>
//       </ul>
//     </div>

//     <!-- WEBSITE BUTTON -->
//     <div style="text-align:center; margin:45px 0;">
//       <a href="https://hiet-crossroads.online/"
//          style="display:inline-block; background:linear-gradient(135deg,#0ea5e9,#6366f1); color:white; padding:18px 45px; border-radius:999px; text-decoration:none; font-weight:600; font-size:17px; box-shadow:0 12px 30px rgba(14,165,233,0.4);">
//         🌐 Visit Official Website
//       </a>
//     </div>

//     <hr style="border:none; border-top:1px solid #1f2937; margin:45px 0;">

//     <!-- FOOTER -->
//     <div style="text-align:center; font-size:14px; color:#94a3b8;">
//       <p style="margin:0;">Warm Regards,</p>
//       <p style="margin:6px 0 0; font-size:16px; font-weight:600; color:#38bdf8;">CROSSROADS 2026 Team</p>
//       <p style="margin:8px 0;">
//         📧 <a href="mailto:crossroads20255@gmail.com" style="color:#60a5fa; text-decoration:none;">crossroads20255@gmail.com</a>
//       </p>
//       <p style="margin-top:15px; font-size:12px; opacity:0.6;">
//         © 2026 CROSSROADS | Hi-Tech Institute of Engineering & Technology
//       </p>
//     </div>

//   </div>
// </div>

//       `
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(201).json({
//       message: 'Team registered successfully',
//       teamId
//     });

//   } catch (err) {
//     console.error('[Event Registration Error]', err);
//     res.status(500).json({ message: 'Server error during registration' });
//   }
// };

// module.exports = { registerEventTeam };
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

    // Basic leader details validation
    if (!teamName || !leaderName || !leaderEmail || !leaderMobile || !leaderWhatsapp) {
      return res.status(400).json({ message: 'Leader details are required' });
    }

    const teamSizeNum = parseInt(teamSize, 10);

    // ── Event-specific team size rules ──
    let minSize = 1;
    let maxSize = 4;
    let eventDisplay = event.replace(/-/g, ' ').toUpperCase();

    if (event === 'code-puzzle') {
      minSize = 1;
      maxSize = 1;
    } else if (event === 'treasure-hunt') {
      minSize = 5;
      maxSize = 8;
    }
    // other events keep default 1–4

    if (teamSizeNum < minSize || teamSizeNum > maxSize) {
      return res.status(400).json({
        message: `For "${eventDisplay}", team size must be between ${minSize} and ${maxSize} (including leader)`
      });
    }

    // Check number of additional members matches team size
    if (teamSizeNum > 1 && (!members || members.length !== teamSizeNum - 1)) {
      return res.status(400).json({
        message: `Exactly ${teamSizeNum - 1} additional team member(s) required`
      });
    }

    // Generate unique team ID
    const currentYear = new Date().getFullYear();
    const counterId = `event_${currentYear}`;

    const counter = await Counter.findByIdAndUpdate(
      counterId,
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    const serial = String(counter.seq).padStart(3, '0');
    const teamId = `HIET/CR/${currentYear}/${serial}`;

    // Save the team
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
      teamSize: teamSizeNum,
      members,
      appliedAt: new Date()
    });

    // Prepare member list HTML for email
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
        <div style="font-family:'Segoe UI',sans-serif; max-width:720px; margin:auto; background:#0b1120; color:#e2e8f0; padding:0; border-radius:20px; overflow:hidden; box-shadow:0 25px 60px rgba(0,0,0,0.5);">
  
  <!-- HEADER -->
  <div style="background:linear-gradient(135deg,#0ea5e9,#6366f1,#9333ea); padding:55px 30px; text-align:center; color:white; position:relative;">
    
    <h1 style="margin:0; font-size:42px; letter-spacing:1px;">CROSSROADS 2026</h1>
    <p style="margin:12px 0 0; font-size:18px; opacity:0.95;">✨ Registration Successfully Confirmed ✨</p>

    <div style="margin-top:25px; background:rgba(255,255,255,0.15); backdrop-filter:blur(10px); display:inline-block; padding:12px 28px; border-radius:999px; font-weight:600; font-size:16px; border:1px solid rgba(255,255,255,0.25);">
      🎟 Team ID: <strong>${teamId}</strong>
    </div>
  </div>

  <!-- BODY -->
  <div style="padding:40px 35px; background:#111827;">
    
    <p style="font-size:18px; line-height:1.7;">Hello <strong>${leaderName}</strong>,</p>
    <p style="font-size:16px; line-height:1.8; color:#cbd5e1;">
      Your team <strong style="color:#38bdf8;">${teamName}</strong> has been officially registered for 
      <strong style="color:#f59e0b;">${eventDisplay}</strong>.
    </p>

    <!-- REGISTRATION SUMMARY -->
    <div style="margin:35px 0; padding:28px; background:rgba(255,255,255,0.03); border-radius:16px; border:1px solid rgba(255,255,255,0.08);">
      <h3 style="margin-top:0; font-size:22px; color:#0ea5e9;">📋 Registration Summary</h3>

      <table style="width:100%; font-size:15.5px; border-collapse:collapse;">
        <tr><td style="padding:12px 0; font-weight:600; color:#94a3b8;">Team Name</td><td>${teamName}</td></tr>
        <tr><td style="padding:12px 0; font-weight:600; color:#94a3b8;">Team Size</td><td><span style="background:#1f2937; padding:6px 14px; border-radius:20px;">${teamSizeNum}</span></td></tr>
        <tr><td style="padding:12px 0; font-weight:600; color:#94a3b8;">Leader</td><td>${leaderName} (${leaderEmail})</td></tr>
        <tr><td style="padding:12px 0; font-weight:600; color:#94a3b8;">College</td><td>${college}</td></tr>
        <tr><td style="padding:12px 0; font-weight:600; color:#94a3b8;">Branch & Year</td><td>${branch} • ${year}</td></tr>
        <tr><td style="padding:12px 0; font-weight:600; color:#94a3b8;">Event</td><td><strong style="color:#f59e0b;">${eventDisplay}</strong></td></tr>
      </table>
    </div>

    <!-- TEAM MEMBERS -->
    <div style="margin:35px 0; padding:28px; background:rgba(255,255,255,0.03); border-radius:16px; border:1px solid rgba(255,255,255,0.08);">
      <h3 style="margin-top:0; font-size:20px; color:#fb923c;">👥 Team Members</h3>

      <table style="width:100%; font-size:15px; border-collapse:collapse;">
        <tr style="background:#1f2937;">
          <th style="padding:14px; text-align:left;">Role</th>
          <th style="padding:14px; text-align:left;">Name</th>
          <th style="padding:14px; text-align:left;">Email</th>
        </tr>

        <tr>
          <td style="padding:12px; border-bottom:1px solid #1f2937;">Leader</td>
          <td style="padding:12px; border-bottom:1px solid #1f2937;">${leaderName}</td>
          <td style="padding:12px; border-bottom:1px solid #1f2937;">${leaderEmail}</td>
        </tr>

        ${memberListHtml}
      </table>
    </div>

    <!-- WHATSAPP CTA -->
    <div style="margin:50px 0; padding:45px 30px; background:linear-gradient(135deg,#065f46,#047857,#059669); border-radius:24px; text-align:center; box-shadow:0 15px 40px rgba(5,150,105,0.4);">
      <h3 style="margin:0 0 20px; font-size:22px; color:white;">📱 Join the Official WhatsApp Group</h3>

      <a href="https://chat.whatsapp.com/KTyS5UeLX1q3wVX7omGqcg"
         style="display:inline-block; padding:18px 48px; background:white; color:#047857; text-decoration:none; border-radius:999px; font-size:18px; font-weight:bold; box-shadow:0 8px 20px rgba(0,0,0,0.3);">
        Join Now →
      </a>
    </div>

    <!-- NEXT STEPS -->
    <div style="margin:35px 0; padding:24px; background:#0f172a; border-left:5px solid #38bdf8; border-radius:10px;">
      <h3 style="margin-top:0; color:#38bdf8;">🚀 Next Steps</h3>
      <ul style="padding-left:22px; line-height:1.9; color:#cbd5e1;">
        <li>Keep your <strong>Team ID (${teamId})</strong> safe for verification</li>
        <li>Monitor your email for further updates & schedules</li>
        <li>Contact <strong>crossroads20255@gmail.com</strong> for assistance</li>
      </ul>
    </div>

    <!-- WEBSITE BUTTON -->
    <div style="text-align:center; margin:45px 0;">
      <a href="https://hiet-crossroads.online/"
         style="display:inline-block; background:linear-gradient(135deg,#0ea5e9,#6366f1); color:white; padding:18px 45px; border-radius:999px; text-decoration:none; font-weight:600; font-size:17px; box-shadow:0 12px 30px rgba(14,165,233,0.4);">
        🌐 Visit Official Website
      </a>
    </div>

    <hr style="border:none; border-top:1px solid #1f2937; margin:45px 0;">

    <!-- FOOTER -->
    <div style="text-align:center; font-size:14px; color:#94a3b8;">
      <p style="margin:0;">Warm Regards,</p>
      <p style="margin:6px 0 0; font-size:16px; font-weight:600; color:#38bdf8;">CROSSROADS 2026 Team</p>
      <p style="margin:8px 0;">
        📧 <a href="mailto:crossroads20255@gmail.com" style="color:#60a5fa; text-decoration:none;">crossroads20255@gmail.com</a>
      </p>
      <p style="margin-top:15px; font-size:12px; opacity:0.6;">
        © 2026 CROSSROADS | Hi-Tech Institute of Engineering & Technology
      </p>
    </div>

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