import { Directions } from "@mui/icons-material";
import { Card, Box, Typography, Button } from "@mui/material";
import DashAnalytics from "./DashAnalytics";

function DashCards() { 
    return ( 
        <Box
            sx={{
                display: 'flex',
                padding: '15px', 
                backgroundColor:'#e9f2f8', 
                width:'100%',
                height:'100vh', 
                flexDirection:'column',
                marginBottom:'20px', 
            }}
        >
            <Box 
                sx={{
                    display:'flex',
                    gap: '20px',
                    justifyContent: 'center', // Centering the cards
                    width:'100%', 
                    marginBottom:'15px'
                }}
            >
                <Card 
                    sx={{ 
                        display:'flex',
                        flexDirection:'column',
                        height: '100px', 
                        width: '200px', 
                        alignItems:'center',
                        justifyContent:'center', 
                        elevation: '1'
                    }}
                >
                    <Typography variant="h5">
                        93
                    </Typography> 
                    <Typography sx={{fontSize:'.875rem'}}>
                        Total Submissions
                    </Typography>
                </Card>

                <Card 
                    sx={{ 
                        display:'flex',
                        flexDirection:'column',
                        height: '100px', 
                        width: '200px', 
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    <Typography variant="h5">
                        47
                    </Typography> 
                    <Typography sx={{fontSize:'.875rem'}}>
                        Stories Published
                    </Typography>
                </Card>

                <Card 
                    sx={{ 
                        display:'flex',
                        flexDirection:'column',
                        height: '100px', 
                        width: '200px', 
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    <Typography variant="h5">
                        23.7k
                    </Typography> 
                    <Typography sx={{fontSize:'.875rem'}}>
                        Total Stories
                    </Typography>
                </Card>

                <Card 
                    sx={{ 
                        display:'flex',
                        flexDirection:'column',
                        height: '100px', 
                        width: '200px', 
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    <Typography variant="h5">
                        47
                    </Typography> 
                    <Typography sx={{fontSize:'.875rem'}}>
                        Stories Pending
                    </Typography>
                </Card>

                <Card 
                    sx={{ 
                        display:'flex',
                        flexDirection:'column',
                        height: '100px', 
                        width: '200px', 
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    <Typography variant="h5">
                        23.7k
                    </Typography> 
                    <Typography sx={{fontSize:'.875rem'}}>
                        Popular Country
                    </Typography>
                </Card>
            </Box>
            <DashAnalytics />
        </Box>
    );
}

export default DashCards;
