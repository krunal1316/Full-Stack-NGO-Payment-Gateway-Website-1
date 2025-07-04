import React, { useState } from 'react';

export default function Donate() {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    cause: 'education',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalAmount = customAmount || amount;

    if (!finalAmount || isNaN(finalAmount) || finalAmount <= 0) {
      alert('Please enter a valid donation amount');
      return;
    }

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/donate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, amount: finalAmount }),
      });

      const data = await res.json();

      if (data.success) {
        window.location.href = data.url;
      } else {
        alert('Payment failed: ' + data.error);
      }
    } catch (err) {
      alert('An error occurred. Please try again.');
      console.error('Fetch error:', err);
    }
  };

  return (
    <section className="donation-section">
      <div className="container">
        <h2>Make a Difference Today</h2>
        <div className="donation-box">
          <div className="donation-options">
            {[10, 25, 50, 100].map((amt) => (
              <button
                key={amt}
                className={`amount-btn ${amount === amt.toString() ? 'active' : ''}`}
                onClick={() => {
                  setAmount(amt.toString());
                  setCustomAmount('');
                }}
              >
                ${amt}
              </button>
            ))}
            <input
              type="number"
              id="custom-amount"
              placeholder="Other amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setAmount('');
              }}
            />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cause">Select Cause</label>
              <select
                id="cause"
                required
                value={form.cause}
                onChange={(e) => setForm({ ...form, cause: e.target.value })}
              >
                <option value="education">Education</option>
                <option value="healthcare">Healthcare</option>
                <option value="water">Clean Water</option>
                <option value="general">General Fund</option>
              </select>
            </div>
            <button type="submit" className="btn-primary">Donate Now</button>
          </form>
        </div>
      </div>
    </section>
  );
}

