import React from 'react';
import { Box } from '@mui/material';

function Wrapper({ children }) {
  return (
    <Box sx={{ paddingLeft: '20px', paddingRight: '20px' }}>
      {children}
    </Box>
  );
}

export default Wrapper;