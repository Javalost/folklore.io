import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Drawer, Typography, AppBar, Toolbar, IconButton, Button, Box} from '@mui/material'; 
import MenuIcon from '@mui/icons-material/Menu';
import StoryContainer from './StoryContainer';
import FullStory from './FullStory';
import LeafletMap from './LeafletMap'; 
import StoryFilter from './StoryFilter'; 
import { UserButton, useUser } from '@clerk/clerk-react';
import { SignOutButton } from '@clerk/clerk-react';
import StyledSignOutButton from './ClerkStyles/StyledSignOutButton';



function CombinedMapContent() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedStoryIndex, setSelectedStoryIndex] = useState(null);
    const [mapCenter, setMapCenter] = useState([21.8518, -102.2877]);
    const [tooltipOpen, setTooltipOpen] = useState(true);

    // Fetch All Stories from Database 
    const [stories, setStories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/stories')
            .then(response => {
                setStories(response.data);
            })
            .catch(error => {
                console.error("Error fetching stories:", error);
            });
    }, []);

    // Extract a unique list of countries from the stories data
    const countries = useMemo(() => {
        const uniqueCountries = new Set(stories.map(story => story.country));
        return [...uniqueCountries];
    }, [stories]);

    // Filtering Stories
    const [selectedCountries, setSelectedCountries] = useState([]);

    const filteredStories = useMemo(() => {
        if (selectedCountries.length > 0) {
            return stories.filter(story => selectedCountries.includes(story.country));
        } 
        return stories;
    }, [stories, selectedCountries]);

    const handleMarkerClick = (selectedStory) => {
        const index = filteredStories.findIndex(story => story.name === selectedStory.name);
        setSelectedStoryIndex(index);
        setDrawerOpen(true);
        setTooltipOpen(false);
    };

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
        setTooltipOpen(false); // Close the tooltip when the drawer is opened
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
        setTooltipOpen(true); // Re-open the tooltip when the drawer is closed
    };

    const handleSwitchStory = (offset) => {
        const newIndex = selectedStoryIndex + offset;
        if (newIndex >= 0 && newIndex < filteredStories.length) {
            setSelectedStoryIndex(newIndex);
        
            // Update the map center to the newly selected story's coordinates
            const newLatitude = parseFloat(filteredStories[newIndex].latitude);
            const newLongitude = parseFloat(filteredStories[newIndex].longitude);
            setMapCenter([newLatitude, newLongitude]);
        }
    };
    
    const { user } = useUser(); // Get the current user using the useUser hook


    return (
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
            <AppBar position="static" style={{ backgroundColor: '#2045a5' }}>
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                    
                    <div>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                            <MenuIcon />
                        </IconButton>
                    </div>
                    
                    <div>
                        <StoryFilter 
                            countries={countries}
                            onCountrySelect={setSelectedCountries}
                        />
                    </div>
                    
                </Toolbar>
            </AppBar>

            <LeafletMap 
                stories={filteredStories} 
                onMarkerClick={handleMarkerClick}
                mapCenter={mapCenter}
                tooltipOpen={tooltipOpen}
            />

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerClose}
                PaperProps={{ 
                    style: {
                        overflowY: 'hidden', 
                        overflowX: 'hidden', 
                        maxHeight: '100vh', 
                        width: '52rem', 
                        borderRadius: '15px', 
                        background: '#2045a5'
                    }
                }}
            >
               <div style={{ 
                    height: '8rem', 
                    borderRadius: '15px', 
                    backgroundColor: 'inherit', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    marginRight: '15px'
                }}>
                    <Typography
                        padding='15px'
                        variant='h5'
                        color='white'
                        sx={{fontWeight:'bolder'}}
                    > 
                        FOLKLORE 
                    </Typography>
                    {user ? (
                        <Box sx={{padding:'15px'}}>
                            <UserButton/>
                        </Box>
                    ) : (
                        <Button 
                            variant="contained"
                            color="primary"
                            href="/"
                            style={{ 
                                height: '36px', 
                                verticalAlign: 'middle', 
                                backgroundColor: '#2664c4', 
                                color: 'white', 
                                borderColor: 'white'
                            }}
                        >
                            Sign In
                        </Button>
                )}
                </div>
            {selectedStoryIndex !== null && selectedStoryIndex >= 0 ? 
                <FullStory
                    story={filteredStories[selectedStoryIndex]}
                    totalStories={filteredStories.length} 
                    storiesData={filteredStories}
                    storyIndex={selectedStoryIndex}
                    onSwitchStory={handleSwitchStory}
                    setDrawerOpen={setDrawerOpen} 
                    setSelectedStory={setSelectedStoryIndex} 
                />
                :
                <StoryContainer 
                    toggleDrawer={() => setDrawerOpen(false)} 
                    setMapCenter={setMapCenter} 
                    storiesData={filteredStories} 
                    setSelectedStoryIndex={setSelectedStoryIndex}
                />
                

                }

            </Drawer>
        </div>
    );
}

export default CombinedMapContent;