import React from 'react' 
import { Box, Typography } from '@mui/material';
import { Dashboard } from '@mui/icons-material';

function Dash() { 


    return ( 
        <Box sx={{padding: '20px', marginLeft: '3rem', marginRight:'3rem'}}>
            <Box>
                <Box 
                    sx = {{display: 'flex', justifyContent:'space-between'}}>

                    <Box sx= {{border: 'solid', width: '50vh', display: 'flex', alignItems:'center', gap: '7px'}}>
                        <Dashboard 
                            fontSize='large'
                        /> 
                        <Typography variant='h4' >
                            tabler
                        </Typography>   
                        
                    </Box>

                    <Box sx ={{border: 'solid', width: '50vh', display: 'flex', justifyContent:'flex-end', gap:'2rem'}}>
                        <Dashboard/> 
                        <Dashboard/>  
                        <Dashboard/> 
                    </Box> 

                </Box> 
                <Box sx={{display:'flex', justifyContent:'flex-start', marginTop: '2.5rem', gap: '20px'}}>
                    <Dashboard/>  
                    <Dashboard/> 
                    <Dashboard/> 
                    <Dashboard/> 
                    <Dashboard/> 
                </Box>
            </Box> 
        </Box>
        
    )
} 



export default Dash; 