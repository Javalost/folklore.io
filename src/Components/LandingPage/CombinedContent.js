import React, { useState } from 'react';
import { Box } from '@mui/material';
import HomeIndexContent from './HomeIndexContent';
import MainContent from './MainContent';

function CombinedContent() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(156deg, #006080, #006181 47%, #003648)' 
      }}
    >
      <Box 
        component="header" // Optionally use "header" tag for semantic purposes
        sx={{
          background: 'white',
          color: 'black',
          display: 'flex',
          justifyContent: 'center', // centers the tabs horizontally
          
        }}
      >
        <HomeIndexContent value={selectedTab} onChange={handleTabChange} />
      </Box>
      <MainContent onSectionInView={handleTabChange} />
    </Box>
  );
}

export default CombinedContent;
