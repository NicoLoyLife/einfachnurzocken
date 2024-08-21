import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import heroImage from "../assets/images/hero-banner.png";

function HeroBanner() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '280px',
        borderRadius: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <Typography variant="h3">
        Willkommen bei EinfachNurZocken
      </Typography>
    </Box>
  );
}

export default HeroBanner;
