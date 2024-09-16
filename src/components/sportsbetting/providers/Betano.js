import React from "react";
import { Box, Typography, Grid, Rating, Divider } from "@mui/material";

function Betano() {
  // Bewertungen in einem Objekt zur einfacheren Nutzung
  const ratings = {
    bonus: 5,
    odds: 4,
    sportsVariety: 5,
    paymentMethods: 5,
    customerSupport: 4,
    fees: 1,
    mobileApp: 5,
    loyaltyPrograms: 4,
    cashOut: 5,
  };

  // Berechnung des Gesamtratings
  const totalRating = (
    (ratings.bonus +
      ratings.odds +
      ratings.sportsVariety +
      ratings.paymentMethods +
      ratings.customerSupport +
      ratings.fees +
      ratings.mobileApp +
      ratings.loyaltyPrograms +
      ratings.cashOut) /
    9
  ).toFixed(1);

  return (
    <Box sx={{ padding: { xs: 2, md: 4 }, backgroundColor: 'background.default' }}>
      {/* Titel und Einleitung */}
      <Typography variant="h1" component="h1" sx={{ mb: 4, textAlign: "center" }}>
        Betano Sportwetten
      </Typography>
      
      <Typography variant="body1" component="p" sx={{ mb: 4, textAlign: "center" }}>
        Entdecke den ultimativen Sportwettenanbieter – 100% Einzahlungsbonus bis 80€ + 20€ Freiwette ohne Einzahlung! 
      </Typography>

      <Typography variant="body1" component="p" sx={{ mb: 4, textAlign: "center" }}>
        Du suchst nach einem attraktiven Sportwettenanbieter? Dann haben wir das perfekte Angebot für dich! Melde dich jetzt bei Betano an und profitiere von einem 100% Einzahlungsbonus bis zu 80€ - verdopple deine erste Einzahlung und starte mit einem größeren Wettguthaben durch!
      </Typography>

      <Typography variant="body1" component="p" sx={{ mb: 4, textAlign: "center" }}>
        Und das Beste: Du erhältst zusätzlich eine 20€ Freiwette - ganz ohne Einzahlung! Einfach registrieren, Freiwette sichern und loslegen!
      </Typography>

      {/* Bonusübersicht */}
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
          Übersicht Betano Bonus
        </Typography>
        <Typography variant="body1">
          <strong>Bonusart:</strong> 100% Einzahlungsbonus + Gratiswette
        </Typography>
        <Typography variant="body1">
          <strong>Max. Bonus:</strong> 100€ (80€ Einzahlungsbonus + 20€ Gratiswette)
        </Typography>
        <Typography variant="body1">
          <strong>Mindesteinzahlung:</strong> 10€
        </Typography>
        <Typography variant="body1">
          <strong>Umsatzbedingungen:</strong> Bonus + Einzahlung 5x umsetzen
        </Typography>
        <Typography variant="body1">
          <strong>Mindestquote:</strong> Bonusguthaben 1,65 Freiwette keine min. Quote
        </Typography>
        <Typography variant="body1">
          <strong>Zeitraum:</strong> 90 Tage (ab Gutschrift)
        </Typography>
        <Typography variant="body1">
          <strong>Gültigkeit:</strong> 1x pro Haushalt
        </Typography>
        <Typography variant="body1">
          <strong>Verfügbar In:</strong> Deutschland
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Vorteile */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
          Deine Vorteile auf einen Blick
        </Typography>
        <ul>
          <li>100% Bonus bis 80€ auf deine erste Einzahlung</li>
          <li>20€ Freiwette ohne Einzahlung</li>
          <li>Attraktive Quoten und eine riesige Auswahl an Sportwetten</li>
          <li>Sichere und schnelle Auszahlungen</li>
          <li>Spezialregel: Wette schon gewonnen, wenn dein Team mit 2 Toren führt</li>
          <li>Deutsche Lizenz – Sicherheit und Vertrauen</li>
          <li>Riesiges Livewetten-Angebot</li>
          <li>Spielerwetten – Setze auf die Leistungen einzelner Spieler</li>
          <li>Beste Quoten auf dem Markt</li>
        </ul>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Bewertungen */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: "center" }}>
          Betano im Test – Unsere Bewertung
        </Typography>

        {/* Ratings Grid */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Bonusangebote & Promotionen:</Typography>
            <Rating value={ratings.bonus} readOnly />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Wettquoten:</Typography>
            <Rating value={ratings.odds} readOnly />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Sportarten & Wettangebot:</Typography>
            <Rating value={ratings.sportsVariety} readOnly />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Zahlungsmethoden:</Typography>
            <Rating value={ratings.paymentMethods} readOnly />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Kundensupport:</Typography>
            <Rating value={ratings.customerSupport} readOnly />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Wettsteuer & Gebühren:</Typography>
            <Rating value={ratings.fees} readOnly />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Mobile App & Optimierung:</Typography>
            <Rating value={ratings.mobileApp} readOnly />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Treueprogramme & VIP-Services:</Typography>
            <Rating value={ratings.loyaltyPrograms} readOnly />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Cash-Out-Funktion:</Typography>
            <Rating value={ratings.cashOut} readOnly />
          </Grid>
        </Grid>

        {/* Gesamtrating */}
        <Typography variant="h4" sx={{ mt: 4, textAlign: "center" }}>
          Gesamtrating: {totalRating}/5
        </Typography>
      </Box>

      {/* Call-to-Action */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h5" component="h5" sx={{ mb: 2 }}>
          Melde dich jetzt bei Betano an und starte deine Wettabenteuer!
        </Typography>
        <Box component="button" sx={{ p: 2, backgroundColor: "primary.main", color: "white", borderRadius: "8px", cursor: "pointer" }}>
          Jetzt anmelden
        </Box>
      </Box>
    </Box>
  );
}

export default Betano;