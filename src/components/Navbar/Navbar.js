import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">React Website</h1>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/home" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/nothome" className="nav-links">Not Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 