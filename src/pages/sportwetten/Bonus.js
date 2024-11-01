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
import { sportsbettingProvidersData } from "../../services/providersData";
import { getSortedProvidersByRating } from "../../services/helpers";
import SportsBettingBonusOfferCard from "../../components/sportsbetting/SportsBettingBonusOfferCard";

function Bonus() {
  const theme = useTheme();

  // Open Graph Daten
  const pageTitle = "Die besten Bonusangebote 2024 im Vergleich";
  const pageDescription =
    "Entdecke die besten Bonusangebote 2024! Unsere Experten haben eine Vielzahl von Buchmachern sorgfältig getestet, um dir eine Liste der besten und seriösesten Bonusangebote zu bieten.";
  const pageUrl = "https://einfachnurzocken.com/sportwetten/bonus";
  const pageImage = logo;

  // Hole die sortierten Anbieter
  const sortedBonusOffers = getSortedProvidersByRating(sportsbettingProvidersData);

  // State für die Anzahl der angezeigten Bonusangebote (initial 3 für Mobile)
  const [visibleBonusOffers, setVisibleBonusOffers] = useState(3);

  // Funktion zum Anzeigen weiterer Bonusangebote
  const showMoreBonusOffers = () => {
    setVisibleBonusOffers((prev) => prev + 3); // Jeweils 3 weitere Bonusangebote laden
  };

  const faqItems = [
    {
      question: "Was sind Bonusangebote?",
      answer:
        "Bonusangebote sind spezielle Angebote von Sportwetten-Anbietern, um neue Kunden zu gewinnen und bestehende Kunden zu belohnen. Diese reichen von Willkommensboni über Gratiswetten bis hin zu Cashback-Angeboten.",
    },
    {
      question: "Wie finde ich das beste Bonusangebot?",
      answer:
        "Das beste Bonusangebot hängt von deinen persönlichen Vorlieben ab. Achte auf die Bonusbedingungen, wie Umsatzbedingungen, Mindestquoten und Gültigkeitsdauer, um das für dich passende Angebot zu finden.",
    },
    {
      question: "Kann ich mehrere Bonusangebote nutzen?",
      answer:
        "Ja, in der Regel kannst du mehrere Bonusangebote nutzen. Achte jedoch darauf, dass die Bonusbedingungen eingehalten werden, um den Bonus erfolgreich freizuspielen.",
    },
    {
      question: "Wie erhalte ich einen Bonus?",
      answer:
        "Um einen Bonus zu erhalten, musst du dich bei einem Sportwetten-Anbieter registrieren und eine Einzahlung tätigen. Achte darauf, den Bonuscode einzugeben, falls erforderlich, um den Bonus zu aktivieren.",
    },
    {
      question: "Was sind Umsatzbedingungen?",
      answer:
        "Umsatzbedingungen sind Anforderungen, die du erfüllen musst, um den Bonus freizuspielen und Gewinne auszahlen zu können. Diese beinhalten in der Regel, dass du den Bonusbetrag mehrmals umsetzen musst.",
    },
    {
      question: "Kann ich einen Bonus ablehnen?",
      answer:
        "Ja, du kannst einen Bonus in der Regel ablehnen, indem du den entsprechenden Button oder Link klickst. Beachte jedoch, dass du dadurch auf den Bonus und eventuelle Gewinne verzichtest.",
    },
    {
      question: "Gibt es Bonusangebote ohne Einzahlung?",
      answer:
        "Ja, es gibt Bonusangebote ohne Einzahlung, bei denen du einen Bonus erhältst, ohne eine Einzahlung tätigen zu müssen. Diese sind jedoch oft mit strengeren Umsatzbedingungen verbunden.",
    },
    {
      question: "Wie lange sind Bonusangebote gültig?",
      answer:
        "Die Gültigkeitsdauer von Bonusangeboten variiert je nach Anbieter und Angebot. Achte darauf, die Bonusbedingungen zu lesen, um die Gültigkeitsdauer des Bonus zu erfahren.",
    },
    {
      question: "Kann ich einen Bonus zurückgeben?",
      answer:
        "Nein, in der Regel kannst du einen Bonus nicht zurückgeben. Sobald du den Bonus aktiviert hast, musst du die Bonusbedingungen erfüllen, um den Bonus freizuspielen.",
    },
    {
      question: "Was passiert, wenn ich die Bonusbedingungen nicht erfülle?",
      answer:
        "Wenn du die Bonusbedingungen nicht erfüllst, kannst du den Bonus und eventuelle Gewinne verlieren. Achte darauf, die Bonusbedingungen zu lesen und zu verstehen, um den Bonus erfolgreich freizuspielen.",
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
          variant="body2"
          sx={{
            mb: 4,
            maxWidth: "800px",
            mx: "auto",
            fontSize: {
              xs: "1rem",
              sm: "1.125rem",
              md: "1.25rem",
            },
          }}
        >
          {pageDescription} Finde den idealen Anbieter mit attraktiven
          Bonusangeboten, hohen Quoten und einem großen Wettangebot.
        </Typography>
      </Box>

      <Box sx={{ mt: 8, mb: 8 }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{ mb: 4, textAlign: "center" }}
        >
          Attraktive Bonusangebote der besten Sportwetten-Anbieter
        </Typography>

        <Typography
          variant="body2"
          paragraph
          sx={{ mb: 4, textAlign: "center" }}
        >
          Einer der größten Vorteile beim Platzieren von Sportwetten online sind
          die attraktiven Bonusangebote. Diese reichen von Willkommensboni über
          Gratiswetten bis hin zu Cashback-Angeboten. Nutze diese Angebote, um
          deine Gewinnchancen zu maximieren und dein Wetterlebnis zu verbessern!
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {sortedBonusOffers.slice(0, 3).map((offer, index) => (
            <Grid item xs={12} md={4} key={index}>
              <SportsBettingBonusOfferCard
                offer={offer}
                placement={index + 1}
              />{" "}
            </Grid>
          ))}
        </Grid>

        {/* Button zum Laden weiterer Sportwetten-Anbieter */}
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
