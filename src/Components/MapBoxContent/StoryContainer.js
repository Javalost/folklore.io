import React, { useState } from 'react';
import { Box, Container, Pagination } from '@mui/material';
import FTabs from './FTabs.js'; 

// Since you said not to remove anything, I'll leave the import here. But remember, it's unused.
import storiesData from '../../data.js'; 

function StoryContainer({ stories, toggleDrawer, setMapCenter, setSelectedStoryIndex, setDrawerOpen }) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(stories.length / itemsPerPage);

  // Corrected the template string syntax.
  console.log(`total pages: ${totalPages}`);

  // Corrected this log to output the array of iso values for each story.
  console.log("storiesISOS:", stories.map(story => story.iso));

  return ( 
    <Container sx={{ 
        padding: '2rem', 
        margin: '0', 
        width: '60rem', 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between',
    }}>
        <Box sx={{
            display: 'flex',
            gap: '10px',
            marginTop: '0',
        }}>
            <Pagination 
              count={totalPages} 
              page={page} 
              onChange={(event, value) => setPage(value)} 
              classes={{ul : 'custom-pagination'}}
            />
        </Box>
    
        <Container sx={{ 
            flex: '1',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '25px', 
            padding: '10px',
            overflowY: 'auto'  // changed 'show' to 'auto'
        }}>
            {stories.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((story, index) => (
                <FTabs 
                    key={index} 
                    storyContent={story} 
                    stories={stories}
                    iso={story.iso}  // corrected to use story.iso
                    toggleDrawer={toggleDrawer} 
                    setMapCenter={setMapCenter}
                    setSelectedStoryIndex={setSelectedStoryIndex}
                    setDrawerOpen={setDrawerOpen} 
                    style={{flex: '1 1 calc(50% - 12px)'}}
                />
            ))}
        </Container>
    </Container>
  );
}

export default StoryContainer;
