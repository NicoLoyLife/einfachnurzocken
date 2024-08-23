import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { guides } from '../services/dummyData';
import GuideCard from './guides/GuideCard';

function LatestGuides() {

  // Sortieren der Guides nach Datum in absteigender Reihenfolge
  const sortedGuides = guides.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Filtern der neuesten Guides
  const latestGuides = sortedGuides.slice(0, 3);

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography variant='h3' component='h3' sx={{ mb: 4, textAlign: 'center' }}>
        Beliebteste Guides & Strategien
      </Typography>

      <Typography variant='body1' component='p' sx={{ mb: 4, textAlign: 'center' }}>
        Egal, ob du ein Anfänger oder ein erfahrener Spieler bist - unsere Guides helfen dir, deine Strategie zu verbessern und das Beste aus deinem Spielerlebnis herauszuholen. Hier findest du die neuesten Tipps und Tricks, um deine Gewinnchancen zu maximieren.
      </Typography>

      <Grid container spacing={1}>
        {latestGuides.map((guide, index) => (
          <Grid item key={index} xs={12} md={4}>
            <GuideCard guide={guide} />
          </Grid>
        ))}
      </Grid>

      <Button variant='contained' color='primary' sx={{ display: 'block', margin: '0 auto' }} size='large'>
        Alle Guides ansehen
      </Button>
      
    </Box>
  );
}

export default LatestGuides;