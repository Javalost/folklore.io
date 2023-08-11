import React, { useRef, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material'; 
import { Link } from 'react-router-dom';


function MainContent({ onSectionInView }) {
  const containerRef = useRef();
  const sections = ["tab-one", "tab-two", "tab-three"];

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
      const offset = 200; // this might need tweaking
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
    }, 50); // debounce time

    const containerEl = containerRef.current;
    containerEl.addEventListener("scroll", handleScroll);

    return () => containerEl.removeEventListener("scroll", handleScroll);
  }, [onSectionInView]); 


  return (
    <Box ref={containerRef} flex="1" margin-left="0px" paddingX="0px" paddingTop="0" paddingBottom="0px" overflow="auto" height="calc(100vh)">
      <Paper
        id="tab-one"
        elevation={3}
        sx={{
          margin: '0px 0', 
          borderRadius: 0,
          padding: '300px 100px', 
          backgroundSize: 'cover', // Adjust how the image covers the background
          background: 'linear-gradient(156deg,#006080,#006181 47%,#003648)', // Set the background image URL
          textAlign: 'center',
          borderTop: '5px solid', // Thicker line at the top
          borderBottom: '2px solid', // Thicker line at the bottom

        }}
      >
        <Typography variant="h6">Content for Tab One</Typography>
      </Paper>
      <Paper
        id="tab-two"
        elevation={3}
        sx={{
          margin: '0px 0',
          borderRadius: 0,
          padding: '300px 100px', 
          backgroundSize: 'cover', // Adjust how the image covers the background
          background: 'white', // Set the background image URL
          textAlign: 'center',
          borderTop: '5px solid', // Thicker line at the top 
          borderBottom: '2px solid', // Thicker line at the bottom

        }}
      >
        <Typography variant="h6">Content for Tab Two</Typography>
      </Paper>
      <Paper
        id="tab-three"
        elevation={3}
        sx={{
          margin: '0px 0',
          borderRadius: 0,
          padding: '300px 100px', 
          backgroundSize: 'cover', // Adjust how the image covers the background
          background: 'linear-gradient(156deg,#006080,#006181 47%,#003648)',
          textAlign: 'center',
          borderTop: '5px solid', // Thicker line at the top 
          borderBottom: '2px solid', // Thicker line at the bottom

        }}
      >
        <Typography variant="h6">Content for Tab Three</Typography>
      </Paper>
      <Paper
        sx={{
          marginTop: '0px',
          borderRadius: 0,
          marginBottom: '0px',
          background: '#493382',
          padding: '20px', 
          color: 'black'
        }}
      >
        <Typography variant="body1">
          <Link to="/datatest" style={{ color: 'black', textDecoration: 'none' }}>
            Data Test
          </Link>
          <br />
          <Link to="/formtest" style={{ color: 'black', textDecoration: 'none' }}>
            Form
          </Link>
        </Typography>

      </Paper>

    </Box>
  );
}

export default MainContent;
