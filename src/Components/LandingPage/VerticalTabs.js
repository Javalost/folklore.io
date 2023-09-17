import React from 'react';
import { Tab, Tabs, Box, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useUser, UserButton, useClerk } from '@clerk/clerk-react';

function VerticalTabs({ value, onChange }) {
  
  const { user } = useUser(); // Get the current user using the useUser hook 
  const { client } = useClerk();


  const handleSignOut = async () => {
    await client.signOut();
    window.location.href = '/';
  };
  
  const handleTabChange = (event, newValue) => {
    onChange(newValue);
    switch (newValue) {
      case 0:
        document.getElementById('tab-one').scrollIntoView({ behavior: 'smooth' });
        break;
      case 1:
        document.getElementById('tab-two').scrollIntoView({ behavior: 'smooth' });
        break;
      case 2:
        document.getElementById('tab-three').scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <Box 
        sx={{ 
            width: '100%',
            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'space-between',
            background: 'transparent',
            padding: '.5rem'
        }}
    >
      <Box 
        sx = {{ 
            display: 'flex',
            alignItems: 'center'
        }}
      >
        <Typography variant = "h4" fontWeight='bold' sx={{marginLeft:'10px'}}>FOLKORE</Typography>
      </Box>
      <Tabs
        variant="scrollable"
        value={value}
        onChange={handleTabChange}
        aria-label="Tabs example"
        sx={{
          '& .Mui-selected': {
            borderBottom: '2px solid white',
            color: 'black',
          },
          '.MuiTab-root': {
            color: 'black',
          }
        }}
      >
        <Tab label="Tab One" />
        <Tab label="Tab Two" />
        <Tab label="Tab Three" /> 
        <Tab label="Tab Four"/>
      </Tabs>
    </Box>
  );
}

export default VerticalTabs;
