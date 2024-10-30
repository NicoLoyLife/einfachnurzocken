import React from 'react';
import { Box, Typography, Link as MuiLink, Grid, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

function Footer() {
  const theme = useTheme();

  const linkStyles = {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
      color: 'inherit',
    },
  };

  return (
    <Box 
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        padding: theme.spacing(2.5),
        textAlign: 'center',
        marginTop: theme.spacing(2.5),
      }}
    >
      {/* Grid für strukturierte Links */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <MuiLink component={Link} to="/impressum" sx={linkStyles}>
            Impressum
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={Link} to="/datenschutz" sx={linkStyles}>
            Datenschutz
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={Link} to="/agb" sx={linkStyles}>
            AGB
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={Link} to="/spielerschutz" sx={linkStyles}>
            Spielerschutz
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink component={Link} to="/kontakt" sx={linkStyles}>
            Kontakt
          </MuiLink>
        </Grid>
      </Grid>

      {/* Copyright Hinweis */}
      <Typography variant="body1" sx={{ marginTop: theme.spacing(2) }}>
        © 2024 EinfachNurZocken. Alle Rechte vorbehalten.
      </Typography>
    </Box>
  );
}

export default Footer;
