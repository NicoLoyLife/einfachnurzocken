import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { spiele } from '../services/dummyData';

function PopularGames() {
  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography variant='h3' component='h3' sx={{ mb: 4, textAlign: 'center' }}>
        Beliebteste Spiele
      </Typography>

      <Typography variant='body1' component='p' sx={{ mb: 4, textAlign: 'center' }}>
        Entdecke die Spiele, die aktuell bei unseren Nutzern am beliebtesten sind. Diese Slots und Tischspiele bieten nicht nur Unterhaltung, sondern auch großartige Gewinnchancen.
      </Typography>

      <Button variant='contained' color='primary' sx={{ display: 'block', margin: '0 auto' }} size='large'>
        Alle Spiele ansehen
      </Button>
    </Box>
  );
}

export default PopularGames;
