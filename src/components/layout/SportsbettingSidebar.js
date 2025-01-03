// Sidebar.js
import React from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  Avatar,
  Paper,
  useTheme,
  Rating,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom"; // Angenommen, dass react-router-dom verwendet wird
import { sportsbettingProvidersData as providersData } from "../../services/providersData";
import GoldengoalPremiumBanner from "../sportsbetting/GoldengoalPremiumBanner";

const SportsbettingSidebar = ({ isSticky }) => {
  const theme = useTheme();

  // Hilfsfunktion zur Berechnung des durchschnittlichen Ratings
  const calculateAverageRating = (ratings) => {
    if (!ratings || ratings.length === 0) return 0;
    const totalScore = ratings.reduce((sum, item) => sum + item.score, 0);
    const average = totalScore / ratings.length;
    return Math.round(average * 10) / 10; // Rundet auf eine Dezimalstelle
  };

  // Konvertiere providersData in ein Array
  const providersArray = Object.values(providersData);

  // Erstelle eine neue Liste von Anbietern mit dem Gesamtrating
  const providersWithRatings = providersArray.map((provider) => ({
    ...provider,
    averageRating: calculateAverageRating(provider.ratings),
  }));

  // Sortiere die Anbieter nach dem Gesamtrating in absteigender Reihenfolge
  const sortedProviders = providersWithRatings.sort(
    (a, b) => b.averageRating - a.averageRating
  );

  // Wähle die Top 5 Anbieter aus
  const topProviders = sortedProviders.slice(0, 5);

  const linkStyles = {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      color: 'inherit',
    },
    "&:visited": {
      color: "inherit",
    },
    "&:active": {
      color: "inherit",
    },
  };

  return (
    <Box
      sx={{
        position: isSticky ? "sticky" : "static",
        top: isSticky ? theme.spacing(16) : "auto", // Abstand von der Oberkante
      }}
    >
      {/* Top 5 Anbieter */}
      <Typography variant="h3" gutterBottom sx={{ mt: 4 }}>
        Top 5 Sportwetten-Anbieter
      </Typography>
      <List>
        {topProviders.map((provider, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              paddingY: 1,
            }}
            disableGutters
          >
            {/* Platzierung */}
            <Typography
              variant="body1"
              sx={{ width: "24px", flexShrink: 0, textAlign: "center" }}
            >
              {index + 1}.
            </Typography>

            {/* Logo */}
            <Avatar
              alt={provider.name}
              src={provider.logo}
              variant="square"
              sx={{ width: 40, height: 40, mx: 1 }}
            />

            {/* Anbietername und Bewertung */}
            <Box sx={{ flexGrow: 1, mx: 1 }}>
              <Typography variant="body1">
              <MuiLink component={Link} to={`/sportwetten/${provider.slug}`} sx={linkStyles}>
                {provider.name}
              </MuiLink>
              </Typography>
              
              <Rating
                value={provider.averageRating}
                precision={0.1}
                readOnly
              />
            </Box>

            {/* CTA-Button */}
            <Button
              variant="contained"
              color="primary"
              href={provider.ctaLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
            >
              Jetzt wetten
            </Button>
          </ListItem>
        ))}
      </List>

      {/* Goldengoal Premium Banner */}
      <GoldengoalPremiumBanner />

      {/* Bonus-Box */}
      <Paper sx={{ mt: 4, p: 2 }} elevation={3}>
        <Typography variant="h6" gutterBottom>
          Hol dir den besten Sportwetten Bonus!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Entdecke exklusive Bonusangebote bei den besten Sportwettenanbietern.
          Sichere dir jetzt deinen Bonus!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          component={Link}
          to="/sportwetten/bonus"
        >
          Zum Bonusbereich
        </Button>
      </Paper>
    </Box>
  );
};

export default SportsbettingSidebar;
