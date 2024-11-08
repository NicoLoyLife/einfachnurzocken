import React from "react";
import { Box, Typography, Container } from "@mui/material";
import MainLayout from "../../components/layout/MainLayout";

function News() {
  return (
    <MainLayout>
      <Container maxWidth="lg">
        <Box sx={{ mt: 4, mb: 8, textAlign: "center" }}>
          <Typography variant="h1" gutterBottom>
            Online Spielotheken News
          </Typography>
          <Typography variant="body1">
            Dieser Bereich ist aktuell im Aufbau. Bald findest du hier
            ausführliche News zu verschiedenen Online Spielotheken-Themen!
          </Typography>
        </Box>
      </Container>
    </MainLayout>
  );
}

export default News;
