import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Dashboard } from '@mui/icons-material';
import AlarmIcon from '@mui/icons-material/Alarm';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import CloudIcon from '@mui/icons-material/Cloud';
import FaceIcon from '@mui/icons-material/Face';
import HomeIcon from '@mui/icons-material/Home';
import WifiIcon from '@mui/icons-material/Wifi';
import DashCards from './DashCards';

function Dash() {
    return (
        <Box sx={{ margin: '0', padding: '0' }}>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderBottom: '1px gray solid',
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
                        <Dashboard fontSize="large" />
                        <Typography variant="h4">tabler</Typography>
                    </Box>

                    <Box
                        sx={{
                            width: '50vh',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            gap: '0.5rem',
                            marginRight: '40px',
                            alignItems: 'center'
                        }}
                    >
                        <Dashboard />
                        <Dashboard />
                        <Dashboard />
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        borderBottom: '1px solid gray',
                        justifyContent: 'flex-start',
                        gap: '20px'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '20px',
                            marginLeft: '35px',
                            paddingTop: '20px',
                            paddingBottom: '10px'
                        }}
                    >
                        <Button
                            variant="text"
                            sx={{
                                color: 'gray',
                                '&:hover': {
                                    color: 'blue',
                                    backgroundColor: 'transparent'
                                }
                            }}
                        >
                            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                                <AlarmIcon fontSize="small" />
                                <Typography variant="caption">Alarm</Typography>
                            </Box>
                        </Button>

                        <Button
                            variant="text"
                            sx={{
                                color: 'gray',
                                '&:hover': {
                                    color: 'blue',
                                    backgroundColor: 'transparent'
                                }
                            }}
                        >
                            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                                <BeachAccessIcon fontSize="small" />
                                <Typography variant="caption">Beach</Typography>
                            </Box>
                        </Button>

                        <Button
                            variant="text"
                            sx={{
                                color: 'gray',
                                '&:hover': {
                                    color: 'blue',
                                    backgroundColor: 'transparent'
                                }
                            }}
                        >
                            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                                <CloudIcon fontSize="small" />
                                <Typography variant="caption">Cloud</Typography>
                            </Box>
                        </Button>

                        <Button
                            variant="text"
                            sx={{
                                color: 'gray',
                                '&:hover': {
                                    color: 'blue',
                                    backgroundColor: 'transparent'
                                }
                            }}
                        >
                            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                                <FaceIcon fontSize="small" />
                                <Typography variant="caption">Face</Typography>
                            </Box>
                        </Button>

                        <Button
                            variant="text"
                            sx={{
                                color: 'gray',
                                '&:hover': {
                                    color: 'blue',
                                    backgroundColor: 'transparent'
                                }
                            }}
                        >
                            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                                <HomeIcon fontSize="small" />
                                <Typography variant="caption">Home</Typography>
                            </Box>
                        </Button>

                        <Button
                            variant="text"
                            sx={{
                                color: 'gray',
                                '&:hover': {
                                    color: 'blue',
                                    backgroundColor: 'transparent'
                                }
                            }}
                        >
                            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                                <WifiIcon fontSize="small" />
                                <Typography variant="caption">Wifi</Typography>
                            </Box>
                        </Button>
                    </Box>
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
                        <Typography variant="h6">Dashboard</Typography>
                    </Box> 
            </Box>
            <Box 
                sx={{
                    height:'100vh', 
                }}>
                <DashCards>

                </DashCards> 
            </Box>
        </Box>
    );
}

export default Dash;
