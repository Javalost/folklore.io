import React, { useContext } from 'react';
import { Box, Container, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, FormGroup, Chip } from '@mui/material';
import StoryContent from './StoryContent';
import SelectedOptionsContext from './SelectedOptionsContext';

const optionsMapping = {
  "Region": ["North", "South", "East", "West"],
  "State/Province": ["California", "Texas", "New York", "Florida", "Weast", "Yeast", "Lorum", "Ipsum"],
  "Genre": ["Rock", "Jazz", "Pop", "Classical"]
};

export function SelectedChips({ selectedOptions, handleChipDelete }) {
  const chipColors = {
    "Region": "#c14140",
    "State/Province": "#3b7ec3",
    "Genre": "#28a636"
  };

  return (
    <Box 
      sx={{ 
        padding: '10px', 
        display: 'flex', 
        gap: '10px', 
        flexWrap: 'wrap', 
        maxWidth: 'calc(100% - 170px)',  // this allows room for the FormControl width + gap 
        overflow: 'hidden'
      }}
    >
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
  const { selectedOptions, setSelectedOptions } = useContext(SelectedOptionsContext);

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
    <Container sx={{ padding: '0', margin: '0' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px' }}>
        <Button onClick={toggleDrawer}>Close Drawer</Button>
        <FormGroup sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {Object.keys(optionsMapping).map(dialogName => (
            <Box 
              key={dialogName} 
              sx={{ 
                display: 'flex', 
                flexDirection: 'row', 
                gap: '10px',
                alignItems: 'flex-start'
              }}
            >
              <FormControl variant="outlined" sx={{ minWidth : '150px', maxWidth: '150px', marginTop: '10px' }}>
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

              <SelectedChips 
                selectedOptions={selectedOptions.filter(opt => opt.dialog === dialogName)} 
                handleChipDelete={handleChipDelete} 
              />
            </Box>
          ))}
        </FormGroup>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '10px', padding: '10px' }}>
        <StoryContent />
      </Box> 
      
    </Container>
  );
}


export default StoryContainer;
