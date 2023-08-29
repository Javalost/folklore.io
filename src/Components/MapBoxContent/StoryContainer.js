import React, { useState } from 'react';
import { Box, Container, Pagination } from '@mui/material';
import FTabs from './FTabs.js';

function StoryContainer({ toggleDrawer }) {
    const [page, setPage] = useState(1);
    const itemsPerPage = 4;

    const stories = new Array(10).fill(null);
    const totalPages = Math.ceil(stories.length / itemsPerPage);

    return ( 
      <Container sx={{ 
        padding: '2rem', 
        margin: '0', 
        width: '60rem', 
        height: '100vh',
        display: 'flex', 
        marginTop: '30px',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>  
      <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '10px',
          }}>
            <Pagination count={totalPages} page={page} onChange={(event, value) => setPage(value)} />
        </Box>
    
        <Container sx={{ 
            flex: '1',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '25px', 
            padding: '10px',
            overflowY: 'show'
        }}>
            {stories.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((story, index) => (
                <FTabs key={index} style={{flex: '1 1 calc(50% - 12px)'}} /> 
            ))}
        </Container>
    
    </Container>
    );
}

export default StoryContainer;
