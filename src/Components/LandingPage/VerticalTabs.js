import React from 'react';
import { Tab, Tabs, Box, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';

function VerticalTabs({ value, onChange }) {
  
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
            alignItems: 'center', // Vertically center the content
            justifyContent: 'space-between', // Align content to the start (left)
            background: 'transparent', // ensure the gradient from parent is visible
            padding: '.5rem'
        }}
    >
      <Box 
        sx = {{ 
            display: 'flex',
            alignItems: 'center'
        }}
      >
        <DashboardIcon color="primary" style={{ fontSize: '5rem', marginRight: '10px' }} />  
        <Typography variant = "h4">MY APP</Typography>
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
