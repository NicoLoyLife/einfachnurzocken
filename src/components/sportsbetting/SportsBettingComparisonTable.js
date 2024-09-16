import React, { useState } from "react";
import { Box, Typography, Grid, Rating, Paper } from "@mui/material";
import { sportwetten } from "../../services/dummyData";

function SportsBettingComparisonTable() {
  const [orderDirection, setOrderDirection] = useState("desc");
  const [orderBy, setOrderBy] = useState("rating");

  // Funktion zum Sortieren der Tabelle
  const handleSortRequest = (property) => {
    const isAscending = orderBy === property && orderDirection === "asc";
    setOrderDirection(isAscending ? "desc" : "asc");
    setOrderBy(property);
  };

  // Funktion zum Sortieren der Daten
  const sortedSportsbooks = sportwetten.sort((a, b) => {
    if (orderBy === "rating") {
      return orderDirection === "asc" ? a.rating - b.rating : b.rating - a.rating;
    }
    return 0;
  });

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Vergleich der besten Sportwetten-Anbieter
      </Typography>

      <Box sx={{ display: { xs: "block", md: "none" }, mb: 4 }}>
        {/* Mobile sticky header */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            textAlign: "center",
            backgroundColor: "primary.main",
            color: "white",
            p: 2,
            position: "sticky",
            top: 90,
            zIndex: 1,
          }}
        >
          <Typography>Anbieter</Typography>
          <Typography>Details</Typography>
        </Box>
      </Box>

      {/* Desktop-Grid Darstellung */}
      <Grid container spacing={2}>
        {sortedSportsbooks.map((sportsbook, index) => (
          <Grid item xs={12} md={12} key={index}>
            <Paper
              sx={{
                padding: 2,
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(6, 1fr)" },
                gap: 2,
                alignItems: "center",
                textAlign: "center",
                borderRadius: "8px",
                boxShadow: 3,
                backgroundColor: index % 2 === 0 ? "grey.100" : "white",
              }}
            >
              {/* Anbieter-Name */}
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  {sportsbook.name}
                </Typography>
              </Box>

              {/* Bewertung */}
              <Box>
                <Rating value={sportsbook.rating} readOnly precision={0.1} />
              </Box>

              {/* Willkommensbonus */}
              <Box>
                <Typography variant="body1">{sportsbook.welcome_bonus}</Typography>
              </Box>

              {/* Quoten */}
              <Box>
                <Typography variant="body1">{sportsbook.quoten}%</Typography>
              </Box>

              {/* Einzahlungsmethoden */}
              <Box>
                <Typography variant="body1">
                  {sportsbook.deposit_methods.join(", ")}
                </Typography>
              </Box>

              {/* Auszahlungsdauer */}
              <Box>
                <Typography variant="body1">{sportsbook.withdrawal_time}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SportsBettingComparisonTable;