import { Card, Box, Typography } from "@mui/material";

function DashAnalytics() { 
    return(
        <Box 
            sx={{
                display:'flex',
                height:'100vh', 
                marginTop:'20px', 
                justifyContent:'space-around'
            }}>
            
            <Card 
                sx={{
                    display:'flex',
                    width:'45%', 
                    height:'auto',
                    flexDirection:'column',  
                    border:'solid'
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
                    display: 'flex',
                    flexDirection: 'column', // making sure the content flows from top to bottom
                    width: '45%',
                    height: '100%',  // make sure card takes full height available
                    backgroundColor: '#e9f2f8'
                }}
            >
                <Box 
                    sx={{ 
                        padding: '15px',
                        borderBottom: '1px grey solid',
                        backgroundColor: 'white',
                        marginBottom:'20px',
                        flexShrink: 0,  // Ensure the header doesn't shrink
                    }}
                >
                    <Typography 
                        sx={{
                            display: 'flex',
                            alignContent: 'start',
                        }}
                    >
                        Read our documentation with code examples
                    </Typography> 
                </Box> 

                <Box 
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr', // Two-column grid
                        gridTemplateRows: '1fr 1fr', // Two-row grid
                        gap: '20px',  // Spacing between the cards
                        flexGrow: 1,  // Allow this box to grow to take available space
                    }}
                >
                    {Array(4).fill(null).map((_, index) => (
                        <Card key={index} sx={{ height: '100%', width: '100%' }}>
                            <Typography sx={{ borderBottom: '1px solid gray' }}>WORDS</Typography> 
                            <Box>
                                <img src="https://placehold.it/150x150" alt="Placeholder" />
                            </Box>
                        </Card>
                    ))}
                </Box>
            </Card>

        </Box>
    );
}

export default DashAnalytics;
