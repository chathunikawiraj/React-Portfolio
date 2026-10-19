// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.scss';
import profilePhoto from '../components/assets/profilephoto.jpeg';

const Home = () => {
  const navigate = useNavigate();

  const handleHireClick = () => {
    navigate('/contact'); 
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
            {/* Primary Button: Hire Me */}
            <button className="btn-hire" onClick={handleHireClick}>
              <i className="fas fa-paper-plane"></i> Hire Me
            </button>

            {/* Secondary Button: Download CV */}
            {/* The href points to your public folder. The 'download' attribute forces the download */}
            <a 
              href="/Chathuni_CV.pdf" 
              download="Chathuni_CV.pdf" 
              className="btn-cv"
            >
              <i className="fas fa-download"></i> Download CV
            </a>

            <div className="social-links">
              <a href="https://github.com/chathunikawiraj" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/chathuni-lakkhana" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://x.com/chathunikawiraj" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="https://instagram.com/chathunikawiraj" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="mailto:chathuniikawiraj@gmail.com">
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