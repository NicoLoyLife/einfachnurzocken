import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { guides } from '../services/dummyData';

function LatestGuides() {
  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography variant='h3' component='h3' sx={{ mb: 4, textAlign: 'center' }}>
        Beliebteste Guides & Strategien
      </Typography>

      <Typography variant='body1' component='p' sx={{ mb: 4, textAlign: 'center' }}>
        Egal, ob du ein Anfänger oder ein erfahrener Spieler bist - unsere Guides helfen dir, deine Strategie zu verbessern und das Beste aus deinem Spielerlebnis herauszuholen. Hier findest du die neuesten Tipps und Tricks, um deine Gewinnchancen zu maximieren.
      </Typography>

      <Button variant='contained' color='primary' sx={{ display: 'block', margin: '0 auto' }} size='large'>
        Alle Guides ansehen
      </Button>
      
    </Box>
  );
}

export default LatestGuides;