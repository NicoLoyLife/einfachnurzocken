import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import logo from "../../assets/images/logo.png";
import OpenGraphMeta from '../common/OpenGraphMeta';

function SportsBettingHeader() {
  const theme = useTheme();

  // Open Graph Daten
  const pageTitle = "Die besten Sportwetten-Anbieter 2024 im Vergleich";
  const pageDescription =
    "Entdecke die besten Sportwetten-Anbieter 2024! Unsere Experten haben eine Vielzahl von Buchmachern sorgfältig getestet, um dir eine Liste der besten und seriösesten Sportwetten-Anbieter zu bieten.";
  const pageUrl = "https://einfachnurzocken.com/sportwetten";
  const pageImage = logo;

  return (
    <Box
      sx={{
        mt: theme.spacing(4),
        mb: theme.spacing(6),
        textAlign: "center",
      }}
    >
      <OpenGraphMeta 
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        image={pageImage}
      />

      <Typography
        variant="h1"
        component="h1"
        sx={{
          mb: 2,
          fontSize: {
            xs: "2rem",
            sm: "3rem",
            md: "4rem",
          },
        }}
      >
        {pageTitle}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: 4,
        }}
      >
        {pageDescription} Finde den idealen Anbieter mit attraktiven
        Bonusangeboten, hohen Quoten und einem großen Wettangebot.
      </Typography>
    </Box>
  );
}

export default SportsBettingHeader;
