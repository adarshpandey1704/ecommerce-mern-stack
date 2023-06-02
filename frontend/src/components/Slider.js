import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderSizes() {
  return (
    <Box width={200}>
      <Slider
        defaultValue={1000}
        min={200}
        max={10000}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
