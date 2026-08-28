// server/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Blog data with FULL content
const blogPosts = [
  {
    id: 1,
    title: "Building a Modern React Portfolio",
    date: "August 2026",
    category: "React",
    excerpt: "Step-by-step guide on creating a stunning portfolio using React and SCSS.",
    fullContent: `
      <h2>Introduction</h2>
      <p>Building a portfolio is one of the most important steps in a developer's journey. It's your digital resume, your showcase, and often your first impression on potential employers or clients.</p>
      
      <h2>Why React?</h2>
      <p>React's component-based architecture makes it perfect for portfolios. You can reuse components, manage state efficiently, and create a dynamic, interactive experience that stands out.</p>
      
      <h2>Setting Up the Project</h2>
      <p>I used Create React App to bootstrap my project, then added SCSS for styling. The folder structure is organized by components and pages for easy maintenance.</p>
      
      <h2>Key Features I Built</h2>
      <ul>
        <li>Multi-page routing with React Router</li>
        <li>Responsive design with SCSS</li>
        <li>Interactive UI with state management</li>
        <li>Contact form with validation</li>
        <li>Blog system with backend API</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building this portfolio taught me a lot about React best practices, responsive design, and creating a cohesive user experience. I hope this inspires you to build your own!</p>
    `
  },
  {
    id: 2,
    title: "Mastering CSS Grid & Flexbox",
    date: "July 2026",
    category: "CSS",
    excerpt: "How I use modern CSS layouts to build responsive and beautiful interfaces.",
    fullContent: `
      <h2>Introduction</h2>
      <p>CSS Grid and Flexbox have revolutionized the way we build layouts. Gone are the days of float hacks and table-based designs — we now have powerful, intuitive tools.</p>
      
      <h2>Flexbox: One-Dimensional Layouts</h2>
      <p>Flexbox is perfect for arranging items in a row or column. It handles alignment, spacing, and ordering beautifully. I use it for navigation bars, card layouts, and simple component arrangements.</p>
      
      <h2>CSS Grid: Two-Dimensional Layouts</h2>
      <p>Grid is more powerful — it handles both rows and columns simultaneously. I use it for complex layouts like blog grids, dashboard layouts, and image galleries.</p>
      
      <h2>My Approach</h2>
      <p>I typically start with a mobile-first approach using Flexbox, then use Grid for larger screens. This combination gives me full control while keeping the code clean.</p>
      
      <h2>Conclusion</h2>
      <p>Mastering these layout tools has made me a more efficient and confident developer. They're essential skills for any modern web developer.</p>
    `
  },
  {
    id: 3,
    title: "Design Thinking in Web Development",
    date: "June 2026",
    category: "Design",
    excerpt: "Blending creative design with technical development for better user experiences.",
    fullContent: `
      <h2>Introduction</h2>
      <p>Design Thinking is a human-centered approach to innovation. In web development, it bridges the gap between technical implementation and user needs.</p>
      
      <h2>The Five Stages</h2>
      <ol>
        <li><strong>Empathize:</strong> Understand your users' needs and pain points.</li>
        <li><strong>Define:</strong> Clearly articulate the problem you're solving.</li>
        <li><strong>Ideate:</strong> Brainstorm creative solutions without judgment.</li>
        <li><strong>Prototype:</strong> Build quick, iterative prototypes.</li>
        <li><strong>Test:</strong> Get user feedback and refine.</li>
      </ol>
      
      <h2>Applying It to Web Development</h2>
      <p>I apply Design Thinking to every project by starting with user research, creating wireframes, building prototypes, and testing with real users. This ensures I build something people actually want.</p>
      
      <h2>Conclusion</h2>
      <p>Design Thinking has made me a more empathetic and effective developer. It's not just about code — it's about creating value for users.</p>
    `
  },
  {
    id: 4,
    title: "Why I Chose React for My Portfolio",
    date: "May 2026",
    category: "JavaScript",
    excerpt: "A comparison of frontend frameworks and my choice for building this portfolio.",
    fullContent: `
      <h2>Introduction</h2>
      <p>Choosing a frontend framework for your portfolio is a big decision. It affects development speed, maintainability, and even your job prospects. Here's why I chose React.</p>
      
      <h2>React vs Angular vs Vue</h2>
      <p><strong>React:</strong> Component-based, JSX syntax, great ecosystem, easy learning curve for beginners, excellent developer tools.</p>
      <p><strong>Angular:</strong> Full-featured framework, TypeScript, steep learning curve, more opinionated.</p>
      <p><strong>Vue:</strong> Simpler than Angular, more flexible than React in some ways, growing ecosystem.</p>
      
      <h2>Why I Chose React</h2>
      <ul>
        <li><strong>Component Reusability:</strong> Build once, use everywhere.</li>
        <li><strong>Virtual DOM:</strong> Fast rendering and updates.</li>
        <li><strong>React Hooks:</strong> Clean state management without class components.</li>
        <li><strong>Job Market:</strong> React skills are in high demand.</li>
        <li><strong>Community:</strong> Huge ecosystem with tons of libraries and support.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>React was the perfect choice for my portfolio. It allowed me to build a dynamic, responsive, and maintainable application that showcases my skills effectively.</p>
    `
  }
];

// API Routes
app.get('/api/blogs', (req, res) => {
  // Return only id, title, category, date, and excerpt (not fullContent)
  const previews = blogPosts.map(({ id, title, category, date, excerpt }) => ({
    id, title, category, date, excerpt
  }));
  res.json(previews);
});

app.get('/api/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = blogPosts.find(p => p.id === id);
  
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'Blog post not found' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});