import React from 'react';
import { Tab, Tabs, Box, Typography } from '@mui/material';


function HomeIndexContent({ value, onChange }) {
  
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
        <Typography 
                            variant="h4"
                            sx={{
                                background: 'linear-gradient(156deg, #0080A0, #004060)', 
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            Folklore
                            </Typography>
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

export default HomeIndexContent;
