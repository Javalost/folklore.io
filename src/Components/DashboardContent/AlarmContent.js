import { Box, TextField, TextareaAutosize, Button, Alert, Snackbar, Typography } from '@mui/material';
import {React, useState} from 'react'; 
import axios from 'axios';
import { useClerk } from '@clerk/clerk-react';

const AlarmContent = () => {
    const [country, setCountry] = useState('');
    const [title, setTitle] = useState('');
    const [story, setStory] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const {user} = useClerk(); 
    const userId = user.id; 

    axios.defaults.baseURL = 'http://localhost:3001';

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/add-story', {
                userId: userId,
                country: country,
                name: title,
                story: story
            });

            if (response.data.success) {
                 // Clear fields
                 setCountry('');
                 setTitle('');
                 setStory('');
 
                 // Open snackbar
                 setOpenSnackbar(true);
            } else {
                alert('Error publishing story.');
            }
        } catch (error) {
            console.error("There was an error publishing the story", error);
        }
    };
    return (
        <Box 
            sx={{
                display:'flex',
                flexDirection: 'column',
                height:'100vh', 
                backgroundColor: '#e9f2f8',
                gap:'10px',
            }}> 
             <Box sx={{ display: 'flex', justifyContent: 'center' }}> 
                <Button  
                    onClick={handleSubmit}  
                    variant="contained"    
                    color="primary" 
                    sx={{
                        height:'2rem',
                        width:'20rem',
                        marginBottom:'20px'
                    }}>
                    Publish
                </Button>
             </Box> 
             <Snackbar 
                open={openSnackbar} 
                autoHideDuration={6000} 
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
                    Story published successfully!
                </Alert>
            </Snackbar> 

            <Box sx={{
                padding:'5px',
                borderRadius:'10px',
                display:'flex', 
                justifyContent:'flex-start',
                width:'30%', 
                gap:'10px'

            }}> 
             {country && (
                <Box>
                    <Typography variant="h6" sx={{opacity:'30%'}}>Country</Typography>
                </Box>
            )}       
            <TextField 
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    variant="standard"
                    placeholder="Country"
                    InputProps={{
                        style: {
                            fontSize: '3rem',
                            height: '4rem', 
                            padding: '10px', 
                            borderLeft:'1px solid #dedede',

                            fontFamily: 'medium-content-title-font, Georgia, Cambria, "Times New Roman", Times, serif', 
                        },
                        disableUnderline: true,
                    }}
            /> 
            </Box> 
            <Box sx={{
                padding:'5px',
                borderRadius:'10px',
                display:'flex', 
                justifyContent:'flex-start',
                width:'30%', 
                gap:'45px'

            }}>
                {title && (
                <Box>
                    <Typography variant="h6" sx={{opacity:'30%'}}>Title</Typography>
                </Box>
                 )}
                <TextField  
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    variant="standard"
                    placeholder="Title"
                    InputProps={{
                        style: {
                            fontSize: '3rem',
                            height: '4rem',
                            padding: '10px',
                            borderLeft:'1px solid #dedede',
                            fontFamily: 'medium-content-title-font, Georgia, Cambria, "Times New Roman", Times, serif', 
                        },
                        disableUnderline: true,
                    }}
                />
            </Box>
            <Box>
                
            </Box> 
            <Box sx={{
                padding:'5px',
                borderRadius:'10px',
                display:'flex', 
                justifyContent:'flex-start',
                width:'50%', 
                gap:'10px'

            }}>        
            <TextareaAutosize 
                value={story}
                onChange={e => setStory(e.target.value)}
                minRows={10}
                placeholder="Write your story..."
                style={{ 
                    width: '100%', 
                    padding: '10px', 
                    marginLeft:'0px',
                    height:'100%',
                    fontSize: '1.6rem', 
                    border:'none',
                    backgroundColor:'inherit',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'medium-content-title-font, Georgia, Cambria, "Times New Roman", Times, serif'
                }}
            /> 
            </Box>

        </Box>
    );
}

export default AlarmContent;
