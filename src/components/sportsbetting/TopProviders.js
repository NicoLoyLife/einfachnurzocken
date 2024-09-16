import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

function TopProviders() {
  return (
    <Box sx={{ padding: '2rem', textAlign: 'center' }}>
      <Typography variant="h2" component="h2" sx={{ fontSize: '1.8rem', fontWeight: 'bold', mb: 4 }}>
        Top Sportwetten-Anbieter
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {[1, 2, 3].map((item) => (
          <Grid item xs={12} md={4} key={item}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={`/assets/images/sportwetten-anbieter-${item}.jpg`} // Beispielbild
                alt={`Sportwetten Anbieter ${item}`}
              />
              <CardContent>
                <Typography variant="h5" component="h5">
                  Wettanbieter {item}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Bietet exzellente Quoten und schnelle Auszahlungen. Sichere Dir den Willkommensbonus und starte jetzt!
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Jetzt vergleichen
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TopProviders;