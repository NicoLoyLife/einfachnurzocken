// MainLayout.js
import React from 'react';
import { Grid, useTheme, useMediaQuery } from '@mui/material';
import SportsbettingSidebar from './SportsbettingSidebar'; // Sidebar-Komponente wird importiert
import CasinoSidebar from './CasinoSidebar'; // Sidebar-Komponente wird importiert
import { SECTIONS } from "../../redux/sectionSlice";
import { useSelector } from "react-redux";

const MainLayout = ({ children }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const currentSection = useSelector((state) => state.section.currentSection); // Redux state für die aktuelle Section (sportwetten oder online-spielotheken)

  return (
      <Grid container spacing={4}>
        {/* Haupt-Content-Bereich - nimmt 2/3 der Seite ein */}
        <Grid item xs={12} md={8}>
          {children}
        </Grid>

        {/* Sidebar - nimmt 1/3 der Seite ein */}
        <Grid item xs={12} md={4}>
          {/* Sidebar für Sportwetten */}
          {currentSection === SECTIONS.SPORTWETTEN && (
            <SportsbettingSidebar isSticky={isDesktop} />
          )}

          {/* Sidebar für Online-Spielotheken */}
          {currentSection === SECTIONS.ONLINE_SPIELOTHEKEN && (
            <CasinoSidebar isSticky={isDesktop} />
          )}
        </Grid>
      </Grid>
  );
};

export default MainLayout;