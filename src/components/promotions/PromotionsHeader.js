import React from "react";
import { Box, Typography } from "@mui/material";

function PromotionsHeader() {
  return (
    <Box sx={{ mt: 4, mb: 6, textAlign: "center" }}>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          mb: 2,
        }}
      >
        Die besten Bonusangebote 2024 im Überblick
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 4,
        }}
      >
        Finde die besten Bonusangebote der Online Casinos 2024! Unsere Experten
        haben die attraktivsten Boni untersucht und stellen dir eine Auswahl der
        besten Willkommensboni, Freispiele, Cashback-Angebote und vieles mehr
        zur Verfügung. Nutze diese Angebote, um dein Spielerlebnis zu maximieren
        und deine Gewinnchancen zu erhöhen.
      </Typography>
    </Box>
  );
}

export default PromotionsHeader;
