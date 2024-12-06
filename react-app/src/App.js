import React, { useEffect, useState } from 'react'
// import StockDataUpload from './AdminComponents/Forms/StockDataUpload'
// import Subscription from './userComponents/Subscription/Subscription'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginDetails from './LoginDetails/LoginDetails'


import LandingPage from './LandingPage/LandingPage'
import Home from './userComponents/Views/Home'
import { Route, Routes, HashRouter as Router } from 'react-router-dom'
import Notfound from './Static/Notfound'
import axios from 'axios'

const App = () => {
  const [userData,setUserData] = useState([])

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const res = await axios.get('/server/api_application_function/getuserdetails');
        console.log('user details login app.js', res.data);
        setUserData(res.data);
      } catch (err) {
        console.error('Error fetching user role:', err);
      }
    };
    fetchUserRole();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </Router>
  )
}

export default App