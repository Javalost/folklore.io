import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

function SignIn() {
  return (
    <div style={{margin:'0', padding:'0'}}>
      <Box style={{backgroundColor: '#2045a5', height:'99.9vh', display:'flex', alignItems:'center'}}>
        <Card 
        elevation='10'
        square='false'
        sx={{ border: 'solid', width:'30rem', borderRadius:'15px', height: '23rem', marginLeft:'23rem'}}>
            <CardContent>
                <Typography color='#2045a5' variant="h5" component="div">
                    DUMMY DIV
                </Typography>
            </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default SignIn;

