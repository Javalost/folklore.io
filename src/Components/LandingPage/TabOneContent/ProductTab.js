import React from 'react';
import { Card, CardContent, Typography, Tabs, Tab, TextField, Box, Button } from '@mui/material';

function ProductTab() {
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card variant="outlined" sx={{ width: '27rem', height: '28rem', padding: '30px'}}>
      <CardContent sx={{ padding: '8px', display: 'flex', flexDirection: 'column', height: '100%' }}>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
            <Typography variant="h3" gutterBottom>
                LOG IN
            </Typography>  
            <Tabs value={value} onChange={handleTabChange} size="small" indicatorColor="primary">
              <Tab size="large" label="T1" />
              <Tab label="T2" />
            </Tabs>
          </Box>

          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap:'3rem', marginTop: '3rem' }}>
            <TextField
                size="medium"
                label="Username"
                variant="outlined"
                fullWidth
                sx={{ height: '48px'}}
            />
                
            <TextField
                size="medium"
                label="Password"
                variant="outlined"
                fullWidth
                sx={{ height: '48px' }}
            />
        </Box>

        <Button 
            variant="contained" 
            href="/mapbox"
            size="small" 
            color="primary" 
            fullWidth 
            sx={{ padding: '4px 8px', height: '4rem', }}>
          SUBMIT
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductTab;
