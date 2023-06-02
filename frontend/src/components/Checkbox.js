import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Clothing" />
      <FormControlLabel required control={<Checkbox />} label="Accessories" />
      <FormControlLabel required control={<Checkbox />} label="Grocery" />
      <FormControlLabel required control={<Checkbox />} label="Footwears" />
      <FormControlLabel required control={<Checkbox />} label="Phones" />
    </FormGroup>
  );
}
