import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel'; 
import { Link } from 'react-router-dom';


function FormTest() {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [location, setLocation] = useState('');
    const [showTable, setShowTable] = useState(false);
    const [tableData, setTableData] = useState([]);




    // state that handles submit data into 'testform' table in 'folklore' database 
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

    // state that handles a display based on mui's click of a button 
    const toggleTable = async () => {
        if (!showTable) {
            try {
                const response = await fetch('http://localhost:3001/testform');
                const data = await response.json();
                setTableData(data);
            } catch (error) {
                console.error('Error fetching table data:', error);
            }
        }
        setShowTable(prev => !prev);
    };

    return (
        <div> 
            <Link to="/">Back to Home</Link>
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
            <FormControlLabel
                control={<Switch checked={showTable} onChange={toggleTable} />}
                label="Toggle Table"
            />
            {showTable && (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Content</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.name}</td>
                                <td>{row.content}</td>
                                <td>{row.location}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default FormTest;
