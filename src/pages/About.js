import React from "react";
import {
  Box,
  Typography,
  useTheme,
  Divider,
  Grid,
  Card,
  CardContent,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material";
import logo from "../assets/images/logo.png";
import OpenGraphMeta from "../components/common/OpenGraphMeta";
import { VerifiedOutlined, GppBadOutlined, WarningOutlined } from "@mui/icons-material";

function About() {
  const theme = useTheme();

  // Open Graph Daten
  const pageTitle = "Über EinfachNurZocken.com";
  const pageDescription =
    "Erfahre mehr über EinfachNurZocken.com, die unabhängige Webseite von Spielern für Spieler. Wir bieten News, Tests und Erfahrungen zu Online Casinos, Online Spielotheken und Sportwetten.";
  const pageUrl = "https://einfachnurzocken.com/about";
  const pageImage = logo;

  const iconStyle = {
    fontSize: theme.spacing(5),
    color: theme.palette.primary.main,
  };

  const benefits = [
    {
      title: "Komplett werbefrei",
      description:
        "Unsere Webseite ist frei von störender Werbung, sodass du dich voll und ganz auf die Inhalte konzentrieren kannst.",
      icon: VerifiedOutlined,
    },
    {
      title: "Keine Marketingfirma",
      description:
        "Wir sind eine unabhängige Plattform ohne Bindung an Marketingfirmen. Unsere Bewertungen und Empfehlungen sind daher immer ehrlich und objektiv.",
      icon: VerifiedOutlined,
    },
    {
      title: "Strenge Tests",
      description:
        "Jedes Online Casino und jede Spielothek wird nach strengen Kriterien getestet, um Dir nur die besten und sichersten Anbieter zu präsentieren.",
      icon: VerifiedOutlined,
    },
    {
      title: "Ehrliche Meinungen & Erfahrungen",
      description:
        "Unsere Bewertungen basieren auf realen Erfahrungen und fundierten Analysen. Keine bezahlten Tests oder gekaufte Bewertungen – nur authentische Meinungen.",
      icon: VerifiedOutlined,
    },
    {
      title:
        "Kein Test, keine Erfahrung und auch keine Bewertung kann bei uns erkauft werden!",
      description:
        "Integrität ist uns wichtig. Unsere Empfehlungen sind immer frei von äußeren Einflüssen.",
      icon: GppBadOutlined,
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

      <Typography variant="body1" paragraph sx={{ mb: 4, textAlign: "center" }}>
        Bei <strong>EinfachNurZocken.com</strong> dreht sich alles um das pure
        Spielerlebnis. Unsere Leidenschaft für Spiele und den Nervenkitzel des
        Zockens hat und dazu inspiriert, eine Plattform zu schaffen, die
        Spielern wie dir eine verlässliche und unabhängige Anlaufstelle bietet.
        Egal, ob du ein erfahrener Spieler bist oder gerade erst in die Welt der
        Online-Spiele eintauchst - wir sind hier, um dich zu unterstützen und zu
        begleiten.
      </Typography>

      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />

      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Unsere Mission
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4, textAlign: "center" }}>
        <strong>EinfachNurZocken.com</strong> wurde mit dem Ziel gegründet,
        Spielern eine transparente und ehrliche Informationsquelle zu bieten. In
        einer Welt, in der die Auswahl an Online-Casinos und Spielotheken
        überwältigend sein kann, möchten wir dir helfen, fundierte
        Entscheidungen zu treffen. Unser Team aus aktiven und ehemaligen
        Spielern unterschiedlicher Altersgruppen und beruflicher Hintergründe
        bringt vielfältige Erfahrungen mit, um dir die besten Tipps, Tests und
        Bewertungen zu liefern.
      </Typography>

      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />

      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Was dich bei uns erwartet
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        Unsere Webseite ist darauf ausgelegt, dir eine umfassende Übersicht und
        detaillierte Informationen zu bieten. Hier ein Einblick in die Bereiche,
        die wir abdecken:
      </Typography>

      <Typography variant="h3" component="h3">
        1. News-Bereich
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        Bleibe stets informiert über die neuesten Entwicklungen in der
        Gaming-Welt. Wir berichten über neue Spiele, aktuelle politische
        ENtscheidungen, neue Bonus-Angebote und vieles mehr.
      </Typography>

      <Typography variant="h3" component="h3">
        2. Online Spielotheken Vergleich
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        Finde das passende Online Casino für dich! Unsere detaillierten
        Vergleiche helfen dir, die besten Anbieter anhand unserer strengen
        Testkriterien zu entdecken.
      </Typography>

      <Typography variant="h3" component="h3">
        3. Online Slots Übersicht
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        Entdecke eine Vielzahl an Slot-Spielen mit unseren ausführlichen
        Beschreibungen und Bewertungen. Egal ob Klassiker oder die neuesten
        Trends - wir haben für jeden Geschmack etwas dabei.
      </Typography>

      <Typography variant="h3" component="h3">
        4. Online Sportwetten Vergleich
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        Interessierst du dich für Sportwetten? Wir vergleichen verschiedene
        Plattformen, damit du die besten Quoten und sichersten Anbieter findest.
      </Typography>

      <Typography variant="h3" component="h3">
        5. Casino Guide + FAQ
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        Neu in der Welt der Online-Casinos? Unsere Guides und FAQs bieten dir
        eine umfassende Einführung und beantworten alle deine Fragen rund ums
        Thema Glücksspiel.
      </Typography>

      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />

      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Deine Vorteile bei EinfachNurZocken.com
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4, textAlign: "center" }}>
        Wir möchten, dass dein Spielerlebnis so angenehm und sicher wie möglich
        ist. Deshalb bieten wir dir folgende Vorteile:
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

      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Transparenz und Spielerschutz
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4, textAlign: "center" }}>
        Deine Sicherheit und Zufriedenheit liegen uns am Herzen. Deshalb legen
        wir großen Wert auf Transparenz und verantwortungsbewusstes Spielen:
      </Typography>
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <VerifiedOutlined />
            </ListItemIcon>
            <ListItemText
              primary="Ehrliche und ausführliche Tests"
              secondary="Unsere Bewertungen sind detailliert und nachvollziehbar, sodass du genau weißt, worauf du dich einlässt."
            />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <VerifiedOutlined />
            </ListItemIcon>
            <ListItemText
              primary="Spielerschutz"
              secondary="Solltest du merken, dass du Probleme mit dem Glücksspiel hast, bieten wir dir umfassende Informationen und Ressourcen zum Thema Spielschutz."
            />
          </ListItemButton>
        </ListItem>
      </List>

      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />

      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Finanzierung der Webseite
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4, textAlign: "center" }}>
        <strong>EinfachNurZocken.com</strong> ist kostenlos für alle Nutzer. Um
        unsere Kosten für Server und Programmierarbeiten zu decken, finanzieren
        wir uns über:
      </Typography>
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <VerifiedOutlined />
            </ListItemIcon>
            <ListItemText
              primary="Affiliate-Marketing"
              secondary="Durch Partnerschaften mit Online-Casinos und Spielotheken erhalten wir eine Provision, wenn du dich über unsere Links registrierst. Teilweise bekommst du darüber exklusive Konditionen und Boni."
            />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <VerifiedOutlined />
            </ListItemIcon>
            <ListItemText
              primary="Bezahlte Newsberichte"
              secondary="Gelegentlich veröffentlichen wir gesponserte Inhalte, die wir klar als solche kennzeichnen."
            />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <VerifiedOutlined />
            </ListItemIcon>
            <ListItemText
              primary="Links zu Drittanbietern"
              secondary="Wir verlinken auf vertrauenswürdige Drittanbeiter, die uns unterstützen."
            />
          </ListItemButton>
        </ListItem>
      </List>

      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />

      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Unsere Geschichte
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4, textAlign: "center" }}>
        Alles begann mit der Leidenschaft für klassische Spielotheken und Spielbanken (Casinos). Ursprünglich starteten wir mit einfachen Spielotheken-Videos auf YouTube und erweiterten unser Angebot später um informative Artikel auf dieser Webseite. Die positive Resonanz und die zahlreichen Anfragen nach unseren Einschätzungen zu bestimmten Anbietern motivierten uns, den Bereich <strong>Online Casinos</strong>, <strong>Online Spielotheken</strong> und <strong>Sportwetten</strong> in unser Portfolio aufzunehmen. So entstand <strong>EinfachNurZocken.com</strong> - deine vertrauenswürdige Quelle für alles rund ums Zocken.
      </Typography>

      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />

      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Rechtlicher Hinweis
      </Typography>

      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <WarningOutlined />
            </ListItemIcon>
            <ListItemText
              primary="Hinweis"
              secondary="Glücksspiel ist ab 18 Jahren erlaubt. Bitte informiere dich über die für dich gültige Rechtslage, bevor du ein Online-Angebot nutzt."
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default About;
