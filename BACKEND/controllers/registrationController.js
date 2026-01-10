const Registration = require('../models/Registration');
const Counter = require('../models/Counter');
const cloudinary = require('../config/cloudinary');
const streamifier = require('streamifier');
const transporter = require('../config/nodemailer');
const { getRegistrationEmail } = require('../config/emailTemplates');

// Map event values to models
const eventModels = {
  'code-puzzle': require('../models/CodePuzzle'),
  'project-exhibition': require('../models/ProjectExhibition'),
  'robo-race': require('../models/RoboRace'),
  'technical-poster': require('../models/TechnicalPoster'),
  'cultural-events': require('../models/CulturalEvents'),
  'rangoli-competition': require('../models/RangoliCompetition'),
  'food-without-fire': require('../models/FoodWithoutFire'),
  'nukkad-natak': require('../models/NukkadNatak'),
  'singing': require('../models/Singing'),
  'dance-competition': require('../models/DanceCompetition'),
  'rock-band': require('../models/RockBand'),
  'short-film-maker': require('../models/ShortFilmMaker'),
  'ad-mad-show': require('../models/AdMadShow'),
  'treasure-hunt': require('../models/TreasureHunt'),
};

const getNextSequence = async () => {
  const result = await Counter.findOneAndUpdate(
    { _id: 'registration' },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );
  return result.seq;
};

const submitRegistration = async (req, res) => {
  try {
    const data = JSON.parse(req.body.data);
    const file = req.file;

    if (!file) return res.status(400).json({ message: 'No file uploaded' });
    if (file.size > 3 * 1024 * 1024) return res.status(400).json({ message: 'File too large' });
    if (!file.mimetype.startsWith('image/')) return res.status(400).json({ message: 'Invalid image' });

    const uploadStream = cloudinary.uploader.upload_stream({ folder: 'crossroads' }, async (error, result) => {
      if (error) return res.status(500).json({ message: 'Upload failed' });

      data.idProof = result.secure_url;

      const seq = await getNextSequence();
      const uniqueId = `HIET/CR/2026/${String(seq).padStart(4, '0')}`;
      data.uniqueId = uniqueId;

      const registration = new Registration(data);
      await registration.save();

      const EventModel = eventModels[data.event.value];
      if (EventModel) {
        const eventReg = new EventModel(data);
        await eventReg.save();
      }

      // Send email to leader
      const leaderEmailContent = getRegistrationEmail(data, uniqueId);
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: data.leaderEmail,
        subject: 'CROSSROADS 2026 Registration Confirmation',
        html: leaderEmailContent,
      });

      // Send to team members
      for (const member of data.teamMembers) {
        const memberEmailContent = getRegistrationEmail(data, uniqueId, false, member.name);
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: member.email,
          subject: 'CROSSROADS 2026 Team Member Confirmation',
          html: memberEmailContent,
        });
      }

      res.status(200).json({ message: 'Registration successful', uniqueId });
    });

    streamifier.createReadStream(file.buffer).pipe(uploadStream);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { submitRegistration };