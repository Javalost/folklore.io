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
            <Box sx={{
                padding:'5px',
                border:'1px solid #dedede',
                borderRadius:'10px',
                display:'flex', 
                justifyContent:'flex-start',
                width:'30%'

            }}>
                <TextField
                    variant="standard"
                    placeholder="Title"
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
                 <Box
                sx={{
                    display: 'flex',
                    width:'100%', 
                    height: '100%',
                    justifyContent:'flex-end',

                }}
                >
                    <Button 
                        variant="contained"    
                        color="primary" 
                        sx={{
                            height:'2rem'
                    }}>
                        Publish
                    </Button>
                </Box> 
            </Box>

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
