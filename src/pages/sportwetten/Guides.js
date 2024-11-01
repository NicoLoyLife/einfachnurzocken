import React from "react";
import { Box, Typography, Container } from "@mui/material";
import MainLayout from "../../components/layout/MainLayout";

function Guides() {
  return (
    <MainLayout>
      <Container maxWidth="lg">
        <Box sx={{ mt: 4, mb: 8, textAlign: "center" }}>
          <Typography variant="h1" gutterBottom>
            Sportwetten Guides
          </Typography>
          <Typography variant="body1">
            Dieser Bereich ist aktuell im Aufbau. Bald findest du hier
            ausführliche Guides zu verschiedenen Sportwetten-Themen!
          </Typography>
        </Box>
      </Container>
    </MainLayout>
  );
}

export default Guides;
