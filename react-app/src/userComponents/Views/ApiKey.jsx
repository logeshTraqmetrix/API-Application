// import React, { useContext, useEffect, useReducer, useState } from 'react';
// import { MyContext } from '../../MyProvider';
// import axios from 'axios';
// import { Box, TextField, Button, Typography, CircularProgress, Snackbar } from '@mui/material';

// const initialState = {
//   apiKey: null,
//   loading: true,
//   error: null,
// };


// const apiKeyReducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_START':
//       return { ...state, loading: true, error: null };
//     case 'FETCH_SUCCESS':
//       return { ...state, apiKey: action.payload, loading: false, error: null };
//     case 'FETCH_ERROR':
//       return { ...state, apiKey: null, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// const ApiKey = () => {
//   const { state } = useContext(MyContext);
//   const [apiState, dispatch] = useReducer(apiKeyReducer, initialState);
//   const [openSnackbar, setOpenSnackbar] = useState(false);

//   useEffect(() => {
//     if (state?.email_id) {
//       dispatch({ type: 'FETCH_START' });

//       axios
//         .get('/server/api_application_function/getUserApi', {
//           params: { email: state.email_id },
//         })
//         .then((response) => {
//           if (response.data?.ApiKey) {
//             dispatch({ type: 'FETCH_SUCCESS', payload: response.data.ApiKey });
//           } else {
//             dispatch({ type: 'FETCH_SUCCESS', payload: '' });
//           }
//         })
//         .catch((error) => {
//           console.error('Error fetching API key:', error);
//           dispatch({ type: 'FETCH_ERROR', payload: 'Failed to fetch API key.' });
//         });
//     }
//   }, [state?.email_id]);

//   const { apiKey, loading, error } = apiState;

//   const handleCopy = () => {
//     if (apiKey) {
//       navigator.clipboard.writeText(apiKey).then(() => {
//         setOpenSnackbar(true);
//       }).catch((error) => {
//         console.error('Error copying text: ', error);
//       });
//     }
//   };

//   const renderApiKey = apiKey
//     ? `${apiKey.slice(0, 5)}${'#'.repeat(apiKey.length - 5)}`
//     : 'No API Key Created';

//   if (loading) return <CircularProgress />;
//   if (error) return <Typography color="error">{error}</Typography>;

//   return (
//     <Box sx={{ width: 400, margin: 'auto', padding: 2 }}>
//       <Typography variant="h6" gutterBottom>
//         Your API Key
//       </Typography>

//       <TextField
//         label="API Key"
//         value={renderApiKey}
//         fullWidth
//         InputProps={{
//           readOnly: true,
//         }}
//         variant="outlined"
//         sx={{ marginBottom: 2 }}
//       />

//       {apiKey && (
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <Button variant="contained" color="primary" onClick={handleCopy} sx={{ marginLeft: 1 }}>
//             Copy
//           </Button>
//         </Box>
//       )}

//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={2000}
//         onClose={() => setOpenSnackbar(false)}
//         message="API Key Copied!"
//       />
//     </Box>
//   );
// };

// export default ApiKey;







// import React, { useContext, useEffect, useReducer, useState } from 'react';
// import { MyContext } from '../../MyProvider';
// import axios from 'axios';
// import { Box, TextField, Button, Typography, CircularProgress, Snackbar } from '@mui/material';

// const initialState = {
//   apiKey: null,
//   loading: true,
//   error: null,
// };

// const apiKeyReducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_START':
//       return { ...state, loading: true, error: null };
//     case 'FETCH_SUCCESS':
//       return { ...state, apiKey: action.payload, loading: false, error: null };
//     case 'FETCH_ERROR':
//       return { ...state, apiKey: null, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// const ApiKey = () => {
//   const  state  = useContext(MyContext).state.apiData
//   const [apiState, dispatch] = useReducer(apiKeyReducer, initialState);
//   const [openSnackbar, setOpenSnackbar] = useState(false);

//   useEffect(() => {
//     if (state?.email_id) {
//       dispatch({ type: 'FETCH_START' });

//       axios
//         .get('/server/api_application_function/getUserApi', {
//           params: { email: state.email_id },
//         })
//         .then((response) => {
//           if (response.data?.ApiKey) {
//             dispatch({ type: 'FETCH_SUCCESS', payload: response.data.ApiKey });
//           } else {
//             dispatch({ type: 'FETCH_SUCCESS', payload: '' });
//           }
//         })
//         .catch((error) => {
//           console.error('Error fetching API key:', error);
//           dispatch({ type: 'FETCH_ERROR', payload: 'Failed to fetch API key.' });
//         });
//     }
//   }, [state?.email_id]);

//   const { apiKey, loading, error } = apiState;

//   const handleCopy = () => {
//     if (apiKey) {
//       navigator.clipboard.writeText(apiKey)
//         .then(() => setOpenSnackbar(true))
//         .catch((error) => console.error('Error copying text: ', error));
//     }
//   };

//   const renderApiKey = apiKey
//     ? `${apiKey.slice(0, 5)}${'#'.repeat(apiKey.length - 10)}`
//     : 'No API Key Created';

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '90vh',
//         backgroundColor: '#f9f9f9',
//       }}
//     >
//       <Box
//         sx={{
//           width: 400,
//           backgroundColor: 'white',
//           boxShadow: 3,
//           borderRadius: 2,
//           padding: 3,
//           textAlign: 'center',
//         }}
//       >
//         {loading ? (
//           <CircularProgress color="primary" />
//         ) : error ? (
//           <Typography color="error" variant="h6">
//             {error}
//           </Typography>
//         ) : (
//           <>
//             <Typography variant="h5" gutterBottom>
//               Your API Key
//             </Typography>

//             <TextField
//               label="API Key"
//               value={renderApiKey}
//               fullWidth
//               InputProps={{ readOnly: true }}
//               variant="outlined"
//               sx={{ marginBottom: 2, textAlign: 'center' }}
//             />

//             {apiKey && (
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleCopy}
//                 fullWidth
//               >
//                 Copy API Key
//               </Button>
//             )}
//           </>
//         )}

//         <Snackbar
//           open={openSnackbar}
//           autoHideDuration={2000}
//           onClose={() => setOpenSnackbar(false)}
//           message="API Key Copied!"
//         />
//       </Box>
//     </Box>
//   );
// };

// export default ApiKey;






import React, { useContext, useState } from 'react';
import { MyContext } from '../../MyProvider';
import { Box, TextField, Button, Typography, Snackbar } from '@mui/material';

const ApiKey = () => {
  // Directly using the data from the context
  const { apiData } = useContext(MyContext).state;
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const apiKey = apiData?.ApiKey || '';
  
  // Function to handle copy action
  const handleCopy = () => {
    if (apiKey) {
      navigator.clipboard.writeText(apiKey)
        .then(() => setOpenSnackbar(true))
        .catch((error) => console.error('Error copying text: ', error));
    }
  };

  // Render the API Key, obfuscating part of it for security
  const renderApiKey = apiKey
    ? `${apiKey.slice(0, 5)}${'#'.repeat(apiKey.length - 10)}`
    : 'No API Key Created';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        backgroundColor: '#f9f9f9',
      }}
    >
      <Box
        sx={{
          width: 400,
          backgroundColor: 'white',
          boxShadow: 3,
          borderRadius: 2,
          padding: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" gutterBottom>
          Your API Key
        </Typography>

        <TextField
          label="API Key"
          value={renderApiKey}
          fullWidth
          InputProps={{ readOnly: true }}
          variant="outlined"
          sx={{ marginBottom: 2, textAlign: 'center' }}
        />

        {apiKey && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleCopy}
            fullWidth
          >
            Copy API Key
          </Button>
        )}

        <Snackbar
          open={openSnackbar}
          autoHideDuration={2000}
          onClose={() => setOpenSnackbar(false)}
          message="API Key Copied!"
        />
      </Box>
    </Box>
  );
};

export default ApiKey;
