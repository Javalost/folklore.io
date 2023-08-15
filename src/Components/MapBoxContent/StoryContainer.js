import React, { useState } from 'react';
import { Box, Container, Chip, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, FormGroup } from '@mui/material';
import StoryContent from './StoryContent';

const optionsMapping = {
  "Region": ["North", "South", "East", "West"],
  "State/Province": ["California", "Texas", "New York", "Florida"],
  "Genre": ["Rock", "Jazz", "Pop", "Classical"]
};

function StoryContainer() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (event, dialogName) => {
    const newChips = event.target.value.map(value => ({ dialog: dialogName, value }));
    setSelectedOptions(prevOptions => {
      // Remove previous selections from this dialog
      const filteredOptions = prevOptions.filter(option => option.dialog !== dialogName);
      // Add new selections
      return [...filteredOptions, ...newChips];
    });
  };

  const handleChipDelete = (chip) => {
    setSelectedOptions(prevChips => prevChips.filter(c => c.dialog !== chip.dialog || c.value !== chip.value));
  };

  const chipColors = {
    "Region": "#c14140", // Red
    "State/Province": "#3b7ec3", // Blue
    "Genre": "#28a636" // Green
  };

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', border: 'solid', height: '100%', padding: '0', margin: '0' }}>
      <Box sx={{ border: '1px solid #ccc', padding: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {selectedOptions.map((chip, index) => (
          <Chip
            key={index}
            label={`${chip.dialog}: ${chip.value}`}
            onDelete={() => handleChipDelete(chip)}
            sx={{ backgroundColor: chipColors[chip.dialog], color: 'white' }}
          />
        ))}
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', border: '1px solid #ccc', padding: '16px', gap: '10px', marginBottom: '20px', flex: 1 }}>
        <FormGroup row sx={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
          {Object.keys(optionsMapping).map(dialogName => (
            <FormControl key={dialogName} variant="outlined" sx={{ minWidth: 180 }}>
              <InputLabel>{dialogName}</InputLabel>
              <Select
                multiple
                value={selectedOptions.filter(option => option.dialog === dialogName).map(option => option.value)}
                onChange={(event) => handleOptionChange(event, dialogName)}
                label={dialogName}
                renderValue={(selected) => selected[0] || 'Select options'}
              >
                {optionsMapping[dialogName].map(option => (
                  <MenuItem key={option} value={option}>
                    <Checkbox checked={selectedOptions.some(o => o.dialog === dialogName && o.value === option)} />
                    <ListItemText primary={option} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ))}
        </FormGroup>

        <StoryContent />
      </Box>

    </Container>
  );
}

export default StoryContainer;
