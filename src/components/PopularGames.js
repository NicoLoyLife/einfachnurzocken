import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { spiele } from '../services/dummyData';
import GameCard from './games/GameCard';

function PopularGames() {
  // Sortieren der Spiele nach Rating in absteigender Reihenfolge
  const sortedGames = spiele.sort((a, b) => b.rating - a.rating);

  // Filtern der Spiele mit den höchsten Ratings
  const topGames = sortedGames.slice(0, 6);

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography variant='h3' component='h3' sx={{ mb: 4, textAlign: 'center' }}>
        Beliebteste Spiele
      </Typography>

      <Typography variant='body1' component='p' sx={{ mb: 4, textAlign: 'center' }}>
        Entdecke die Spiele, die aktuell bei unseren Nutzern am beliebtesten sind. Diese Slots und Tischspiele bieten nicht nur Unterhaltung, sondern auch großartige Gewinnchancen.
      </Typography>

      <Grid container spacing={1}>
        {topGames.map((game, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <GameCard game={game} />
          </Grid>
        ))}
      </Grid>

      <Button variant='contained' color='primary' sx={{ display: 'block', margin: '0 auto' }} size='large'>
        Alle Spiele ansehen
      </Button>
    </Box>
  );
}

export default PopularGames;
