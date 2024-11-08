import React, { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import {
  Box,
  Typography,
  Grid,
  Button,
  Divider,
  useTheme,
} from "@mui/material";
import logo from "../../assets/images/logo.png";
import OpenGraphMeta from "../../components/common/OpenGraphMeta";
import { onlineCasinoProvidersData } from "../../services/providersData";
import { getSortedProvidersByRating } from "../../services/helpers";
import CasinoBonusOfferCard from "../../components/casinos/CasinoBonusOfferCard";

function Bonus() {
  const theme = useTheme();

  // Open Graph Daten
  const pageTitle = "Die besten Casino Bonusangebote 2024 im Vergleich";
  const pageDescription =
    "Entdecke die besten Casino Bonusangebote 2024! Unsere Experten haben eine Vielzahl von Online Casinos sorgfältig getestet, um dir eine Liste der besten und seriösesten Bonusangebote zu bieten.";
  const pageUrl = "https://einfachnurzocken.com/online-spielotheken/bonus";
  const pageImage = logo;

  // Hole die sortierten Anbieter
  const sortedBonusOffers = getSortedProvidersByRating(
    onlineCasinoProvidersData
  );

  // State für die Anzahl der angezeigten Bonusangebote (initial 3 für Mobile)
  const [visibleBonusOffers, setVisibleBonusOffers] = useState(3);

  // Funktion zum Anzeigen weiterer Bonusangebote
  const showMoreBonusOffers = () => {
    setVisibleBonusOffers((prev) => prev + 3); // Jeweils 3 weitere Bonusangebote laden
  };

  const faqItems = [
    {
      question: "Was sind Casino Bonusangebote?",
      answer:
        "Casino Bonusangebote sind spezielle Angebote von Online Casinos, um neue Kunden zu gewinnen und bestehende Kunden zu belohnen. Diese reichen von Willkommensboni über Freispiele bis hin zu Cashback-Angeboten.",
    },
    {
      question: "Wie finde ich das beste Casino Bonusangebot?",
      answer:
        "Das beste Casino Bonusangebot hängt von deinen persönlichen Vorlieben ab. Achte auf die Bonusbedingungen, wie Umsatzbedingungen, Mindesteinzahlung und Gültigkeitsdauer, um das für dich passende Angebot zu finden.",
    },
    {
      question: "Kann ich mehrere Casino Bonusangebote nutzen?",
      answer:
        "Ja, in der Regel kannst du mehrere Casino Bonusangebote nutzen. Achte jedoch darauf, dass die Bonusbedingungen eingehalten werden, um den Bonus erfolgreich freizuspielen.",
    },
    {
      question: "Wie erhalte ich einen Casino Bonus?",
      answer:
        "Um einen Casino Bonus zu erhalten, musst du dich bei einem Online Casino registrieren und eine Einzahlung tätigen. Achte darauf, den Bonuscode einzugeben, falls erforderlich, um den Bonus zu aktivieren.",
    },
    {
      question: "Was sind Umsatzbedingungen?",
      answer:
        "Umsatzbedingungen sind Bedingungen, die du erfüllen musst, um den Casino Bonus freizuspielen. Diese beinhalten in der Regel einen bestimmten Umsatz des Bonusbetrags, bevor du eine Auszahlung beantragen kannst.",
    },
  ];

  return (
    <MainLayout>
      <Box
        sx={{
          mt: theme.spacing(4),
          mb: theme.spacing(6),
          textAlign: "center",
        }}
      >
        <OpenGraphMeta
          title={pageTitle}
          description={pageDescription}
          url={pageUrl}
          image={pageImage}
        />

        <Typography
          variant="h1"
          component="h1"
          sx={{
            mb: 2,
            fontSize: {
              xs: "2rem",
              sm: "3rem",
              md: "4rem",
            },
          }}
        >
          {pageTitle}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
          }}
        >
          {pageDescription}
        </Typography>
      </Box>

      <Box sx={{ mt: 8, mb: 8 }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{ mb: 4, textAlign: "center" }}
        >
          Attraktive Casino Bonusangebote der besten Online Casinos
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{ mb: 4, textAlign: "center" }}
        >
          Entdecke die besten Casino Bonusangebote 2024! Unsere Experten haben
          eine Vielzahl von Online Casinos sorgfältig getestet, um dir eine
          Liste der besten und seriösesten Bonus Angebote zu bieten. Vergleiche
          die verschiedenen Bonusangebote und finde das passende Angebot für
          dich!
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {sortedBonusOffers.slice(0, 3).map((offer, index) => (
            <Grid item xs={12} md={4} key={index}>
              <CasinoBonusOfferCard
                offer={offer}
                placement={index + 1}
              />{" "}
            </Grid>
          ))}
        </Grid>

        {/* Button zum Laden weiterer Casino-Anbieter */}
        {visibleBonusOffers < sortedBonusOffers.length && (
          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: { xs: "75%", sm: "auto" },
                maxWidth: { sm: 400 },
                whiteSpace: "normal", // Ermöglicht Zeilenumbruch bei langem Text
              }}
              onClick={showMoreBonusOffers}
            >
              Mehr Bonusangebote laden
            </Button>
          </Box>
        )}
        {/* Visuelle Abgrenzung */}
        <Divider sx={{ my: 4 }} />
      </Box>

      {/* FAQ */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{ mt: 4, textAlign: "center" }}
        >
          Häufig gestellte Fragen zu Bonusangeboten
        </Typography>

        <Box sx={{ mt: 2 }}>
          {faqItems.map((faq, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              {/* Frage */}
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                {faq.question}
              </Typography>

              {/* Antwort */}
              <Typography variant="body2" sx={{ mt: 1 }}>
                {faq.answer}
              </Typography>
              {/* Trennlinie */}
              {index < faqItems.length - 1 && <Divider sx={{ mt: 3 }} />}
            </Box>
          ))}
        </Box>
      </Box>
    </MainLayout>
  );
}

export default Bonus;
