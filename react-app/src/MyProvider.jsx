import React, { createContext, useState, useMemo, useEffect } from 'react';
import axios from 'axios'

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [state, setState] = useState([]);

  useEffect(()=>{
    axios.get('/server/api_application_function/getuserdetails')
        .then((response)=>{
            setState(response.data)
        }).catch((error)=>{
            console.log('error in getting user data from MyProvider',error)
        })
  },[])

  const contextValue = useMemo(() => ({ state, setState }), [state]);

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};
