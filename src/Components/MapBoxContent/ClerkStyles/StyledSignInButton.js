import { Button as MuiButton } from '@mui/material';
import { useClerk } from '@clerk/clerk-react';

function StyledSignInButton(props) {
  const { client } = useClerk();
  
  const handleSignInClick = () => {
    window.location.href = client.urls.signIn();
  };

  return (
    <MuiButton 
        variant="contained"
        color="primary"
        style={{ 
            height: '36px', 
            verticalAlign: 'middle', 
            backgroundColor: '#2664c4', 
            color: 'white', 
            borderColor: 'white'
        }}
        onClick={handleSignInClick}
        {...props}
    >
      Sign In
    </MuiButton>
  );
}

export default StyledSignInButton;
