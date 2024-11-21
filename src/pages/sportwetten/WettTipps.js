import React from "react";
import { Box, Typography, Container, List } from "@mui/material";
import MainLayout from "../../components/layout/MainLayout";
import { Link } from "react-router-dom";
import getAllWettTipps from "../../services/wett-tipps/getAllWettTipps";

const WettTipps = () => {
  const tipps = getAllWettTipps();

  return (
    <MainLayout>
      <Container maxWidth="lg">
        <Box sx={{ mt: 4, mb: 8, textAlign: "center" }}>
          <Typography variant="h1" gutterBottom>
            Wett-Tipps
          </Typography>
          <List>
            {tipps.map((tipp, index) => (
              <Link key={index} to={`/sportwetten/wett-tipps/${tipp.id}`}>
                <Typography variant="h5">{tipp.title}</Typography>
              </Link>
            ))}
          </List>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default WettTipps;
