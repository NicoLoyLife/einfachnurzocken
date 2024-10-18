// BonusSection.js

import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Rating,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Link,
  useTheme,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const BonusSection = ({ bonusContent, ratings, bonusDetails }) => {
  const theme = useTheme();

  // Finde die Bewertung für die Kategorie "Bonusangebote & Promotionen"
  const categoryRating = ratings.find(
    (item) => item.category === "Bonusangebote & Promotionen"
  );

  const score = categoryRating ? categoryRating.score : null;

  // Daten für die Bonusdetails
  const bonusData = bonusDetails
    ? [
        { label: "Bonusart", value: bonusDetails.type },
        { label: "Maximaler Bonus", value: bonusDetails.maxBonus },
        { label: "Mindesteinzahlung", value: bonusDetails.minDeposit },
        {
          label: "Umsatzbedingungen",
          value: bonusDetails.wageringRequirements,
        },
        { label: "Mindestquote", value: bonusDetails.oddsRequirement },
        { label: "Zeitraum", value: bonusDetails.timeframe },
        { label: "Gültigkeit", value: bonusDetails.validity },
        {
          label: "Verfügbar in",
          value: Array.isArray(bonusDetails.availableIn)
            ? bonusDetails.availableIn.join(", ")
            : bonusDetails.availableIn || "Nicht angegeben",
        },
      ]
    : [];

  return (
    <Box sx={{ mb: 4 }}>
      {/* Überschrift */}
      <Typography variant="h2" component="h2" gutterBottom sx={{ mt: 4 }}>
        Bonusangebote & Promotionen
      </Typography>

      {/* Bonusinhalt */}
      <Box sx={{ mt: 2 }}>{bonusContent}</Box>

      {/* Bonusdetails als Liste */}
      {bonusData.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h3" component="h3" gutterBottom>
            Bonusdetails
          </Typography>
          <List>
            {bonusData.map((item, index) => (
              <ListItem
                key={index}
                disableGutters
                sx={{
                  py: 0.5,
                  backgroundColor:
                    index % 2 === 0
                      ? theme.palette.action.hover
                      : "inherit",
                  "&:hover": {
                    backgroundColor: theme.palette.action.selected,
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: "auto", mr: 2 }}>
                  <InfoIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        color: theme.palette.text.primary,
                      }}
                    >
                      {item.label}:
                    </Typography>
                  }
                  secondary={
                    item.label === "Webseite" ? (
                      <Link
                        href={`https://${item.value}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: theme.palette.link.main,
                          textDecoration: "none",
                        }}
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <Typography
                        variant="body1"
                        sx={{ color: theme.palette.text.secondary }}
                      >
                        {item.value}
                      </Typography>
                    )
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {/* Bewertung */}
      {score !== null && (
        <Box sx={{ mt: 4, display: "flex", alignItems: "center" }}>
          <Typography variant="h3" component="h3" gutterBottom sx={{ mr: 2 }}>
            Unsere Bewertung:
          </Typography>
          <Rating value={score} precision={0.5} readOnly />
          <Typography variant="body1" sx={{ ml: 1 }}>
            {score} / 5
          </Typography>
        </Box>
      )}

      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />
    </Box>
  );
};

BonusSection.propTypes = {
  bonusContent: PropTypes.node.isRequired,
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })
  ).isRequired,
  bonusDetails: PropTypes.shape({
    type: PropTypes.string,
    maxBonus: PropTypes.string,
    minDeposit: PropTypes.string,
    wageringRequirements: PropTypes.string,
    oddsRequirement: PropTypes.string,
    timeframe: PropTypes.string,
    validity: PropTypes.string,
    availableIn: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]),
  }),
};

export default BonusSection;