import React from 'react';
import { Typography, Button, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import casinoImage from "../assets/images/hero-banner.png";
import sportwettenImage from "../assets/images/sportwetten.webp";

function HeroBanner() {
  return (
    <>
      {/* SEO-optimierte zentrale H1-Überschrift */}
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontSize: { xs: '1.2rem', md: '1.5rem' },
          textAlign: 'center',
          fontWeight: 'bold',
          mt: 1,
        }}
      >
        Die besten Online Spielotheken und Sportwetten Anbieter im Vergleich 2024
      </Typography>

      {/* Zusatztext "Ich interessiere mich für ..." */}
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontSize: { xs: '1rem', md: '1.2rem' },
          textAlign: 'center',
          fontWeight: 'normal',
          mt: 2,
        }}
      >
        Ich interessiere mich für...
      </Typography>

      <Grid 
        container 
        spacing={0} 
        sx={{ 
          height: { xs: 'calc(100vh - 220px)', md: 'calc(100vh - 220px)' }, // Full height abzüglich der Navbar und Überschrift
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 4, // Platz für die zentrale H1-Überschrift
        }}
      >
        {/* Online Spielotheken Section */}
        <Grid 
          item 
          xs={12} 
          md={6}
          component={Link} // Ganze Box als Link
          to="/online-spielotheken"
          sx={{
            position: 'relative', // Für das Overlay notwendig
            overflow: 'hidden', // Verhindert, dass das Bild beim Zoomen überläuft
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: { xs: '50%', md: '100%' }, // Full height on mobile, half on desktop
            textDecoration: 'none', // Entfernt die Unterstreichung des Links
            '&:hover .overlay': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dunkleres Overlay beim Hover
            },
            '&:hover .image': {
              transform: 'scale(1.1)', // Zoom-Effekt auf Bild
            },
            '&:hover .text': {
              color: 'primary.main', // Textfarbe ändert sich beim Hover
            },
          }}
        >
          {/* Hintergrundbild und Overlay */}
          <Box
            className="image"
            sx={{
              backgroundImage: `url(${casinoImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
              width: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              transition: 'transform 0.5s ease', // Smooth zoom transition
            }}
          />
          <Box
            className="overlay"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Initial dunkles Overlay
              transition: 'background-color 0.5s ease',
            }}
          />
          {/* Text und Button */}
          <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <Typography className="text" variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
              Online Spielotheken
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 4 }} size="large">
              Jetzt vergleichen
            </Button>
          </Box>
        </Grid>

        {/* Sportwetten Section */}
        <Grid 
          item 
          xs={12} 
          md={6}
          component={Link} // Ganze Box als Link
          to="/sportwetten"
          sx={{
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: { xs: '50%', md: '100%' },
            textDecoration: 'none',
            '&:hover .overlay': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
            '&:hover .image': {
              transform: 'scale(1.1)',
            },
            '&:hover .text': {
              color: 'primary.main',
            },
          }}
        >
          {/* Hintergrundbild und Overlay */}
          <Box
            className="image"
            sx={{
              backgroundImage: `url(${sportwettenImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
              width: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              transition: 'transform 0.5s ease',
            }}
          />
          <Box
            className="overlay"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              transition: 'background-color 0.5s ease',
            }}
          />
          {/* Text und Button */}
          <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <Typography className="text" variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
              Sportwetten
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 4 }} size="large">
              Jetzt vergleichen
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default HeroBanner;