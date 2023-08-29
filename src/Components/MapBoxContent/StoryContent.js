import React from 'react';
import { Container, Box } from '@mui/material';
import FTabs from './FTabs';

function StoryContent() {

  return (
    <Container sx={{ flex: 1, display: 'flex', flexDirection: 'column'}}>
        <Box 
          component="li"  
          display="flex"  
          justifyContent="start" 
          sx={{ listStyle: 'none', width: '50rem', height: '80px', }} 
        >
        </Box>
    
      <FTabs/>
    </Container>
  );
}

export default StoryContent;
