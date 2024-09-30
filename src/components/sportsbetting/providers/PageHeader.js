import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import { Helmet } from "react-helmet-async"; // Empfehlung: Verwende react-helmet-async
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import defaultLogo from "../../../assets/images/logo.png";

const Banner = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(8, 2),
  textAlign: "center",
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(6, 2),
  },
}));

const PageHeader = ({
  title = "Standardtitel",
  metaDescription = "Standardbeschreibung",
  logo = defaultLogo,
  ctaLink = "#",
  providerName = "Standardanbieter",
}) => {
  const theme = useTheme();

  return (
    <>
      {/* SEO Meta-Tags */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={logo} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      {/* Banner mit Primärfarbe */}
      <Banner>
        {/* Avatar mit Anbieterlogo */}
        <Avatar
          src={logo}
          alt={`${providerName} Logo`}
          sx={{
            width: { xs: 60, sm: 80 },
            height: { xs: 60, sm: 80 },
            mb: 2,
            mx: "auto",
          }}
        />

        {/* H1-Überschrift */}
        <Typography variant="h1" component="h1" gutterBottom>
          {title}
        </Typography>

        {/* Call-to-Action Button */}
        <Button
          variant="contained"
          color="secondary"
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            mt: 2,
            color: theme.palette.secondary.contrastText, // Korrektur der Textfarbe
            "&:hover": {
              backgroundColor: theme.palette.secondary.dark, // Korrektur des Hover-Zustands
            },
          }}
        >
          Jetzt Bonus sichern
        </Button>
      </Banner>
    </>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  metaDescription: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
  providerName: PropTypes.string.isRequired,
};

export default PageHeader;
