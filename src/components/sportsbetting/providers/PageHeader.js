import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import defaultLogo from "../../../assets/images/logo.png";
import OpenGraphMeta from "../../common/OpenGraphMeta";
import { Link } from "react-router-dom";

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
      <OpenGraphMeta
        title={title}
        description={metaDescription}
        image={logo}
        url={ctaLink}
      />

      {/* Banner mit Primärfarbe */}
      <Banner>
        {/* Avatar mit Anbieterlogo */}
        <Avatar
          src={logo}
          alt={`${providerName} Logo`}
          variant="square"
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
          to={ctaLink}
          component={Link}
          target="_blank"
          rel="noopener noreferrer sponsored"
          sx={{
            mt: 2,
            color: theme.palette.secondary.contrastText, // Korrektur der Textfarbe
            "&:hover": {
              backgroundColor: theme.palette.secondary.dark, // Korrektur des Hover-Zustands
            },
            width: { xs: "75%", sm: "auto" },
            maxWidth: { sm: 400 },
            whiteSpace: "normal", // Ermöglicht Zeilenumbruch bei langem Text
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
