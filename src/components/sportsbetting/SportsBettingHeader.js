import React from 'react';
import { Box, Typography } from '@mui/material';
import heroImage from "../../assets/images/sportwetten.webp";

function SportsBettingHeader() {
  return (
    <Box 
      sx={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
      }}
    >
      <Typography variant="h1" component="h1" sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
        Die besten Sportwetten-Anbieter im Vergleich 2024
      </Typography>
    </Box>
  );
}

export default SportsBettingHeader;