
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header>
      <div className="container">
        <div className="logo">Hope Foundation</div>
        <nav>
          <Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/causes" className={pathname === '/causes' ? 'active' : ''}>Causes</Link>
          <Link to="/donate" className="btn-donate">Donate Now</Link>
        </nav>
      </div>
    </header>
  );
}
