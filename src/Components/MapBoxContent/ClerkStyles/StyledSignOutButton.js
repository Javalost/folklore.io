import { Button as MuiButton } from '@mui/material';
import { SignOutButton } from '@clerk/clerk-react';

function StyledSignOutButton(props) {
  return (
    <MuiButton 
        variant="contained"
        color="primary"
        style={{ 
            height: '36px', 
            verticalAlign: 'middle', 
            marginTop:'15px',
            backgroundColor: '#2664c4', 
            color: 'white', 
            borderColor: 'white'
        }}
        {...props}
    >
      <SignOutButton 
          style={{ 
              border: 'none', 
              background: 'none', 
              color: 'inherit', 
              padding: 0, 
              margin: 0, 
              minWidth: 'unset' 
          }} 
          {...props} 
      />
    </MuiButton>
  );
}

export default StyledSignOutButton;
