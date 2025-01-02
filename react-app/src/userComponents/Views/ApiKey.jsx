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
