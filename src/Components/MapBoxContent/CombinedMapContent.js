import React, { useState } from 'react';
import { Box, Drawer, Button } from '@mui/material';
import Pigeon from './Pigeon';
import StoryContainer from './StoryContainer';

function CombinedMapContent() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Pigeon />

      <Box 
        style={{ position: 'absolute', top: '10px', left: '35px', zIndex: 1500}}
      >
        <Button
          variant="contained"
          onClick={toggleDrawer}
        >
          {drawerOpen ? "Close Drawer" : "Open Drawer"}
        </Button>
      </Box>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{ style: { overflowY: 'hidden', maxHeight: '100vh', width: '60rem' } }}
      >
        <StoryContainer toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
}

export default CombinedMapContent;
