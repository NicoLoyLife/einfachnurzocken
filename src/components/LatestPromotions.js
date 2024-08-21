import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { promotions } from '../services/dummyData';

function LatestPromotions() {
  return (
    <Box m={2} p={2}>
      <Typography variant="h4" gutterBottom>
        Neueste Promotions
      </Typography>
      <Grid container spacing={2}>
        {promotions.slice(0, 3).map((promo, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: 'background.paper' }}>
              <CardMedia
                component="img"
                height="140"
                image={promo.image} // Placeholder-Bild, später ersetzen
                alt={promo.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {promo.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {promo.details}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default LatestPromotions;