import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography, Box, Button } from '@mui/material';

function FullStory({ story, totalStories, storyIndex, onSwitchStory, setSelectedStory }) { 
  console.log('Inside FullStory - storyIndex:', storyIndex);
console.log('Inside FullStory - totalStories:', totalStories);

  return (
        <Box sx={{ padding: 2 }}>
            <Card elevation={3} sx={{borderRadius: '15px'}}>
                <CardHeader
                    sx={{ borderRadius: '14px', background: 'linear-gradient(45deg, #539bfe, #2979ff, #005cd2)'}}
                    avatar={
                        <Avatar 
                            src={`https://flagcdn.com/w640/${story.country.toLowerCase()}.png`}
                            alt={`${story.country} flag`}
                        />
                    }
                    title={
                        <Typography variant="h4" color="white">
                            {story.name}
                        </Typography>
                    }
                />
                <CardContent
                  sx={{marginTop: '3rem'}}
                >
                    <Typography 
                        variant="body1"
                        color="text.secondary"
                        paragraph
                    >
                        {story.story}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2 }}>
                    <Button variant="contained" onClick={() => onSwitchStory(-1)}>Previous</Button>
                    <Typography>{storyIndex + 1} of {totalStories}</Typography>
                    <Button variant="contained" onClick={() => onSwitchStory(1)}>Next</Button>
                </Box>
            </Card>
            <Box sx={{ marginTop: 2 }}>
                <Button variant="outlined" fullWidth onClick={() => setSelectedStory(null)} 
                  sx={{background: 'linear-gradient(45deg, #539bfe, #2979ff, #005cd2)', color: 'white', border: 'solid'}}
                >
                  Back to List</Button>
            </Box>
        </Box>
    );
}

export default FullStory;
