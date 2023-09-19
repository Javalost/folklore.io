import { Card, Box, Typography } from "@mui/material";
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import StoryChart from "./StoryChart";
import StoriesByISO from "./StoriesByISO";
import DetailedStory from "./DetailedStory";

function DashAnalytics() {
    const [stories, setStories] = useState([]);
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:3001/stories')
            .then(response => {
                setStories(response.data);
            })
            .catch(error => {
                console.error("Error fetching stories:", error);
            });
    }, []);

    const handleSwitchStory = useCallback((direction) => {
        if (direction === 1 && currentStoryIndex < stories.length - 1) {
            setCurrentStoryIndex(currentStoryIndex + 1);
        } else if (direction === -1 && currentStoryIndex > 0) {
            setCurrentStoryIndex(currentStoryIndex - 1);
        }
    }, [currentStoryIndex, stories.length]); // dependencies for useCallback

    useEffect(() => {
        const switchStoryInterval = setInterval(() => {
            handleSwitchStory(1);
        }, 12000);  // switch every 12 seconds
    
        return () => clearInterval(switchStoryInterval);
    }, [currentStoryIndex, handleSwitchStory]);
    
    
    return (
        <Box 
            sx={{
                display:'flex',
                height:'100vh', 
                backgroundColor: '#e9f2f8',
                justifyContent:'space-around',
                padding: '0 20px', 
            }}
        >
            
    {
        stories.length > 0 && 
        <DetailedStory  
            style={{
                animationName: "fadeInOut",
                animationTimingFunction: "ease-in-out",
                animationDuration: "12s", // The full cycle will take 12 seconds, adjust as needed
                animationIterationCount: "infinite"
            }}
            sx={{              
                display: 'flex',
                flexGrow: 1,
                width: '100%', 
            }}
            story={stories[currentStoryIndex]} 
            totalStories={stories.length} 
            storyIndex={currentStoryIndex} 
            onSwitchStory={handleSwitchStory}
            setSelectedStory={(story) => {}}
        />
    }

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
                        gridTemplateColumns: '1fr',
                        gridTemplateRows: '1fr 1fr',
                        gridGap: 0,
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
                            justifyContent:'center',
                            overflow: 'hidden'
                        }}
                    >
                        <Box sx={{flexGrow: 1, display:'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                            <Box sx={{display:'flex', justifyContent:'center'}}>
                                <StoryChart></StoryChart> 
                            </Box> 
                            <Typography>and more</Typography>
                        </Box>
                    </Card>
                    <Card 
                        sx={{ 
                            height: '400px',
                            width: '100%', 
                            boxSizing: 'border-box',
                            border:'1px solid #dedede', 
                            display:'flex', 
                            flexDirection:'column', 
                        }}
                    >
                        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
                            <StoriesByISO/>
                        </Box>
                    </Card>
                </Box>
            </Card>
        </Box>
    );
}

export default DashAnalytics;
