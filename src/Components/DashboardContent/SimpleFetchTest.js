import React from 'react';
import { Typography } from "@mui/material"; 
import { useUser } from '@clerk/clerk-react';

const SimpleFetchTest = () => {
    const { user } = useUser();

    const username = user.username;
    return (
        <div>
            {username ? <Typography variant="h6">{username}</Typography> : 'Username not found'} 
        </div>
    );
};

export default SimpleFetchTest;
