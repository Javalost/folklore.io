import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import storiesData from '../../data';
import StoryContainer from './StoryContainer';
import FullStory from './FullStory';
import LeafletMap from './LeafletMap';

function CombinedMapContent() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedStoryIndex, setSelectedStoryIndex] = useState(0);
    const [mapCenter, setMapCenter] = useState([21.8518, -102.2877]);

    const handleMarkerClick = (selectedStory) => {
        const index = storiesData.findIndex(story => story.name === selectedStory.name);
        setSelectedStoryIndex(index);
        setDrawerOpen(true);
    };

    const handleSwitchStory = (offset) => {
      const newIndex = selectedStoryIndex + offset;
      if (newIndex >= 0 && newIndex < storiesData.length) {
        setSelectedStoryIndex(newIndex);
      }
  }; 
  console.log('Selected Index:', selectedStoryIndex);
console.log('Selected Story:', storiesData[selectedStoryIndex]);

  

    return (
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <LeafletMap 
            stories={storiesData} 
            onMarkerClick={handleMarkerClick}
            center={mapCenter} // <-- Add this line to bind center prop
          />
          <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => { setDrawerOpen(false); setSelectedStoryIndex(null); }}
              PaperProps={{ 
                style: { 
                  overflowY: 'hidden', 
                  overflowX: 'hidden', 
                  maxHeight: '100vh', 
                  width: '52rem', 
                  borderRadius: '15px', 
                  background: 'linear-gradient(45deg, #539bfe, #2979ff, #005cd2)'  // <-- Modify this line
                } }}
              >
              <div style={{ height: '8rem', borderRadius: '15px', backgroundColor: 'inherit' }}></div> {/* This is the colored bar */}
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
                    setSelectedStoryIndex={setSelectedStoryIndex}/>
              }
          </Drawer>

      </div>
  );
}

export default CombinedMapContent;
