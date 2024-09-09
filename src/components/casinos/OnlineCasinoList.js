import React, { useState } from "react";
import { casinos } from "../../services/dummyData";
import { Box, Button, Grid, Typography } from "@mui/material";
import CasinoCard from "./CasinoCard";

// Casinos nach Rating sortieren
const sortedCasinos = [...casinos].sort((a, b) => b.rating - a.rating);

function OnlineCasinoList() {
  // State für die Anzahl der angezeigten Casinos (initial 3 für Mobile)
  const [visibleCasinos, setVisibleCasinos] = useState(3);

  // Funktion zum Anzeigen weiterer Casinos
  const showMoreCasinos = () => {
    setVisibleCasinos((prev) => prev + 3); // Jeweils 3 weitere Casinos laden
  };

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Top Online Spielotheken im Vergleich
      </Typography>

      <Typography
        variant="body1"
        component="p"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Unsere Auswahl der besten Online Spielotheken basiert auf gründlichen Tests
        und Bewertungen durch unser Expertenteam. Diese Anbieter zeichnen sich
        durch erstklassige Bonusangebote, eine vielfältige Spielauswahl und
        exzellenten Kundenservice aus. Finde die perfekte Spielothek, das deinen
        Bedürfnissen entspricht, und genieße ein sicheres und unterhaltsames
        Spielerlebnis.
      </Typography>

      {/* Grid Container für die Darstellung der Casinos */}
      <Grid container spacing={2} justifyContent="center">
        {sortedCasinos.slice(0, visibleCasinos).map((casino, index) => (
          <Grid item key={index} xs={12} md={4}>
            <CasinoCard casino={casino} />
          </Grid>
        ))}
      </Grid>

      {/* Button zum Laden weiterer Casinos */}
      {visibleCasinos < sortedCasinos.length && (
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4, display: "block", margin: "0 auto" }}
          size="large"
          onClick={showMoreCasinos}
        >
          Mehr Spielotheken laden
        </Button>
      )}
    </Box>
  );
}

export default OnlineCasinoList;
