// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;