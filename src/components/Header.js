// src/components/Header.js
import React from 'react';
import './styles/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-links">
          <li className="active">Home</li>
          <li>About</li>
          <li>Blogs</li>
          <li>Contact Me</li>
        </ul>
        <div className="nav-actions">
          <i className="fas fa-search"></i>
          <i className="fas fa-bell"></i>
          <div className="avatar">C</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;