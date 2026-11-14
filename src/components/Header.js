// src/components/Header.js
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Header.scss';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'My Projects' },
  { id: 'contact', label: 'Contact Me' }
];

const Header = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setActiveSection(location.hash.slice(1) || 'home');

    if (typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: '-30% 0px -30% 0px' }
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location.pathname, location.hash]);

  return (
    <header className="header">
      <nav className="navbar" aria-label="Portfolio navigation">
        <ul className="nav-links">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <Link
                to={`/#${id}`}
                className={activeSection === id ? 'active' : ''}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;