// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.scss';
import profilePhoto from '../components/assets/profilephoto.jpeg';

const Home = () => {
  const navigate = useNavigate();

  const handleHireClick = () => {
    navigate('/#contact');
  };

  return (
    <section className="page home-page" id="home">
      <div className="hero-container">
        <div className="hero-image">
          <img src={profilePhoto} alt="Chathuni" />
        </div>
        <div className="hero-content">
          <div className="hero-greeting">
            <i className="fas fa-hand-peace"></i> Welcome
          </div>
          <h1>
            Hey I'm <span className="highlight">Chathuni</span>
          </h1>
          <p className="hero-description">
            I'm an undergraduate student at the University of Moratuwa,
            focused on building practical, scalable software solutions. I work across
            full-stack web development, IoT, AI-powered applications, databases,
            and UI/UX design. I enjoy analyzing real-world problems and turning
            them into meaningful products through continuous learning.
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
              <a href="https://www.instagram.com/cha_th_u_ni?mdxt=MWsyNzh3eDF6M2RkNQ==" target="_blank" rel="noopener noreferrer">
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