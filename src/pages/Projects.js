// src/pages/Projects.js
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AdminContext } from '../AdminContext';
import './Blogs.scss';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const { isAdmin, logout } = useContext(AdminContext);
  
  // State for the Add Project Form
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: '', category: '', date: '', excerpt: '', fullContent: '' });

  // Fetch projects
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    fetch('http://localhost:5000/api/blogs')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error(err));
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('adminToken');
    
    fetch('http://localhost:5000/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, token })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setShowForm(false);
          setFormData({ title: '', category: '', date: '', excerpt: '', fullContent: '' });
          fetchProjects(); // Refresh list
        }
      });
  };

  return (
    <section className="page blogs-page">
      <div className="blogs-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>My <span className="highlight">Projects</span></h1>
          
          {/* ADMIN ONLY BUTTONS */}
          {isAdmin && (
            <div>
              <button onClick={() => setShowForm(!showForm)} className="btn-hire" style={{ padding: '8px 20px', fontSize: '14px' }}>
                {showForm ? 'Cancel' : '+ Add Project'}
              </button>
              <button onClick={logout} style={{ background: 'transparent', color: '#ff6b6b', border: 'none', cursor: 'pointer', marginLeft: '15px' }}>
                Logout
              </button>
            </div>
          )}
        </div>

        {/* ADMIN ONLY ADD FORM */}
        {isAdmin && showForm && (
          <form onSubmit={handleAddProject} className="contact-form" style={{ marginBottom: '30px', background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '12px' }}>
            <h3>Add New Project</h3>
            <input type="text" placeholder="Title" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
            <input type="text" placeholder="Category (e.g., React)" required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} />
            <input type="text" placeholder="Date (e.g., August 2026)" required value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
            <input type="text" placeholder="Short Excerpt (for the card)" required value={formData.excerpt} onChange={e => setFormData({...formData, excerpt: e.target.value})} />
            <textarea placeholder="Full Content (HTML allowed)" rows="5" required value={formData.fullContent} onChange={e => setFormData({...formData, fullContent: e.target.value})}></textarea>
            <button type="submit">Save Project</button>
          </form>
        )}

        {/* PROJECT LIST */}
        <div className="blog-grid">
          {projects.map((post) => (
            <div className="blog-card" key={post.id}>
              <div className="blog-category">{post.category}</div>
              <h3>{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <p className="blog-description">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="read-more">
                View Project →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;