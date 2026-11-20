// src/pages/About.js
import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section className="page about-page" id="about">
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
              into full-stack engineering, IoT, AI-powered applications, and UI/UX design.
              I enjoy analyzing user needs and turning them into practical, scalable
              software solutions through continuous learning.
            </p>
            <div className="skills">
              <h3>Technical Skills</h3>
              <div className="skill-tags">
                <span>C</span>
                <span>Java</span>
                <span>PHP</span>
                <span>React.js</span>
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>JavaScript</span>
                <span>Python</span>
                <span>HTML & CSS</span>
                <span>SCSS</span>
                <span>Spring Boot</span>
                <span>REST APIs</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MySQL</span>
                <span>PostgreSQL</span>
                <span>MongoDB</span>
                <span>Firebase</span>
                <span>Prisma ORM</span>
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>Figma</span>
                <span>Git & GitHub</span>
                <span>Postman</span>
                <span>UI/UX Design</span>
              </div>
            </div>
          </div>
          <div className="about-extra">
            <div className="stat-card">
              <i className="fas fa-graduation-cap"></i>
              <h3>University of Moratuwa</h3>
              <p>BSc Hons in Information Technology and Management (2025 - 2029)</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-trophy"></i>
              <h3>Achievements</h3>
              <p>MoraXtreme 10.0 – Algorithmic Coding Competition</p>
              <p>Current SGPA: 3.75</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;