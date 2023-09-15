import { Card, Box, Typography } from "@mui/material";

function DashAnalytics() { 
    return(
        <Box 
            sx={{
                display:'flex',
                height:'100vh', 
                backgroundColor: '#e9f2f8',
                justifyContent:'space-around',
                padding: '0 20px'  // Add some horizontal padding to avoid cutting off
            }}>
            
            <Card 
                sx={{
                    display:'flex',
                    width:'45%', 
                    height:'auto',
                    flexDirection:'column',   
                    border:'1px solid #dedede',                }}>
                <Box 
                    sx={{
                        padding:'15px', 
                        borderBottom:'1px grey solid',
                        marginleft:'20px'
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
                <Box>
                    {/* Putting a Country, Name, and Date Submitted Tags here */}
                </Box>
            </Card>

            <Card 
                elevation={0}
                sx={{ 
                    backgroundColor: '#e9f2f8',

                    display: 'flex',
                    flexDirection: 'column', // making sure the content flows from top to bottom
                    width: '45%',
                    height: '100%',  // make sure card takes full height available
                    boxSizing: 'border-box'  // Adjusts width/height to include padding and border
                }}
            >
                <Box 
                    sx={{ 
                        padding: '15px',
                        border: '1px grey solid',
                        backgroundColor:'#99cdf5',
                        marginBottom:'20px',
                        flexShrink: 0,  // Ensure the header doesn't shrink
                        boxSizing: 'border-box',  // Adjusts width/height to include padding and border 
                        borderRadius:'5px'
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
                        boxSizing: 'border-box'  // Adjusts width/height to include padding and border
                    }}
                >
                    <Card sx={{ height: '100%', width: '100%', boxSizing: 'border-box', border:'1px solid #dedede', display:'flex', flexDirection:'column'}}>
                        <Box sx={{padding:'20px',borderBottom: '1px solid gray'}}>
                            <Typography sx={{ display:'flex', alignContent:'start' }}>WORDS FOR CARD 1</Typography>  
                        </Box>
                        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', }}>
                            {/* Different content for Card 1 */}
                            <img src="https://placehold.it/150x150" alt="Placeholder" />
                        </Box>
                    </Card>

                    <Card sx={{ height: '100%', width: '100%', boxSizing: 'border-box',border:'1px solid #dedede', display:'flex', flexDirection:'column'}}>
                        <Box sx={{padding:'20px',borderBottom: '1px solid gray'}}>
                            <Typography sx={{ display:'flex', alignContent:'start' }}>WORDS FOR CARD 1</Typography>  
                        </Box> 
                        <Box>
                            {/* Different content for Card 2 */}
                            <img src="https://placehold.it/150x150" alt="Placeholder 2" />
                        </Box>
                    </Card>

                    <Card sx={{ height: '100%', width: '100%', boxSizing: 'border-box', border:'1px solid #dedede',display:'flex', flexDirection:'column'}}>
                        <Box sx={{padding:'20px',borderBottom: '1px solid gray'}}>
                            <Typography sx={{ display:'flex', alignContent:'start' }}>WORDS FOR CARD 1</Typography>  
                        </Box> 
                        <Box>
                            {/* Different content for Card 3 */}
                            <img src="https://placehold.it/150x150" alt="Placeholder 3" />
                        </Box>
                    </Card>

                    <Card sx={{ height: '100%', width: '100%', boxSizing: 'border-box', border:'1px solid #dedede',display:'flex', flexDirection:'column'}}>
                        <Box sx={{padding:'20px',borderBottom: '1px solid gray'}}>
                            <Typography sx={{ display:'flex', alignContent:'start' }}>WORDS FOR CARD 1</Typography>  
                        </Box> 
                        <Box>
                            {/* Different content for Card 4 */}
                            <img src="https://placehold.it/150x150" alt="Placeholder 4" />
                        </Box>
                    </Card>
                </Box>
            </Card>

        </Box>
    );
}

export default DashAnalytics;
