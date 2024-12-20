// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaHome, FaCogs, FaUser, FaInfoCircle, FaKey } from 'react-icons/fa';
// import './CustomSidebar.css';

// const CustomSidebar = () => {
//   return (
//     <div className="sidebar">
//       <div className="sidebar-container">
//         <nav className="sidebar-nav">
//           <div className="sidebar-tabs">
//             <TabLink to="/home" label="Dashboard" Icon={<FaHome />} />
//             <TabLink to="/home/stockdata" label="Stocks API Docs" Icon={<FaKey />} />
//             <TabLink to="/home/pincodedata" label="Pincode API Docs" Icon={<FaKey />} />
//             <TabLink to="/home/stock-api-playground" label="Stocks Playground" Icon={<FaCogs />} />
//             <TabLink to="/home/pincode-api-playground" label="Pincode Playground" Icon={<FaCogs />} />
//             <TabLink to="/home/subscription" label="Subscription" Icon={<FaCogs />} />
//             <TabLink to="/home/apikey" label="API Key" Icon={<FaKey />} />
//             <TabLink to="/home/account" label="Account" Icon={<FaUser />} />
//             <TabLink to="/home/about" label="About" Icon={<FaInfoCircle />} />
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// const TabLink = ({ to, label, Icon }) => {
//   return (
//     <NavLink to={to} end className="tab-link">
//       <div className="tab-content">
//         <span className="tab-label">{label}</span>
//         <span className="tab-indicator">
//           {Icon}
//         </span>
//       </div>
//     </NavLink>
//   );
// };

// export default CustomSidebar;







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
    { path: '/home/about', label: 'About', icon: Info }
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