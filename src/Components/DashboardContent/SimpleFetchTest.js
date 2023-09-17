import React from 'react';
import { Typography } from "@mui/material"; 
import { useUser } from '@clerk/clerk-react';

const SimpleFetchTest = () => {
    const { user } = useUser();

    const username = user.username; 
    return (
        <div>
            {username ? <Typography variant="h8" sx={{fontFamily: 'medium-content-title-font, Georgia, Cambria, "Times New Roman", Times, serif', 
}}>{username}</Typography> : 'Username not found'} 
        </div>
    );
};

export default SimpleFetchTest;
