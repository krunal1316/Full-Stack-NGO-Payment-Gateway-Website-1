import React from 'react';

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <h2>Our Story</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Founded in 2010, Hope Foundation has impacted over <strong>1 million lives</strong> across 20 countries through education, healthcare, and clean water initiatives.</p>
            <h3>Our Mission</h3>
            <p>To empower underserved communities through sustainable solutions.</p>
            <h3>Core Values</h3>
            <ul>
              <li><i className="fas fa-check-circle"></i> Transparency</li>
              <li><i className="fas fa-check-circle"></i> Accountability</li>
              <li><i className="fas fa-check-circle"></i> Innovation</li>
            </ul>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Our Team" />
          </div>
        </div>
      </div>
    </section>
  );
}
