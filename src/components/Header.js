// src/components/Header.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Header.scss';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleBellClick = () => {
    alert('🔔 No new notifications');
  };

  const handleAvatarClick = () => {
    alert('👤 Profile settings coming soon!');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = e.target.searchInput.value;
    if (query.trim()) {
      alert(`🔍 Searching for: "${query}"`);
      setShowSearch(false);
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className={({ isActive }) => isActive ? 'active' : ''}>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
              Contact Me
            </NavLink>
          </li>
        </ul>
        <div className="nav-actions">
          <i className="fas fa-search" onClick={handleSearchClick}></i>
          <i className="fas fa-bell" onClick={handleBellClick}></i>
          <div className="avatar" onClick={handleAvatarClick}>C</div>
        </div>
      </nav>

      {showSearch && (
        <div className="search-bar">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              name="searchInput"
              placeholder="Type and press Enter..."
              autoFocus
            />
            <button type="submit" className="search-btn">
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;