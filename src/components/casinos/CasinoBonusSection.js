import React from "react";
import { Box, Typography, Button, Grid, Divider } from "@mui/material";
import CasinoBonusOfferCard from "./CasinoBonusOfferCard";
import { onlineCasinoProvidersData as providersData } from "../../services/providersData";
import { getSortedProvidersByRating } from "../../services/helpers";
import { Link } from "react-router-dom";

function CasinoBonusSection() {
  // Hole die sortierten Anbieter
  const sortedCasinos = getSortedProvidersByRating(providersData);

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Attraktive Bonusangebote der besten Online Spielotheken
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4, textAlign: "center" }}>
        Einer der größten Vorteile beim Spielen in Online Spielotheken sind die
        attraktiven Bonusangebote. Diese reichen von Willkommensboni über
        Freispiele bis hin zu Cashback-Angeboten. Nutze diese Angebote, um dein
        Spielerlebnis zu maximieren und deine Gewinnchancen zu erhöhen!
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {sortedCasinos.slice(0, 3).map((offer, index) => (
          <Grid item xs={12} md={4} key={index}>
            <CasinoBonusOfferCard offer={offer} placement={index + 1} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: { xs: "75%", sm: "auto" },
            maxWidth: { sm: 400 },
            whiteSpace: "normal", // Ermöglicht Zeilenumbruch bei langem Text
          }}
          component={Link}
          to="/online-spielotheken/anbieter-vergleich"
        >
          Alle Bonusangebote anzeigen
        </Button>
      </Box>
      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />
    </Box>
  );
}

export default CasinoBonusSection;
