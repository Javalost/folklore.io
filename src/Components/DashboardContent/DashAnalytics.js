import { Card, Box, Typography, Button } from "@mui/material"; 

function DashAnalytics() { 


    return(
        <Box 
            sx={{
                display:'flex',
                height:'100vh', 
                marginTop:'20px', 
                marginLeft:'20px', 
                gap:'25px'
                

            }}>
            
            <Card 
                sx={{
                    display:'flex',
                    width:'45%', 
                    height:'auto',
                    flexDirection:'column', 
                }}>
                <Box 
                    sx={{
                        padding:'15px',
                        borderBottom:'1px grey solid'
                    }}>
                    <Typography 
                        sx={{
                            display:'flex',
                            alignContent:'start' 
                            
                        }}>
                        Development Activity
                    </Typography> 
                </Box>
                <Box>
                    {/* Putting a Country, Name, and Date Submitted Tags here */}
                </Box>
            </Card>

            <Card 
                sx={{
                    width:'45%',
                }}>

            </Card>

        </Box>
    );
}

export default DashAnalytics;