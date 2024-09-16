import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import GuideCard from '../guides/GuideCard';
import { guides } from '../../services/dummyData'; // Dummy-Daten für Sportwetten-Guides

function SportsBettingGuidesSection() {
  
  // Sortieren der Guides nach Datum in absteigender Reihenfolge
  const sortedGuides = guides.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Filtern der neuesten Guides
  const latestGuides = sortedGuides.slice(0, 3);

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography variant='h2' component='h2' sx={{ mb: 4, textAlign: 'center' }}>
        Beliebteste Sportwetten-Guides & Strategien
      </Typography>

      <Typography variant='body1' component='p' sx={{ mb: 4, textAlign: 'center' }}>
        Egal, ob du neu im Sportwetten-Bereich bist oder schon länger dabei – unsere Guides helfen dir, deine Strategien zu verbessern und deine Wetten gezielter zu platzieren. Hier findest du die neuesten Tipps und Tricks, um deine Gewinnchancen zu maximieren.
      </Typography>

      <Grid container spacing={4} justifyContent='center'>
        {latestGuides.map((guide, index) => (
          <Grid item xs={12} md={4} key={index}>
            <GuideCard guide={guide} />
          </Grid>
        ))}
      </Grid>

      <Button 
        variant='contained' 
        color='primary' 
        sx={{ mt: 4, display: 'block', margin: '0 auto' }} 
        size='large'
      >
        Alle Guides ansehen
      </Button>
      
    </Box>
  );
}

export default SportsBettingGuidesSection;