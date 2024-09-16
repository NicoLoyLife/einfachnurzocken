import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';

function NewsAndTips() {
  return (
    <Box sx={{ padding: '2rem', textAlign: 'center' }}>
      <Typography variant="h2" component="h2" sx={{ fontSize: '1.8rem', fontWeight: 'bold', mb: 4 }}>
        Aktuelle News & Wett-Tipps
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {[1, 2, 3].map((item) => (
          <Grid item xs={12} md={4} key={item}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h5">
                  Wett-Tipp {item}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Erfahre alles über die besten Wetten und aktuellen Quoten für das kommende Spiel!
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Mehr erfahren
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default NewsAndTips;