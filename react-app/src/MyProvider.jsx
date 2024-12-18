import React, { createContext, useState, useMemo, useEffect } from 'react';
import axios from 'axios';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [state, setState] = useState({
    loginData: null,
    apiData: null,
  });

  useEffect(() => {
   
    axios.get('/server/api_application_function/getuserdetails')
      .then((response) => {
        const userData = response.data;
        setState((prevState) => ({
          ...prevState,
          loginData: userData,
        }));

       
        axios.get('/server/api_application_function/getUserApi', {
          params: { email: userData.email_id },
        })
          .then((response2) => {
           console.log('dashboard data',response2)
            setState((prevState) => ({
              ...prevState,
              apiData: response2.data,
            }));
          })
          .catch((error2) => {
            console.log('Error in getting data for dashboard', error2);
          });
      })
      .catch((error) => {
        console.log('Error in getting user data from MyProvider', error);
      });
  }, []); 

  const contextValue = useMemo(() => ({ state, setState }), [state]);

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

