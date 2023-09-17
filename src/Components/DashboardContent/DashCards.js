import { Card, Box, Typography} from "@mui/material"; 
import { useEffect, useState } from "react";

function DashCards(currentUser) { 
    const [userData, setUserData] = useState({
        totalSubmissions: 0,
        storiesPublished: 0,
        totalStories: 0,
        storiesPending: 0,
        popularCountry: ""
    });

    useEffect(() => {
        // Fetch the dashboard data for the user 
    
        if (session) { 
            const sessionId = session.id;
            console.log("Session ID: " + sessionId);
    
            fetch('/api/dashboard-data', {
                headers: {
                    'clerk-session-id': sessionId // Use the actual sessionId from Clerk
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Use the data to populate your dashboard
            })
            .catch(error => {
                console.error("Error fetching dashboard data:", error);
            });
        }
    }, [session]); // Add session as a dependency to the useEffect
        
    return ( 
        <Box
            sx={{
                display: 'flex',
                padding: '15px', 
                backgroundColor:'#e9f2f8', 
                width:'100%',
                flexDirection:'column',
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
                        User ID: {currentUser.id}
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
        </Box>
    );
}

export default DashCards;
