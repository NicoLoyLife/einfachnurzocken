import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import {
  CasinoOutlined,
  VerifiedOutlined,
  LocalOfferOutlined,
  AccessTimeOutlined,
  MonetizationOnOutlined,
} from "@mui/icons-material";

function WhyChooseOnlineCasino() {
  const benefits = [
    {
      title: "Bequemlichkeit",
      description:
        "Spiele jederzeit und überall, bequem von zu Hause aus oder unterwegs.",
      icon: <AccessTimeOutlined sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Vielfalt an Spielen",
      description:
        "Genieße eine riesige Auswahl an Slots, Tischspielen und Live-Spielotheken-Optionen.",
      icon: <CasinoOutlined sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Attraktive Boni",
      description:
        "Nutze exklusive Willkommensboni, Freispiele und Cashback-Angebote.",
      icon: <LocalOfferOutlined sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Flexibilität bei den Zahlungsmethoden",
      description:
        "Wähle aus einer Vielzahl von Ein- und Auszahlungsmöglichkeiten.",
      icon: (
        <MonetizationOnOutlined sx={{ fontSize: 40, color: "primary.main" }} />
      ),
    },
    {
      title: "Schnelle Auszahlungen",
      description: "Erhalte deine Gewinne schnell und sicher auf dein Konto.",
      icon: <VerifiedOutlined sx={{ fontSize: 40, color: "primary.main" }} />,
    },
  ];

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Warum eine Online Spielothek wählen?
      </Typography>

      <Typography
        variant="body1"
        component="p"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Online Spielotheken bieten dir eine Vielzahl von Vorteilen gegenüber
        traditionellen Casinos. Von der Bequemlichkeit des Spielens von zu Hause
        bis hin zu einer breiten Auswahl an Spielen und exklusiven
        Bonusangeboten – hier sind die wichtigsten Gründe, warum immer mehr
        Spieler Online Spielotheken bevorzugen:
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {benefits.map((benefit, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
                boxShadow: 3,
                borderRadius: "15px",
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                {benefit.icon}
                <Typography variant="h5" component="h3" sx={{ mt: 2, mb: 1 }}>
                  {benefit.title}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  sx={{ color: "text.secondary" }}
                >
                  {benefit.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default WhyChooseOnlineCasino;
