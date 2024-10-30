import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Rating,
  useTheme,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const IntroductionSection = ({ summary, pros, cons, ratings }) => {
  const theme = useTheme();

  // Berechne die Gesamtbewertung mit Fehlerbehandlung
  const overallRating = React.useMemo(() => {
    if (ratings && ratings.length > 0) {
      const average =
        ratings.reduce((sum, item) => sum + item.score, 0) / ratings.length;
      return Math.round(average * 10) / 10; // Runden auf eine Nachkommastelle
    }
    return null;
  }, [ratings]);

  return (
    <Box sx={{ my: 4 }}>
      {/* Kurze Zusammenfassung */}
      <Typography variant="body1" gutterBottom>
        {summary}
      </Typography>

      {/* Vorteile und Nachteile */}
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        color={theme.palette.primary.main}
        sx={{ mt: 4 }}
      >
        Vorteile und Nachteile
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <List>
            {pros.map((pro, index) => (
              <ListItem key={index} disableGutters>
                <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
                  <CheckCircleIcon sx={{ color: theme.palette.success.main }} />
                </ListItemIcon>
                <ListItemText primary={pro} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <List>
            {cons.map((con, index) => (
              <ListItem key={index} disableGutters>
                <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
                  <HighlightOffIcon sx={{ color: theme.palette.error.main }} />
                </ListItemIcon>
                <ListItemText primary={con} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>

      {/* Gesamtbewertung */}
      {overallRating !== null ? (
        <Box sx={{ mt: 4, display: "flex", alignItems: "center" }}>
          <Typography
            variant="h3"
            component="h3"
            gutterBottom
            sx={{ mr: 2 }}
          >
            Gesamtbewertung:
          </Typography>
          <Rating
            value={overallRating}
            precision={0.1}
            readOnly
          />
          <Typography variant="body1" sx={{ ml: 1 }}>
            {overallRating} / 5
          </Typography>
        </Box>
      ) : (
        <Typography variant="body1" sx={{ mt: 4 }}>
          Noch keine Bewertungen verfügbar.
        </Typography>
      )}

      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />
    </Box>
  );
};

IntroductionSection.propTypes = {
  summary: PropTypes.string.isRequired,
  highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.number.isRequired,
      // Weitere Felder können hier hinzugefügt werden
    })
  ),
};

IntroductionSection.defaultProps = {
  ratings: [],
};

export default IntroductionSection;
