import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import OpenGraphMeta from "../../common/OpenGraphMeta";
import soccerHeader from "../../../assets/images/wett-tipps/soccer-header.webp";
import basketballHeader from "../../../assets/images/wett-tipps/basketball-header.webp";
import footballHeader from "../../../assets/images/wett-tipps/american-football-header.webp";
import sportwettenImage from "../../../assets/images/sportwetten.webp";
import defaultLogo from "../../../assets/images/logo.png";
// import AffiliateButton from "../../common/AffiliateButton";
import { format, parse } from "date-fns";
import { de } from "date-fns/locale";

const Header = styled(Box)(({ theme, background }) => ({
  position: "relative", // Wichtig für das Overlay
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: theme.palette.primary.contrastText,
  height: 300,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: theme.spacing(8, 2),
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden", // Verhindert Überlauf des Overlays
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(6, 2),
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Halbtransparentes schwarzes Overlay
    zIndex: 1, // Overlay liegt über dem Hintergrundbild
  },
  "& > *": {
    position: "relative",
    zIndex: 2, // Text liegt über dem Overlay
  },
}));

const WettTippTemplate = ({
  title,
  description,
  sport,
  content,
  date,
  time,
  published,
  ctaText,
  ctaLink,
}) => {
  const getBackgroundImage = (sport) => {
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

  // Kombinieren von Datum und Uhrzeit des Events
  const eventDateTime = parse(
    `${date} ${time}`,
    "yyyy-MM-dd HH:mm",
    new Date()
  );

  return (
    <>
      {/* SEO Meta-Tags */}
      <OpenGraphMeta
        title={title}
        description={description}
        image={defaultLogo}
        url={ctaLink}
      />
      <Header background={getBackgroundImage(sport)}>
        <Box>
          {/* H1-Überschrift */}
          <Typography variant="h1" component="h1" gutterBottom>
            {title}
          </Typography>
          {/* Event-Datum und Uhrzeit anzeigen */}
          <Typography variant="subtitle1">
            {format(eventDateTime, "dd. MMMM yyyy, HH:mm", { locale: de })}
          </Typography>
        </Box>
      </Header>

      <Box sx={{ p: 4 }}>
        {/* Veröffentlichungsdatum anzeigen */}
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Veröffentlicht:{" "}
          {format(parse(published, "yyyy-MM-dd", new Date()), "dd. MMMM yyyy", {
            locale: de,
          })}
        </Typography>

        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="body1">{description}</Typography>
            {/* <AffiliateButton to={ctaLink} text={ctaText} /> */}
          </CardContent>
        </Card>

        {/* Inhalte dynamisch rendern */}
        {content.map((section, index) => {
          if (section.type === "heading") {
            return (
              <Typography
                key={index}
                variant={`h${section.level}`}
                gutterBottom
              >
                {section.text}
              </Typography>
            );
          }
          if (section.type === "paragraph") {
            return (
              <Typography key={index} variant="body1" gutterBottom>
                {section.text}
              </Typography>
            );
          }
          if (section.type === "list") {
            return (
              <Box key={index} component="ul" sx={{ pl: 4 }}>
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Typography variant="body2">{item}</Typography>
                  </li>
                ))}
              </Box>
            );
          }
          return null;
        })}
      </Box>
    </>
  );
};

export default WettTippTemplate;
