import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import {
  LocalOfferOutlined,
  LoyaltyOutlined,
  FreeBreakfastOutlined,
  MoneyOffCsredOutlined,
} from "@mui/icons-material";

function BonusTypesSection() {
  const bonusTypes = [
    {
      title: "Willkommensbonus",
      description:
        "Ein exklusives Angebot für neue Spieler, das bei der ersten Einzahlung gewährt wird.",
      icon: <LocalOfferOutlined sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Einzahlungsbonus",
      description:
        "Erhalte einen zusätzlichen Betrag bei deiner ersten oder nachfolgenden Einzahlungen.",
      icon: <LoyaltyOutlined sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Freispiele",
      description:
        "Spiele bestimmte Slots kostenlos und behalte deine Gewinne.",
      icon: <FreeBreakfastOutlined sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Cashback",
      description:
        "Erhalte einen Teil deiner Verluste als Cashback zurück.",
      icon: (
        <MoneyOffCsredOutlined sx={{ fontSize: 40, color: "primary.main" }} />
      ),
    },
  ];

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Verschiedene Arten von Bonusangeboten
      </Typography>

      <Typography
        variant="body1"
        component="p"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Online Casinos bieten eine Vielzahl von Bonusangeboten, um dein
        Spielerlebnis zu verbessern. Entdecke die verschiedenen Arten von
        Boni und finde heraus, welcher am besten zu deinem Spielstil passt:
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {bonusTypes.map((bonus, index) => (
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
                {bonus.icon}
                <Typography variant="h5" component="h3" sx={{ mt: 2, mb: 1 }}>
                  {bonus.title}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  sx={{ color: "text.secondary" }}
                >
                  {bonus.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default BonusTypesSection;