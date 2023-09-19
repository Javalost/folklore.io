import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  Box,
  Button,
  IconButton,
  Fade, 
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

function DetailedStory({
  stories,
  totalStories,
  storyIndex,
  onSwitchStory,
  setSelectedStory,
}) {
  const [fade, setFade] = useState(false);
  const isLastStory = storyIndex === totalStories - 1;
  const fadeDuration = 1000; // 1 second

  const resetFade = () => {
    setFade(false);
    setTimeout(() => {
      setFade(true);
    }, fadeDuration);
  };

  useEffect(() => {
    const interval = setInterval(() => {
        onSwitchStory(1);  // Switch to the next story
    }, fadeDuration * 4);  // Switch every 2 seconds (you can adjust this time)

    return () => clearInterval(interval);  // Cleanup when unmounting
}, [onSwitchStory, fadeDuration]);

useEffect(() => {
    resetFade();
}, [storyIndex]);

  return (
    <Link to="/mapbox" style={{ textDecoration: 'none' }}> 
          <Tooltip title="Show Map" followCursor>
      <Fade in={fade} timeout={fadeDuration}>
        <div>
            <Box sx={{ display: 'flex', border:'solid', flexDirection: 'row',}}>
              <Card elevation={3} sx={{ borderRadius: '20px', width: '40rem', height: '45rem', display: 'flex', flexDirection: 'column', backgroundColor: '#13120f' }}>
                <CardHeader
                  sx={{ borderRadius: '19px', background: 'linear-gradient(45deg, #539bfe, #2979ff, #005cd2)' }}
                  avatar={
                    <Avatar
                      src={`https://flagcdn.com/w640/${stories[storyIndex].iso.toLowerCase()}.png`}
                      alt={`${stories[storyIndex].name}'s flag`}
                    />
                  }
                  title={
                    <Typography variant="h4" color="white">
                      {stories[storyIndex].name}
                    </Typography>
                  }
                />
                <CardContent
                  sx={{ marginTop: '3rem', overflowY: 'auto' }}
                >
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    paragraph
                    sx={{ color: 'white' }}
                  >
                    {stories[storyIndex].story}
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '3rem', padding: 2, color: 'white' }}>
                  <Typography>{storyIndex + 1} of {totalStories}</Typography>
                </Box>
              </Card>
            </Box>
        </div>
      </Fade>
      </Tooltip>

      {isLastStory && (
        <div>
          {/* Reset to the first story when at the end */}
          <button onClick={resetFade}>Restart</button>
        </div>
      )}
    </Link>
  );
}

export default DetailedStory;
