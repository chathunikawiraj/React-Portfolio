// src/pages/AdminLogin.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../AdminContext';
import './Contact.scss'; // Reuse form styles

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AdminContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          login(data.token);
          navigate('/projects'); // Send to projects after login
        } else {
          setError(data.error);
        }
      })
      .catch(() => setError('Server error'));
  };

  return (
    <section className="page contact-page">
      <div className="contact-content" style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h1>Admin <span className="highlight">Login</span></h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form className="contact-form" onSubmit={handleLogin}>
          <input 
            type="password" 
            placeholder="Enter Admin Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;