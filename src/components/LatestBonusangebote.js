import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { bonusangebote, findCasinoByName } from '../services/dummyData';
import BonusOfferCard from './bonus/BonusOfferCard';

function LatestBonusangebote() {

  // Sortieren der Bonusangebote nach Rating in absteigender Reihenfolge
  const sortedOffers = bonusangebote.sort((a, b) => b.rating - a.rating);

  // Filtern der Bonusangebote mit den höchsten Ratings
  const topOffers = sortedOffers.slice(0, 3);

  // Anreichern der Bonusangebote mit Casino-Informationen
  const enrichedOffers = topOffers.map(offer => {
    const casino = findCasinoByName(offer.provider);
    if (!casino) {
        console.error(`Casino nicht gefunden für Anbieter: ${offer.provider}`);
        return null;
    }
    
    const enrichedOffer = {
        ...offer,
        image: casino.image,
        deposit_methods: casino.deposit_methods,
        withdrawal_time: casino.withdrawal_time,
    };
    return enrichedOffer;
  }).filter(offer => offer !== null);

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography variant="h3" component='h3' sx={{ mb: 4, textAlign: 'center' }}>
        Aktuelle Bonusangebote und Promotions
      </Typography>

      <Typography variant='body1' component='p' sx={{ mb: 4, textAlign: 'center' }}>
        Verpasse nicht die besten Bonusangebote der Woche! Von großzügigen Willkommensboni bis hin zu spannenden Promotions - hier findest du alles, was du brauchst, um dein Spielerlebnis zu maximieren.
      </Typography>

      <Grid container spacing={1} justifyContent='center'>
        {enrichedOffers.map((offer, index) => (
          <Grid item key={index} xs={12} md={4}>
            <BonusOfferCard offer={offer} placement={index + 1} />
          </Grid>
        ))}
      </Grid>

      <Button variant='contained' color='primary' sx={{ display: 'block', margin: '0 auto' }} size='large'>
        Zu den Bonusangeboten
      </Button>
    </Box>
  );
}

export default LatestBonusangebote;