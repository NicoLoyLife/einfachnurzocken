import React from "react";
import {
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { onlineCasinoProvidersData as providersData } from "../../services/providersData";
import MainLayout from "../../components/layout/MainLayout";
import PageHeader from "../../components/casinos/providers/PageHeader";
import IntroductionSection from "../../components/casinos/providers/IntroductionSection";
import OverviewSection from "../../components/casinos/providers/OverviewSection";
import BonusSection from "../../components/casinos/providers/BonusSection";
import GamesSection from "../../components/casinos/providers/GamesSection";
import PaymentMethodsSection from "../../components/casinos/providers/PaymentMethodsSection";
import CustomerSupportSection from "../../components/casinos/providers/CustomerSupportSection";
import LoyaltyProgramSection from "../../components/casinos/providers/LoyaltyProgramSection";
import ConclusionSection from "../../components/casinos/providers/ConclusionSection";
import FAQSection from "../../components/casinos/providers/FAQSection";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const BetanoReview = () => {
  const provider = providersData[["betano"]];

  if (!provider) {
    return <div>Anbieter nicht gefunden</div>;
  }

  const summary =
    "Betano hat sich seit seiner Gründung im Jahr 2016 nicht nur als führender Sportwetten-Anbieter in Deutschland etabliert, sondern bietet auch ein beeindruckendes Online Casino Erlebnis. Mit einer umfangreichen Spielauswahl, attraktiven Bonusaktionen und einer benutzerfreundlichen Plattform spricht Betano sowohl Casino-Neulinge als auch erfahrene Spieler an. In diesem Test teilen wir unsere aktuellen Betano Casino Erfahrungen aus dem Jahr 2024 und beleuchten, ob der Anbieter seriös ist und deinen individuellen Anforderungen entspricht.";

  const bonusContent = (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        Willkommensbonus: 100% Einzahlungsbonus bis 100€ + 150 Freispiele
      </Typography>

      <Typography variant="body1" paragraph>
        Melde dich jetzt bei Betano an und sichere dir einen 100%
        Einzahlungsbonus bis zu 100€ – verdopple deine erste Einzahlung und
        starte mit mehr Guthaben in die aufregende Casino-Welt! Zusätzlich
        erhältst du als Neukunde bis zu 150 Freispiele für ausgewählte
        Slot-Spiele. Einfach registrieren, Bonus sichern und loslegen!
      </Typography>

      <Typography variant="body1" paragraph>
        Dieser Bonus ermöglicht es dir, deine erste Einzahlung zu verdoppeln und
        zusätzlich zahlreiche Freispiele für ausgewählte Slots zu erhalten -
        perfekt, um direkt ins Spiel einzusteigen und deine Gewinnschancen zu
        maximieren.
      </Typography>

      <Typography variant="h3" component="h3">
        Deine Vorteile auf einen Blick:
      </Typography>

      <List sx={{ pl: 2 }}>
        <ListItem disableGutters>
          <ListItemIcon sx={{ minWidth: "auto", pr: 1 }}>
            <ArrowRightIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1">
                <strong>100% Bonus bis zu 100€</strong> auf deine erste
                Einzahlung
              </Typography>
            }
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemIcon sx={{ minWidth: "auto", pr: 1 }}>
            <ArrowRightIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1">
                <strong>Bis zu 150 Freispiele</strong> für spannende Slot-Spiele
              </Typography>
            }
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemIcon sx={{ minWidth: "auto", pr: 1 }}>
            <ArrowRightIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1">
                <strong>Große Spielauswahl</strong> mit renommierten Anbietern
                wie Play'n'Go & Novomatic
              </Typography>
            }
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemIcon sx={{ minWidth: "auto", pr: 1 }}>
            <ArrowRightIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1">
                <strong>Sichere und schnelle Ein- und Auszahlungen</strong>
              </Typography>
            }
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemIcon sx={{ minWidth: "auto", pr: 1 }}>
            <ArrowRightIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1">
                <strong>Top Casino-Erlebnis</strong> auf allen Geräten
              </Typography>
            }
          />
        </ListItem>
      </List>

      <Typography variant="body1" paragraph>
        <strong>Weitere Bonusangebote:</strong> Betano bietet regelmäßige
        Promotionen für Bestandskunden, darunter Einzahlungsboni, Freispiele,
        Cashback-Angebote und ein umfangreiches Treueprogramm. Diese Vielfalt an
        Bonusangeboten sorgt dafür, dass immer für Abwechslung und zusätzliche
        Gewinnchancen gesorgt ist.
      </Typography>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          href={provider.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            width: { xs: "75%", sm: "auto" },
            maxWidth: { sm: 400 },
            whiteSpace: "normal", // Ermöglicht Zeilenumbruch bei langem Text
          }}
        >
          Jetzt bei Betano anmelden und Bonus sichern!
        </Button>
      </Box>
    </>
  );

  const gamesContent = (
    <>
      <Typography variant="body1" paragraph>
        Das Spielangebot von Betano ist beeindruckend und bietet eine Vielzahl
        an Möglichkeiten für jeden Spielertyp. Mit hunderten Slots von führenden
        Anbietern wie Play’n GO, Novomatic und Gamomat, klassischen Tischspielen
        wie Blackjack und Roulette sowie einem Live-Casino, in dem du gegen
        echte Dealer antreten kannst, kommt jeder auf seine Kosten.
      </Typography>
    </>
  );

  const paymentMethodsContent = (
    <>
      <Typography variant="body1" paragraph>
        Betano bietet eine umfangreiche Auswahl an sicheren und
        benutzerfreundlichen Zahlungsmethoden. Du kannst Einzahlungen über
        Kreditkarten (Visa, Mastercard), E-Wallets (PayPal, Skrill, Neteller),
        Banküberweisungen und Prepaid-Karten (Paysafecard) tätigen. Die
        Einzahlungen sind in der Regel sofort auf deinem Konto verfügbar, und es
        fallen keine Gebühren an.
      </Typography>
      <Typography variant="body1" paragraph>
        Betano überzeugt durch faire Auszahlungsbedingungen. Die
        Umsatzanforderungen beim Bonus sind hoch, was jedoch bei der großzügigen
        Bonusstruktur durch die zahlreichen Promotionen ausgeglichen wird.
        Auszahlungen erfolgen transparent und zügig, sodass du deine Gewinne
        schnell erhältst.
      </Typography>
      <Typography variant="body1" paragraph>
        Auszahlungen erfolgen schnell und zuverlässig innerhalb von 24 bis 48
        Stunden. Die Auswahl bei Auszahlungen ist etwas eingeschränkter, umfasst
        jedoch gängige Methoden wie Visa, Mastercard, Skrill und
        Banküberweisung.
      </Typography>
      <Typography variant="body1" paragraph>
        Zu den verfügbaren Zahlungsmethoden gehören:
      </Typography>
      {/* Die Zahlungsmethoden werden in der Komponente angezeigt */}
    </>
  );

  const customerSupportContent = (
    <>
      <Typography variant="body1" paragraph>
        Der Kundensupport von Betano ist professionell und gut erreichbar. Du
        kannst den Support über Live-Chat, E-Mail und Telefon kontaktieren. Die
        Mitarbeiter sind kompetent und bemüht, deine Anliegen schnell und
        zufriedenstellend zu lösen. Die Reaktionszeiten sind insgesamt gut,
        wobei der Live-Chat die schnellste Option darstellt.
      </Typography>
    </>
  );

  const loyaltyProgramContent = (
    <>
      <Typography variant="body1" paragraph>
        Betano belohnt treue Kunden mit einem umfangreichen Treueprogramm. Für
        jede Spielrunde sammelst du Punkte, die du gegen Gratiswetten, Boni oder
        andere Prämien eintauschen kannst. Je aktiver du bist, desto mehr
        Vorteile kannst du genießen.
      </Typography>
      <Typography variant="body1" paragraph>
        Für besonders aktive Kunden gibt es zudem VIP-Services, die exklusive
        Bonusangebote, persönliche Betreuung durch einen Account Manager und
        Einladungen zu besonderen Events umfassen. Obwohl das Treueprogramm
        bereits viel bietet, gibt es im VIP-Bereich noch Luft nach oben.
      </Typography>
    </>
  );

  const conclusionContent = (
    <>
      <Typography variant="body1" paragraph>
        Unsere Betano Online Casino Erfahrungen aus dem Jahr 2024 zeigen, dass
        es sich um einen seriösen und empfehlenswerten Casino-Anbieter handelt.
        Mit einem attraktiven Willkommensbonus, einer umfangreichen Spielauswahl
        und exzellenten mobilen Lösungen überzeugt Betano sowohl neue als auch
        erfahrene Spieler. Die exklusiven Spiele und das attraktive
        Treueprogramm runden das positive Gesamtbild ab.
      </Typography>

      <Typography variant="body1" paragraph>
        Wenn du auf der Suche nach einem zuverlässigen Online Casino mit
        attraktiven Boni und vielfältigen Spielmöglichkeiten bist, ist Betano
        definitiv eine Top-Wahl.
      </Typography>
    </>
  );

  return (
    <MainLayout>
      <PageHeader
        title={provider.title}
        metaDescription={provider.metaDescription}
        logo={provider.logo}
        ctaLink={provider.ctaLink}
        providerName={provider.name}
      />

      <IntroductionSection
        summary={summary}
        pros={provider.pros}
        cons={provider.cons}
        ratings={provider.ratings}
      />

      <OverviewSection overview={provider.overview} />

      <BonusSection
        bonusContent={bonusContent}
        ratings={provider.ratings}
        bonusDetails={provider.bonus}
      />

      <GamesSection gamesContent={gamesContent} ratings={provider.ratings} />

      <PaymentMethodsSection
        paymentMethodsContent={paymentMethodsContent}
        paymentMethods={provider.paymentMethods}
        ratings={provider.ratings}
      />

      <CustomerSupportSection
        customerSupportContent={customerSupportContent}
        ratings={provider.ratings}
      />

      <LoyaltyProgramSection
        loyaltyProgramContent={loyaltyProgramContent}
        ratings={provider.ratings}
      />

      <ConclusionSection
        conclusionContent={conclusionContent}
        ratings={provider.ratings}
        ctaLink={provider.ctaLink}
        buttonTitle="Jetzt bei Betano anmelden und vom Willkommensbonus profitieren!"
      />

      <FAQSection faqs={provider.faqs} />
    </MainLayout>
  );
};

export default BetanoReview;
