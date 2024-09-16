import React, { useState } from "react";
import { sportwetten } from "../../services/dummyData";
import { Box, Button, Grid, Typography } from "@mui/material";
import SportsBettingCard from "./SportsBettingCard";

// Sportwetten nach Rating sortieren
const sortedSportsbooks = [...sportwetten].sort((a, b) => b.rating - a.rating);

function SportsBettingList() {
  // State für die Anzahl der angezeigten Sportwetten-Anbieter (initial 3 für Mobile)
  const [visibleSportsbooks, setVisibleSportsbooks] = useState(3);

  // Funktion zum Anzeigen weiterer Sportwetten-Anbieter
  const showMoreSportsbooks = () => {
    setVisibleSportsbooks((prev) => prev + 3); // Jeweils 3 weitere Anbieter laden
  };

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Top Sportwetten-Anbieter im Vergleich
      </Typography>

      <Typography
        variant="body1"
        component="p"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Unsere Auswahl der besten Sportwetten-Anbieter basiert auf gründlichen
        Tests und Bewertungen durch unser Expertenteam. Diese Anbieter zeichnen
        sich durch hervorragende Quoten, vielseitige Wettmärkte und exzellenten
        Kundenservice aus. Finde den besten Anbieter für deine Wettbedürfnisse
        und erhalte die besten Bonusangebote.
      </Typography>

      {/* Grid Container für die Darstellung der Sportwetten-Anbieter */}
      <Grid container spacing={2} justifyContent="center">
        {sortedSportsbooks
          .slice(0, visibleSportsbooks)
          .map((sportsbook, index) => (
            <Grid item key={index} xs={12} md={4}>
              <SportsBettingCard sportsbook={sportsbook} />
            </Grid>
          ))}
      </Grid>

      {/* Button zum Laden weiterer Sportwetten-Anbieter */}
      {visibleSportsbooks < sortedSportsbooks.length && (
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4, display: "block", margin: "0 auto" }}
          size="large"
          onClick={showMoreSportsbooks}
        >
          Mehr Anbieter laden
        </Button>
      )}
    </Box>
  );
}

export default SportsBettingList;
