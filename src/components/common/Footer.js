import React from 'react';
import { Box, Typography, Link as MuiLink, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Box 
      sx={{
        backgroundColor: 'primary.dark',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        marginTop: '20px',
      }}
    >
      {/* Grid für strukturierte Links */}
      <Grid container spacing={3} justifyContent="center">
        <Grid item>
          <MuiLink component={Link} to="/impressum" color="inherit" underline="hover">
            Impressum
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={Link} to="/datenschutz" color="inherit" underline="hover">
            Datenschutz
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={Link} to="/agb" color="inherit" underline="hover">
            AGB
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={Link} to="/spielerschutz" color="inherit" underline="hover">
            Spielerschutz
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={Link} to="/kontakt" color="inherit" underline="hover">
            Kontakt
          </MuiLink>
        </Grid>
      </Grid>

      {/* Copyright Hinweis */}
      <Typography variant="body1" sx={{ marginTop: '20px' }}>
        © 2024 EinfachNurZocken. Alle Rechte vorbehalten.
      </Typography>
    </Box>
  );
}

export default Footer;
