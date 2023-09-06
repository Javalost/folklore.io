import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Typography, Select, Button, OutlinedInput, MenuItem } from '@mui/material';
import axios from 'axios';

function StoryFilter({ onSubmit }) {
  

   const [countries, setCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/countries')
            .then(response => {
                setCountries(response.data);
            })
            .catch(error => {
                console.error("Error fetching countries:", error);
            });
    }, []);

    const handleChange = (event) => {
        setSelectedCountries(event.target.value);
    }; 

    const handleSubmit = () => {
      alert(`Selected country: ${selectedCountries}`);
      if (typeof onSubmit === "function") {
          onSubmit(selectedCountries);  // Pass selected country to callback
      }
  };
  

  return (
    <div style={{ display: 'flex', alignItems: 'center'}}>
        <Typography variant="h6" style={{ marginRight: '16px', border: '1px solid', padding: '5px', borderRadius: '15px' }}>
            FILTER BY COUNTRY
        </Typography>
        <FormControl sx={{ m: 1, width: 150 }}>
            <InputLabel 
                id="select-country-label" 
                sx={{color: 'white',
                '&.Mui-focused': { 
                    color: 'gray',
                }}}
                shrink={true}>
                Countries
            </InputLabel>
            <Select
                labelId="select-country-label"
                id="select-country"
                multiple
                value={selectedCountries}
                onChange={handleChange}
                input={<OutlinedInput label="Countries" style={{ height: '36px', boxSizing: 'border-box' }} />}
            >
                {countries.map((country, index) => (
                    <MenuItem key={index} value={country}>
                        {country}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>   
        <Button 
            variant="contained" 
            color="primary" 
            onClick={handleSubmit}
            style={{ height: '36px', verticalAlign: 'middle' }}>  
            Submit
        </Button>
    </div>  
);

}

export default StoryFilter;
