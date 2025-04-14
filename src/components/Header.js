import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">🦷 Dental Case Manager</div>
      <nav className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/logut">Logout</Link>
      </nav>
    </header>
  );
};

export default Header;