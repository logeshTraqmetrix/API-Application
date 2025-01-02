import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Database, 
  Mail, 
  PlayCircle,
  Key, 
  CreditCard,
  UserCircle,
  Info
} from 'lucide-react';
import './layout.css'

const CustomSidebar = () => {
  const menuItems = [
    { path: '/home', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/home/stockdata', label: 'Stock API Docs', icon: Database },
    { path: '/home/pincodedata', label: 'Pincode API Docs', icon: Mail },
    { path: '/home/stock-api-playground', label: 'Stock Playground', icon: PlayCircle },
    { path: '/home/pincode-api-playground', label: 'Pincode Playground', icon: PlayCircle },
    { path: '/home/subscription', label: 'Subscription', icon: CreditCard },
    { path: '/home/apikey', label: 'API Keys', icon: Key },
    { path: '/home/account', label: 'Account', icon: UserCircle },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`
            }
          >
            <item.icon className="sidebar-icon" />
            <span className="sidebar-label">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CustomSidebar;