require('dotenv').config();
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const registrationRoutes = require('./routes/registrationRoutes');
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/registrations', registrationRoutes);

const PORT = process.env.PORT || 5000;
console.log("Cloudinary config loaded:");
  console.log("CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME);
  console.log("API_KEY:", process.env.CLOUDINARY_API_KEY ? "exists" : "MISSING");
  console.log("API_SECRET:", process.env.CLOUDINARY_API_SECRET ? "exists" : "MISSING");
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));