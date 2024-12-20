// import React from 'react'

// const Navbar = () => {
//   return (
//     <div style={{
//       height:"8vh",
//       backgroundColor:"white",
//       position:'fixed',
//       width:'100vw',
//       top:0,
//       display:'flex',
//       alignItems:'center',
//       paddingLeft:20,
//       boxShadow:'0 4px 6px rgba(0,0,0,0.1)',
//       fontFamily: "'Arial', sans-serif",
//       zIndex:10
//     }}>
//       <div >
//         Api Application
//       </div>
//     </div>
//   )
// }

// export default Navbar





// Navbar.jsx
import React from 'react';
import { Database } from 'lucide-react';
import './layout.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-logo">
          <Database className="logo-icon" />
          <span className="logo-text">DataAPI</span>
        </div>
        <div className="nav-profile">
          <div className="profile-avatar">
          MG
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;