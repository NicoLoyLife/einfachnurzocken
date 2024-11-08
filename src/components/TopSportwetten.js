import React from "react";
import { Box, Typography, Button, Grid, Divider } from "@mui/material";
import { sportsbettingProvidersData as providersData } from "../services/providersData";
import { getSortedProvidersByRating } from "../services/helpers";
import SportsBettingCard from "./sportsbetting/SportsBettingCard";
import { Link } from "react-router-dom";

function TopSportwetten() {
  // Hole die sortierten Anbieter
  const sortedSportsbooks = getSortedProvidersByRating(providersData);

  // Filtern der Sportwetten-Anbieter mit den höchsten Ratings
  const topSportwetten = sortedSportsbooks.slice(0, 3);

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Unsere Empfehlungen für Sportwetten
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4, textAlign: "center" }}>
        Egal, ob du ein Fan von Fußball, Basketball oder Tennis bist - hier
        findest du die besten Sportwetten-Anbieter, die dir die besten Quoten
        und ein umfangreiches Wettangebot bieten.
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {topSportwetten.map((sportsbook, index) => (
          <Grid item key={index} xs={12} md={4}>
            <SportsBettingCard sportsbook={sportsbook} />
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
          to={'/sportwetten'}
        >
          Zu den Sportwetten-Anbietern
        </Button>
      </Box>
      
      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />
    </Box>
  );
}

export default TopSportwetten;
