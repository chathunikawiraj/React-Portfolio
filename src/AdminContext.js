// src/AdminContext.js
import React, { createContext, useEffect, useState } from 'react';

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) return;

    fetch('/api/session', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        if (response.ok) {
          setIsAdmin(true);
        } else if (response.status === 401) {
          localStorage.removeItem('adminToken');
        } else {
          throw new Error('Unable to verify admin session');
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const login = (token) => {
    localStorage.setItem('adminToken', token);
    setIsAdmin(true);
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setIsAdmin(false);
  };

  return (
    <AdminContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};