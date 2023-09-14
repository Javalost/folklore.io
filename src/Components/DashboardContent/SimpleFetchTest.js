import React from 'react';
import { Typography } from "@mui/material";
import { useUser } from '@clerk/clerk-react';

const SimpleFetchTest = () => {
    const user = useUser();
    return <div>{JSON.stringify(user?.username)}</div>;
};

export default SimpleFetchTest;
