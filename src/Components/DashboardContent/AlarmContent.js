import { Box, TextField, TextareaAutosize, Button } from '@mui/material';
import React from 'react';

const AlarmContent = () => {
    return (
        <Box 
            sx={{
                display:'flex',
                flexDirection: 'column',
                height:'100vh', 
                backgroundColor: '#e9f2f8',
                gap:'10px',
                padding: '0 20px',
            }}>
            <Box
                sx={{
                    display: 'flex',
                    width:'62%', 
                    justifyContent:'flex-end'
                }}
            >
                <Button variant="contained" color="primary">Publish</Button>
            </Box>
            <TextField
                variant="standard"
                placeholder="Title"
                fullWidth
                InputProps={{
                    style: {
                        fontSize: '3rem',
                        height: '4rem',
                        padding: '10px',
                        border: 'none',
                        fontFamily: 'medium-content-title-font, Georgia, Cambria, "Times New Roman", Times, serif', 
                    },
                    disableUnderline: true,
                }}
            />

            <TextareaAutosize
                minRows={10}
                placeholder="Write your story..."
                style={{ 
                    width: '60%', 
                    padding: '10px', 
                    fontSize: '1.6rem', 
                    backgroundColor:'inherit',
                    border: 'none', 
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'medium-content-title-font, Georgia, Cambria, "Times New Roman", Times, serif'
                }}
            />

        </Box>
    );
}

export default AlarmContent;
