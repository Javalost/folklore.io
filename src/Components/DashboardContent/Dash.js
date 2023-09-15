import {React, useEffect, useState} from 'react';
import { Box, Button, Typography, Icon } from "@mui/material";
import { Dashboard } from '@mui/icons-material';
import BookIcon from '@mui/icons-material/Book';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CloudIcon from '@mui/icons-material/Cloud';
import FaceIcon from '@mui/icons-material/Face';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { UserButton, useUser } from '@clerk/clerk-react';  
import SimpleFetchTest from './SimpleFetchTest';
import MapIcon from '@mui/icons-material/Map';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CombinedDashContent from './CombinedDashContent'; 
import AlarmContent from './AlarmContent';   



const Dash = () => { 
    const user = useUser();
    const { id, username} = user || {};

    return (
        <Box sx={{ margin: '0', padding: '0' }}>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid #dedede',
                        padding: '15px'
                    }}
                >
                    <Box
                        sx={{
                            width: '50vh',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '7px',
                            marginLeft: '20px'
                        }}
                    >
                        <Dashboard fontSize="large" color="primary"/>
                        <Typography variant="h4">Dashboard</Typography>
                    </Box>

                    <Box
                        sx={{
                            width: '50vh',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            gap: '1.3rem',
                            marginRight: '40px',
                            alignItems: 'center'
                        }}
                    >
                        <Button variant="outlined">Button</Button>
                        <Icon>
                            {/* Ensure you import NotificationsIcon at the top */}
                            <NotificationsIcon />
                        </Icon>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                            <UserButton/>
                            <Box>
                                <SimpleFetchTest></SimpleFetchTest>
                            </Box>
                        </Box>
                    </Box>

                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        borderBottom: '1px solid #dedede',
                        justifyContent: 'flex-start',
                        gap: '20px',
                        marginLeft:'1.6rem'
                    }}
                >
                    {/* Link buttons */}

                    <Button variant="text" sx={{ color: 'gray', '&:hover': { color: 'blue', backgroundColor: 'transparent' } }}>
                        <Link to="/dashboard" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '.5rem', textDecoration: 'none', color: 'inherit' }}>
                            <DashboardIcon fontSize="small" />
                            <Typography variant="caption">Dashboard</Typography>
                        </Link>
                    </Button>

                    <Button component={Link} to="/dashboard/alarm" variant="text" sx={{ color: 'gray', '&:hover': { color: 'blue', backgroundColor: 'transparent' } }}>
                        <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                            <BookIcon fontSize="small" />
                            <Typography variant="caption">Write a story</Typography>
                        </Box>
                    </Button>


                    <Button variant="text" sx={{ color: 'gray', '&:hover': { color: 'blue', backgroundColor: 'transparent' } }}>
                        <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                            <CloudIcon fontSize="small" />
                            <Typography variant="caption">Cloud</Typography>
                        </Box>
                    </Button>

                    <Button variant="text" sx={{ color: 'gray', '&:hover': { color: 'blue', backgroundColor: 'transparent' } }}>
                        <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                            <FaceIcon fontSize="small" />
                            <Typography variant="caption">Face</Typography>
                        </Box>
                    </Button>

                    <Button variant="text" sx={{ color: 'gray', '&:hover': { color: 'blue', backgroundColor: 'transparent' } }}>
                        <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                            <Link to="/">
                                <HomeIcon fontSize="small" />
                            </Link>
                            <Typography variant="caption">Home</Typography>
                        </Box>
                    </Button>


                    <Button variant="text" sx={{ color: 'gray', '&:hover': { color: 'blue', backgroundColor: 'transparent' } }}>
                        <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                            <Button startIcon={<MapIcon />} variant="contained" color="primary" component={Link} to="/mapbox">
                                View Map
                            </Button>
                        </Box>
                    </Button>
                </Box>
            </Box>
            
            <Box
                sx={{
                    padding: '15px', 
                    backgroundColor:'#e9f2f8', 
                }}
            >
                <Box
                    sx={{
                        width: '50vh',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '7px',
                        marginLeft: '20px', 
                    }}
                >
                </Box> 
            </Box>

            <Box sx={{ height:'100vh' }}>
                <Routes>
                    <Route path="alarm" element={<AlarmContent />} />
                    <Route path="/" element={<CombinedDashContent />} />

                </Routes>
            </Box> 
        </Box>
    );
}

export default Dash;

