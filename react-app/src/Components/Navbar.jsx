import React from 'react';
import { Database } from 'lucide-react';
import './layout.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-logo">
          <Database className="logo-icon" />
          <span className="logo-text">API-Outlet</span>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;