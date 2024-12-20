// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { MyContext } from './MyProvider';

// const ProtectedRoute = ({ children }) => {
//   const { state } = React.useContext(MyContext);

//   console.log('states from Protected routes', state)
//   if (!state.isAuthenticated) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;






import React from 'react';
import { Navigate } from 'react-router-dom';
import { MyContext } from './MyProvider';
import AdminDashboard from './AdminComponents/Views/AdminHome';

const ProtectedRoute = ({ children }) => {
  const { state } = React.useContext(MyContext);

  console.log('states from ProtectedRoute', state);

  if (state.loading) {
    return <div>Loading...</div>;
  }

  if (!state.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return state.loginData.role_details.role_name == 'App Administrator' ? <AdminDashboard/> : children
};

export default ProtectedRoute;
