import React from "react";
import { Box, Typography, Button, Grid, Divider } from "@mui/material";
import SportsBettingBonusOfferCard from "./SportsBettingBonusOfferCard"; // Verwendung deiner neuen BonusCard
import providersData from "../../services/providersData";
import { getSortedProvidersByRating } from "../../services/helpers";
import { Link } from "react-router-dom";

function SportsBettingBonusSection() {
  // Hole die sortierten Anbieter
  const sortedSportsbooks = getSortedProvidersByRating(providersData);

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Attraktive Bonusangebote der besten Sportwetten-Anbieter
      </Typography>

      <Typography variant="body2" paragraph sx={{ mb: 4, textAlign: "center" }}>
        Einer der größten Vorteile beim Platzieren von Sportwetten online sind
        die attraktiven Bonusangebote. Diese reichen von Willkommensboni über
        Gratiswetten bis hin zu Cashback-Angeboten. Nutze diese Angebote, um
        deine Gewinnchancen zu maximieren und dein Wetterlebnis zu verbessern!
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {sortedSportsbooks.slice(0, 3).map((offer, index) => (
          <Grid item xs={12} md={4} key={index}>
            <SportsBettingBonusOfferCard offer={offer} placement={index + 1} />{" "}
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: { xs: '75%', sm: 'auto' },
            maxWidth: { sm: 400 },
            whiteSpace: 'normal', // Ermöglicht Zeilenumbruch bei langem Text
          }}
          component={Link}
          to="/sportwetten/bonus"
        >
          Alle Bonusangebote anzeigen
        </Button>
      </Box>
      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />
    </Box>
  );
}

export default SportsBettingBonusSection;
