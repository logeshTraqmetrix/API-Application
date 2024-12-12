// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const CustomSidebar = () => {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <NavLink 
//               to="/home" 
//               end
//               className={({ isActive }) => 
//                 isActive ? 'active-link' : 'inactive-link'
//               }
//             >
//               Dashboard
//             </NavLink>
//           </li>
//           <li>
//             <NavLink 
//               to="/home/stockdata" 
//               end
//               className={({ isActive }) => 
//                 isActive ? 'active-link' : 'inactive-link'
//               }
//             >
//               Stocks Api Documentation
//             </NavLink>
//           </li>

//           <li>
//             <NavLink 
//               to="/home/pincodedata" 
//               end
//               className={({ isActive }) => 
//                 isActive ? 'active-link' : 'inactive-link'
//               }
//             >
//               pincode Api Documentation
//             </NavLink>
//           </li>
//           <li>
//             <NavLink 
//               to="/home/stock-api-playground" 
//               end
//               className={({ isActive }) => 
//                 isActive ? 'active-link' : 'inactive-link'
//               }
//             >
//               Stocks Api Playground
//             </NavLink>
//           </li>
//           <li>
//             <NavLink 
//               to="/home/pincode-api-playground"
//               end
//               className={({ isActive }) => 
//                 isActive ? 'active-link' : 'inactive-link'
//               }
//             >
//               pincode Api Playground
//             </NavLink>
//           </li>
//           <li>
//             <NavLink 
//               to="/home/subscription"
//               end
//               className={({ isActive }) => 
//                 isActive ? 'active-link' : 'inactive-link'
//               }
//             >
//               subscription
//             </NavLink>
//           </li>
//           <li>
//             <NavLink 
//               to="/home/apikey" 
//               className={({ isActive }) => 
//                 isActive ? 'active-link' : 'inactive-link'
//               }
//             >
//               API Key
//             </NavLink>
//           </li>
//           <li>
//             <NavLink 
//               to="/home/account" 
//               className={({ isActive }) => 
//                 isActive ? 'active-link' : 'inactive-link'
//               }
//             >
//               Account
//             </NavLink>
//           </li>
//           <li>
//             <NavLink 
//               to="/home/about" 
//               className={({ isActive }) => 
//                 isActive ? 'active-link' : 'inactive-link'
//               }
//             >
//               About
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

// export default CustomSidebar






// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const CustomSidebar = () => {
//   return (
//     <div className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white shadow-lg overflow-y-auto">
//       <div className="p-4">
//         <h2 className="text-xl font-semibold mb-6">Navigation</h2>
//         <nav>
//           <ul className="space-y-2">
//             <SidebarLink to="/home" label="Dashboard" icon="📊" />
//             <SidebarLink to="/home/stockdata" label="Stocks API Docs" icon="📑" />
//             <SidebarLink to="/home/pincodedata" label="Pincode API Docs" icon="📍" />
//             <SidebarLink to="/home/stock-api-playground" label="Stocks Playground" icon="🔧" />
//             <SidebarLink to="/home/pincode-api-playground" label="Pincode Playground" icon="⚡" />
//             <SidebarLink to="/home/subscription" label="Subscription" icon="💳" />
//             <SidebarLink to="/home/apikey" label="API Key" icon="🔑" />
//             <SidebarLink to="/home/account" label="Account" icon="👤" />
//             <SidebarLink to="/home/about" label="About" icon="ℹ️" />
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// const SidebarLink = ({ to, label, icon }) => {
//   return (
//     <li>
//       <NavLink
//         to={to}
//         end
//         className={({ isActive }) =>
//           `flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
//             isActive
//               ? 'bg-blue-600 text-white shadow-md'
//               : 'text-gray-300 hover:bg-gray-800 hover:text-white'
//           }`
//         }
//       >
//         <span className="mr-3">{icon}</span>
//         <span className="font-medium">{label}</span>
//       </NavLink>
//     </li>
//   );
// };

// export default CustomSidebar;




// CustomSidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './CustomSidebar.css';

const CustomSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        
        
        <nav className="sidebar-nav">
          <div className="sidebar-tabs">
            <TabLink to="/home" label="Dashboard" />
            <TabLink to="/home/stockdata" label="Stocks API Docs" />
            <TabLink to="/home/pincodedata" label="Pincode API Docs" />
            <TabLink to="/home/stock-api-playground" label="Stocks Playground" />
            <TabLink to="/home/pincode-api-playground" label="Pincode Playground" />
            <TabLink to="/home/subscription" label="Subscription" />
            <TabLink to="/home/apikey" label="API Key" />
            <TabLink to="/home/account" label="Account" />
            <TabLink to="/home/about" label="About" />
          </div>
        </nav>
      </div>
    </div>
  );
};

const TabLink = ({ to, label }) => {
  return (
    <NavLink to={to} end className="tab-link">
      <div className="tab-content">
        <span>{label}</span>
        <span className="tab-indicator">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="currentColor"
          >
            <path d="M5.293 12.293a1 1 0 0 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 1.414L9.586 8l-4.293 4.293z"/>
          </svg>
        </span>
      </div>
    </NavLink>
  );
};

export default CustomSidebar;