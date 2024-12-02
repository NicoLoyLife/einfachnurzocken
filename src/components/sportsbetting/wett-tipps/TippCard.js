// src/components/TippCard.js

import React from "react";
import { Box, Typography, Card, CardMedia, Button } from "@mui/material";
import { Link } from "react-router-dom";
import soccerHeader from "../../../assets/images/wett-tipps/soccer-header.webp";
import basketballHeader from "../../../assets/images/wett-tipps/basketball-header.webp";
import footballHeader from "../../../assets/images/wett-tipps/american-football-header.webp";
import sportwettenImage from "../../../assets/images/sportwetten.webp";
import { format, parse } from "date-fns";
import { de } from "date-fns/locale";

function TippCard({ tipp }) {
  const getImage = (sport) => {
    switch (sport) {
      case "Fußball":
        return soccerHeader;
      case "Basketball":
        return basketballHeader;
      case "American Football":
        return footballHeader;
      default:
        return sportwettenImage;
    }
  };

  const image = getImage(tipp.sport);

  // Formatierung von Datum und Uhrzeit des Events
  const eventDateTime = parse(`${tipp.date} ${tipp.time}`, "yyyy-MM-dd HH:mm", new Date());
  const formattedEventDate = format(eventDateTime, "dd. MMMM yyyy, HH:mm", { locale: de });

  // Formatierung des Veröffentlichungsdatums
  const publishedDate = parse(tipp.published, "yyyy-MM-dd", new Date());
  const formattedPublishedDate = format(publishedDate, "dd. MMMM yyyy", { locale: de });

  return (
    <Box sx={{ mb: 4 }}>
      <Card
        sx={{
          borderRadius: "15px",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          mb: 2,
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={tipp.title}
          sx={{
            transition: "transform 0.5s ease",
            objectFit: "cover",
            height: 200,
          }}
        />
      </Card>

      <Box sx={{ mt: 2, textAlign: "left" }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Typography
            variant="body2"
            sx={{
              textTransform: "uppercase",
              fontWeight: "bold",
              mr: 1,
              color: "primary.main",
            }}
          >
            {tipp.sport}
          </Typography>
        </Box>
        <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
          {tipp.title}
        </Typography>

        {/* Event-Datum und Uhrzeit */}
        <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
          Event: {formattedEventDate} Uhr
        </Typography>

        {/* Veröffentlichungsdatum */}
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Veröffentlicht: {formattedPublishedDate}
        </Typography>

        <Typography
          variant="body2"
          component="p"
          sx={{ color: "text.secondary", mt: 1 }}
        >
          {tipp.description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          component={Link}
          to={`/sportwetten/wett-tipps/${tipp.id}`}
        >
          Mehr lesen
        </Button>
      </Box>
    </Box>
  );
}

export default TippCard;