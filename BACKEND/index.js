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

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/api/registrations', registrationRoutes);
app.use('/api/admin', adminRoutes);
app.get('/', (req, res) => {
  res.send('API is running...');
});
const PORT = process.env.PORT || 5000;
console.log("Cloudinary config loaded:");

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));