import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your page components
import Dashboard from '../userComponents/Views/Dashboard';
import ApiKey from '../userComponents/Views/ApiKey'
import About from '../userComponents/Views/About'


const CustomLayout = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/apikey" element={<ApiKey />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};


export default CustomLayout