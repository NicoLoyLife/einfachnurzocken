import React from "react";
import { Box, Typography, Grid, Button, Divider } from "@mui/material";
import { onlineCasinoProvidersData as providersData } from "../services/providersData";
import { getSortedProvidersByRating } from "../services/helpers";
import CasinoCard from "./casinos/CasinoCard";
import { Link } from "react-router-dom";

function TopCasinos() {
  // Sortieren der Casinos nach Rating in absteigender Reihenfolge
  const sortedCasinos = getSortedProvidersByRating(providersData);

  // Filtern der Casinos mit den höchsten Ratings
  const topCasinos = sortedCasinos.slice(0, 3);

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Unsere Top Casinos im Überblick
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4, textAlign: "center" }}>
        Entdecke die besten Online Casinos, die von unseren Experten sorgfältig
        geprüft wurden. Diese Casinos bieten nicht nur herausragende Spiele und
        Boni, sondern auch einen erstklassigen Kundenservice und sichere
        Zahlungsmethoden.
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {topCasinos.map((casino, index) => (
          <Grid item key={index} xs={12} md={4}>
            <CasinoCard casino={casino} />
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
        to={'/online-spielotheken'}
      >
        Die besten Casinos entdecken
      </Button>
      </Box>

      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />
    </Box>
  );
}

export default TopCasinos;
