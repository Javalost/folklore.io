import React from 'react';
import { Tab, Tabs, Box } from '@mui/material';

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
            borderRight: 0, 
            borderColor: 'linear-gradient(156deg,#006080,#006181 47%,#003648)', 
            width: 240, 
            height: '100vh', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            background: 'linear-gradient(156deg,#006080,#006181 47%,#003648)' // Fixed gradient here 
           
        }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleTabChange}
        aria-label="Vertical tabs example"
        sx={{
          '& .Mui-selected': {  // Apply styles to the selected Tab
            borderBottom: '2px solid blue',  // Underline the tab
            '& .MuiTab-wrapper': {
              flexDirection: 'row',  // Switch the icon and the text positions
            },
          },
        }}
      >
        <Tab label="Tab One" />
        <Tab label="Tab Two" />
        <Tab label="Tab Three" />
      </Tabs>
    </Box>
  );
}

export default VerticalTabs;
