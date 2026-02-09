// controllers/registrationController.js
const Registration = require('../models/Registration');
const Counter = require('../models/Counter');
const cloudinary = require('../config/cloudinary');
const streamifier = require('streamifier');
const transporter = require('../config/nodemailer');
const { getRegistrationEmail } = require('../config/emailTemplates');

// Map event values to their respective models
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

/**
 * Get the next sequential number for unique ID generation
 */
const getNextSequence = async () => {
  const result = await Counter.findOneAndUpdate(
    { _id: 'registration' },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );
  return result.seq;
};

/**
 * Handle registration submission
 * - Uploads ID proof to Cloudinary (if provided)
 * - Continues even if upload fails (idProof becomes empty)
 * - Generates unique ID
 * - Saves to main Registration collection
 * - Saves to event-specific collection
 * - Sends confirmation emails to leader and team members
 */
const submitRegistration = async (req, res) => {
  try {
    // Parse the JSON data from form
    const data = JSON.parse(req.body.data);
    const file = req.file; // Multer file object

    let idProofUrl = ''; // Will remain empty if no file or upload fails

    // Handle file upload if provided
    if (file) {
      // Basic validation (already done in frontend, but double-check)
      if (file.size > 3 * 1024 * 1024) {
        return res.status(400).json({ message: 'File too large (max 3MB)' });
      }
      if (!file.mimetype.startsWith('image/')) {
        return res.status(400).json({ message: 'Only image files are allowed' });
      }

      try {
        // Upload to Cloudinary using stream
        const uploadPromise = new Promise((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            { folder: 'crossroads/registrations', resource_type: 'image' },
            (error, result) => {
              if (error) {
                reject(error);
              } else {
                resolve(result);
              }
            }
          );

          streamifier.createReadStream(file.buffer).pipe(uploadStream);
        });

        const result = await uploadPromise;
        idProofUrl = result.secure_url;
        // console.log(`ID proof uploaded successfully: ${idProofUrl}`);
      } catch (uploadError) {
        console.error('Cloudinary upload failed:', uploadError);
        // We do NOT return error — continue registration without ID proof
        // You can log this to monitoring service if you have one
      }
    } else {
      console.log('No ID proof file provided');
    }

    // Assign ID proof URL (empty string if failed or not provided)
    data.idProof = idProofUrl;

    // Generate unique registration ID
    const seq = await getNextSequence();
    const uniqueId = `HIET/CR/2026/${String(seq).padStart(4, '0')}`;
    data.uniqueId = uniqueId;

    // Save to main Registration collection
    const registration = new Registration(data);
    await registration.save();

    // Save to event-specific collection if model exists
    const EventModel = eventModels[data.event?.value];
    if (EventModel) {
      const eventSpecificReg = new EventModel(data);
      await eventSpecificReg.save();
      // console.log(`Saved to event-specific model: ${data.event.value}`);
    }

    // Send confirmation email to team leader
    const leaderEmailContent = getRegistrationEmail(data, uniqueId, true, data.leaderName);
    await transporter.sendMail({
      from: `"CROSSROADS 2026" <${process.env.EMAIL_USER}>`,
      to: data.leaderEmail,
      subject: 'CROSSROADS 2026 - Registration Confirmed!',
      html: leaderEmailContent,
    });

    // Send confirmation emails to additional team members
    for (const member of data.teamMembers || []) {
      if (member.email) {
        const memberEmailContent = getRegistrationEmail(data, uniqueId, false, member.name);
        await transporter.sendMail({
          from: `"CROSSROADS 2026" <${process.env.EMAIL_USER}>`,
          to: member.email,
          subject: 'CROSSROADS 2026 - You\'ve been added to a team!',
          html: memberEmailContent,
        });
      }
    }

    // Success response
    res.status(200).json({
      message: 'Registration successful',
      uniqueId,
      note: idProofUrl ? 'ID proof uploaded' : 'No ID proof uploaded (optional)'
    });

  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({
      message: 'Server error during registration',
      error: err.message
    });
  }
};

module.exports = {
  submitRegistration
};