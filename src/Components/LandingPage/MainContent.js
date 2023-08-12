import React, { useRef, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material'; 
import { Link } from 'react-router-dom';
import ProductTab from './TabOneContent/ProductTab';

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
        <ProductTab/>
      </Paper>

      <Paper
        id="tab-two"
        elevation={0}
        sx={{
          margin: '0px 0',
          padding: '300px 100px',
          background: '#white',
          textAlign: 'center',
          borderBottom: '2px solid',
        }}
      >
        <Typography variant="h6">Content for Tab Two</Typography>
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
            Data Test
          </Link>
          <br />
          <Link to="/formtest" color="white" underline="none">
            Form
          </Link>
        </Typography>
      </Paper>

    </Box>
  );
}

export default MainContent;
