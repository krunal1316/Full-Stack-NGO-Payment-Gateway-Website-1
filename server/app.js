const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const donationRoutes = require('./routes/donation');

const app = express();


app.use(cors());
app.use(express.json());


app.use(donationRoutes);


const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

// MongoDB Connection with Retry
const connectWithRetry = () => {
  console.log(' Attempting MongoDB connection...');
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log(' Connected to MongoDB'))
    .catch((err) => {
      console.error(' MongoDB connection error:', err);
      console.log(' Retrying in 5 seconds...');
      setTimeout(connectWithRetry, 5000);
    });
};

// Start server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
  connectWithRetry();
});
