import React, { useMemo } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import SportsBettingBonusOfferCard from "./SportsBettingBonusOfferCard"; // Verwendung deiner neuen BonusCard
import { sportwettenBonusangebote, findSportsbookByName } from "../../services/dummyData"; // Anpassung der Dummy-Daten

function SportsBettingBonusSection() {
  const enrichedOffers = useMemo(() => {
    const sortedOffers = [...sportwettenBonusangebote].sort((a, b) => b.rating - a.rating);
    const topOffers = sortedOffers.slice(0, 3);

    return topOffers.map((offer) => {
      const sportsbook = findSportsbookByName(offer.provider);
      if (!sportsbook) {
        console.error(`Sportwetten-Anbieter nicht gefunden für Anbieter: ${offer.provider}`);
        return null;
      }

      return {
        ...offer,
        image: sportsbook.image,
        deposit_methods: sportsbook.deposit_methods,
        withdrawal_time: sportsbook.withdrawal_time,
      };
    }).filter(offer => offer !== null);
  }, []);

  const handleViewAllOffers = () => {
    console.log("Button 'Alle Bonusangebote anzeigen' geklickt");
    // Hier kannst du die gewünschte Funktionalität hinzufügen
    // Zum Beispiel eine Navigation zu einer anderen Seite
  };

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Attraktive Bonusangebote der besten Sportwetten-Anbieter
      </Typography>

      <Typography
        variant="body1"
        component="p"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Einer der größten Vorteile beim Platzieren von Sportwetten online sind die
        attraktiven Bonusangebote. Diese reichen von Willkommensboni über
        Gratiswetten bis hin zu Cashback-Angeboten. Nutze diese Angebote, um deine
        Gewinnchancen zu maximieren und dein Wetterlebnis zu verbessern!
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {enrichedOffers.map((offer, index) => (
          <Grid item xs={12} md={4} key={index}>
            <SportsBettingBonusOfferCard offer={offer} placement={index + 1} /> {/* Verwendung deiner SportsBettingBonusOfferCard */}
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 4, display: "block", margin: "0 auto" }}
        size="large"
        onClick={handleViewAllOffers}
      >
        Alle Bonusangebote anzeigen
      </Button>
    </Box>
  );
}

export default SportsBettingBonusSection;