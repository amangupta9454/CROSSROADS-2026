const getRegistrationEmail = (data, uniqueId, isLeader = true, name) => {
  const greeting = isLeader ? `Dear ${data.leaderName},` : `Dear ${name},`;
  const thanks = isLeader ? 'Thank you for registering your team for CROSSROADS 2026!' : 'Thank you for being part of the team for CROSSROADS 2026!';
  const whatsappLink = getWhatsappLink(data.event.category);
  const teamMembersList = data.teamMembers.map(m => `<tr><td>${m.name}</td><td>${m.email}</td></tr>`).join('');

  return `
    <html>
    <body style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #007bff;">${greeting}</h2>
      <p>${thanks}</p>
      <table border="1" cellpadding="10" style="border-collapse: collapse; width: 100%;">
        <tr><th>Unique ID</th><td>${uniqueId}</td></tr>
        <tr><th>Team Name</th><td>${data.teamName}</td></tr>
        <tr><th>Team Leader</th><td>${data.leaderName}</td></tr>
        <tr><th>Institution</th><td>${data.institution}</td></tr>
        <tr><th>${data.studentType === 'college' ? 'Branch' : 'Class'}</th><td>${data.studentType === 'college' ? data.branch : data.class}</td></tr>
        <tr><th>${data.studentType === 'college' ? 'Year' : ''}</th><td>${data.studentType === 'college' ? data.year : ''}</td></tr>
        <tr><th>Roll No/Student ID</th><td>${data.leaderRollNo}</td></tr>
        <tr><th>Team Size</th><td>${data.teamSize}</td></tr>
        <tr><th>Team Members</th><td>
          <table>${teamMembersList || '<tr><td colspan="2">No additional members</td></tr>'}</table>
        </td></tr>
      </table>
      <hr style="margin: 20px 0;">
      <p>Join our WhatsApp group for updates: <a href="${whatsappLink}">${whatsappLink}</a></p>
      <footer style="margin-top: 20px; font-size: 12px; color: #666;">
        <p>Rules:</p>
        <ul>
          <li>Be respectful in the group.</li>
          <li>No spam or off-topic messages.</li>
          <li>Follow event guidelines.</li>
        </ul>
      </footer>
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