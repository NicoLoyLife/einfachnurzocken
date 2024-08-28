import React, { useState } from "react";
import { bonusangebote, findCasinoByName } from "../../services/dummyData";
import { Box, Button, Grid, Typography } from "@mui/material";
import BonusOfferCard from "./BonusOfferCard";

// Bonusangebote nach Rating sortieren
const sortedBonusOffers = [...bonusangebote].sort((a, b) => b.rating - a.rating);

function TopBonusSection() {
  // State für die Anzahl der angezeigten Bonusangebote (initial 3 für Mobile)
  const [visibleBonuses, setVisibleBonuses] = useState(3);

  // Funktion zum Anzeigen weiterer Bonusangebote
  const showMoreBonuses = () => {
    setVisibleBonuses((prev) => prev + 3); // Jeweils 3 weitere Bonusangebote laden
  };

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Alle verfügbaren Bonusangebote
      </Typography>

      <Typography
        variant="body1"
        component="p"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Entdecke die besten Bonusangebote in unseren empfohlenen Online Casinos. 
        Egal ob Willkommensboni, Freispiele oder Cashback-Angebote – hier findest du die attraktivsten Angebote, um dein Spielerlebnis zu maximieren.
      </Typography>

      {/* Grid Container für die Darstellung der Bonusangebote */}
      <Grid container spacing={2} justifyContent="center">
        {sortedBonusOffers.slice(0, visibleBonuses).map((offer, index) => {
          const casino = findCasinoByName(offer.provider);
          if (!casino) {
            console.error(`Casino nicht gefunden für Anbieter: ${offer.provider}`);
            return null;
          }

          const enrichedOffer = {
            ...offer,
            image: casino.image,
            deposit_methods: casino.deposit_methods,
            withdrawal_time: casino.withdrawal_time,
          };

          return (
            <Grid item key={index} xs={12} md={4}>
              <BonusOfferCard offer={enrichedOffer} placement={index + 1} />
            </Grid>
          );
        })}
      </Grid>

      {/* Button zum Laden weiterer Bonusangebote */}
      {visibleBonuses < sortedBonusOffers.length && (
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4, display: "block", margin: "0 auto" }}
          size="large"
          onClick={showMoreBonuses}
        >
          Mehr Bonusangebote laden
        </Button>
      )}
    </Box>
  );
}

export default TopBonusSection;