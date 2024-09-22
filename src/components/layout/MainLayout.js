// MainLayout.js
import React from 'react';
import { Container, Grid, useTheme, useMediaQuery } from '@mui/material';
import Sidebar from './Sidebar'; // Sidebar-Komponente wird importiert

const MainLayout = ({ children }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {/* Haupt-Content-Bereich - nimmt 2/3 der Seite ein */}
        <Grid item xs={12} md={8}>
          {children}
        </Grid>

        {/* Sidebar - nimmt 1/3 der Seite ein */}
        <Grid item xs={12} md={4}>
          <Sidebar isSticky={isDesktop} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainLayout;