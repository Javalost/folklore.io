import { Card, Box, Typography} from "@mui/material";  
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useClerk } from "@clerk/clerk-react";


function DashCards(currentUser) { 
    const {user} = useClerk() 
    const userId = user.id
    const [totalStories, setTotalStories] = useState(null); 
    const [userStories, setUserStories] = useState(null);


    useEffect(() => {
      // Define an async function to fetch the total stories
      const fetchTotalStories = async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/total-stories");
            if (response.data.success) {
            setTotalStories(response.data.totalStories);
          } else {
            console.error("Failed to fetch total stories");
          }
        } catch (error) {
          console.error("An error occurred while fetching total stories:", error);
        }
      };

      const fetchUserStories = async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/user-stories", {
                headers: {
                    'userId': userId
                }
            });
            if (response.data.success) {
                setUserStories(response.data.totalStories);
            } else {
                console.error("Failed to fetch user stories");
            }
        } catch (error) {
            console.error("An error occurred while fetching user stories:", error);
        }
    };

    fetchTotalStories();
    fetchUserStories();
}, []);

    
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
                        justifyContent:'center'
                    }}
                >
                    <Typography variant="h5"> 
                        {userStories}
                    </Typography> 
                    <Typography sx={{fontSize:'.875rem'}}>
                        Stories Submitted
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
                        {totalStories} 
                    </Typography> 
                    <Typography sx={{fontSize:'.875rem'}}> Total Stories </Typography>
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
                    {/* This is a pending value as draft_stories will  */}
                    <Typography variant="h5">
                        {userStories} 
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
