import React, { useState } from "react";
import { Box, Button, Grid, Typography, Divider } from "@mui/material";
import SportsBettingCard from "./SportsBettingCard";
import { sportsbettingProvidersData } from "../../services/providersData";
import { getSortedProvidersByRating } from "../../services/helpers";

function SportsBettingList() {
  // State für die Anzahl der angezeigten Sportwetten-Anbieter (initial 3 für Mobile)
  const [visibleSportsbooks, setVisibleSportsbooks] = useState(3);

  // Hole die sortierten Anbieter
  const sortedSportsbooks = getSortedProvidersByRating(sportsbettingProvidersData);

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

      <Typography variant="body1" paragraph sx={{ mb: 4, textAlign: "center" }}>
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
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: { xs: "75%", sm: "auto" },
              maxWidth: { sm: 400 },
              whiteSpace: "normal", // Ermöglicht Zeilenumbruch bei langem Text
            }}
            onClick={showMoreSportsbooks}
          >
            Mehr Anbieter laden
          </Button>
        </Box>
      )}

      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />
    </Box>
  );
}

export default SportsBettingList;
