import React from 'react';
import { Container, Paper, Avatar, Typography, Box, ButtonBase } from '@mui/material';

function StoryContent() {
  const storyContent = "words";
  // const username = "...";

  return (
    <Container sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Paper elevation={0} sx={{ padding: '0px', flex: 1 }}>
        <Box 
          component="li"  
          display="flex"  
          justifyContent="start" 
          alignItems="center"
          sx={{ listStyle: 'none', width: '50rem', height: '80px', padding: '4px 0' }} 
        >
          {/* Avatar wrapped in ButtonBase */}
          <ButtonBase
            focusRipple
            sx={{
              borderRadius: '50%', // Circular shape
              overflow: 'hidden', // Ensure the ripple effect doesn't go outside of the circular shape
              marginRight: '15px',
            }}
          >
            <Avatar 
              //src={story.countryFlag} 
              sx={{ width: 24, height: 24 }} 
            />
          </ButtonBase>
          
          {/* Story content wrapped in ButtonBase */}
          <ButtonBase>
            <Typography variant="body1" component="div">
              {storyContent + storyContent + storyContent + storyContent}
            </Typography>
          </ButtonBase>

          {/* Username wrapped in ButtonBase */}
          <ButtonBase sx={{ marginLeft: '11rem' }}>
            <Typography 
              variant="body2" 
              component="span"
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
