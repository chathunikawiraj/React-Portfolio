const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// The secret password to edit/add projects
const ADMIN_PASSWORD = "chathuni123"; 
const dataFilePath = path.join(__dirname, 'projects.json');

// Helper function to read projects
const getProjects = () => {
  const data = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(data);
};

// Helper function to save projects
const saveProjects = (projects) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(projects, null, 2));
};

// --- PUBLIC ROUTES ---
// Get all projects (Anyone can see this)
app.get('/api/blogs', (req, res) => {
  res.json(getProjects());
});

// Get a single project
app.get('/api/blogs/:id', (req, res) => {
  const projects = getProjects();
  const project = projects.find(p => p.id === parseInt(req.params.id));
  project ? res.json(project) : res.status(404).json({ error: 'Project not found' });
});

// --- ADMIN ROUTES ---
// Admin Login check
app.post('/api/login', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    res.json({ success: true, token: "secret-admin-token-123" });
  } else {
    res.status(401).json({ success: false, error: "Incorrect password" });
  }
});

// Add a new project (Only Admin)
app.post('/api/blogs', (req, res) => {
  const { title, category, date, excerpt, fullContent, token } = req.body;
  
  if (token !== "secret-admin-token-123") {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  const projects = getProjects();
  const newProject = {
    id: Date.now(), // Unique ID
    title,
    category,
    date,
    excerpt,
    fullContent
  };
  
  projects.unshift(newProject); // Add to top of list
  saveProjects(projects);
  
  res.json({ success: true, project: newProject });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});