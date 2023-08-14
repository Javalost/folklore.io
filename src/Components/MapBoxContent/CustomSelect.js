import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText } from '@mui/material';

const CustomSelect = ({ label, values, selectedValues, handleSelectChange }) => {
  return (
    <FormControl style={{ margin: '10px', minWidth: '120px' }}>
      <InputLabel id={`${label}-select-label`} style={{ marginTop: '-6px' }}>{label}</InputLabel>
      <Select
        labelId={`${label}-select-label`}
        id={`${label}-select`}
        multiple
        value={selectedValues}
        onChange={event => handleSelectChange(label, event.target.value)}
        renderValue={(selected) => <div style={{ padding: '4px' }}>Selected</div>}
        MenuProps={{ variant: "menu", PaperProps: { style: { maxHeight: 250 } } }}
      >
        {values.map((value) => (
          <MenuItem key={value} value={value}>
            <Checkbox checked={selectedValues.includes(value)} />
            <ListItemText primary={value} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CustomSelect;
