const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  amount: { type: Number, required: true },
  cause: { type: String, required: true },
  stripeSessionId: { type: String, required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Donation', donationSchema);
