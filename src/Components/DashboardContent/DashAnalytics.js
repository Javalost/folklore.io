import { Card, Box, Typography } from "@mui/material";
import StoryChart from "./StoryChart";

function DashAnalytics() {  
    return (
        <Box 
            sx={{
                display:'flex',
                height:'100vh', 
                backgroundColor: '#e9f2f8',
                justifyContent:'space-around',
                padding: '0 20px'
            }}>
            
            <Card 
                sx={{
                    display:'flex',
                    width:'45%', 
                    height:'auto',
                    flexDirection:'column',   
                    border:'1px solid #dedede',
                }}>
                <Box 
                    sx={{
                        padding:'15px', 
                        borderBottom:'1px grey solid',
                        marginLeft:'20px'  // corrected 'marginleft' to 'marginLeft'
                    }}>
                    <Typography 
                        variant='h5'
                        sx={{
                            display:'flex',
                            alignContent:'start',
                        }}>
                        Development Activity
                    </Typography> 
                </Box>
            </Card>

            <Card 
                elevation={0}
                sx={{ 
                    backgroundColor: '#e9f2f8',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '45%',
                    height: '100%',
                    boxSizing: 'border-box'
                }}
            >
                <Box 
                    sx={{ 
                        padding: '15px',
                        border: '1px grey solid',
                        background: 'linear-gradient(156deg,#0080A0,#004060)',
                        marginBottom:'20px',
                        flexShrink: 0,
                        boxSizing: 'border-box',
                        borderRadius:'5px'
                    }}
                >
                    <Typography 
                        sx={{
                            display: 'flex',
                            alignContent: 'start',  
                            color:'white', 
                            fontWeight:'bold'                           
                        }}
                    >
                        Read our documentation with code examples
                    </Typography> 
                </Box> 
                <Box 
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr', // Single-column grid
                        gridTemplateRows: '1fr 1fr', // Two-row grid
                        gap: '20px',
                        flexGrow: 1,
                        boxSizing: 'border-box'
                    }}
                >
                    <Card 
                        sx={{ 
                            height: '300px',
                            width: '100%',
                            boxSizing: 'border-box', 
                            border:'1px solid #dedede', 
                            display:'flex', 
                            flexDirection:'column',
                            overflow: 'hidden'
                        }}
                    >
                        <Box sx={{padding:'20px', borderBottom: '1px solid gray'}}>
                            <Typography sx={{ display:'flex', alignContent:'start' }}>WORDS FOR CARD 1</Typography>  
                        </Box> 
                        <Box sx={{display:'flex'}}>
                            <StoryChart></StoryChart>
                        </Box>
                    </Card>

                    <Card 
                        sx={{ 
                            height: '300px', // Adjust height if needed
                            width: '100%', 
                            boxSizing: 'border-box',
                            border:'1px solid #dedede', 
                            display:'flex', 
                            flexDirection:'column'
                        }}
                    >
                        <Box sx={{padding:'20px', borderBottom: '1px solid gray'}}>
                            <Typography sx={{ display:'flex', alignContent:'start' }}>WORDS FOR COMBINED CARD</Typography>  
                        </Box> 
                        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            {/* Content for the merged card */}
                        </Box>
                    </Card>
                </Box>
            </Card>
        </Box>
    );
}

export default DashAnalytics;
