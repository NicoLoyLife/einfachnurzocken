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

function CasinoCard({ casino }) {
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
        image={casino.logo}
        alt={`${casino.name} Logo`}
        loading="lazy"
        sx={{
          height: 140,
          objectFit: "contain",
          padding: theme.spacing(2),
        }}
      />
      {/* Inhalt */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          {casino.name}
        </Typography>
        {/* Bewertung */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Rating
            name="read-only"
            value={casino.averageRating}
            precision={0.1}
            readOnly
            size="small"
          />
          <Typography variant="body2" sx={{ ml: 1 }}>
            {casino.averageRating.toFixed(1)}
          </Typography>
        </Box>
        {/* Beschreibung */}
        <Typography variant="body2">
          {casino.overview.description || casino.metaDescription}
        </Typography>
      </CardContent>
      {/* Button */}
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
          href={casino.ctaLink || `/${casino.slug}`}
          target="_blank"
          rel="noopener noreferrer sponsored"
          aria-label={`Jetzt spielen bei ${casino.name}`}
        >
          Jetzt spielen
        </Button>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          component={Link}
          to={`/online-spielotheken/${casino.slug}`}
          aria-label={`${casino.name} Review lesen`}
        >
          Review
        </Button>
      </Box>
    </Card>
  );
}

CasinoCard.propTypes = {
    casino: PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string,
      averageRating: PropTypes.number.isRequired,
      metaDescription: PropTypes.string,
      ctaLink: PropTypes.string,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  };

export default CasinoCard;
