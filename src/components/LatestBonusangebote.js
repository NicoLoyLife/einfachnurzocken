import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { bonusangebote } from '../services/dummyData';

function LatestBonusangebote() {
  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography variant="h3" component='h3' sx={{ mb: 4, textAlign: 'center' }}>
        Aktuelle Bonusangebote und Promotions
      </Typography>

      <Typography variant='body1' component='p' sx={{ mb: 4, textAlign: 'center' }}>
        Verpasse nicht die besten Bonusangebote der Woche! Von großzügigen Willkommensboni bis hin zu spannenden Promotions - hier findest du alles, was du brauchst, um dein Spielerlebnis zu maximieren.
      </Typography>

      <Button variant='contained' color='primary' sx={{ display: 'block', margin: '0 auto' }} size='large'>
        Zu den Bonusangeboten
      </Button>
    </Box>
  );
}

export default LatestBonusangebote;