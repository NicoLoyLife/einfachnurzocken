import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box 
      sx={{
        backgroundColor: 'primary.dark',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        marginTop: '20px'
      }}
    >
      <Typography variant="body1" gutterBottom>
        © 2024 Casino Portal. Alle Rechte vorbehalten.
      </Typography>
    </Box>
  );
}

export default Footer;