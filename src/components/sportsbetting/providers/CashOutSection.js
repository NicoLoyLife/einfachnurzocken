import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Rating, Divider } from '@mui/material';

const CashOutSection = ({ cashOutContent, ratings }) => {
  // Finde die Bewertung für die Kategorie "Cash-Out-Funktion"
  const categoryRating = ratings.find(
    (item) => item.category === 'Cash-Out-Funktion'
  );

  const score = categoryRating ? categoryRating.score : null;

  return (
    <Box sx={{ mb: 4 }}>
      {/* Überschrift */}
      <Typography variant="h2" component="h2" gutterBottom sx={{ mt: 4 }}>
        Cash-Out-Funktion
      </Typography>

      {/* Inhalt */}
      <Box sx={{ mt: 2 }}>
        {cashOutContent}
      </Box>

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

      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />
    </Box>
  );
};

CashOutSection.propTypes = {
  cashOutContent: PropTypes.node.isRequired,
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CashOutSection;