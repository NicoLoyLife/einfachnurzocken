// src/components/SportsBettingTippsSection.js

import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid, Divider } from "@mui/material";
import TippCard from "./wett-tipps/TippCard";
import wettTippsData from "../../services/wett-tipps.json";
import { parse } from "date-fns";
import { Link } from "react-router-dom";

function SportsBettingTippsSection() {
  const [latestTipps, setLatestTipps] = useState([]);

  useEffect(() => {
    // Erstelle eine Kopie der Daten und füge ein 'dateTime' Feld hinzu
    const tippsWithDateTime = wettTippsData.map((tipp) => {
      // Kombiniere das Datum und die Uhrzeit
      const dateTimeString = `${tipp.date} ${tipp.time}`;
      // Erstelle ein Date-Objekt unter Angabe des Formats
      const dateTime = parse(dateTimeString, "yyyy-MM-dd HH:mm", new Date());
      return { ...tipp, dateTime };
    });

    // Sortiere die Wett-Tipps nach Datum und Uhrzeit (neueste zuerst)
    const sortedTipps = tippsWithDateTime.sort((a, b) => b.dateTime - a.dateTime);

    // Wähle die 3 aktuellsten Tipps aus
    const topThreeTipps = sortedTipps.slice(0, 3);

    setLatestTipps(topThreeTipps);
  }, []);

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Aktuelle Wett-Tipps für dich
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4, textAlign: "center" }}>
        Entdecke unsere neuesten Wett-Tipps für anstehende Sportereignisse. Nutze unsere Analysen und Prognosen, um deine nächsten Wetten zu platzieren und deine Gewinnchancen zu erhöhen!
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {latestTipps.map((tipp) => (
          <Grid item xs={12} md={4} key={tipp.id}>
            <TippCard tipp={tipp} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: { xs: '75%', sm: 'auto' },
            maxWidth: { sm: 400 },
            whiteSpace: 'normal', // Ermöglicht Zeilenumbruch bei langem Text
          }}
          component={Link}
          to="/sportwetten/wett-tipps"
        >
          Alle Wett-Tipps anzeigen
        </Button>
      </Box>
      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />
    </Box>
  );
}

export default SportsBettingTippsSection;