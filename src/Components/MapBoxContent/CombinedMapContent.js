import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import storiesData from '../../data';
import StoryContainer from './StoryContainer';
import FullStory from './FullStory';
import LeafletMap from './LeafletMap';

function CombinedMapContent() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [mapCenter, setMapCenter] = useState([21.8518, -102.2877]);  // Initial value

  const handleMarkerClick = (story) => {
    setSelectedStory(story);
    setDrawerOpen(true);
  };

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <LeafletMap 
        stories={storiesData} 
        onMarkerClick={handleMarkerClick} 
        center={mapCenter}  // Passing the center to the map
      />
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => { setDrawerOpen(false); setSelectedStory(null); }}
        PaperProps={{ style: { overflowY: 'hidden', maxHeight: '100vh', width: '52rem' } }}
      >
        {selectedStory ? 
            <FullStory story={selectedStory} /> : 
            <StoryContainer toggleDrawer={() => setDrawerOpen(false)} setMapCenter={setMapCenter} />
        }
      </Drawer>
    </div>
  );
}

export default CombinedMapContent;
