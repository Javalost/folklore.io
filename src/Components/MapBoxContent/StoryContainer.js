import React, { useState } from 'react';
import { Box, Container, Chip, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, FormGroup } from '@mui/material';
import StoryContent from './StoryContent';

const optionsMapping = {
  "Region": ["North", "South", "East", "West"],
  "State/Province": ["California", "Texas", "New York", "Florida"],
  "Genre": ["Rock", "Jazz", "Pop", "Classical"]
};

export function SelectedChips({ selectedOptions, handleChipDelete }) {
  const chipColors = {
    "Region": "#c14140",
    "State/Province": "#3b7ec3",
    "Genre": "#28a636"
  };

  return (
    <Box sx={{ padding: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      {selectedOptions.map((chip, index) => (
        <Chip
          key={index}
          label={`${chip.dialog}: ${chip.value}`}
          onDelete={() => handleChipDelete(chip)}
          sx={{ backgroundColor: chipColors[chip.dialog], color: 'white' }}
        />
      ))}
    </Box>
  );
}

function StoryContainer({ toggleDrawer }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (event, dialogName) => {
    const newChips = event.target.value.map(value => ({ dialog: dialogName, value }));
    setSelectedOptions(prevOptions => {
      const filteredOptions = prevOptions.filter(option => option.dialog !== dialogName);
      return [...filteredOptions, ...newChips];
    });
  };

  const handleChipDelete = (chip) => {
    setSelectedOptions(prevChips => prevChips.filter(c => c.dialog !== chip.dialog || c.value !== chip.value));
  };

  return (
    <Container sx={{ display: 'flex', flexDirection: 'row', border: 'solid', height: '100%', padding: '0', margin: '0' }}>

      {/* Left Side: Dialogs and Close Drawer */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px' }}>
        <Button onClick={toggleDrawer}>
          Close Drawer
        </Button>
        <FormGroup sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {Object.keys(optionsMapping).map(dialogName => (
            <FormControl key={dialogName} variant="outlined" sx={{ maxWidth: 150, marginTop: '10px' }}>
              <InputLabel>{dialogName}</InputLabel>
              <Select
                multiple
                value={selectedOptions.filter(option => option.dialog === dialogName).map(option => option.value)}
                onChange={(event) => handleOptionChange(event, dialogName)}
                label={dialogName}
                renderValue={(selected) => selected.join(', ') || 'Select options'}
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
      </Box>

      {/* Right Side: SelectedChips and StoryContent */}
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '10px', padding: '10px' }}>
        <SelectedChips selectedOptions={selectedOptions} handleChipDelete={handleChipDelete} />
        <StoryContent />
      </Box>

    </Container>
  );
}

export default StoryContainer;
