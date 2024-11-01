import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import logo from "../../assets/images/logo.png";
import OpenGraphMeta from "../common/OpenGraphMeta";

function CasinoHeader() {
  const theme = useTheme();

  // Open Graph Daten
  const pageTitle = "Die besten Online Spielotheken 2024 im Überblick";
  const pageDescription =
    "Entdecke die besten Online Spielotheken 2024! Unsere Experten haben eine Vielzahl von Anbietern sorgfältig getestet, um dir eine Liste der besten und sichersten Online Spielotheken zu bieten. Finde die perfekte Spielotheken mit den besten Bonusangeboten, den schnellsten Auszahlungen und der größten Spielauswahl.";
  const pageUrl = "https://einfachnurzocken.com/online-spielotheken";
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
        variant="body2"
        sx={{
          mb: 4,
          maxWidth: "800px",
          mx: "auto",
          fontSize: {
            xs: "1rem",
            sm: "1.125rem",
            md: "1.25rem",
          },
        }}
      >
        {pageDescription} Finde die perfekte Spielothek mit den besten
        Bonusangeboten, den schnellsten Auszahlungen und der größten Spielauswahl.
      </Typography>
    </Box>
  );
}

export default CasinoHeader;
