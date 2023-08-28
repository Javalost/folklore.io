import React, { useContext } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText } from '@mui/material';
import SelectedOptionsContext from './SelectedOptionsContext';

const CustomSelect = ({ label, values }) => {
  const { selectedOptions, setSelectedOptions } = useContext(SelectedOptionsContext);

  const handleSelectChange = (label, eventValue) => {
    const newChips = eventValue.map(value => ({ dialog: label, value }));
    setSelectedOptions(prevOptions => {
      const filteredOptions = prevOptions.filter(option => option.dialog !== label);
      return [...filteredOptions, ...newChips];
    });
  };

  return (
    <FormControl style={{ margin: '10px', minWidth: '120px' }}>
      <InputLabel id={`${label}-select-label`} style={{ marginTop: '-6px' }}>{label}</InputLabel>
      <Select
        labelId={`${label}-select-label`}
        id={`${label}-select`}
        multiple
        value={selectedOptions.filter(option => option.dialog === label).map(option => option.value)}
        onChange={event => handleSelectChange(label, event.target.value)}
        renderValue={(selected) => <div style={{ padding: '4px' }}>Selected</div>}
        MenuProps={{ variant: "menu", PaperProps: { style: { maxHeight: 250 } } }}
      >
        {values.map((value) => (
          <MenuItem key={value} value={value}>
            <Checkbox checked={selectedOptions.includes(value)} />
            <ListItemText primary={value} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
