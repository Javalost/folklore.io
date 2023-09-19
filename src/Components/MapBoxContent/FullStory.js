import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography, Box, Button, IconButton } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

function FullStory({ story, totalStories, storyIndex, onSwitchStory, setSelectedStory }) { 
  return (
    <Box sx={{ flexGrow: 1, padding: 2, display: 'flex', flexDirection: 'column', alignItems:'center' }}>
            <Box sx={{display: 'flex', flexDirection:'row', alignItems:'center', gap: '15px'}}> 
                <IconButton 
                    onClick={() => onSwitchStory(-1)} 
                    style={{
                        padding: 8, 
                        borderRadius: '50%', 
                        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',  // You can adjust this shadow value as per your needs 
                        border: '1px solid white'
                    }}
                >
                    <ArrowLeftIcon style={{ fontSize: 24, color: 'white' }} />
                </IconButton> 
                <Card elevation={3} sx={{borderRadius: '15px', width: '35rem', height: '35rem', display: 'flex', flexDirection: 'column', backgroundColor: '#13120f'}}>
                    <CardHeader
                        sx={{ borderRadius: '14px', background: 'linear-gradient(45deg, #539bfe, #2979ff, #005cd2)'}}
                        avatar={
                            <Avatar 
                                src={`https://flagcdn.com/w640/${story.iso.toLowerCase()}.png`}
                                alt={`${story.name}'s flag`}
                            />
                        }
                        title={
                            <Typography variant="h4" color="white">
                                {story.name}
                            </Typography>
                        }
                    />
                    <CardContent
                        sx={{marginTop: '3rem',
                             height: '100vh', 
                             overflowY:'auto'    
                    }}
                    >
                        <Typography 
                            variant="body1"
                            color="text.secondary"
                            paragraph
                            sx={{
                            overflowY:"auto", 
                            color: 'white'
                            }}
                        >
                            {story.story}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:'flex-end', height: '3rem', padding: 2, color:'white'}}>
                        <Typography>{storyIndex + 1} of {totalStories}</Typography>
                    </Box>
                </Card>
                <IconButton 
                    onClick={() => onSwitchStory(1)} 
                    style={{
                        padding: 8, 
                        borderRadius: '50%', 
                        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',  // You can adjust this shadow value as per your needs 
                        border: '1px solid white'
                    }}
                >
                    <ArrowRightIcon style={{ fontSize: 24, color: 'white' }} />
                </IconButton>

            </Box>
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
