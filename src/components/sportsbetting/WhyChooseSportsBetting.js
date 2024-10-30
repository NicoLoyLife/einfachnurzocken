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
  SportsSoccerOutlined,
  VerifiedOutlined,
  LocalOfferOutlined,
  AccessTimeOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";

function WhyChooseSportsBetting() {
  const theme = useTheme();

  const iconStyle = {
    fontSize: theme.spacing(5),
    color: theme.palette.primary.main,
  };

  const benefits = [
    {
      title: "Bequemlichkeit",
      description:
        "Setze deine Wetten jederzeit und überall – bequem von zu Hause aus oder unterwegs.",
      icon: AccessTimeOutlined,
    },
    {
      title: "Vielfältige Wettmärkte",
      description:
        "Wähle aus einer großen Anzahl von Sportarten und Wettoptionen – von Fußball bis hin zu exotischen Sportarten.",
      icon: SportsSoccerOutlined,
    },
    {
      title: "Attraktive Boni",
      description:
        "Nutze exklusive Willkommensboni, Gratiswetten und Cashback-Angebote.",
      icon: LocalOfferOutlined,
    },
    {
      title: "Bessere Quoten",
      description:
        "Profitiere von besseren Quoten als in traditionellen Wettbüros und erziele höhere Gewinne.",
      icon: TrendingUpOutlined,
    },
    {
      title: "Schnelle Auszahlungen",
      description:
        "Erhalte deine Gewinne schnell und sicher direkt auf dein Konto.",
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
        Warum Sportwetten online platzieren?
      </Typography>

      <Typography
        variant="body1"
        paragraph
        sx={{ mb: theme.spacing(4), textAlign: "center" }}
      >
        Sportwetten bieten dir eine Vielzahl von Vorteilen gegenüber
        traditionellen Wettbüros. Von der Bequemlichkeit des Wetten von zu Hause
        bis hin zu besseren Quoten und exklusiven Bonusangeboten – hier sind die
        wichtigsten Gründe, warum immer mehr Menschen ihre Wetten online
        platzieren:
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

export default WhyChooseSportsBetting;
