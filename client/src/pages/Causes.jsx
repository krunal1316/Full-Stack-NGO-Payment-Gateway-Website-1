import React from 'react';

export default function Causes() {
  return (
    <section className="causes-section">
      <div className="container">
        <h2>Our Causes</h2>
        <div className="causes-grid">
          <div className="cause-card">
            <i className="fas fa-book-open"></i>
            <h3>Education</h3>
            <p>Building schools and providing scholarships to 50,000 children annually.</p>
            <a href="/donate?cause=education" className="btn-primary">Donate</a>
          </div>
          <div className="cause-card">
            <i className="fas fa-heartbeat"></i>
            <h3>Healthcare</h3>
            <p>Free medical camps serving 200,000 patients in rural areas.</p>
            <a href="/donate?cause=healthcare" className="btn-primary">Donate</a>
          </div>
          <div className="cause-card">
            <i className="fas fa-tint"></i>
            <h3>Clean Water</h3>
            <p>Installing 500+ water wells in drought-affected regions.</p>
            <a href="/donate?cause=water" className="btn-primary">Donate</a>
          </div>
        </div>
      </div>
    </section>
  );
}
