// PageHeader.js
import React from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { Helmet } from 'react-helmet';

const Banner = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main, // Verwendet die Primärfarbe aus dem Theme
  color: theme.palette.primary.contrastText,   // Stellt sicher, dass der Text lesbar ist
  padding: theme.spacing(8, 2),
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(6, 2),
  },
}));

const PageHeader = ({ title, metaDescription, logo, ctaLink }) => (
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
        alt="Anbieter Logo"
        sx={{ width: 80, height: 80, mb: 2, mx: 'auto' }}
      />

      {/* H1-Überschrift */}
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
      >
        {title}
      </Typography>

      {/* Call-to-Action Button */}
      <Button
        variant="contained"
        color="secondary" // Verwende die Sekundärfarbe für den Button
        href={ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ mt: 2 }}
      >
        Jetzt Bonus sichern
      </Button>
    </Banner>
  </>
);

export default PageHeader;