import React, { useState } from 'react';
import axios from 'axios';
import {
  Card,
  Box,
  FormControl,
  InputLabel,
  Typography
} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ReCAPTCHA from "react-google-recaptcha";

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordError, setPasswordError] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!recaptchaValue) {
      console.error("Please verify the reCAPTCHA");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setPasswordError(true);
      return;
    }

    setPasswordError(false);

    try {
      const response = await axios.post('http://localhost:3001/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        recaptcha: recaptchaValue
      }, {
        timeout: 1000 // Timeout after 5 seconds
      });

      if (response.status === 200) {
        console.log("User registered successfully");
      } else {
        console.error("Error registering the user");
      }
    } catch (error) {
      if (error.code === 'ECONNABORTED') {
        console.error("Request took too long and timed out");
      } else {
        console.error("There was an error sending the data:", error);
      }
    }

    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  const handleRecaptcha = (value) => { 
    console.log("Recaptcha value:", value);
    setRecaptchaValue(value);
  }


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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {recaptchaValue ? (
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="username" shrink={true} style={{ color: '#2045a5', transform: 'translate(0, -22px)' }}>
                  USERNAME
                </InputLabel>
                <TextField
                  data-testid="username-input"
                  id="username"
                  name="username"
                  variant="outlined"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </FormControl>

              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="email" shrink={true} style={{ color: '#2045a5', transform: 'translate(0, -22px)' }}>
                  EMAIL
                </InputLabel>
                <TextField
                  data-testid="email-input"
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
                <InputLabel htmlFor="password" shrink={true} style={{ color: '#2045a5', transform: 'translate(0, -22px)' }}>
                  PASSWORD
                </InputLabel>
                <TextField
                  data-testid="password-input"
                  id="password"
                  name="password"
                  type="password"
                  variant="outlined"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  error={passwordError}
                />
              </FormControl>

              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="confirmPassword" shrink={true} style={{ color: '#2045a5', transform: 'translate(0, -22px)' }}>
                  RE-ENTER PASSWORD
                </InputLabel>
                <TextField
                  data-testid="confirmPassword-input"
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  variant="outlined"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  error={passwordError}
                  helperText={passwordError ? "Passwords do not match" : ""}
                />
              </FormControl>

              <Button
                data-testid="submit-button"
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#ff7f50',
                }}
              >
                Sign Up
              </Button>
            </form>
          ) : (
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
              onChange={handleRecaptcha}
            />
          )}
        </Card>
      </Box>
    </div>
  );
}

export default SignUp;
