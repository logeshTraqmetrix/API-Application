// Updated CustomSidebar Component
import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './sidebar.module.css';

const CustomSidebar = () => {
  const routes = [
    { path: '/dashboard', name: 'Dashboard' },
    { path: '/apiey', name: 'Apikey' },
    { path: '/about', name: 'About' }
  ];

  return (
    <div className={Styles.sidebarMainDiv}>
      <nav>
        {routes.map((route) => (
          <Link 
            key={route.path} 
            to={route.path} 
            className={Styles.sidebarLink}
          >
            {route.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};



export default CustomSidebar