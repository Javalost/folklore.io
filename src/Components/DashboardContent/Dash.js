import {React} from 'react';
import { Box, Button, Typography, Icon } from "@mui/material";
import { Dashboard } from '@mui/icons-material';
import BookIcon from '@mui/icons-material/Book';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { UserButton, useUser } from '@clerk/clerk-react';  
import SimpleFetchTest from './SimpleFetchTest';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CombinedDashContent from './CombinedDashContent'; 
import AddStory from './AddStory';   



const Dash = () => { 
    const { user } = useUser();
    return (
        <Box sx={{ height: '100vh', margin: '0', padding: '0', flexDirection: 'column', display: 'flex' }}>
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
                        <Typography 
                            variant="h4"
                            sx={{
                                background: 'linear-gradient(156deg, #0080A0, #004060)', 
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            Dashboard</Typography>
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
                        <Icon>
                            <NotificationsIcon />
                        </Icon>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
                            <UserButton/>
                            <Box sx ={{}}>
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
                        gap: '10px',
                        marginLeft:'1.6rem', 
                        alignItems:'center'
                    }}
                >
                    {/* Link buttons */}

                    <Button variant="text" sx={{ color: 'gray', '&:hover': { color: 'blue', backgroundColor: 'transparent' } }}>
                        <Link to="/dashboard" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '.5rem', textDecoration: 'none', color: 'inherit' }}>
                            <DashboardIcon fontSize="small" />
                            <Typography variant="caption">Dashboard</Typography>
                        </Link>
                    </Button>

                    <Button component={Link} to="/dashboard/addstory" variant="text" sx={{ color: 'gray', '&:hover': { color: 'blue', backgroundColor: 'transparent' } }}>
                        <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                            <BookIcon fontSize="small" />
                            <Typography variant="caption">Write a story</Typography>
                        </Box>
                    </Button>

                    <Link to="/" style={{ textDecoration: 'none', display: 'flex', margin: 0, padding: 0, alignContent:'center', justifyContent:'center'}}>
                        <Button variant="text" sx={{color: 'gray', '&:hover': { color: 'blue', backgroundColor: 'transparent', } }}>
                            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                                <HomeIcon fontSize="small" />
                                <Typography variant="caption">Home</Typography>
                            </Box>
                        </Button>
                    </Link>

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
                    <Route path="addstory" element={<AddStory />} />
                    <Route path="/" element={<CombinedDashContent currentUser={user}/>} />

                </Routes>
            </Box> 
        </Box>
    );
}

export default Dash;



