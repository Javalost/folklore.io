import { Box, Container, Button } from '@mui/material';
import StoryContent from './StoryContent';


function StoryContainer({ toggleDrawer }) {
  


  return (
    <Container sx={{ padding: '0', margin: '0' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', border: 'solid', margin: '0px',padding: '10px' }}>
        <Button onClick={toggleDrawer}>Close Drawer</Button>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, border: 'solid', margin: '0px'}}>
        <StoryContent />
      </Box> 
      
    </Container>
  );
}


export default StoryContainer;
