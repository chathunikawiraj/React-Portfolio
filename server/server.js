const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const adminTokens = new Set();
const dataDirectory = process.env.DATA_DIR || __dirname;
const projectsFilePath = path.join(dataDirectory, 'projects.json');
const messagesFilePath = path.join(dataDirectory, 'messages.json');
const buildDirectory = path.join(__dirname, '..', 'build');

if (process.env.NODE_ENV === 'production' && !ADMIN_PASSWORD) {
  throw new Error('ADMIN_PASSWORD must be set in production');
}

fs.mkdirSync(dataDirectory, { recursive: true });

// Helper function to read projects
const getProjects = () => {
  if (!fs.existsSync(projectsFilePath)) {
    fs.copyFileSync(path.join(__dirname, 'projects.json'), projectsFilePath);
  }
  const data = fs.readFileSync(projectsFilePath, 'utf8');
  return JSON.parse(data);
};

// Helper function to save projects
const saveProjects = (projects) => {
  fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2));
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
  if (ADMIN_PASSWORD && password === ADMIN_PASSWORD) {
    const token = crypto.randomBytes(32).toString('hex');
    adminTokens.add(token);
    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, error: "Incorrect password" });
  }
});

app.get('/api/session', (req, res) => {
  const token = req.get('Authorization')?.replace(/^Bearer /, '');
  if (typeof token === 'string' && adminTokens.has(token)) {
    return res.sendStatus(204);
  }
  return res.sendStatus(401);
});

// Add a new project (Only Admin)
app.post('/api/blogs', (req, res) => {
  const { title, category, date, excerpt, fullContent, token } = req.body;
  
  if (typeof token !== 'string' || !adminTokens.has(token)) {
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

// --- CONTACT FORM ROUTE ---
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  const newMessage = {
    id: Date.now(),
    name,
    email,
    message,
    date: new Date().toLocaleString()
  };

  // Read existing messages or start a new array
  let messages = [];
  if (fs.existsSync(messagesFilePath)) {
    const fileData = fs.readFileSync(messagesFilePath, 'utf8');
    messages = JSON.parse(fileData);
  }

  // Add new message and save to file
  messages.push(newMessage);
  fs.writeFileSync(messagesFilePath, JSON.stringify(messages, null, 2));

  res.json({ success: true, message: 'Message received!' });
});

app.use(express.static(buildDirectory));
app.get(/.*/, (req, res, next) => {
  if (req.path.startsWith('/api/') || !fs.existsSync(path.join(buildDirectory, 'index.html'))) {
    return next();
  }
  return res.sendFile(path.join(buildDirectory, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});