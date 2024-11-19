import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import OpenGraphMeta from "../../common/OpenGraphMeta";
import soccerHeader from "../../../assets/images/wett-tipps/soccer-header.webp";
import basketballHeader from "../../../assets/images/wett-tipps/basketball-header.webp";
import footballHeader from "../../../assets/images/wett-tipps/american-football-header.webp";
import sportwettenImage from "../../../assets/images/sportwetten.webp";
import defaultLogo from "../../../assets/images/logo.png";

const Header = styled(Box)(({ theme, background }) => ({
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: theme.palette.primary.contrastText,
  height: 300,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  textAlign: "center",
  padding: theme.spacing(8, 2),
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(6, 2),
  },
}));

const WettTippTemplate = ({
  title,
  description,
  sport,
  content,
  date,
  ctaText,
  ctaLink,
}) => {
  const getBackgroundImage = (sport) => {
    switch (sport) {
      case "Fußball":
        return soccerHeader;
      case "Backetball":
        return basketballHeader;
      case "American Football":
        return footballHeader;
      default:
        return sportwettenImage;
    }
  };

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
          <Typography variant="subtitle1">{date}</Typography>
        </Box>
      </Header>

      <Box sx={{ p: 4 }}>
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="body1">{description}</Typography>
            {/* <Button
              href={ctaLink}
              target="_blank"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              {ctaText}
            </Button> */}
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
