// import React, { createContext, useState, useMemo, useEffect } from 'react';
// import axios from 'axios';

// export const MyContext = createContext();

// export const MyProvider = ({ children }) => {
//   const [state, setState] = useState({
//     loginData: null,
//     apiData: null,
//   });

//   useEffect(() => {

//     axios.get('/server/api_application_function/getuserdetails')
//       .then((response) => {
//         console.log('user details',response.data)
//         const userData = response.data;
//         setState((prevState) => ({
//           ...prevState,
//           loginData: userData,
//         }));


//         if (userData) {
//           axios.get('/server/api_application_function/getUserApi', {
//             params: { email: userData.email_id },
//           })
//             .then((response2) => {
//              console.log('dashboard data',response2)
//               setState((prevState) => ({
//                 ...prevState,
//                 apiData: response2.data,
//               }));
//             })
//             .catch((error2) => {
//               console.log('Error in getting data for dashboard', error2);
//             });
//         }
//       })
//       .catch((error) => {
//         console.log('Error in getting user data from MyProvider', error);
//       });
//   }, []); 

//   const contextValue = useMemo(() => ({ state, setState }), [state]);

//   return (
//     <MyContext.Provider value={contextValue}>
//       {children}
//     </MyContext.Provider>
//   );
// };







// import React, { createContext, useState, useMemo, useEffect } from 'react';
// import axios from 'axios';

// export const MyContext = createContext();

// export const MyProvider = ({ children }) => {
//   const [state, setState] = useState({
//     loginData: null,
//     apiData: null,
//     isAuthenticated: false,
//   });

//   console.log('states',state)
//   useEffect(() => {
//     axios.get('/server/api_application_function/getuserdetails')
//       .then((response) => {
//         console.log('user details', response.data);
//         const userData = response.data;

//         setState((prevState) => ({
//           ...prevState,
//           loginData: userData,
//           isAuthenticated: !!userData,
//         }));

//         if (userData) {
//           axios.get('/server/api_application_function/getUserApi', {
//             params: { email: userData.email_id },
//           })
//             .then((response2) => {
//               console.log('dashboard data', response2);
//               setState((prevState) => ({
//                 ...prevState,
//                 apiData: response2.data,
//               }));
//             })
//             .catch((error2) => {
//               console.log('Error in getting data for dashboard', error2);
//             });
//         }
//       })
//       .catch((error) => {
//         console.log('Error in getting user data from MyProvider', error);
//       });
//   }, []);

//   const contextValue = useMemo(() => ({ state, setState }), [state]);

//   return (
//     <MyContext.Provider value={contextValue}>
//       {children}
//     </MyContext.Provider>
//   );
// };










// import React, { createContext, useState, useMemo, useEffect } from 'react';
// import axios from 'axios';

// export const MyContext = createContext();

// export const MyProvider = ({ children }) => {
//   const [state, setState] = useState({
//     loginData: null,
//     apiData: null,
//     isAuthenticated: false,
//     loading: true,
//     adminData: null,
//     allUsersDetails: null,
//   });

//   console.log('states', state);

//   useEffect(() => {
//     axios.get('/server/api_application_function/getuserdetails')
//       .then((response) => {
//         console.log('user details', response.data);
//         const userData = response.data;

//         setState((prevState) => ({
//           ...prevState,
//           loginData: userData,
//           isAuthenticated: !!userData,
//         }));

//         if (userData) {
//           axios.get('/server/api_application_function/getUserApi', {
//             params: { email: userData.email_id },
//           })
//             .then((response2) => {
//               console.log('dashboard data', response2);
//               setState((prevState) => ({
//                 ...prevState,
//                 apiData: response2.data,
//               }));
//             })
//             .catch((error2) => {
//               console.log('Error in getting data for dashboard', error2);
//             });
//         }

//         if (userData.role_details.role_name == 'App Administrator') {
//           // axios.get('/server/api_application_function/getAdminData')
//           //   .then((response3) => {
//           //     setState((prevState) => ({
//           //       ...prevState,
//           //       adminData: response3.data
//           //     }))
//           //   }).catch(error => console.log('error in getting admin data', error))

//           axios.get('/server/api_application_function/getAllUserDetails')
//             .then((response4) => {
//               console.log('response for admin all users data',response4)
//               setState((prevState) => ({
//                 ...prevState,
//                 allUsersDetails: response4.data
//               }))
//             }).catch(error => console.log('error in getting all users data', error))
//         }
//       })
//       .catch((error) => {
//         console.log('Error in getting user data from MyProvider', error);
//       })
//       .finally(() => {
//         setState((prevState) => ({
//           ...prevState,
//           loading: false,
//         }));
//       });
//   }, []);

//   const contextValue = useMemo(() => ({ state, setState }), [state]);

//   return (
//     <MyContext.Provider value={contextValue}>
//       {children}
//     </MyContext.Provider>
//   );
// };







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