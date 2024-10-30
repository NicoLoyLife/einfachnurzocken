import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Rating, Grid, Divider } from "@mui/material";

const PaymentMethodsSection = ({
  paymentMethodsContent,
  ratings,
  paymentMethods,
}) => {
  // Finde die Bewertung für die Kategorie "Zahlungsmethoden"
  const categoryRating = ratings.find(
    (item) => item.category === "Zahlungsmethoden"
  );

  const score = categoryRating ? categoryRating.score : null;

  return (
    <Box sx={{ mb: 4 }}>
      {/* Überschrift */}
      <Typography variant="h2" component="h2" gutterBottom sx={{ mt: 4 }}>
        Zahlungsmethoden
      </Typography>

      {/* Inhalt */}
      <Box sx={{ mt: 2 }}>{paymentMethodsContent}</Box>

      {/* Anzeige der Zahlungsmethoden */}
      {paymentMethods && paymentMethods.length > 0 && (
        <Grid container spacing={2} sx={{ mt: 4 }}>
          {paymentMethods.map((method, index) => (
            <Grid item xs={3} sm={2} key={index}>
              <Box sx={{ textAlign: "center" }}>
                {method.logo && (
                  <Box
                    component="img"
                    src={method.logo}
                    alt={method.name}
                    sx={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      width: "auto",
                      height: "auto",
                      margin: "0 auto",
                      display: "block",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Bewertung */}
      {score !== null && (
        <Box sx={{ mt: 4, display: "flex", alignItems: "center" }}>
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

PaymentMethodsSection.propTypes = {
  paymentMethodsContent: PropTypes.node.isRequired,
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })
  ).isRequired,
  paymentMethods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string,
    })
  ).isRequired,
};

export default PaymentMethodsSection;
