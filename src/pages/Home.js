// src/pages/Home.js
import React from 'react';
import './Home.scss';
import profilePhoto from '../components/assets/profilephoto.jpeg';

const Home = () => {
  const handleHireClick = () => {
    window.location.href = 'mailto:chathuni@example.com?subject=Hiring%20Chathuni';
  };

  return (
    <section className="page home-page">
      <div className="hero-container">
        <div className="hero-image">
          <img src={profilePhoto} alt="Chathuni" />
        </div>
        <div className="hero-content">
          <div className="hero-greeting">
            <i className="fas fa-hand-peace"></i> Welcome, I'm
          </div>
          <h1>
            Hey I'm <span className="highlight">Chathuni</span>
          </h1>
          <p className="hero-description">
            I'm an undergraduate student at the University of Moratuwa,
            Faculty of Information Technology, with a passion for technology,
            problem-solving, and continuous learning. I'm currently building
            my skills in areas such as web development, multi-media technologies,
            and business management. I enjoy taking on new challenges and
            working on real-world projects that make a difference.
          </p>

          <div className="hero-actions">
            <button className="btn-hire" onClick={handleHireClick}>
              <i className="fas fa-paper-plane"></i> Hire Me
            </button>

            <div className="social-links">
              <a href="https://github.com/chathunikawiraj" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/chathunikawiraj" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com/chathunikawiraj" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/chathunikawiraj" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="mailto:chathuni@example.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;