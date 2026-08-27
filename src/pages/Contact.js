// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! I'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="page contact-page">
      <div className="contact-content">
        <h1>Get In <span className="highlight">Touch</span></h1>
        <p className="contact-subtitle">Have a project? Let's talk about it.</p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>chathuni@example.com</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Location</h4>
                <p>Moratuwa, Sri Lanka</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>+94 77 123 4567</p>
              </div>
            </div>
            <div className="contact-social">
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
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;