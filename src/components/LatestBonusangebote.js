import React from "react";
import { Box, Typography, Button, Grid, Divider } from "@mui/material";
import CasinoBonusOfferCard from "./casinos/CasinoBonusOfferCard";
import { onlineCasinoProvidersData as providersData } from "../services/providersData";
import { getSortedProvidersByRating } from "../services/helpers";
import { Link } from "react-router-dom";

function LatestBonusangebote() {
  // Sortieren der Bonusangebote nach Rating in absteigender Reihenfolge
  const sortedOffers = getSortedProvidersByRating(providersData);

  // Filtern der Bonusangebote mit den höchsten Ratings
  const topOffers = sortedOffers.slice(0, 5);

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Aktuelle Bonusangebote und Promotions
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4, textAlign: "center" }}>
        Verpasse nicht die besten Bonusangebote der Woche! Von großzügigen
        Willkommensboni bis hin zu spannenden Promotions - hier findest du
        alles, was du brauchst, um dein Spielerlebnis zu maximieren.
      </Typography>

      <Grid container spacing={1} justifyContent="center">
        {topOffers.map((offer, index) => (
          <Grid item key={index} xs={12} md={4}>
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
          to="/online-spielotheken/bonus"
        >
          Zu den Bonusangeboten
        </Button>
      </Box>

      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />
    </Box>
  );
}

export default LatestBonusangebote;
