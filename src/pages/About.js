// src/pages/About.js
import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section className="page about-page">
      <div className="about-content">
        <h1>About <span className="highlight">Me</span></h1>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm Chathuni, a passionate undergraduate student at the 
              <strong> University of Moratuwa</strong>, Faculty of Information Technology. 
              I thrive on solving complex problems and creating meaningful digital experiences.
            </p>
            <p>
              My journey in tech started with web development, and I've since expanded 
              into multi-media technologies, UI/UX design, and business management. 
              I believe in continuous learning—every day is an opportunity to grow.
            </p>
            <div className="skills">
              <h3>Technical Skills</h3>
              <div className="skill-tags">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>HTML & CSS</span>
                <span>SCSS</span>
                <span>Figma</span>
                <span>Git & GitHub</span>
                <span>Node.js (basic)</span>
                <span>UI/UX Design</span>
              </div>
            </div>
          </div>
          <div className="about-extra">
            <div className="stat-card">
              <i className="fas fa-graduation-cap"></i>
              <h3>University of Moratuwa</h3>
              <p>BSc in Information Technology (2024 - 2028)</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-trophy"></i>
              <h3>Achievements</h3>
              <p>Winner - Hackathon 2025</p>
              <p>Dean's List - Semester 2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;