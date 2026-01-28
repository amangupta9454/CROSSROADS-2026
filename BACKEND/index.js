require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const registrationRoutes = require('./routes/registrationRoutes');
const adminRoutes = require('./routes/adminRoutes');

connectDB();

const app = express();

// Custom CORS middleware (works reliably on Vercel)
app.use((req, res, next) => {
  const allowedOrigins = [
    'https://hiet-crossroads.online',
    'https://www.hiet-crossroads.online',     // if you use www
    'http://localhost:5173',                  // for local dev (Vite default)
    'http://localhost:3000',                  // if you use other ports
  ];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else if (process.env.NODE_ENV !== 'production') {
    // In development allow all (optional)
    res.setHeader('Access-Control-Allow-Origin', '*');
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-auth-token, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  next();
});

// Body parser (important for JSON and file uploads)
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Routes
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