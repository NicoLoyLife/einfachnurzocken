import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import CasinoCard from './casinos/CasinoCard';
import { casinos } from '../services/dummyData';

function TopCasinos() {

  // Sortieren der Casinos nach Rating in absteigender Reihenfolge
  const sortedCasinos = casinos.sort((a, b) => b.rating - a.rating);

  // Filtern der Casinos mit den höchsten Ratings
  const topCasinos = sortedCasinos.slice(0, 3);

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography variant='h3' component='h3' sx={{ mb: 4, textAlign: 'center' }}>
        Unsere Top Casinos im Überblick
      </Typography>
      <Typography variant='body1' component='p' sx={{ mb: 4, textAlign: 'center' }}>
      Entdecke die besten Online Casinos, die von unseren Experten sorgfältig geprüft wurden. Diese Casinos bieten nicht nur herausragende Spiele und Boni, sondern auch einen erstklassigen Kundenservice und sichere Zahlungsmethoden.
      </Typography>
      <Grid container spacing={1} justifyContent='center'>
        {topCasinos.map((casino, index) => (
          <Grid item key={index} xs={12} md={4}>
            <CasinoCard casino={casino} />
          </Grid>
        ))}
      </Grid>
      <Button variant='contained' color='primary' sx={{ mt: 4, display: 'block', margin: '0 auto' }} size='large'>
        Die besten Casinos entdecken
      </Button>
    </Box>
  );
}

export default TopCasinos;