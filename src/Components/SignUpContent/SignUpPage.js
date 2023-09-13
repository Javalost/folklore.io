import React from 'react';
import { SignUp } from '@clerk/clerk-react'; 
import { Box} from '@mui/material';

function SignUpPage() {

  return (
    <Box 
      sx={{
        display:'flex',
        alignItems:'center', 
        justifyContent:'center'
      }}>
      <SignUp/>
    </Box>

)}

export default SignUpPage;
