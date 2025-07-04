// ✅ FILE: client/src/pages/Cancel.jsx
import React from 'react';

export default function Cancel() {
  return (
    <section className="cancel-section">
      <div className="container">
        <div className="cancel-box">
          <i className="fas fa-times-circle"></i>
          <h2>Donation Canceled</h2>
          <p>Your payment was not completed. You may try again below.</p>
          <a href="/donate" className="btn-primary">Retry Donation</a>
        </div>
      </div>
    </section>
  );
}