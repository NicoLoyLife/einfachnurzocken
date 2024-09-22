import React from 'react';
import { Box, Typography, Rating } from '@mui/material';

const MobileAppSection = ({ mobileAppContent, ratings }) => {
  // Finde die Bewertung für die Kategorie "Mobile App & Optimierung"
  const categoryRating = ratings.find(
    (item) => item.category === 'Mobile App & Optimierung'
  );

  const score = categoryRating ? categoryRating.score : null;

  return (
    <Box sx={{ mb: 4 }}>
      {/* Überschrift */}
      <Typography variant="h2" component="h2" gutterBottom>
        Mobile App & Optimierung
      </Typography>

      {/* Inhalt */}
      {mobileAppContent}

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

export default MobileAppSection;