import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { MyProvider } from './MyProvider';
import { createRoutesFromElements, Route, RouterProvider, createHashRouter } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import CustomLayout from './Components/CustomLayout';
import Dashboard from './userComponents/Views/Dashboard';
import ApiKey from './userComponents/Views/ApiKey';
import About from './userComponents/Views/About';
import StocksData from './userComponents/Views/StocksData'
import PincodeData from './userComponents/Views/PincodeData'
import PincodeDataPlayground from './userComponents/Views/PincodeDataPlayground'
import StockDataPlayGround from './userComponents/Views/StockDataPlayGround'
import Subscription from './userComponents/Subscription/Subscription'
import Notfound from './Static/Notfound'
import LoginDetails from './LoginDetails/LoginDetails';

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="home" element={<CustomLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="stockdata" element={<StocksData />} />
        <Route path="pincodedata" element={<PincodeData />} />
        <Route path="stock-api-playground" element={<StockDataPlayGround />} />
        <Route path="pincode-api-playground" element={<PincodeDataPlayground />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="apikey" element={<ApiKey />} />
        <Route path="account" element={<LoginDetails />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path='*' element={<Notfound/>}/>
    </>
  )
);

ReactDOM.render(
  <MyProvider>
    <RouterProvider router={router} />
  </MyProvider>,
  document.getElementById('root')
);

reportWebVitals();
