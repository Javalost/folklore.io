import React from 'react';
import StoryContainer from './StoryContainer';
import MapBox from './MapBox';
import { Box, Container } from '@mui/material';

function CombinedMapContent() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        margin: '0',
        width: '100%',
        height: '100vh',
        boxSizing: 'border-box',
      }}
    >
      <StoryContainer sx={{ flex: 1 }}/>
      <MapBox sx={{ flex: 1 }}/>
    </Box>
  );
}


export default CombinedMapContent;
