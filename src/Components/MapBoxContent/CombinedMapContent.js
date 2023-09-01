// CombinedMapContent.js
import React, { useState } from 'react';
import { Drawer, Typography } from '@mui/material';
import storiesData from '../../data';
import StoryContainer from './StoryContainer';
import FullStory from './FullStory';
import LeafletMap from './LeafletMap';

function CombinedMapContent() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedStoryIndex, setSelectedStoryIndex] = useState(0);
    const [mapCenter, setMapCenter] = useState([21.8518, -102.2877]);
    const [tooltipOpen, setTooltipOpen] = useState(true);

    const handleMarkerClick = (selectedStory) => {
        const index = storiesData.findIndex(story => story.name === selectedStory.name);
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
        if (newIndex >= 0 && newIndex < storiesData.length) {
            setSelectedStoryIndex(newIndex);
        
            // Update the map center to the newly selected story's coordinates
            const newLatitude = parseFloat(storiesData[newIndex].latitude);
            const newLongitude = parseFloat(storiesData[newIndex].longitude);
            setMapCenter([newLatitude, newLongitude]);
        }
    };

    return (
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
            <LeafletMap 
                stories={storiesData} 
                onMarkerClick={handleMarkerClick}
                mapCenter={mapCenter}
                tooltipOpen={tooltipOpen}
            />
            <Drawer
                anchor="left"
                open={drawerOpen}
                onOpen={handleDrawerOpen}
                onClose={handleDrawerClose}
                PaperProps={{ 
                    style: { 
                        overflowY: 'hidden', 
                        overflowX: 'hidden', 
                        maxHeight: '100vh', 
                        width: '52rem', 
                        borderRadius: '15px', 
                        background: 'linear-gradient(45deg, #539bfe, #2979ff, #005cd2)'
                    } 
                }}
            >
                <div style={{ height: '8rem', borderRadius: '15px', backgroundColor: 'inherit' }}> 
                    <Typography
                        padding='15px'
                        variant='h5'
                        color='white'
                        sx={{fontWeight:'bolder'}}
                    > 
                        FOLKLORE 
                    </Typography>
                </div>
                {selectedStoryIndex !== null ? 
                    <FullStory 
                        story={storiesData[selectedStoryIndex]} 
                        totalStories={storiesData.length}
                        storyIndex={selectedStoryIndex}
                        onSwitchStory={handleSwitchStory}
                        setDrawerOpen={setDrawerOpen} 
                        setSelectedStory={setSelectedStoryIndex} 
                    /> : 
                    <StoryContainer 
                        toggleDrawer={() => setDrawerOpen(false)} 
                        setMapCenter={setMapCenter} 
                        storiesData={storiesData} 
                        setSelectedStoryIndex={setSelectedStoryIndex}
                    />
                }
            </Drawer>
        </div>
    );
}

export default CombinedMapContent;
