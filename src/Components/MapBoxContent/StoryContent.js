import React from 'react';
import { Box, Container, Chip, Typography } from '@mui/material';

function StoryContent() {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', border: 'solid', flex: 1, height: '100%'}}>
      <Box sx={{ border: '1px solid #ccc', padding: '16px' }}>
        <Chip label="Chip Test" variant="outlined" />
      </Box>
      <Box sx={{ border: '1px solid #ccc', padding: '16px' }}>
        {/* mapbox container */}
      </Box>
    </Container>
  );
}

export default StoryContent;
