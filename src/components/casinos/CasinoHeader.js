import React from "react";
import { Box, Typography } from "@mui/material";

function CasinoHeader() {
  return (
    <Box sx={{ mt: 4, mb: 6, textAlign: "center" }}>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          mb: 2,
        }}
      >
        Die besten Online Spielotheken 2024 im Überblick
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 4, maxWidth: "800px", mx: "auto"
        }}
      >
        Entdecke die besten Online Spielotheken 2024! Unsere Experten haben eine
        Vielzahl von Anbietern sorgfältig getestet, um dir eine Liste der besten
        und sichersten Online Spielotheken zu bieten. Finde die perfekte Spielotheken mit
        den besten Bonusangeboten, den schnellsten Auszahlungen und der größten
        Spielauswahl.
      </Typography>
    </Box>
  );
}

export default CasinoHeader;