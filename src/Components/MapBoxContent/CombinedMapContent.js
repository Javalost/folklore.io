import React from 'react';
import StoryContent from './StoryContent';
import MapBox from './MapBox';
import { Box, Container } from '@mui/material';

function CombinedMapContent() {
  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '16px',
        width: '100%',
        height: '100vh',
        boxSizing: 'border-box',
        border: 'solid',
      }}
    >
      <StoryContent />
      <MapBox />
    </Container>
  );
}

export default CombinedMapContent;
