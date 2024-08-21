import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { casinos } from '../services/dummyData';

function TopCasinos() {
  return (
    <Box m={2} p={2}>
      <Typography variant="h4" gutterBottom>
        Top Online Casinos
      </Typography>
      <Grid container spacing={2}>
        {casinos.slice(0, 3).map((casino, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: 'background.paper' }}>
              <CardMedia
                component="img"
                height="140"
                image={casino.image} // Placeholder-Bild, später ersetzen
                alt={casino.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {casino.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {casino.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rating: {casino.rating}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Bonus: {casino.bonus}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TopCasinos;