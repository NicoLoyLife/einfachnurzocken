import React, {useMemo} from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import BonusOfferCard from "../bonus/BonusOfferCard";
import { bonusangebote, findCasinoByName } from "../../services/dummyData";

function CasinoBonusSection() {

    const enrichedOffers = useMemo(() => {
        const sortedOffers = [...bonusangebote].sort((a, b) => b.rating - a.rating);
        const topOffers = sortedOffers.slice(0, 3);
    
        return topOffers.map((offer) => {
          const casino = findCasinoByName(offer.provider);
          if (!casino) {
            console.error(`Casino nicht gefunden für Anbieter: ${offer.provider}`);
            return null;
          }
    
          return {
            ...offer,
            image: casino.image,
            deposit_methods: casino.deposit_methods,
            withdrawal_time: casino.withdrawal_time,
          };
        }).filter(offer => offer !== null);
      }, []);
      
    const handleViewAllOffers = () => {
        console.log("Button 'Alle Bonusangebote anzeigen' geklickt");
        // Hier kannst du die gewünschte Funktionalität hinzufügen
        // Zum Beispiel eine Navigation zu einer anderen Seite
    }

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Attraktive Bonusangebote der besten Online Casinos
      </Typography>

      <Typography
        variant="body1"
        component="p"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Einer der größten Vorteile beim Spielen in Online Casinos sind die
        attraktiven Bonusangebote. Diese reichen von Willkommensboni über
        Freispiele bis hin zu Cashback-Angeboten. Nutze diese Angebote, um dein
        Spielerlebnis zu maximieren und deine Gewinnchancen zu erhöhen!
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {enrichedOffers.map((offer, index) => (
          <Grid item xs={12} md={4} key={index}>
            <BonusOfferCard offer={offer} placement={index + 1} />
          </Grid>
        ))}
      </Grid>

      <Button variant='contained' color='primary' sx={{ mt: 4, display: 'block', margin: '0 auto' }} size='large' onClick={handleViewAllOffers}>
        Alle Bonusangebote anzeigen
      </Button>
    </Box>
  );
}

export default CasinoBonusSection;
