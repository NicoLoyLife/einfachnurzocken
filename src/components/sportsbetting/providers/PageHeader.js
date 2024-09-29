// PageHeader.js
import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import { Helmet } from "react-helmet";
import { useTheme } from "@mui/material/styles";

const Banner = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main, // Verwendet die Primärfarbe aus dem Theme
  color: theme.palette.primary.contrastText, // Stellt sicher, dass der Text lesbar ist
  padding: theme.spacing(8, 2),
  textAlign: "center",
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(6, 2),
  },
}));

const PageHeader = ({
  title,
  metaDescription,
  logo,
  ctaLink,
  providerName,
}) => {
  const theme = useTheme();

  return (
    <>
      {/* SEO Meta-Tags */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      {/* Banner mit Primärfarbe */}
      <Banner>
        {/* Avatar mit Anbieterlogo */}
        <Avatar
          src={logo}
          alt={`${providerName} Logo`}
          sx={{ width: 80, height: 80, mb: 2, mx: "auto" }}
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
            color: theme.palette.primary.contrastText,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          Jetzt Bonus sichern
        </Button>
      </Banner>
    </>
  );
};

export default PageHeader;
