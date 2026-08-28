// src/pages/Blogs.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.scss';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch blogs');
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="page blogs-page">
        <div className="blogs-content">
          <h1>My <span className="highlight">Blogs</span></h1>
          <div className="loading-spinner">Loading blogs...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="page blogs-page">
        <div className="blogs-content">
          <h1>My <span className="highlight">Blogs</span></h1>
          <div className="error-message">Error: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="page blogs-page">
      <div className="blogs-content">
        <h1>My <span className="highlight">Blogs</span></h1>
        <p className="blogs-subtitle">Sharing my journey, tutorials, and insights</p>

        <div className="blog-grid">
          {blogs.map((post) => (
            <div className="blog-card" key={post.id}>
              <div className="blog-category">{post.category}</div>
              <h3>{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <p className="blog-description">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="read-more">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;