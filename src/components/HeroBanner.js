import React from 'react';
import { Box, Typography, Button } from '@mui/material';
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
        flexDirection: 'column',
      }}
    >
      <Typography variant='h1' component='h1' sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        Die besten Online Casinos im Vergleich 2024
      </Typography>

      <Typography variant='h2' component='h2' sx={{ fontSize: '1rem', mt: 2 }}>
        Finde dein perfektes Casino mit den besten Bonusangeboten und Spielen
      </Typography>

      <Button variant='contained' color='primary' sx={{ mt:4 }}>
        Jetzt vergleichen
      </Button>
    </Box>
  );
}

export default HeroBanner;
