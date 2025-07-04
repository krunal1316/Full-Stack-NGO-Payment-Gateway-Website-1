// ✅ FILE: client/src/pages/Success.jsx
import React, { useEffect, useState } from 'react';

export default function Success() {
  const [amount, setAmount] = useState('10');
  const [cause, setCause] = useState('General Fund');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setAmount(params.get('amount') || '10');
    setCause(params.get('cause') || 'General Fund');
  }, []);

  return (
    <section className="success-section">
      <div className="container">
        <div className="success-box">
          <i className="fas fa-check-circle"></i>
          <h2>Thank You for Your Donation!</h2>
          <p>Your contribution will help transform lives. A receipt has been sent to your email.</p>
          <div className="donation-details">
            <p>Amount: ${amount}</p>
            <p>Cause: {cause}</p>
          </div>
          <a href="/" className="btn-primary">Back to Home</a>
        </div>
      </div>
    </section>
  );
}
