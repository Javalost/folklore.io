import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function FormTest() {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/submit-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, content, location })
            });

            if (response.ok) {
                console.log('Data submitted successfully'); 
                    // Reset the state values here
                        setName('');
                        setContent('');
                        setLocation('');
            } else {
                console.error('Failed to submit data');
            }
        } catch (error) {
            console.error('There was an error submitting the data', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                label="Content"
                variant="outlined"
                value={content}
                multiline
                onChange={(e) => setContent(e.target.value)}
            />
            <TextField
                label="Location"
                variant="outlined"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
}

export default FormTest;
