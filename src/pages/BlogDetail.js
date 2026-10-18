// src/pages/BlogDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogDetail.scss';

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Project not found');
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <section className="page blog-detail-page">
        <div className="blog-detail-content">
          <div className="loading-spinner">Loading project details...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="page blog-detail-page">
        <div className="blog-detail-content">
          <div className="error-message">
            <h2>Oops! {error}</h2>
            <Link to="/projects" className="back-link">← Back to Projects</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page blog-detail-page">
      <div className="blog-detail-content">
        <Link to="/projects" className="back-link">← Back to Projects</Link>
        
        <div className="blog-header">
          <div className="blog-category">{post.category}</div>
          <h1>{post.title}</h1>
          <p className="blog-date">{post.date}</p>
        </div>

        <div 
          className="blog-body"
          dangerouslySetInnerHTML={{ __html: post.fullContent }}
        />
      </div>
    </section>
  );
};

export default BlogDetail;