// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log('MongoDB connected');
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 30000,    // Give more time to select server
      socketTimeoutMS: 45000,             // Close sockets after 45s inactivity
      family: 4,                          // Prefer IPv4 (helps in some India networks)
      maxPoolSize: 10,                    // Prevent too many connections
      // heartbeatFrequencyMS: 10000      // Optional: more aggressive checks
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    console.error('Full error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;