import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Rating, Divider } from '@mui/material';

const MobileAppSection = ({ mobileAppContent, ratings }) => {
  // Finde die Bewertung für die Kategorie "Mobile App & Optimierung"
  const categoryRating = ratings.find(
    (item) => item.category === 'Mobile App & Optimierung'
  );

  const score = categoryRating ? categoryRating.score : null;

  return (
    <Box sx={{ mb: 4 }}>
      {/* Überschrift */}
      <Typography variant="h2" component="h2" gutterBottom sx={{ mt: 4 }}>
        Mobile App & Optimierung
      </Typography>

      {/* Inhalt */}
      <Box sx={{ mb: 4 }}>
        {mobileAppContent}
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

MobileAppSection.propTypes = {
  mobileAppContent: PropTypes.node.isRequired,
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MobileAppSection;