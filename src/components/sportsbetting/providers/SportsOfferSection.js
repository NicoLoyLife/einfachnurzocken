import React from 'react';
import { Box, Typography, Rating } from '@mui/material';

const SportsOfferSection = ({ sportsOfferContent, ratings }) => {
  // Finde die Bewertung für die Kategorie "Sportarten- & Wettangebot"
  const categoryRating = ratings.find(
    (item) => item.category === 'Sportarten- & Wettangebot'
  );

  const score = categoryRating ? categoryRating.score : null;

  return (
    <Box sx={{ mb: 4 }}>
      {/* Überschrift */}
      <Typography variant="h2" component="h2" gutterBottom>
        Sportarten- & Wettangebot
      </Typography>

      {/* Inhalt */}
      {sportsOfferContent}

      {/* Bewertung */}
      {score !== null && (
        <Box sx={{ mt: 4, display: 'flex', alignItems: 'center' }}>
          <Typography variant="h3" component="h3" gutterBottom sx={{ mr: 2 }}>
            Unsere Bewertung:
          </Typography>
          <Rating value={score} precision={0.5} readOnly />
          <Typography variant="body1" sx={{ ml: 1 }}>
            {score} / 5
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default SportsOfferSection;