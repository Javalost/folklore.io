import React, { useState } from 'react';
import {
  Container, Paper, Avatar, Typography, Grid, Button, Box, ButtonBase
} from '@mui/material';

function StoryContent() {
  const stories = [
    // ... your story data
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
                justifyContent="center" 
                alignItems="center"
                sx={{ listStyle: 'none', height: '80px', padding: '8px 0' }} // Explicit height is added
              >
                <ButtonBase style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                  <Avatar src={story.countryFlag} alt={story.storyName} />
                  <Typography variant="h6" sx={{ marginLeft: '10px' }}>
                    {story.storyName}
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
