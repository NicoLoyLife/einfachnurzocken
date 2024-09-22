import React from 'react';
import { Box, Typography, Rating, Grid } from '@mui/material';

const PaymentMethodsSection = ({ paymentMethodsContent, ratings, paymentMethods }) => {
  // Finde die Bewertung für die Kategorie "Zahlungsmethoden"
  const categoryRating = ratings.find(
    (item) => item.category === 'Zahlungsmethoden'
  );

  const score = categoryRating ? categoryRating.score : null;

  return (
    <Box sx={{ mb: 4 }}>
      {/* Überschrift */}
      <Typography variant="h2" component="h2" gutterBottom>
        Zahlungsmethoden
      </Typography>

      {/* Inhalt */}
      {paymentMethodsContent}

      {/* Anzeige der Zahlungsmethoden */}
      {paymentMethods && paymentMethods.length > 0 && (
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {paymentMethods.map((method, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                {method.logo && (
                  <img
                    src={method.logo}
                    alt={method.name}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                )}
                <Typography variant="body2">{method.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
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

export default PaymentMethodsSection;