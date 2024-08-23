import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { news } from '../services/dummyData';
import NewsCard from './news/NewsCard';

function LatestNews() {

  // Sortieren der News nach Datum in absteigender Reihenfolge
  const sortedNews = news.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Filtern der neuesten News
  const latestNews = sortedNews.slice(0, 3);

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography variant='h3' component='h3' sx={{ mb: 4, textAlign: 'center' }}>
        Aktuelle News aus der Glücksspielwelt
      </Typography>

      <Typography variant='body1' component='p' sx={{ mb: 4, textAlign: 'center' }}>
        Bleibe immer auf dem Laufenden mit den neuesten Nachrichten aus der Welt der Online Casinos und Sportwetten. Hier findest du spannende Updates zu neuen Spielen, Branchenentwicklungen und exklusiven Interviews.
      </Typography>

      <Grid container spacing={1}>
        {latestNews.map((news, index) => (
          <Grid item key={index} xs={12} md={4}>
            <NewsCard news={news} />
          </Grid>
        ))}
      </Grid>

      <Button variant='contained' color='primary' sx={{ display: 'block', margin: '0 auto' }} size='large'>
        Mehr News
      </Button>
    </Box>
  );
}

export default LatestNews;
