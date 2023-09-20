import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  Box,
  Fade, 
  Tooltip
} from '@mui/material';

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
    }, fadeDuration * 6);  // Switch every 6 seconds 

    return () => clearInterval(interval);  // Cleanup when unmounting
}, [onSwitchStory, fadeDuration]);

useEffect(() => {
    resetFade();
}, [storyIndex]);

  return (
    <Link to="/mapbox" style={{ textDecoration: 'none' }}>
        <Tooltip title="Show Map" followCursor>
            <Fade in={fade} timeout={fadeDuration}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
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
                        <CardContent sx={{ marginTop: '3rem', flexGrow: 1, overflowY: 'auto' }}>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                paragraph
                                sx={{ color: 'white' }}
                            >
                                {stories[storyIndex].story}
                            </Typography>
                        </CardContent>
                        <Box sx={{ padding: 2, color: 'white', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                            <Typography>{storyIndex + 1} of {totalStories}</Typography>
                        </Box>
                    </Card>
                </Box>
            </Fade>
        </Tooltip>

        {isLastStory && (
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                {/* Reset to the first story when at the end */}
                <button onClick={resetFade}>Restart</button>
            </div>
        )}
    </Link>
);

}

export default DetailedStory;
