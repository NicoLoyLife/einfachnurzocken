import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';

function BonusOffers() {
  return (
    <Box sx={{ backgroundColor: 'primary.light', padding: '2rem', textAlign: 'center' }}>
      <Typography variant="h2" component="h2" sx={{ fontSize: '1.8rem', fontWeight: 'bold', mb: 4 }}>
        Aktuelle Bonusangebote
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {[1, 2, 3].map((item) => (
          <Grid item xs={12} md={4} key={item}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h5">
                  Bonusangebot {item}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Exklusiver Willkommensbonus von bis zu 200 € auf Deine erste Einzahlung!
                </Typography>
                <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                  Bonus sichern
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default BonusOffers;