import React, { useState } from 'react';
import { Card, Box, FormControl, InputLabel, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SignIn() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); 

    setFormData({
        username:'',
        email:'', 
        password:''
    })
  };

  return (
    <div style={{ margin: '0', padding: '0' }}>
      <Box
        sx={{
          backgroundColor: '#2045a5',
          height: '99.9vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            marginTop: '5rem',
            marginLeft: '1.5rem',
            color: '#ffffff',
            fontFamily: 'Copernicus, serif',
          }}
        >
          Create an Account
        </Typography>
        <Card
          elevation={10}
          square={false}
          sx={{
            border: 'solid',
            width: '30rem',
            borderRadius: '15px',
            height: '23rem',
            marginLeft: '2rem',
            padding: '20px',
            backgroundColor: '#ffffff',
            color: '#2045a5',
          }}
        >
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel
                htmlFor="username"
                shrink={true}
                style={{
                  color: '#2045a5',
                  transform: 'translate(0, -22px)',
                }}
              >
                EMAIL
              </InputLabel>
              <TextField
                id="username"
                name="username"
                variant="outlined"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel
                htmlFor="email"
                shrink={true}
                style={{
                  color: '#2045a5',
                  transform: 'translate(0, -22px)',
                }}
              >
                PASSWORD
              </InputLabel>
              <TextField
                id="email"
                name="email"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormControl>

            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel
                htmlFor="password"
                shrink={true}
                style={{
                  color: '#2045a5',
                  transform: 'translate(0, -22px)',
                }}
              >
                RE-ENTER PASSWORD
              </InputLabel>
              <TextField
                id="password"
                name="password"
                type="password"
                variant="outlined"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </FormControl>

            <Button 
              type="submit" 
              onClick={handleSubmit}
              variant="contained" 
              sx={{ 
                marginTop: '40px', 
                backgroundColor: '#ff7f50' 
              }}
            >
              Sign Up
            </Button>
          </form>
        </Card>
      </Box>
    </div>
  );
}

export default SignIn;
