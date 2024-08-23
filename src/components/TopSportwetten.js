import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { sportwetten } from '../services/dummyData';
import SportsBettingCard from './sportsbetting/SportsBettingCard';

function TopSportwetten() {

  // Sortieren der Sportwetten-Anbieter nach Rating in absteigender Reihenfolge
  const sortedSportwetten = sportwetten.sort((a, b) => b.rating - a.rating);

  // Filtern der Sportwetten-Anbieter mit den höchsten Ratings
  const topSportwetten = sortedSportwetten.slice(0, 3);

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography variant='h3' component='h3' sx={{ mb: 4, textAlign: 'center' }}>
        Unsere Empfehlungen für Sportwetten
      </Typography>

      <Typography variant='body1' component='p' sx={{ mb: 4, textAlign: 'center' }}>
        Egal, ob du ein Fan von Fußball, Basketball oder Tennis bist - hier findest du die besten Sportwetten-Anbieter, die dir die besten Quoten und ein umfangreiches Wettangebot bieten.
      </Typography>

      <Grid container spacing={1} justifyContent='center'>
        {topSportwetten.map((sportsbook, index) => (
          <Grid item key={index} xs={12} md={4}>
            <SportsBettingCard sportsbook={sportsbook} />
          </Grid>
        ))}
      </Grid>

      <Button variant='contained' color='primary' sx={{ display: 'block', margin: '0 auto' }} size='large'>
        Zu den Sportwetten-Anbietern
      </Button>
    </Box>
  );
}

export default TopSportwetten;