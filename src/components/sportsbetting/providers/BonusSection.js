import React from 'react';
import { Box, Typography, Rating } from '@mui/material';

const BonusSection = ({ bonusContent, ratings, bonusDetails }) => {
  // Finde die Bewertung für die Kategorie "Bonusangebote & Promotionen"
  const categoryRating = ratings.find(
    (item) => item.category === 'Bonusangebote & Promotionen'
  );

  const score = categoryRating ? categoryRating.score : null;

  return (
    <Box sx={{ mb: 4 }}>
      {/* Überschrift */}
      <Typography variant="h2" component="h2" gutterBottom>
        Bonusangebote & Promotionen
      </Typography>

      {/* Bonusinhalt */}
      {bonusContent}

      {/* Bonusdetails */}
      {bonusDetails && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h3" component="h3" gutterBottom>
            Bonusdetails
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <li>Bonusart: {bonusDetails.type}</li>
            <li>Maximaler Bonus: {bonusDetails.maxBonus}</li>
            <li>Mindesteinzahlung: {bonusDetails.minDeposit}</li>
            <li>Umsatzbedingungen: {bonusDetails.wageringRequirements}</li>
            <li>Mindestquote: {bonusDetails.oddsRequirement}</li>
            <li>Zeitraum: {bonusDetails.timeframe}</li>
            <li>Gültigkeit: {bonusDetails.validity}</li>
            <li>Verfügbar in: {bonusDetails.availableIn}</li>
          </Box>
        </Box>
      )}

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

export default BonusSection;