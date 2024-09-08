import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

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
      <Typography variant="body1">
        © 2024 EinfachNurZocken. Alle Rechte vorbehalten.
      </Typography>
      <Typography variant='body2' sx={{ marginTop: '10px' }}>
        <MuiLink component={Link} to="/impressum" color="inherit" underline='hover'>
          Impressum
        </MuiLink>
        {' | '}
        <MuiLink component={Link} to="/datenschutz" color="inherit" underline='hover'>
          Datenschutz
        </MuiLink>
      </Typography>
    </Box>
  );
}

export default Footer;