import React from 'react';
import { Box, Typography, Rating } from '@mui/material';

const LoyaltyProgramSection = ({ loyaltyProgramContent, ratings }) => {
  // Finde die Bewertung für die Kategorie "Treueprogramme & VIP-Services"
  const categoryRating = ratings.find(
    (item) => item.category === 'Treueprogramme & VIP-Services'
  );

  const score = categoryRating ? categoryRating.score : null;

  return (
    <Box sx={{ mb: 4 }}>
      {/* Überschrift */}
      <Typography variant="h2" component="h2" gutterBottom>
        Treueprogramme & VIP-Services
      </Typography>

      {/* Inhalt */}
      {loyaltyProgramContent}

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

export default LoyaltyProgramSection;