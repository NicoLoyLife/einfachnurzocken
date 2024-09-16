import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { news } from "../../services/dummyData"; // Dummy-Daten für Sportwetten-News
import NewsCard from "../news/NewsCard"; // Verwendung der existierenden NewsCard-Komponente

function SportsBettingNewsSection() {
  // Sortieren der News nach Datum in absteigender Reihenfolge
  const sortedNews = [...news].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Filtern der neuesten News
  const latestNews = sortedNews.slice(0, 3);

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Aktuelle News und Trends in der Welt der Sportwetten
      </Typography>

      <Typography
        variant="body1"
        component="p"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Bleib auf dem Laufenden über die neuesten Entwicklungen in der
        Sportwetten-Branche. Hier findest du Informationen zu neuen Wettmärkten, 
        Wettanbieter-Updates und wichtigen Änderungen in der Gesetzgebung.
      </Typography>

      <Grid container spacing={2}>
        {latestNews.map((news, index) => (
          <Grid item key={index} xs={12} md={4}>
            <NewsCard news={news} />
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 4, display: "block", margin: "0 auto" }}
        size="large"
      >
        Alle News anzeigen
      </Button>
    </Box>
  );
}

export default SportsBettingNewsSection;