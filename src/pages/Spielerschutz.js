import React from "react";
import {
  Box,
  Typography,
  useTheme,
  Divider,
} from "@mui/material";
import logo from "../assets/images/logo.png";
import OpenGraphMeta from "../components/common/OpenGraphMeta";
import StyledLink from "../components/common/StyledLink";

function Spielerschutz() {
  const theme = useTheme();

  // Open Graph Daten
  const pageTitle = "Infos & Hilfen zur Glücksspielsucht";
  const pageDescription =
    "Erfahre mehr über Spielerschutz und verantwortungsbewusstes Spielen bei EinfachNurZocken.com";
  const pageUrl = "https://einfachnurzocken.com/spielerschutz";
  const pageImage = logo;

  const faqItems = [
    {
      question: "Was sind Anzeichen einer Glücksspielsucht?",
      answer:
        "Typische Anzeichen sind ein starker Drang zu spielen, Kontrollverlust, Vernachlässigung sozialer Kontakte und Verpflichtungen sowie finanzielle Probleme durch exzessives Spielen.",
    },
    {
      question: "Wie entsteht Glücksspielsucht?",
      answer:
        "Glücksspielsucht entsteht durch ein Zusammenspiel aus biologischen, psychologischen und sozialen Faktoren. Risikofaktoren können Stress, persönliche Krisen oder das Verlangen nach schnellen Gewinnen sein.",
    },
    {
      question: "Kann ich die Glücksspielsucht alleine überwinden?",
      answer:
        "Es ist schwierig, eine Glücksspielsucht ohne professionelle Hilfe zu überwinden. Beratung und Therapie bieten Unterstützung und Strategien zur Bewältigung.",
    },
    {
      question: "Sind Online-Casinos gefährlicher als traditionelle Spielbanken?",
      answer:
        "Online-Casinos sind durch ihre ständige Verfügbarkeit und Anonymität besonders risikoreich. Die Hemmschwelle ist niedriger, und Verlustsummen können sich schneller anhäufen.",
    },
    {
      question: "Wie kann ich mich vor Glücksspielsucht schützen?",
      answer:
        "Setze Dir klare Grenzen, sowohl zeitlich als auch finanziell. Nutze Selbstsperren und Limits, informiere Dich über Risiken und sei ehrlich zu Dir selbst über Dein Spielverhalten.",
    },
  ];

  return (
    <Box
      sx={{
        mt: theme.spacing(4),
        mb: theme.spacing(6),
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
          textAlign: "center",
        }}
      >
        {pageTitle}
      </Typography>

      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Was ist Glücksspielsucht?
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Glücksspielsucht, auch pathologisches Spielen genannt, wird von der
        Weltgesundheitsorganisation (WHO) als Krankheit anerkannt und ist im
        aktuellen Klassifikationssystem ICD-11 unter den "Störungen durch
        Suchtverhalten" aufgeführt. Sie beschreibt einen unkontrollierbaren
        Drang, an Glücksspielen teilzunehmen, trotz negativer Konsequenzen oder
        des Wunsches, aufzuhören. Wichtig ist die Unterscheidung zwischen
        Glücksspielsucht und Computerspielsucht; hier fokussieren wir uns
        ausschließlich auf die Glücksspielsucht im Zusammenhang mit
        Online-Glücksspiel und Automatenspiel.
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Seit den 1980er Jahren ist die Thematik der Glücksspielsucht in
        Deutschland zunehmend in den Fokus gerückt. Was einst als Randproblem
        galt, hat sich zu einer ernsthaften gesellschaftlichen Herausforderung
        entwickelt. Die Zahl der Betroffenen ist signifikant gestiegen, und
        Glücksspielsucht wird mittlerweile als Krankheit anerkannt, die es zu
        behandeln gilt.
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Moderne Glücksspiele, insbesondere Automatenspiele und Online-Slots,
        nutzen gezielte psychologische Mechanismen, um Spieler zu binden und das
        Suchtpotenzial zu erhöhen. Bei uns von [IhreWebseite.de] steht der
        Spielerschutz an oberster Stelle. In diesem Artikel beleuchten wir die
        Strategien der Glücksspielindustrie, bieten Selbsttests an und zeigen
        Dir Wege auf, wie Du die Glücksspielsucht überwinden kannst. Zudem
        findest Du eine Liste der besten Anlaufstellen für professionelle Hilfe.
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        <strong>
          Wir sind selbst Spieler und es ist uns wichtig, dass du bewusst
          spielst und due Kontrolle behältst!
        </strong>
      </Typography>

      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />

      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Glücksspielsucht - Ein kurzer Selbsttest
      </Typography>

      <Typography variant="body1" paragraph>
        Dieser Selbsttest besteht aus allgemeinen Fragen und ersetzt keine
        professionelle Diagnose. Er kann jedoch erste Hinweise darauf geben, ob
        ein problematisches Spielverhalten vorliegt.
      </Typography>

      <ol>
        <li>
          Hast du Schwierigkeiten, dein Spielverhalten zu kontrollieren oder zu
          beenden?
        </li>
        <li>
          Denkst du häufig ans Spielen, selbst wenn du gerade nicht spielst?
        </li>
        <li>Versuchst du, Verluste durch erneutes SPielen zurückzugewinnen?</li>
        <li>
          Hast du wegen des Spielens schon gelogen oder wichtige Verpflichtungen
          vernachlässigt?
        </li>
        <li>
          Fühlst du dich unruhig oder gerezit, wenn du nicht spielen kannst?
        </li>
      </ol>

      <Typography variant="body1" paragraph>
        <strong>
          Wenn du mehrere dieser Fragen mit "Ja" beantwortet hast, empfehlen wir
          dir, professionelle Hilfe in Anspruch zu nehmen.
        </strong>
      </Typography>

      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />

      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Hilfe bei Glücksspielsucht - Die besten Anlaufstellen
      </Typography>

      <Typography variant="body1" paragraph>
        Der erste Schritt zur Bewältigung einer Glücksspielsucht ist das
        Eingeständnis des Problems. Es gibt zahlreiche Einrichtungen und
        Organisationen, die dir anonym und kostenlos helfen können.
      </Typography>

      <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
        Bundeszentrale für gesundheitliche Aufklärung (BZgA)
      </Typography>
      <ul>
        <li>
          <strong>Telefon-Hotline:</strong> 0800 1 37 27 00 (kostenlos)
        </li>
        <li>
          <strong>Erreichbarkeit:</strong> Montag bis Donnerstag: 10 - 22 Uhr,
          Freitag bis Sonntag: 10 - 18 Uhr
        </li>
        <li>
          <strong>Website:</strong>{" "}
          <StyledLink href="https://www.bzga.de" target="_blank" rel="noreferrer">
            www.bzga.de
          </StyledLink>
        </li>
      </ul>

      <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
        Check-dein-Spiel
      </Typography>

      <ul>
        <li>
          <strong>Selbsttest & umfangreiche Infos:</strong>{" "}
          <StyledLink
            href="https://www.check-dein-spiel.de"
            target="_blank"
            rel="noreferrer"
          >
            www.check-dein-spiel.de
          </StyledLink>
        </li>
      </ul>

      <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
        Bundeszentrale für gesundheitliche Aufklärung - Suchtprävention
      </Typography>

      <ul>
        <li>
          <strong>Alles rund um Gesundheit & Süchte:</strong>{" "}
          <StyledLink
            href="https://www.kenn-dein-limit.de"
            target="_blank"
            rel="noreferrer"
          >
            www.kenn-dein-limit.de
          </StyledLink>
        </li>
      </ul>

      <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
        Deutsche Hauptstelle für Suchtanfragen e.V. (DHS)
      </Typography>

      <ul>
        <li>
          <strong>Beratung und Hilfe:</strong>{" "}
          <StyledLink href="https://www.dhs.de" target="_blank" rel="noreferrer">
            www.dhs.de
          </StyledLink>
        </li>
      </ul>

      <Typography variant="body1" paragraph sx={{ mb: 4, textAlign: "center" }}>
        <strong>
          Denke daran: Schwach ist nicht, wer süchtig ist, sondern wer es nicht
          zugeben kann!
        </strong>
      </Typography>

      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />

      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Häufige Fragen zur Glücksspielsucht
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

      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />

      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        So manipuliert das Glücksspiel unser Gehirn - Spielautomaten und
        Online-Slots
      </Typography>

      <Typography variant="body1" paragraph>
        Glücksspiele sind so konzipiert, dass sie das Belohnungssystem unseres
        Gehirns aktivieren. Durch variable Verstärkungen, also unvorhersehbare
        Gewinne, wird Dopamin ausgeschüttet, was Glücksgefühle auslöst und das
        Verlangen nach weiterem Spielen steigert.
      </Typography>

      <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
        Psychologische Mechanismen:
      </Typography>

      <ul>
        <li>
          <strong>Variable Belohnungen:</strong> Unregelmäßige Gewinnintervalle
          halten die Spannung hoch.
        </li>
        <li>
          <strong>Nahe Gewinne:</strong> Knappes Verfehlen eines Gewinns
          suggeriert, dass der nächste Gewinn bevorsteht.
        </li>
        <li>
          <strong>Jackpots und Bonusspiele:</strong> Zusätzliche Gewinnchancen
          erhöhen den Reiz.
        </li>
        <li>
          <strong>Audiovisuelle Effekte:</strong> Farben, Geräusche und
          Animationen verstärken das Spielerlebnis und die emotionale Bindung.
        </li>
      </ul>

      <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
        Die Rolle der Glücksspielindustrie
      </Typography>

      <Typography variant="body1" paragraph>
        Hinter jedem Glücksspiel stehen Unternehmen mit wirtschaftlichen
        Interessen. Sie investieren in Forschung und Entwicklung, um Spiele zu
        schaffen, die Spieler möglichst lange binden. Es ist wichtig, sich
        dieser Strategien bewusst zu sein und kritisch zu hinterfragen.
      </Typography>

      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />

      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Aktuelle Rechtslage und Spielerschutz in Deutschland
      </Typography>

      <Typography variant="body1" paragraph>
        Mit dem neuen Glücksspielstaatsvertrag 2021 (GlüStV 2021), der am 1.
        Juli 2021 in Kraft getreten ist, wurden umfangreiche Regelungen zum
        Schutz der Spieler eingeführt:
      </Typography>

      <ul>
        <li>
          <strong>Einzahlungslimits:</strong> Maximal 1.000 € pro Monat für
          Einzahlungen bei Online-Casinos.
        </li>
        <li>
          <strong>Panik-Button:</strong> Sofortige 24-Stunden-Sperre auf
          Spielerwunsch.
        </li>
        <li>
          <strong>Zentrale Sperrdatei (OASIS):</strong> Möglichkeit zur
          Selbstsperre, die für alle lizenzierten Anbieter gilt.
        </li>
        <li>
          <strong>Werbebeschränkungen:</strong> Strenge Regeln für Werbung, um
          besonders gefährdete Gruppen zu schützen.
        </li>
        <li>
          <strong>Verifizierungspflicht:</strong> Spieler müssen ihre Identität
          nachweisen, um Minderjährige und Gesperrte auszuschließen.
        </li>
      </ul>

      <Typography variant="body1" paragraph>
        Diese Maßnahmen sollen das Risiko von Glücksspielsucht reduzieren und
        einen sicheren Rahmen für Glücksspiel bieten.
      </Typography>

      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />

      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Unsere Verantwortung
      </Typography>

      <Typography variant="body1" paragraph>
        Als Plattform, die verschiedene Online-Casinos, Spielotheken und
        Sportwettenanbieter vergleicht, liegt es in unserer Verantwortung, dich
        über die Risiken aufzuklären und dir Tools an die Hand zu geben, um
        verantwortungsvoll zu spielen.
      </Typography>

      <Typography variant="body1" paragraph>
        <strong>
          Wir empfehlen ausschließlich Anbieter, die sich an die gesetzlichen
          Vorgaben halten und effektive Maßnahmen zum Spielerschutz
          implementiert haben.
        </strong>
      </Typography>

      <Typography variant="body1" paragraph>
        Glücksspiel sollte immer als Form der Unterhaltung gesehen werden, nicht
        als Einkommensquelle. Sei dir der Risiken bewusst, setze klare Grenzen
        und zögere nicht, Hilfe zu suchen, wenn du das Gefühl hast, die
        Kontrolle zu verlieren.
      </Typography>

      <Typography variant="body1" paragraph>
        <strong>
          Deine Gesundheit und Dein Wohlbefinden stehen an erster Stelle. Spiele
          verantwortungsvoll!
        </strong>
      </Typography>
    </Box>
  );
}

export default Spielerschutz;
