import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function SportsBettingGuide() {
  return (
    <Box sx={{ backgroundColor: 'secondary.light', padding: '2rem', textAlign: 'center' }}>
      <Typography variant="h2" component="h2" sx={{ fontSize: '1.8rem', fontWeight: 'bold', mb: 4 }}>
        Sportwetten Guide
      </Typography>
      <Typography variant="body1" paragraph>
        Erfahre alles über erfolgreiche Wettstrategien, Tipps und Tricks in unserem umfassenden Sportwetten-Guide.
      </Typography>
      <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
        Zum Guide
      </Button>
    </Box>
  );
}

export default SportsBettingGuide;