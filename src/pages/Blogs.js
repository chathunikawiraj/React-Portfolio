// src/pages/Blogs.js
import React from 'react';
import './Blogs.scss';

const blogPosts = [
  {
    id: 1,
    title: "Building a Modern React Portfolio",
    date: "August 2026",
    category: "React",
    description: "Step-by-step guide on creating a stunning portfolio using React and SCSS.",
  },
  {
    id: 2,
    title: "Mastering CSS Grid & Flexbox",
    date: "July 2026",
    category: "CSS",
    description: "How I use modern CSS layouts to build responsive and beautiful interfaces.",
  },
  {
    id: 3,
    title: "Design Thinking in Web Development",
    date: "June 2026",
    category: "Design",
    description: "Blending creative design with technical development for better user experiences.",
  },
  {
    id: 4,
    title: "Why I Chose React for My Portfolio",
    date: "May 2026",
    category: "JavaScript",
    description: "A comparison of frontend frameworks and my choice for building this portfolio.",
  },
];

const Blogs = () => {
  return (
    <section className="page blogs-page">
      <div className="blogs-content">
        <h1>My <span className="highlight">Blogs</span></h1>
        <p className="blogs-subtitle">Sharing my journey, tutorials, and insights</p>
        
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              <div className="blog-category">{post.category}</div>
              <h3>{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <p className="blog-description">{post.description}</p>
              <button className="read-more">Read More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;