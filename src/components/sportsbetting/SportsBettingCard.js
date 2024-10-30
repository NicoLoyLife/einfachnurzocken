import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Rating,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

function SportsBettingCard({ sportsbook }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        boxShadow: theme.shadows[2],
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Logo */}
      <CardMedia
        component="img"
        image={sportsbook.logo}
        alt={`${sportsbook.name} Logo`}
        loading="lazy"
        sx={{
          height: 140,
          objectFit: "contain",
          padding: theme.spacing(2),
        }}
      />
      {/* Inhalt */}
      <CardContent sx={{ flexGrow: 1 }}>
        {/* Name */}
        <Typography variant="h6" component="h3" gutterBottom>
          {sportsbook.name}
        </Typography>
        {/* Bewertung */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Rating
            name="read-only"
            value={sportsbook.averageRating}
            precision={0.1}
            readOnly
            size="small"
          />
          <Typography variant="body2" sx={{ ml: 1 }}>
            {sportsbook.averageRating.toFixed(1)}
          </Typography>
        </Box>
        {/* Beschreibung */}
        <Typography variant="body2">
          {sportsbook.overview.description || sportsbook.metaDescription}
        </Typography>
      </CardContent>
      {/* CTA-Button */}
      <Box
        sx={{
          padding: theme.spacing(2),
          pt: 0,
          display: "flex",
          gap: theme.spacing(1),
        }}
      >
        <Button
          variant="contained"
          color="primary"
          fullWidth
          href={sportsbook.ctaLink || `/${sportsbook.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Jetzt wetten bei ${sportsbook.name}`}
        >
          Jetzt wetten
        </Button>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          component={Link}
          to={`/sportwetten/${sportsbook.slug}`}
          aria-label={`${sportsbook.name} Review lesen`}
        >
          Review
        </Button>
      </Box>
    </Card>
  );
}

SportsBettingCard.propTypes = {
  sportsbook: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string,
    averageRating: PropTypes.number.isRequired,
    metaDescription: PropTypes.string,
    ctaLink: PropTypes.string,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default SportsBettingCard;
