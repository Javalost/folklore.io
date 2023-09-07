import React, { useState } from 'react';
import { Box, Container, Pagination } from '@mui/material';
import FTabs from './FTabs.js'; 

function StoryContainer({ storiesData, toggleDrawer, setMapCenter, setSelectedStoryIndex }) {
    const [page, setPage] = useState(1);
    const itemsPerPage = 4;

    const totalPages = Math.ceil(storiesData.length / itemsPerPage);

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
                {storiesData.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((story, index) => (
                    <FTabs 
                        key={index} 
                        storyContent={story}  
                        storyIndex={index}
                        iso={story.iso}
                        toggleDrawer={toggleDrawer} 
                        setMapCenter={setMapCenter}
                        setSelectedStoryIndex={setSelectedStoryIndex}
                        style={{flex: '1 1 calc(50% - 12px)'}}
                    />
                ))}
            </Container>
        </Container>
    );
}

export default StoryContainer;
