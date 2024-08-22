import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { sportwetten } from '../services/dummyData';

function TopSportwetten() {
  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography variant='h3' component='h3' sx={{ mb: 4, textAlign: 'center' }}>
        Unsere Empfehlungen für Sportwetten
      </Typography>

      <Typography variant='body1' component='p' sx={{ mb: 4, textAlign: 'center' }}>
        Egal, ob du ein Fan von Fußball, Basketball oder Tennis bist - hier findest du die besten Sportwetten-Anbieter, die dir die besten Quoten und ein umfangreiches Wettangebot bieten.
      </Typography>

      <Button variant='contained' color='primary' sx={{ display: 'block', margin: '0 auto' }}>
        Zu den Sportwetten-Anbietern
      </Button>
    </Box>
  );
}

export default TopSportwetten;