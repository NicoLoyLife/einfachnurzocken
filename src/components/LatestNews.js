import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { news } from '../services/dummyData';

function LatestNews() {
  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography variant='h3' component='h3' sx={{ mb: 4, textAlign: 'center' }}>
        Aktuelle News aus der Glücksspielwelt
      </Typography>

      <Typography variant='body1' component='p' sx={{ mb: 4, textAlign: 'center' }}>
        Bleibe immer auf dem Laufenden mit den neuesten Nachrichten aus der Welt der Online Casinos und Sportwetten. Hier findest du spannende Updates zu neuen Spielen, Branchenentwicklungen und exklusiven Interviews.
      </Typography>

      <Button variant='contained' color='primary' sx={{ display: 'block', margin: '0 auto' }} size='large'>
        Mehr News
      </Button>
    </Box>
  );
}

export default LatestNews;
