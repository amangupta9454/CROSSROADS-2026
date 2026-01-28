require('dotenv').config();
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const registrationRoutes = require('./routes/registrationRoutes');
const adminRoutes = require('./routes/adminRoutes');
connectDB();

const app = express();
// Replace this line:
app.use(cors("*"));

// With this (works perfectly on Vercel):
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // or 'https://hiet-crossroads.online' for stricter
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-auth-token');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/api/registrations', registrationRoutes);
app.use('/api/admin', adminRoutes);
app.get('/', (req, res) => {
  res.send('API is running...');
});
const PORT = process.env.PORT || 5000;
console.log("Cloudinary config loaded:");
  console.log("CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME);
  console.log("API_KEY:", process.env.CLOUDINARY_API_KEY ? "exists" : "MISSING");
  console.log("API_SECRET:", process.env.CLOUDINARY_API_SECRET ? "exists" : "MISSING");

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));