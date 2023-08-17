import React, { useState } from 'react';
import {
  Container, Paper, Avatar, Typography, Grid, Button, Box, ButtonBase
} from '@mui/material';

function StoryContent() {
  const stories = [
    { 
      countryFlag: 'https://restcountries.com/v3/flags/us.png',
      storyContent: 'These are the first eight words of the story.',
      username: 'John Doe'
    },
    // ... more story data
  ];

  const [page, setPage] = useState(0);
  const itemsPerPage = 8;
  const slicedStories = stories.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <Container sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Paper sx={{ border: '1px solid #ccc', padding: '10px', flex: 1 }}>
        <Grid container spacing={2}>
          {slicedStories.map((story, index) => (
            <Grid item xs={6} key={index}>
              <Box 
                component="li" 
                display="flex" 
                justifyContent="start" 
                alignItems="center"
                sx={{ listStyle: 'none', width: '50rem',height: '80px', padding: '8px 0' }} 
              >
                <ButtonBase style={{ width: '100%', display: 'flex', justifyContent: 'start', gap: '0',}}>

                  <Avatar 
                    src={story.countryFlag} 
                    alt={story.storyName} 
                    sx={{ 
                      width: 24, 
                      height: 24,
                      marginRight: '13px'
                    }} 
                  />
                  
                  <Typography 
                    variant="body1" 
                    component="div"
                    >
                    {story.storyContent.split(" ").slice(0, 8).join(" ")}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    component="span"
                    sx={{
                      marginLeft:'11rem'
                    }}
                    >
                    {story.username}
                  </Typography>
                </ButtonBase>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Grid container justifyContent="center" mt={2}>
          {page > 0 && (
            <Button variant="contained" onClick={() => setPage(prev => prev - 1)}>
              Previous
            </Button>
          )}
          {stories.length > (page + 1) * itemsPerPage && (
            <Button variant="contained" onClick={() => setPage(prev => prev + 1)} style={{ marginLeft: page > 0 ? '10px' : '0' }}>
              Next
            </Button>
          )}
        </Grid>
      </Paper>
    </Container>
  );
}

export default StoryContent;
