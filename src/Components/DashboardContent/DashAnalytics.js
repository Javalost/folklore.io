import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Box, Card, Typography } from '@mui/material';
import DetailedStory from './DetailedStory'; 
import StoryChart from "./StoryChart"
import StoriesByISO from "./StoriesByISO"

function DashAnalytics() {
  const [stories, setStories] = useState([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3001/stories')
      .then(response => {
        setStories(response.data);
      })
      .catch(error => {
        console.error("Error fetching stories:", error);
      });
  }, []);

  const handleSwitchStory = useCallback((direction) => {
    if (direction === 1) {
        setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % stories.length);
    } else if (direction === -1) {
        setCurrentStoryIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : stories.length - 1));
    }
}, [stories.length]);


  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        backgroundColor: '#e9f2f8',
        justifyContent: 'space-around',
        padding: '0 0px',
      }}
    >
      {stories.length > 0 && (
        <DetailedStory
          stories={stories}
          totalStories={stories.length}
          storyIndex={currentStoryIndex}
          onSwitchStory={handleSwitchStory}
          setSelectedStory={() => {}}
        />
      )}

      <Card
        elevation={0}
        sx={{
          backgroundColor: '#e9f2f8',
          display: 'flex',
          flexDirection: 'column',
          width: '45%',
          height: '100%',
          boxSizing: 'border-box',
          margin: 0, 
          padding: 0,
        }}
      >
                <Box 
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    height: '100vh',
                    gap:'4rem'
                }}
            >
                <Card 
                    sx={{ 
                        height: '300px',
                        width: '100%',
                        boxSizing: 'border-box', 
                        border:'1px solid #dedede', 
                        display:'flex', 
                        flexDirection:'column', 
                        justifyContent:'center',
                        overflow: 'hidden',
                        margin: 0, // Explicitly set to 0
                        padding: 0  // Explicitly set to 0
                    }}
                >
                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <StoryChart></StoryChart> 
                    </Box> 
                    <Typography>and more</Typography>
                </Card>
                <Card 
                    sx={{ 
                        height: '300px',
                        width: '100%', 
                        border:'1px solid #dedede', 
                        display:'flex', 
                        flexDirection:'column',
                        margin: 0, // Explicitly set to 0
                        padding: 0  // Explicitly set to 0
                    }}
                >
                    <StoriesByISO/>
                </Card>
</Box>
            </Card>
        </Box>
    );
}

export default DashAnalytics;
