import React from 'react';
import { Container, Paper, Avatar, Typography, Box, ButtonBase } from '@mui/material';

function StoryContent() {
  // These were placeholders for actual data. I'm leaving them commented.
  const storyContent = "words";
  // const username = "...";
  
  return (
    <Container sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Paper sx={{ padding: '10px', flex: 1 }}>
        <Box 
          component="li" 
          display="flex" 
          justifyContent="start" 
          alignItems="center"
          sx={{ listStyle: 'none', width: '50rem', height: '80px', padding: '4px 0' }} 
        >
          <ButtonBase 
            sx={{ width: '100%', display: 'flex', marginLeft: '20px', justifyContent: 'start', gap: '0' }}
          >
            <Avatar 
              //src={story.countryFlag} 
              sx={{ width: 24, height: 24, marginRight: '20px' }} 
            />
            <Typography variant="body1" component="div">
              storyContent +storyContent +storyContent +storyContent {/* storyContent */}
            </Typography>
            <Typography 
              variant="body2" 
              component="span"
              sx={{ marginLeft: '11rem' }}
            >
              {/* username */} 
              yuh234
            </Typography>
          </ButtonBase>
        </Box>
      </Paper>
    </Container>
  );
}

export default StoryContent;
