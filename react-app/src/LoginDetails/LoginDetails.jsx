import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Avatar, Box, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import EventIcon from '@mui/icons-material/Event';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import axios from 'axios';

const LoginDetails = () => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const res = await axios.get('/server/api_application_function/getuserdetails');
        console.log('user details login', res.data);
        setUserDetails(res.data);
      } catch (err) {
        console.error('Error fetching user role:', err);
      }
    };
    fetchUserRole();
  }, []);

  const logout = () => {
    const redirectURL = "/";
    window.catalyst.auth.signOut(redirectURL);
  };

  return (
    <Card 
      sx={{
        maxWidth: 400,
        mx: 'auto',
        my: 4,
        p: 3,
        borderRadius: 2,
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(135deg, #f0f4f8, #e2e8f0)',
      }}
    >
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar
            sx={{
              width: 80,
              height: 80,
              mb: 2,
            }}
            src={`https://ui-avatars.com/api/?name=${userDetails.first_name}+${userDetails.last_name}&background=random`}
            alt={`${userDetails.first_name} ${userDetails.last_name}`}
          />
          <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: '#2d3748' }}>
            {`${userDetails.first_name} ${userDetails.last_name}`}
          </Typography>
          <Box display="flex" alignItems="center" mt={1} color="#718096">
            <EmailIcon fontSize="small" sx={{ mr: 1 }} />
            <Typography variant="body2">
              {userDetails.email_id}
            </Typography>
          </Box>
          <Typography variant="caption" color="textSecondary" sx={{ mt: 1 }}>
            User ID: {userDetails.user_id}
          </Typography>

          <Box display="flex" alignItems="center" mt={2} color="#4a5568">
            <EventIcon sx={{ mr: 1 }} />
            <Typography variant="body2">
              Created: {new Date(userDetails.created_time).toLocaleDateString()}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mt={1} color="#4a5568">
            <PersonAddIcon sx={{ mr: 1 }} />
            <Typography variant="body2">
              Invited: {new Date(userDetails.invited_time).toLocaleDateString()}
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="primary"
            sx={{
              mt: 3,
              px: 3,
              borderRadius: '20px',
              backgroundColor: '#3182ce',
              '&:hover': {
                backgroundColor: '#2b6cb0',
              },
            }}
            startIcon={<ExitToAppIcon />}
            onClick={logout}
          >
            Logout
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LoginDetails;
