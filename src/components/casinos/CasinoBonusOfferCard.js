import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Rating,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

function CasinoBonusOfferCard({ offer, placement }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        mb: theme.spacing(4),
        boxShadow: theme.shadows[3],
        overflow: "hidden",
        height: { xs: "auto", md: "500px" },
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          p: theme.spacing(2),
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Platzierung */}
        <Box
          sx={{
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.common.white,
            padding: theme.spacing(0.5, 1.25),
          }}
        >
          <Typography variant="h3" component="h3">
            <strong>{placement}</strong>
          </Typography>
        </Box>

        {/* Anbietername */}
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <Typography
            variant="h3"
            component="h3"
            sx={{ color: theme.palette.common.white }}
          >
            {offer.name}
          </Typography>
        </Box>

        {/* Logo */}
        <Box sx={{ width: 40, height: 40 }}>
          <img
            src={offer.logo}
            alt={`${offer.name} Logo`}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
      </Box>

      {/* Inhalt */}
      <CardContent
        sx={{
          p: theme.spacing(3),
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Bewertung und Bonus */}
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography
              variant="h3"
              component="h3"
              sx={{ color: theme.palette.common.white }}
            >
              {offer.averageRating}/5
            </Typography>
            <Rating value={offer.averageRating} readOnly precision={0.1} />
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              textAlign: "center",
              minHeight: "9rem", // Fixiere die Mindesthöhe
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h3"
              component="h3"
              sx={{ color: theme.palette.common.white }}
            >
              {offer.bonus.type}
            </Typography>
          </Grid>
        </Grid>

        {/* Umsatzbedingungen */}
        <Box sx={{ mt: theme.spacing(2), textAlign: "center" }}>
          <Typography variant="body2">
            <strong>Umsatzbedingungen:</strong>
          </Typography>
          <Typography variant="body1">
            {offer.bonus.wageringRequirements}
          </Typography>
        </Box>

        {/* CTA-Buttons */}
        <Box
          sx={{
            mt: theme.spacing(2),
            display: "flex",
            gap: theme.spacing(1),
          }}
        >
          <Button
            variant="contained"
            color="primary"
            fullWidth
            href={offer.ctaLink || `/${offer.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Jetzt spielen bei ${offer.name}`}
          >
            Jetzt wetten
          </Button>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            component={Link}
            to={`/online-spielotheken/${offer.slug}`}
            aria-label={`${offer.name} Bonus Details ansehen`}
          >
            Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CasinoBonusOfferCard;
