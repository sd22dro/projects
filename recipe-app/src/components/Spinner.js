// src/components/Spinner.js
import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Spinner = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
    <CircularProgress color="primary" />
  </Box>
);

export default Spinner;
