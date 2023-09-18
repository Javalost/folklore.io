import React, { useRef, useEffect } from 'react';
import { Card, Typography, Button, Paper, Link, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; 
import { Map, Dashboard, Info } from '@mui/icons-material'; 
import { SignIn, useClerk } from '@clerk/clerk-react'; 
import { UserButton } from '@clerk/clerk-react';  
import { useNavigate } from 'react-router-dom';






import ProductTab from './TabOneContent/ProductTab';  


function MainContent({ onSectionInView }) {
  const containerRef = useRef();
  const sections = ["tab-one", "tab-two", "tab-three"]; 
  const mapImage = "/mapimage.PNG"; // This references the image in the public folder 
  const {user} = useClerk();  
  const navigate = useNavigate();



  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      let inViewIndex;
      const offset = 200; 
      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i]);
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= offset) {
          inViewIndex = i;
          break;
        }
      }
      if (inViewIndex !== undefined) {
        onSectionInView(inViewIndex);
      }
    }, 50); 

    const containerEl = containerRef.current;
    containerEl.addEventListener("scroll", handleScroll);

    return () => containerEl.removeEventListener("scroll", handleScroll);
  }, [onSectionInView]); 

  return (
    <Box ref={containerRef} flex="1" paddingX="0px" paddingTop="0" paddingBottom="0px" overflow="auto" height="calc(100vh)">
      
      <Paper
        id="tab-one"
        elevation={0}
        sx={{
          margin: '0px 0',
          padding: '100px 100px', 
          background: 'linear-gradient(156deg,#006080,#006181 47%,#003648)',
          opacity: 0.6,
          textAlign: 'center',
          borderBottom: '2px solid',
        }}
      >
        Content For Tab One
        <ProductTab/>
      </Paper>

      <Paper
        id="tab-two"
        elevation={0}
        sx={{
          margin: '0px 0',
          padding:'3rem',
          textAlign: 'center',
          borderBottom: '2px solid',
          backgroundImage: `url(${mapImage})`, // Set the background image
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', // Adjust this based on your requirements 
          

        }}
      >
        <Card 
          sx={{ 
            display: 'flex',
            flexDirection: 'column', 
            width: '25rem', 
            height: '28rem', 
            border: '2px solid #003040', 
            borderRadius: '15px', 
            justifyContent: 'space-between',
            background: '#F5F7FA', 
            padding: '2rem', 
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',  // subtle shadow for depth
          }}>
          <Box sx={{
            display:'flex', 
            justifyContent:'space-between', 
            alignItems:'center', 
            marginBottom: '1rem',  // Added space between the title and the buttons
            paddingLeft:'10px', 
            paddingRight:'10px'
          }}> 
            <Typography 
              variant="h4" 
              fontFamily={ 'medium-content-title-font, Georgia, Cambria, "Times New Roman", Times, serif'} 
              color="#003040" 
              sx={{
                fontWeight:'bold'
              }}
            >
              TRY MY SITE!
            </Typography>
            {user ? (
              <UserButton afterSignOutUrl="/" style={{ marginRight: '10px' }} />
            ) : (
              null
            )}
          </Box>
  
          <Button 
        fullWidth
        onClick={() => navigate("/mapbox")}
        sx={{
          background: 'linear-gradient(156deg,#0080A0,#004060)',
          border: '1px solid #003040',
          color: 'white',
          margin: '0.5rem 0',
        }}
      >
        <Map sx={{ mr: 1 }} /> Mapbox
      </Button>

      {user ? (
      <Button 
        fullWidth
        onClick={() => navigate("/dashboard")}
        sx={{
          background: 'linear-gradient(156deg,#0080A0,#004060)',
          border: '1px solid #003040',
          color: 'white',
          margin: '0.5rem 0',
        }}
      > 
        <Dashboard sx={{ mr: 1 }} /> Dashboard
      </Button> 
      ) : (
        null
      )}
      <Button 
        fullWidth
        onClick={() => navigate("/about")}
        sx={{
          background: 'linear-gradient(156deg,#0080A0,#004060)',
          border: '1px solid #003040',
          color: 'white',
          margin: '0.5rem 0',
        }}
      >
        <Info sx={{ mr: 1 }} /> About
      </Button>
        </Card>

      </Paper>

      <Paper
        id="tab-three"
        elevation={0}
        sx={{
          margin: '0px 0',
          padding: '300px 100px',
          background: 'linear-gradient(156deg,#006080,#006181 47%,#003648)',
          opacity: 1,
          textAlign: 'center',
          borderBottom: '2px solid',
        }}
      >
        <Typography variant="h6">Content for Tab Three</Typography>
      </Paper>

      <Paper
        sx={{
          marginTop: '0px',
          marginBottom: '0px',
          background: 'white',
          padding: '20px', 
          color: 'white'
        }}
      >
        <Typography variant="body1">
          <Link to="/datatest" color="white" underline="none">
          </Link>
          <br />
          <Link to="/formtest" color="white" underline="none">
            
          </Link>
        </Typography>
      </Paper>

    </Box>
  );
}

export default MainContent;
