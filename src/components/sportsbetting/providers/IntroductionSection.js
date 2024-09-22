import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Rating,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const IntroductionSection = ({
  summary,
  highlights,
  ratings,
}) => {
  // Berechne die Gesamtbewertung mit Fehlerbehandlung
  const overallRating =
    ratings && ratings.length > 0
      ? (
          ratings.reduce((sum, item) => sum + item.score, 0) / ratings.length
        ).toFixed(1)
      : null;

  return (
    <Box sx={{ mb: 4, mt: 4 }}>

      {/* Kurze Zusammenfassung */}
      <Typography variant="body1" gutterBottom>
        {summary}
      </Typography>

      {/* Wichtige Highlights */}
      <Typography variant="h2" component="h2" gutterBottom sx={{ mt: 4 }}>
        Vorteile auf einen Blick
      </Typography>
      <List>
        {highlights.map((highlight, index) => (
          <ListItem key={index} disableGutters>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={highlight} />
          </ListItem>
        ))}
      </List>

      {/* Gesamtbewertung */}
      {overallRating ? (
        <Box sx={{ mt: 4, display: "flex", alignItems: "center" }}>
          <Typography variant="h3" component="h3" gutterBottom sx={{ mr: 2 }}>
            Gesamtbewertung:
          </Typography>
          <Rating value={parseFloat(overallRating)} precision={0.1} readOnly />
          <Typography variant="body1" sx={{ ml: 1 }}>
            {overallRating} / 5
          </Typography>
        </Box>
      ) : (
        <Typography variant="body1" sx={{ mt: 4 }}>
          Noch keine Bewertungen verfügbar.
        </Typography>
      )}
    </Box>
  );
};

export default IntroductionSection;
