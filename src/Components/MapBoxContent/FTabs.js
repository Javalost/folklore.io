import React from 'react';
import { Box, Typography, CardActionArea, CardMedia, CardContent, CardActions, Button, Card } from '@mui/material'; 


function FTabs({iso, storyIndex, storyContent, toggleDrawer, setMapCenter, setSelectedStoryIndex, setDrawerOpen }) { 
    const flagURL = `https://flagcdn.com/w640/${iso.toLowerCase()}.png`;

    const handleTabClick = () => {
        // Find the index of the story in the stories array by its ID
        
        // Set the located index as the selectedStoryIndex
        setSelectedStoryIndex(storyIndex);
        
        if (typeof setDrawerOpen === 'function') {
            setDrawerOpen(true);
        }
        //toggleDrawer(); 
    }
    
    

    return (
        <Box sx={{ marginBottom: '15px', height: 'calc(45vh - 70px)', width: 345 }}> 
            <Card 
                onClick={handleTabClick}
                sx={{ height: '100%', display: 'flex', backgroundColor: '#303133',flexDirection: 'column', boxShadow: 3, borderRadius: '15px' }}
            >
                <CardActionArea sx={{ flexGrow: 1 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={flagURL}
                        alt={`${storyContent.country} flag`}
                    />
                    <CardContent sx={{ flexGrow: 1, overflow: 'hidden' }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{color: 'white'}}>
                            {storyContent.name}
                        </Typography>
                        <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{ 
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 2,  // number of lines you want to display
                                overflow: 'hidden', 
                                color:'white'
                            }}
                        >
                            {storyContent.story}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button 
                    size="small" 
                    color="primary"
                    onClick={() => {
                        const latitude = parseFloat(storyContent.latitude);
                        const longitude = parseFloat(storyContent.longitude);
                        setMapCenter([latitude, longitude]);
                        console.log("ive clicked!")
                    }}
                    sx={{
                        '&:hover': {
                            backgroundColor: 'rgba(0, 92, 210, 0.8)',
                        },
                        transition: 'background-color 0.3s',
                    }}
                >
                    Show Me
                </Button>

                </CardActions>
            </Card>
        </Box>
    );
}

export default FTabs;
