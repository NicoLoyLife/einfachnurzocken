import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { guides } from '../services/dummyData';

function LatestGuides() {
  return (
    <Box m={2} p={2}>
      <Typography variant="h4" gutterBottom>
        Neueste Guides
      </Typography>
      <Grid container spacing={2}>
        {guides.slice(0, 3).map((guide, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: 'background.paper' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {guide.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {guide.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default LatestGuides;