// src/components/LatestTipps.js

import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { parse } from "date-fns";
import wettTippsData from "../services/wett-tipps.json";
import TippCard from "./sportsbetting/wett-tipps/TippCard";

function LatestTipps() {
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
    const sortedTipps = tippsWithDateTime.sort(
      (a, b) => b.dateTime - a.dateTime
    );

    // Wähle die 3 aktuellsten Tipps aus
    const topThreeTipps = sortedTipps.slice(0, 3);

    setLatestTipps(topThreeTipps);
  }, []);

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h3"
        component="h3"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Neueste Wett-Tipps
      </Typography>

      <Typography
        variant="body1"
        component="p"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Bleib auf dem Laufenden mit unseren aktuellen Wett-Tipps. Hier findest
        du die neuesten Prognosen und Analysen zu anstehenden Sportereignissen.
      </Typography>

      <Grid container spacing={4}>
        {latestTipps.map((tipp) => (
          <Grid item xs={12} md={4} key={tipp.id}>
            <TippCard tipp={tipp} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default LatestTipps;
