// src/pages/WettTippsOverview.js

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import MainLayout from "../../layout/MainLayout";
import wettTippsData from "../../../services/wett-tipps.json";
import { parse } from "date-fns";
import TippCard from "./TippCard";

const WettTippsOverview = () => {
  const [wettTipps, setWettTipps] = useState([]);
  const [availableSports, setAvailableSports] = useState([]);
  const [filterCategory, setFilterCategory] = useState("Alle");

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

    setWettTipps(sortedTipps);

    // Extrahiere die einzigartigen Sportarten
    const sports = [...new Set(sortedTipps.map((tipp) => tipp.sport))];
    setAvailableSports(sports);
  }, []);

  // Filtern der Wett-Tipps basierend auf Sportart
  const filteredTipps = wettTipps.filter((tipp) => {
    const matchesCategory =
      filterCategory === "Alle" || tipp.sport === filterCategory;
    return matchesCategory;
  });

  return (
    <MainLayout>
      <Box sx={{ p: 4 }}>
        <Typography
          variant="h3"
          component="h3"
          sx={{ mb: 4, textAlign: "center" }}
        >
          Wett-Tipps
        </Typography>

        <Typography
          variant="body1"
          component="p"
          sx={{ mb: 4, textAlign: "center" }}
        >
          Egal, ob du ein erfahrener Wetter oder ein Neuling bist – hier findest
          du unsere aktuellen Wett-Tipps für verschiedene Sportarten. Nutze die
          Filterfunktion, um die passenden Tipps für dich zu entdecken.
        </Typography>

        {/* Filter */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            {/* Platzhalter, falls Sie später weitere Filter hinzufügen möchten */}
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="filter-label">Sportart</InputLabel>
              <Select
                labelId="filter-label"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                label="Sportart"
              >
                <MenuItem value="Alle">Alle Sportarten</MenuItem>
                {availableSports.map((sport, index) => (
                  <MenuItem key={index} value={sport}>
                    {sport}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Anzeige der Wett-Tipps */}
        <Grid container spacing={4}>
          {filteredTipps.map((tipp) => (
            <Grid item xs={12} md={4} key={tipp.id}>
              <TippCard tipp={tipp} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default WettTippsOverview;
