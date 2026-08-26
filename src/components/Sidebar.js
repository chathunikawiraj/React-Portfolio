// src/components/Sidebar.js
import React from 'react';
import './styles/Sidebar.scss';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Brand */}
      <div className="sidebar-brand">
        <i className="fas fa-bolt"></i>
        <span>Learning Tra</span>
      </div>

      {/* Documents */}
      <div className="doc-section">
        <h4><i className="fas fa-folder-open"></i> Documents</h4>
        <div className="doc-item">
          <i className="fas fa-file-pdf"></i>
          <span className="doc-name">245047E.pdf</span>
          <span className="doc-type">PDF</span>
        </div>
        <div className="doc-item">
          <i className="fas fa-file-alt"></i>
          <span className="doc-name">In24-S3-IN2211</span>
          <span className="doc-type">DOC</span>
        </div>
        <div className="doc-item">
          <i className="fas fa-file-code"></i>
          <span className="doc-name">DeepSeek-Into</span>
          <span className="doc-type">MD</span>
        </div>
        <div className="doc-item">
          <i className="fas fa-file-image"></i>
          <span className="doc-name">New Tab</span>
          <span className="doc-type">PNG</span>
        </div>
        <div className="doc-item">
          <i className="fas fa-file-archive"></i>
          <span className="doc-name">my Portfolio</span>
          <span className="doc-type">ZIP</span>
        </div>
      </div>

      {/* Weather Widget */}
      <div className="weather-widget">
        <div className="weather-header">
          <h4><i className="fas fa-cloud-sun"></i> Weather</h4>
          <i className="fas fa-sync-alt refresh-icon"></i>
        </div>
        <div className="weather-temp">
          <div className="temp">28<span>°C</span></div>
          <div className="condition">Partly Cloudy</div>
        </div>
        <div className="weather-details">
          <span><i className="fas fa-tint"></i> 62%</span>
          <span><i className="fas fa-wind"></i> 14 km/h</span>
          <span><i className="fas fa-calendar-alt"></i> Aug 27</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;