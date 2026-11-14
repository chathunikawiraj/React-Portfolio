import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import './Portfolio.scss';

const Portfolio = () => (
  <main className="portfolio-sections">
    <Home />
    <About />
    <Projects />
    <Contact />
  </main>
);

export default Portfolio;
