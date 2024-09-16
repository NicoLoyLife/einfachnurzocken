import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import {
  SportsSoccerOutlined,
  VerifiedOutlined,
  LocalOfferOutlined,
  AccessTimeOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";

function WhyChooseSportsBetting() {
  const benefits = [
    {
      title: "Bequemlichkeit",
      description:
        "Setze deine Wetten jederzeit und überall – bequem von zu Hause aus oder unterwegs.",
      icon: <AccessTimeOutlined sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Vielfältige Wettmärkte",
      description:
        "Wähle aus einer großen Anzahl von Sportarten und Wettoptionen – von Fußball bis hin zu exotischen Sportarten.",
      icon: <SportsSoccerOutlined sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Attraktive Boni",
      description:
        "Nutze exklusive Willkommensboni, Gratiswetten und Cashback-Angebote.",
      icon: <LocalOfferOutlined sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Bessere Quoten",
      description:
        "Profitiere von besseren Quoten als in traditionellen Wettbüros und erziele höhere Gewinne.",
      icon: <TrendingUpOutlined sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Schnelle Auszahlungen",
      description:
        "Erhalte deine Gewinne schnell und sicher direkt auf dein Konto.",
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
        Warum Sportwetten online platzieren?
      </Typography>

      <Typography
        variant="body1"
        component="p"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Sportwetten bieten dir eine Vielzahl von Vorteilen gegenüber
        traditionellen Wettbüros. Von der Bequemlichkeit des Wetten von zu Hause
        bis hin zu besseren Quoten und exklusiven Bonusangeboten – hier sind die
        wichtigsten Gründe, warum immer mehr Menschen ihre Wetten online
        platzieren:
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

export default WhyChooseSportsBetting;