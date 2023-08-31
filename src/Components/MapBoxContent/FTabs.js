import React from 'react';
import { Box, Typography, CardActionArea, CardMedia, CardContent, CardActions, Button, Card } from '@mui/material';

function FTabs({ storyContent, toggleDrawer, setMapCenter }) { 
    const flagURL = `https://flagcdn.com/w640/${storyContent.country.toLowerCase()}.png`;

    return (
        <Box sx={{ marginBottom: '15px', height: 'calc(45vh - 70px)', width: 345 }}> 
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
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
