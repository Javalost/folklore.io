import React from 'react';
import { Card, CardContent, Typography, Tabs, Tab, TextField, Box, Select, MenuItem, Button } from '@mui/material';

function ProductTab() {
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card variant="outlined" sx={{ width: '27rem', height: '28rem', padding: '30px'}}>
      <CardContent sx={{ padding: '8px', display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '1.75rem'}}>

        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant="h3" gutterBottom>
                Try It Out!
            </Typography>  
            <Tabs value={value} onChange={handleTabChange} size="small" indicatorColor="primary" sx={{
        }}>
          <Tab size ="large" label="T1" />
          <Tab label="T2" />
        </Tabs>
        </Box>

        
        <TextField
            size="medium"
            label="Input"
            variant="outlined"
            fullWidth
            sx={{ height: '48px'}}
            />
            
            <TextField
            size="medium"
            label="Input"
            variant="outlined"
            fullWidth
            sx={{ height: '48px' }}
        />

        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '6px' }}>
            <Select size="small" variant="outlined" value="" sx={{ flex: 1, marginRight: '6px', height: '48px' }}>
                <MenuItem value={10}>DROP1</MenuItem>
                <MenuItem value={20}>DROP2</MenuItem>
            </Select>

            <Select size="small" variant="outlined" value="" sx={{ flex: 1, marginLeft: '6px', height: '48px' }}>
                <MenuItem value={10}>DROP1</MenuItem>
                <MenuItem value={20}>DROP2</MenuItem>
            </Select>
        </Box>

        <Button 
            variant="contained" 
            href="/mapbox"
            size="small" 
            color="primary" 
            fullWidth 
            sx={{ marginTop: '0', padding: '4px 8px', height: '4rem' }}>
          SUBMIT
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductTab;
