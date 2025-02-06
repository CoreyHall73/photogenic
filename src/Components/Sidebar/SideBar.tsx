import React, { useState, useEffect } from 'react';
import '../../theme.css';
import './SideBar.css';

const SideBar: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">My Sidebar</h2>
      <nav className="nav-links">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Services</a>
        <a href="#" className="nav-link">Contact</a>
      </nav>
      <button onClick={toggleTheme} className="theme-button">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default SideBar;