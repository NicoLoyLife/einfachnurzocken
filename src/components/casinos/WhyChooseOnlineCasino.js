import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  useTheme,
} from "@mui/material";
import {
  CasinoOutlined,
  VerifiedOutlined,
  LocalOfferOutlined,
  AccessTimeOutlined,
  MonetizationOnOutlined,
} from "@mui/icons-material";

function WhyChooseOnlineCasino() {
  const theme = useTheme();

  const iconStyle = {
    fontSize: theme.spacing(5),
    color: theme.palette.primary.main,
  };

  const benefits = [
    {
      title: "Bequemlichkeit",
      description:
        "Spiele jederzeit und überall, bequem von zu Hause aus oder unterwegs.",
      icon: AccessTimeOutlined,
    },
    {
      title: "Vielfalt an Spielen",
      description:
        "Genieße eine riesige Auswahl an Slots, Tischspielen und Live-Spielotheken-Optionen.",
      icon: CasinoOutlined,
    },
    {
      title: "Attraktive Boni",
      description:
        "Nutze exklusive Willkommensboni, Freispiele und Cashback-Angebote.",
      icon: LocalOfferOutlined,
    },
    {
      title: "Flexibilität bei den Zahlungsmethoden",
      description:
        "Wähle aus einer Vielzahl von Ein- und Auszahlungsmöglichkeiten.",
      icon: MonetizationOnOutlined,
    },
    {
      title: "Schnelle Auszahlungen",
      description: "Erhalte deine Gewinne schnell und sicher auf dein Konto.",
      icon: VerifiedOutlined,
    },
  ];

  return (
    <Box sx={{ mt: theme.spacing(8), mb: theme.spacing(8) }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: theme.spacing(4), textAlign: "center" }}
      >
        Warum eine Online Spielothek wählen?
      </Typography>

      <Typography
        variant="body1"
        paragraph
        sx={{ mb: theme.spacing(4), textAlign: "center" }}
      >
        Online Spielotheken bieten dir eine Vielzahl von Vorteilen gegenüber
        traditionellen Casinos. Von der Bequemlichkeit des Spielens von zu Hause
        bis hin zu einer breiten Auswahl an Spielen und exklusiven
        Bonusangeboten – hier sind die wichtigsten Gründe, warum immer mehr
        Spieler Online Spielotheken bevorzugen:
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: theme.spacing(2),
                  boxShadow: theme.shadows[3],
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <IconComponent sx={iconStyle} aria-hidden="true" />
                  <Typography
                    variant="h3"
                    component="h3"
                    sx={{ mt: theme.spacing(2), mb: theme.spacing(1) }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {benefit.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />
    </Box>
  );
}

export default WhyChooseOnlineCasino;
