import React, { createContext, useState, useMemo, useEffect } from 'react';
import axios from 'axios';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [state, setState] = useState({
    loginData: null,
    apiData: null,
    isAuthenticated: false,
    loading: true,
    adminData: null,
    allUsersDetails: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get user details   
        const userResponse = await axios.get('/server/api_application_function/getuserdetails');
        const userData = userResponse.data;

        // Update state with user data
        setState(prev => ({
          ...prev,
          loginData: userData,
          isAuthenticated: !!userData,
        }));

        if (userData) {
          // Get API data for the user
          const apiResponse = await axios.get('/server/api_application_function/getUserApi', {
            params: { email: userData.email_id },
          });

          setState(prev => ({
            ...prev,
            apiData: apiResponse.data,
          }));

          // If user is admin, get additional data
          if (userData.role_details.role_name === 'App Administrator') {
            const usersResponse = await axios.get('/server/api_application_function/getAllUserDetails');
            
            setState(prev => ({
              ...prev,
              allUsersDetails: usersResponse.data,
            }));
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setState(prev => ({
          ...prev,
          loading: false,
        }));
      }
    };

    fetchData();
  }, []);

  const contextValue = useMemo(() => ({ state, setState }), [state]);

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;