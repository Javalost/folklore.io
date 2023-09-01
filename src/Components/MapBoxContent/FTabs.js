import React from 'react';
import { Box, Typography, CardActionArea, CardMedia, CardContent, CardActions, Button, Card } from '@mui/material'; 
import storiesData from '../../data';


function FTabs({ storyContent, toggleDrawer, setMapCenter, setSelectedStoryIndex, setDrawerOpen }) { 
    const flagURL = `https://flagcdn.com/w640/${storyContent.country.toLowerCase()}.png`;

    const handleTabClick = () => {
        // Find the index of the story in the storiesData array by its ID
        const index = storiesData.findIndex(story => story.id === storyContent.id);
        
        // Set the located index as the selectedStoryIndex
        setSelectedStoryIndex(index);
        
        if (typeof setDrawerOpen === 'function') {
            setDrawerOpen(true);
        }
        //toggleDrawer(); 
    }
    
    

    return (
        <Box sx={{ marginBottom: '15px', height: 'calc(45vh - 70px)', width: 345 }}> 
            <Card 
                onClick={handleTabClick}
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3, borderRadius: '15px' }}
            >
                <CardActionArea sx={{ flexGrow: 1 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={flagURL}
                        alt={`${storyContent.country} flag`}
                    />
                    <CardContent sx={{ flexGrow: 1, overflow: 'hidden' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {storyContent.country}
                        </Typography>
                        <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{ 
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 2,  // number of lines you want to display
                                overflow: 'hidden'
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
                            setMapCenter([parseFloat(storyContent.latitude), parseFloat(storyContent.longitude)]);
                            toggleDrawer();
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
