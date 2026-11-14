// src/App.js
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Projects from './pages/Projects';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin'; // Import this

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));

      if (target) {
        const headerHeight =
          document.querySelector('.header')?.getBoundingClientRect().height || 0;
        window.scrollTo({
          top: Math.max(
            0,
            window.scrollY +
              target.getBoundingClientRect().top -
              headerHeight -
              20
          )
        });
      }
    } else if (location.pathname !== '/') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminLogin />} /> {/* Secret login route */}
        </Routes>
      </div>
    </div>
  );
}

export default App;