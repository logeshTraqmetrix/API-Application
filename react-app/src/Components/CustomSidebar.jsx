// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './CustomSidebar.css';

// const CustomSidebar = () => {
//   return (
//     <div className="sidebar">
//       <div className="sidebar-container">
//         <nav className="sidebar-nav">
//           <div className="sidebar-tabs">
//             <TabLink to="/home" label="Dashboard" />
//             <TabLink to="/home/stockdata" label="Stocks API Docs" />
//             <TabLink to="/home/pincodedata" label="Pincode API Docs" />
//             <TabLink to="/home/stock-api-playground" label="Stocks Playground" />
//             <TabLink to="/home/pincode-api-playground" label="Pincode Playground" />
//             <TabLink to="/home/subscription" label="Subscription" />
//             <TabLink to="/home/apikey" label="API Key" />
//             <TabLink to="/home/calculator" label="Calculator" />
//             <TabLink to="/home/account" label="Account" />
//             <TabLink to="/home/about" label="About" />
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// const TabLink = ({ to, label }) => {
//   return (
//     <NavLink to={to} end className="tab-link">
//       <div className="tab-content">
//         <span>{label}</span>
//         <span className="tab-indicator">
//           <svg 
//             width="16" 
//             height="16" 
//             viewBox="0 0 16 16" 
//             fill="currentColor"
//           >
//             <path d="M5.293 12.293a1 1 0 0 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 1.414L9.586 8l-4.293 4.293z"/>
//           </svg>
//         </span>
//       </div>
//     </NavLink>
//   );
// };

// export default CustomSidebar;









import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaCogs, FaUser, FaInfoCircle, FaKey } from 'react-icons/fa'; // Import React Icons
import './CustomSidebar.css';

const CustomSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <nav className="sidebar-nav">
          <div className="sidebar-tabs">
            <TabLink to="/home" label="Dashboard" Icon={<FaHome />} />
            <TabLink to="/home/stockdata" label="Stocks API Docs" Icon={<FaKey />} />
            <TabLink to="/home/pincodedata" label="Pincode API Docs" Icon={<FaKey />} />
            <TabLink to="/home/stock-api-playground" label="Stocks Playground" Icon={<FaCogs />} />
            <TabLink to="/home/pincode-api-playground" label="Pincode Playground" Icon={<FaCogs />} />
            <TabLink to="/home/subscription" label="Subscription" Icon={<FaCogs />} />
            <TabLink to="/home/apikey" label="API Key" Icon={<FaKey />} />
            <TabLink to="/home/calculator" label="Calculator" Icon={<FaCogs />} />
            <TabLink to="/home/account" label="Account" Icon={<FaUser />} />
            <TabLink to="/home/about" label="About" Icon={<FaInfoCircle />} />
          </div>
        </nav>
      </div>
    </div>
  );
};

const TabLink = ({ to, label, Icon }) => {
  return (
    <NavLink to={to} end className="tab-link">
      <div className="tab-content">
        <span className="tab-label">{label}</span>
        <span className="tab-indicator">
          {Icon} {/* Use the passed React icon */}
        </span>
      </div>
    </NavLink>
  );
};

export default CustomSidebar;
