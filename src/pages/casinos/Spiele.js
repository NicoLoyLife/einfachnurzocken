import React from "react";
import { Box, Typography, Container } from "@mui/material";
import MainLayout from "../../components/layout/MainLayout";

function Spiele() {
  return (
    <MainLayout>
      <Container maxWidth="lg">
        <Box sx={{ mt: 4, mb: 8, textAlign: "center" }}>
          <Typography variant="h1" gutterBottom>
            Spiele
          </Typography>
          <Typography variant="body1">
            Dieser Bereich ist aktuell im Aufbau. Schau bald wieder vorbei, um
            die neuesten Spiele zu entdecken!
          </Typography>
        </Box>
      </Container>
    </MainLayout>
  );
}

export default Spiele;
