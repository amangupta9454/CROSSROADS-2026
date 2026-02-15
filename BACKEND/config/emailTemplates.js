
const getRegistrationEmail = (data, uniqueId, isLeader = true, name) => {
  const greeting = isLeader ? `Dear ${data.leaderName}` : `Dear ${name}`;
  const thanks = isLeader
    ? 'Thank you for registering your team for <b>CROSSROADS 2026</b> 🎉'
    : 'Thank you for being part of the team for <b>CROSSROADS 2026</b> 🎉';

  const whatsappLink = getWhatsappLink(data.event.category);

  const teamMembersList = data.teamMembers.length
    ? data.teamMembers
        .map(
          m => `
          <tr>
            <td style="padding:8px;border:1px solid #ddd;">${m.name}</td>
            <td style="padding:8px;border:1px solid #ddd;">${m.email}</td>
          </tr>`
        )
        .join('')
    : `<tr><td colspan="2" style="padding:10px;text-align:center;">No additional members</td></tr>`;

  return `
<html>
<body style="margin:0;padding:0;background:#0f0c29;font-family:'Segoe UI', system-ui, -apple-system, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table width="620" style="background: rgba(255,255,255,0.06); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border-radius: 28px; border: 1px solid rgba(255,255,255,0.1); overflow:hidden; box-shadow: 0 25px 80px rgba(0,0,0,0.55);">

          <!-- HEADER -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #6B8DD6 100%); padding: 55px 30px; text-align:center;">
              <h1 style="margin:0; font-size:48px; font-weight:900; color:#ffffff; letter-spacing:4px;">
                CROSSROADS <span style="color:#ffd700;">2026</span>
              </h1>
              <p style="margin:16px 0 0; font-size:22px; color:#f0f4ff;">
                Registration Confirmed 🚀
              </p>
            </td>
          </tr>

          <!-- MAIN CONTENT -->
          <tr>
            <td style="padding:45px 40px; color:#e0e7ff;">

              <h2 style="margin:0 0 20px; color:#a5b4fc; font-size:28px;">${greeting},</h2>

              <p style="font-size:17px; line-height:1.7; margin:0 0 30px;">${thanks}</p>

              <!-- UNIQUE ID -->
              <div style="background: linear-gradient(135deg, #1e293b, #111827); border: 2px solid #6366f1; border-radius:16px; padding:24px; text-align:center; margin:30px 0;">
                <p style="margin:0 0 12px; font-size:18px; color:#c7d2fe;"><b>🎟 Your Unique Team ID</b></p>
                <p style="margin:0; font-size:32px; font-weight:900; color:#a5b4fc; letter-spacing:3px; font-family:monospace;">${uniqueId}</p>
              </div>

              <!-- TEAM DETAILS -->
              <table width="100%" style="border-collapse:collapse; font-size:15px; margin:30px 0;">
                <tr style="background:#1e293b;">
                  <td style="padding:14px;"><b>Team Name</b></td>
                  <td style="padding:14px;">${data.teamName}</td>
                </tr>
                <tr>
                  <td style="padding:14px;"><b>Team Leader</b></td>
                  <td style="padding:14px;">${data.leaderName}</td>
                </tr>
                <tr style="background:#1e293b;">
                  <td style="padding:14px;"><b>Institution</b></td>
                  <td style="padding:14px;">${data.institution}</td>
                </tr>
                <tr>
                  <td style="padding:14px;"><b>${data.studentType === 'college' ? 'Branch' : 'Class'}</b></td>
                  <td style="padding:14px;">${data.studentType === 'college' ? data.branch : data.class}</td>
                </tr>
                ${
                  data.studentType === 'college'
                    ? `<tr style="background:#1e293b;"><td style="padding:14px;"><b>Year</b></td><td style="padding:14px;">${data.year}</td></tr>`
                    : ''
                }
                <tr>
                  <td style="padding:14px;"><b>Roll No / Student ID</b></td>
                  <td style="padding:14px;">${data.leaderRollNo}</td>
                </tr>
                <tr style="background:#1e293b;">
                  <td style="padding:14px;"><b>Team Size</b></td>
                  <td style="padding:14px;">${data.teamSize}</td>
                </tr>
              </table>

              <!-- TEAM MEMBERS -->
              <h3 style="margin:45px 0 20px; color:#c084fc;">👥 Team Members</h3>
              <table width="100%" style="border-collapse:collapse; font-size:15px; background:#1e293b;">
                <tr style="background:#4f46e5; color:white;">
                  <th style="padding:14px; text-align:left;">Name</th>
                  <th style="padding:14px; text-align:left;">Email</th>
                </tr>
                ${teamMembersList}
              </table>

              <!-- WHATSAPP -->
              <div style="margin:45px 0; padding:35px 30px; background: linear-gradient(135deg, #065f46, #047857); border-radius:20px; text-align:center;">
                <h3 style="margin:0 0 20px; color:white;">📱 Join the Official WhatsApp Group</h3>
                <a href="${whatsappLink}"
                   style="display:inline-block; padding:16px 40px; background:#25D366; color:white; text-decoration:none; border-radius:50px; font-size:18px; font-weight:bold;">
                  Join Now →
                </a>
              </div>

              <!-- EVENT RULES -->
              <div style="margin:50px 0; padding:35px 30px; background: linear-gradient(135deg, #1e1b4b, #312e81); border-radius:20px;">
                <h3 style="margin:0 0 20px; color:#ffffff; font-size:24px; text-align:center;">
                  📜 Event Rules & Instructions
                </h3>

                <ul style="margin:0; padding-left:20px; font-size:16px; line-height:1.9; color:#e0e7ff;">
                  <li>Please bring your <b>College ID Card</b> for verification.</li>
                  <li>Please arrive on campus <b>at least 1 hour before</b> the event.</li>
                  <li>Do not engage in any form of <b>physical abuse or misconduct</b>.</li>
                  <li>Please bring all necessary items required for your participation.</li>
                </ul>

                <div style="margin-top:25px; padding:18px; background:#111827; border-radius:12px; color:#cbd5e1; font-size:15px;">
                  <b>Note:</b> A separate email will be sent 2 days before the event containing confirmation, detailed rules, regulations, timings, and event provisions.
                </div>
              </div>

            </td>
          </tr>

          <!-- FOOTER (VERTICAL & ATTRACTIVE) -->
          <tr>
            <td style="background:#0f172a; padding:40px; text-align:center; color:#94a3b8;">

              <h4 style="margin:0 0 20px; font-size:18px; color:#cbd5e1;">Community Guidelines</h4>

              <div style="text-align:left; max-width:320px; margin:0 auto; font-size:15px; line-height:1.8;">
                <p style="margin:8px 0;">✔ Be respectful to all participants</p>
                <p style="margin:8px 0;">✔ No spam or promotional messages</p>
                <p style="margin:8px 0;">✔ Follow all event coordinators' instructions</p>
              </div>

              <p style="margin-top:30px; font-size:16px; color:#cbd5e1;">
                ❤️ We can't wait to see you at <b style="color:#a5b4fc;">CROSSROADS 2026</b>!
              </p>

            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};
const getWhatsappLink = (category) => {
  if (category === 'technical') return 'https://chat.whatsapp.com/technical-link';
  if (category === 'cultural') return 'https://chat.whatsapp.com/cultural-link';
  if (category === 'fun') return 'https://chat.whatsapp.com/fun-link';
  return 'https://chat.whatsapp.com/general-link';
};

module.exports = { getRegistrationEmail };




// //  <html>
// <body style="margin:0;padding:0;background:#0f0c29;font-family:'Segoe UI', system-ui, -apple-system, sans-serif;">
//   <table width="100%" cellpadding="0" cellspacing="0">
//     <tr>
//       <td align="center" style="padding:40px 20px;">
//         <table width="620" style="background: rgba(255,255,255,0.06); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border-radius: 28px; border: 1px solid rgba(255,255,255,0.1); overflow:hidden; box-shadow: 0 25px 80px rgba(0,0,0,0.55);">

//           <!-- HEADER - Modern Gradient + Glow -->
//           <tr>
//             <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #6B8DD6 100%); padding: 55px 30px; text-align:center; position:relative; overflow:hidden;">
//               <div style="position:absolute; inset:0; opacity:0.12; background: radial-gradient(circle at 20% 30%, white 0%, transparent 50%);"></div>
//               <h1 style="margin:0; font-size:48px; font-weight:900; color:#ffffff; letter-spacing:4px; text-shadow: 0 6px 20px rgba(0,0,0,0.5);">
//                 CROSSROADS <span style="color:#ffd700;">2026</span>
//               </h1>
//               <p style="margin:16px 0 0; font-size:22px; color:#f0f4ff; opacity:0.95; letter-spacing:1.5px;">
//                 Registration Confirmed 🚀✨
//               </p>
//             </td>
//           </tr>

//           <!-- MAIN CONTENT -->
//           <tr>
//             <td style="padding:45px 40px; color:#e0e7ff;">

//               <h2 style="margin:0 0 20px; color:#a5b4fc; font-size:28px;">${greeting},</h2>

//               <p style="font-size:17px; line-height:1.7; margin:0 0 30px;">${thanks}</p>

//               <!-- Unique ID Card -->
//               <div style="background: linear-gradient(135deg, #1e293b, #111827); border: 2px solid #6366f1; border-radius:16px; padding:24px; text-align:center; margin:30px 0; box-shadow: 0 10px 30px rgba(99,102,241,0.2);">
//                 <p style="margin:0 0 12px; font-size:18px; color:#c7d2fe;"><b>🎟 Your Unique Team ID</b></p>
//                 <p style="margin:0; font-size:32px; font-weight:900; color:#a5b4fc; letter-spacing:3px; font-family:monospace;">${uniqueId}</p>
//               </div>

//               <!-- Team Info Table -->
//               <table width="100%" style="border-collapse:collapse; font-size:15px; margin:30px 0;">
//                 <tr style="background:#1e293b;">
//                   <td style="padding:14px 18px; border-bottom:1px solid #334155;"><b>Team Name</b></td>
//                   <td style="padding:14px 18px; border-bottom:1px solid #334155;">${data.teamName}</td>
//                 </tr>
//                 <tr>
//                   <td style="padding:14px 18px; border-bottom:1px solid #334155;"><b>Team Leader</b></td>
//                   <td style="padding:14px 18px; border-bottom:1px solid #334155;">${data.leaderName}</td>
//                 </tr>
//                 <tr style="background:#1e293b;">
//                   <td style="padding:14px 18px; border-bottom:1px solid #334155;"><b>Institution</b></td>
//                   <td style="padding:14px 18px; border-bottom:1px solid #334155;">${data.institution}</td>
//                 </tr>
//                 <tr>
//                   <td style="padding:14px 18px; border-bottom:1px solid #334155;"><b>${data.studentType === 'college' ? 'Branch' : 'Class'}</b></td>
//                   <td style="padding:14px 18px; border-bottom:1px solid #334155;">${data.studentType === 'college' ? data.branch : data.class}</td>
//                 </tr>
//                 ${
//                   data.studentType === 'college'
//                     ? `<tr style="background:#1e293b;"><td style="padding:14px 18px; border-bottom:1px solid #334155;"><b>Year</b></td><td style="padding:14px 18px; border-bottom:1px solid #334155;">${data.year}</td></tr>`
//                     : ''
//                 }
//                 <tr>
//                   <td style="padding:14px 18px; border-bottom:1px solid #334155;"><b>Roll No / Student ID</b></td>
//                   <td style="padding:14px 18px; border-bottom:1px solid #334155;">${data.leaderRollNo}</td>
//                 </tr>
//                 <tr style="background:#1e293b;">
//                   <td style="padding:14px 18px;"><b>Team Size</b></td>
//                   <td style="padding:14px 18px;">${data.teamSize}</td>
//                 </tr>
//               </table>

//               <!-- Team Members -->
//               <h3 style="margin:45px 0 20px; color:#c084fc; font-size:24px;">👥 Team Members</h3>
//               <table width="100%" style="border-collapse:collapse; font-size:15px; background:#1e293b; border-radius:12px; overflow:hidden;">
//                 <tr style="background:#4f46e5; color:white;">
//                   <th style="padding:14px 18px; text-align:left;">Name</th>
//                   <th style="padding:14px 18px; text-align:left;">Email</th>
//                 </tr>
//                 ${teamMembersList}
//               </table>

//               <!-- WhatsApp Join Card -->
//               <div style="margin:45px 0; padding:35px 30px; background: linear-gradient(135deg, #065f46, #047857); border-radius:20px; text-align:center; box-shadow: 0 12px 40px rgba(6,95,70,0.4);">
//                 <h3 style="margin:0 0 20px; color:white; font-size:26px;">📱 Join the Official WhatsApp Group</h3>
//                 <a href="${whatsappLink}"
//                    style="display:inline-block; padding:16px 40px; background:#25D366; color:white; text-decoration:none; border-radius:50px; font-size:18px; font-weight:bold; box-shadow:0 8px 25px rgba(37,213,102,0.4); transition: all 0.3s;">
//                   Join Now →
//                 </a>
//               </div>

//             </td>
//           </tr>

//           <!-- FOOTER -->
//           <tr>
//             <td style="background:#0f172a; padding:35px 40px; font-size:14px; color:#94a3b8; text-align:center;">
//               <p style="margin:0 0 16px;"><b>Group Rules</b></p>
//               <div style="display:flex; justify-content:center; gap:40px; flex-wrap:wrap; margin:0 0 24px;">
//                 <span>Be respectful</span>
//                 <span>No spam/promotions</span>
//                 <span>Follow event guidelines</span>
//               </div>
//               <p style="margin:0; font-size:16px; color:#cbd5e1;">
//                 ❤️ We can't wait to see you at <b style="color:#a5b4fc;">CROSSROADS 2026</b>!
//               </p>
//             </td>
//           </tr>

//         </table>
//       </td>
//     </tr>
//   </table>
// </body>
// </html>