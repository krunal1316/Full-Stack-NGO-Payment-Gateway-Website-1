const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const Donation = require('../models/Donation');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


router.post('/api/donate', async (req, res) => {
  const { name, email, amount, cause } = req.body;

  if (!name || !email || !amount || !cause) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: `Donation for ${cause}` },
          unit_amount: parseInt(amount) * 100, // cents
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    await Donation.create({
      name,
      email,
      amount,
      cause,
      stripeSessionId: session.id,
    });

    res.json({ success: true, url: session.url });
  } catch (error) {
    console.error('Donation error:', error);
    res.status(500).json({ success: false, error: 'Payment session creation failed' });
  }
});

module.exports = router;




