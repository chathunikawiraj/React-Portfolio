// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AdminProvider } from './AdminContext'; // Import this
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminProvider> {/* Wrap App with AdminProvider */}
        <App />
      </AdminProvider>
    </BrowserRouter>
  </React.StrictMode>
);