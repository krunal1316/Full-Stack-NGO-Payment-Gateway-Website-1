import React from 'react';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Empowering Communities, Changing Lives</h1>
          <p>Your donation helps us provide education, healthcare, and hope to those in need.</p>
          <a href="/donate" className="btn-primary">Donate Now</a>
        </div>
      </section>

      <section className="causes">
        <div className="container">
          <h2>Our Causes</h2>
          <div className="cause-grid">
            <div className="cause-card">
              <i className="fas fa-book-open"></i>
              <h3>Education</h3>
              <p>Support children's education in underprivileged areas.</p>
            </div>
            <div className="cause-card">
              <i className="fas fa-heartbeat"></i>
              <h3>Healthcare</h3>
              <p>Provide medical care to those who can't afford it.</p>
            </div>
            <div className="cause-card">
              <i className="fas fa-tint"></i>
              <h3>Clean Water</h3>
              <p>Build wells and water systems in drought areas.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
