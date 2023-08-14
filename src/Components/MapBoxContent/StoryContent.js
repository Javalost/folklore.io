import { Box, Typography, Container, Paper} from '@mui/material';

function StoryContent() {
  return (
    <Container sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Paper sx={{ border: '1px solid #ccc', padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', height: '100%'}}>
        <Typography variant="h3">Words</Typography>
        <Typography variant="h3">Words</Typography>
        <Typography variant="h3">Words</Typography>
        <Typography variant="h3">Words</Typography>
      </Paper>
    </Container>
  );
} 

export default StoryContent;
