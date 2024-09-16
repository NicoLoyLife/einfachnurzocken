import React from "react";
import { Box, Typography } from "@mui/material";

function SportsBettingHeader() {
  return (
    <Box
      sx={{
        mt: 4,
        mb: 6,
        textAlign: "center",
      }}
    >
      <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
        Die besten Sportwetten-Anbieter 2024 im Vergleich
      </Typography>

      <Typography variant="body1" sx={{ mb: 4, maxWidth: "800px", mx: "auto" }}>
        Entdecke die besten Sportwetten-Anbieter 2024! Unsere Experten haben
        eine Vielzahl von Buchmachern sorgfältig getestet, um dir eine Liste der
        besten und seriösesten Sportwetten-Anbieter zu bieten. Finde den idealen
        Anbieter mit attraktiven Bonusangeboten, hohen Quoten und einem großen
        Wettangebot.
      </Typography>
    </Box>
  );
}

export default SportsBettingHeader;
