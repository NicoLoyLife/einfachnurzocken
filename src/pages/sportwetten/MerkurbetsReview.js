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
import { sportsbettingProvidersData } from "../../services/providersData";
import MainLayout from "../../components/layout/MainLayout";
import PageHeader from "../../components/sportsbetting/providers/PageHeader";
import IntroductionSection from "../../components/sportsbetting/providers/IntroductionSection";
import OverviewSection from "../../components/sportsbetting/providers/OverviewSection";
import BonusSection from "../../components/sportsbetting/providers/BonusSection";
import OddsSection from "../../components/sportsbetting/providers/OddsSection";
import SportsOfferSection from "../../components/sportsbetting/providers/SportsOfferSection";
import PaymentMethodsSection from "../../components/sportsbetting/providers/PaymentMethodsSection";
import CustomerSupportSection from "../../components/sportsbetting/providers/CustomerSupportSection";
import TaxFeesSection from "../../components/sportsbetting/providers/TaxFeesSection";
import MobileAppSection from "../../components/sportsbetting/providers/MobileAppSection";
import LoyaltyProgramSection from "../../components/sportsbetting/providers/LoyaltyProgramSection";
import CashOutSection from "../../components/sportsbetting/providers/CashOutSection";
import ConclusionSection from "../../components/sportsbetting/providers/ConclusionSection";
import FAQSection from "../../components/sportsbetting/providers/FAQSection";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const MerkurbetsReview = () => {
  const provider = sportsbettingProvidersData[["merkurbets"]];

  if (!provider) {
    return <div>Anbieter nicht gefunden</div>;
  }
  const summary = (
    <>
      <Typography variant="body1" gutterBottom>
        Merkur Bets hat sich seit seiner Gründung im Jahr 2016 als
        vertrauenswürdiger und innovativer Sportwetten-Anbieter in Deutschland
        etabliert. Als Teil der renommierten Gauselmann Gruppe, einem deutschen
        Traditionsunternehmen mit jahrzehntelanger Erfahrung in der
        Glücksspielbranche, steht Merkur Bets für Qualität und Zuverlässigkeit.
        Mit einem attraktiven Willkommensangebot, einem breiten Wettangebot und
        zahlreichen exklusiven Features richtet sich Merkur Bets sowohl an
        Neueinsteiger als auch an erfahrene Wettfreunde. In diesem Test teilen
        wir unsere aktuellen Merkur Bets Erfahrungen aus dem Jahr 2024 und
        beleuchten, ob der Anbieter seriös ist und deinen individuellen
        Anforderungen entspricht.
      </Typography>
    </>
  );

  const bonusContent = (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        25€ Freiwette ab 1€ Einzahlung + 100% Cashback bis zu 75€ als Freiwette
      </Typography>
      <Typography variant="body1" paragraph>
        Merkur Bets begrüßt neue Kunden mit einem exklusiven Willkommensangebot,
        das keine Wünsche offenlässt. Erhalte einen 100% 3er-Kombi Cashback bis
        zu 75€ sowie eine 25€ Gratiswette ab einer Einzahlung von nur 1€. Dieses
        attraktive Paket ermöglicht es dir, mit einem größeren Wettguthaben zu
        starten und deine ersten Wetten risikofrei auszuprobieren.
      </Typography>
      <Typography variant="body1" paragraph>
        Du musst lediglich eine Mindesteinzahlung von 10€ tätigen, um den Bonus
        zu aktivieren. Sollte deine erste 3er-Kombiwette nicht erfolgreich sein,
        erhältst du bis zu 75€ Cashback als Freebet. Zusätzlich steht dir die
        25€ Gratiswette zur Verfügung, die du ab 1€ Einzahlung nutzen kannst.
        Dieses Angebot ist einmalig pro Haushalt und innerhalb von 7 Tagen nach
        Gutschrift gültig.
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
                25€ Freebet ab einer Einzahlung von nur 1€ – starte sofort ohne
                eigenes Risiko.
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
                100% 3er-Kombi Cashback bis zu 75€ – sichere dir bis zu 75€
                Cashback bei deiner ersten 3er-Kombiwette.
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
                Keine Wettsteuer – Merkur Bets übernimmt die Wettsteuer, sodass
                du deine Gewinne in voller Höhe erhältst.
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
                Quickbet – platziere deine Wetten blitzschnell, ideal für
                Live-Wetten.
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
                Kombi Boost – sichere dir bis zu 30% zusätzlichen Gewinn bei
                erfolgreichen Kombiwetten.
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
                Bet Builder – erstelle individuelle Wetten nach deinen
                Vorlieben.
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
                Mobile App – bequem von unterwegs wetten und keine Chance
                verpassen.
              </Typography>
            }
          />
        </ListItem>
      </List>

      <Typography variant="body1" paragraph>
        Verpasse nicht die Chance, deine erste Einzahlung zu maximieren und mit
        einem satten Bonus durchzustarten!
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
          Jetzt bei Merkur Bets anmelden und Bonus kassieren!
        </Button>
      </Box>
    </>
  );

  const oddsContent = (
    <>
      <Typography variant="body1" paragraph>
        Merkur Bets überzeugt durch attraktive Wettquoten, die im Vergleich zum
        Markt wettbewerbsfähig sind. Besonders bei populären Sportarten wie
        Fußball, Tennis und Basketball bietet der Anbieter Quoten, die oft über
        dem Branchendurchschnitt liegen. Der durchschnittliche Quotenschlüssel
        liegt bei etwa 95% bis 96%, was ein gutes Preis-Leistungs-Verhältnis
        darstellt.
      </Typography>
      <Typography variant="body1" paragraph>
        Durch die Übernahme der Wettsteuer profitierst du zusätzlich, da deine
        Gewinne nicht durch Abzüge gemindert werden. Unsere Erfahrungen zeigen,
        dass Merkur Bets insbesondere bei Top-Events und in den großen
        europäischen Fußballligen sehr gute Quoten anbietet. Auch bei
        Live-Wetten bleiben die Quoten stabil und passen sich dynamisch dem
        Spielverlauf an, was besonders für Wettfreunde von Vorteil ist, die in
        Echtzeit auf Entwicklungen reagieren möchten.
      </Typography>
    </>
  );

  const sportsOfferContent = (
    <>
      <Typography variant="body1" paragraph>
        Das Wettangebot von Merkur Bets ist umfangreich und deckt eine breite
        Palette von Sportarten und Events ab. Neben den gängigen Sportarten wie
        Fußball, Basketball, Tennis und Eishockey findest du auch Wetten auf
        Nischensportarten wie Darts, Snooker und E-Sports.
      </Typography>
      <Typography variant="h3" component="h3">
        Highlights des Wettangebots:
      </Typography>

      <List sx={{ pl: 2 }}>
        <ListItem disableGutters>
          <ListItemIcon sx={{ minWidth: "auto", pr: 1 }}>
            <ArrowRightIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1">
                <strong>Betbuilder:</strong> Mit dieser Funktion kannst du
                verschiedene Wettmärkte innerhalb eines Spiels kombinieren und
                so deine individuelle Wunschwette erstellen. Dies ermöglicht es
                dir, komplexe Wettstrategien zu verfolgen und maßgeschneiderte
                Wetten zu platzieren.
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
                <strong>Quickbet:</strong> Die Quickbet-Funktion erlaubt es dir,
                Wetten in Sekundenschnelle zu platzieren, was besonders bei
                Livewetten von Vorteil ist. So kannst du schnell auf neue
                Entwicklungen reagieren und keine Wettchancen verpassen.
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
                <strong>Kombi Boost:</strong> Sichere dir bis zu 30%
                zusätzlichen Gewinn bei erfolgreichen Kombiwetten. Je mehr
                Auswahlen du kombinierst, desto höher fällt dein Bonus aus, was
                deine Gewinnchancen erheblich steigert.
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
                <strong>Livewetten:</strong> Ein umfangreiches
                Livewetten-Programm ermöglicht es dir, in Echtzeit auf laufende
                Spiele zu wetten und von dynamischen Quoten zu profitieren.
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
                <strong>Spezialwetten:</strong> Neben klassischen Wettmärkten
                bietet Merkur Bets eine Vielzahl von Spezialwetten,
                beispielsweise auf Spielerleistungen, Eckbälle oder Karten.
              </Typography>
            }
          />
        </ListItem>
      </List>

      <Typography variant="body1" paragraph>
        Die Plattform ist übersichtlich gestaltet, sodass du schnell die
        gewünschten Wetten findest. Die Kombination aus breitem Angebot und
        innovativen Funktionen wie dem Bet Builder und Quickbet macht das
        Wett-Erlebnis bei Merkur Bets besonders attraktiv.
      </Typography>
    </>
  );

  const paymentMethodsContent = (
    <>
      <Typography variant="body1" paragraph>
        Merkur Bets legt großen Wert auf sichere und schnelle Transaktionen.
      </Typography>
      <Typography variant="body1" paragraph>
        Einzahlungen sind in der Regel sofort verfügbar und gebührenfrei.
        Auszahlungen werden zügig bearbeitet, meistens innerhalb von 24 bis 48
        Stunden. Auch hier fallen keine Gebühren an, was einen weiteren
        positiven Aspekt darstellt. Die Vielfalt der Zahlungsmethoden bietet dir
        Flexibilität und Komfort bei der Kontoverwaltung.
      </Typography>
      <Typography variant="h3" component="h3">
        Zu den verfügbaren Zahlungsmethoden gehören:
      </Typography>
      {/* Die Zahlungsmethoden werden in der Komponente angezeigt */}
    </>
  );

  const customerSupportContent = (
    <>
      <Typography variant="body1" paragraph>
        Der Kundensupport von Merkur Bets ist professionell und gut erreichbar.
        Täglich von 8:00 bis 24:00 Uhr bietet er schnelle Hilfe bei dringenden
        Anliegen.
      </Typography>
      <Typography variant="body1" paragraph>
        Die Mitarbeiter sind freundlich, kompetent und bemüht, deine Anliegen
        schnell zu lösen. Die Reaktionszeiten sind insgesamt gut, insbesondere
        der Live-Chat bietet schnelle Hilfe. Umfangreiche FAQs auf der Webseite
        beantworten zudem viele Fragen im Vorfeld und entlasten den Support.
      </Typography>
    </>
  );

  const taxFeesContent = (
    <>
      <Typography variant="body1" paragraph>
        Ein großer Vorteil bei Merkur Bets ist die Übernahme der Wettsteuer. Die
        gesetzliche Wettsteuer von 5% wird vollständig vom Anbieter getragen,
        sodass du deine Gewinne in voller Höhe erhältst. Das bedeutet, dass
        weder dein Einsatz noch dein Gewinn durch die Wettsteuer gemindert
        werden.
      </Typography>
      <Typography variant="h3" component="h3">
        Beispielrechnung:
      </Typography>

      <List sx={{ pl: 2 }}>
        <ListItem disableGutters>
          <ListItemIcon sx={{ minWidth: "auto", pr: 1 }}>
            <ArrowRightIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1">
                <strong>Einsatz:</strong> 100€ auf eine Quote von 2,0
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
                <strong>Bruttogewinn:</strong> 200€
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
                <strong>Abzug Wettsteuer:</strong> 0€ (da die Wettsteuer
                übernommen wird)
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
                <strong>Nettogewinn:</strong> 200€
              </Typography>
            }
          />
        </ListItem>
      </List>

      <Typography variant="body1" paragraph>
        Ein- und Auszahlungen sind gebührenfrei, was das Wetterlebnis zusätzlich
        positiv beeinflusst. Durch die Übernahme der Wettsteuer steigert Merkur
        Bets deine Gewinnchancen und bietet einen klaren Vorteil gegenüber
        vielen Konkurrenten.
      </Typography>
    </>
  );

  const mobileAppContent = (
    <>
      <Typography variant="body1" paragraph>
        Die Mobile App von Merkur Bets ist benutzerfreundlich und bietet alle
        Funktionen der Desktop-Version. Sie ist für iOS und Android verfügbar
        und ermöglicht es dir, jederzeit und überall Wetten zu platzieren. Die
        App überzeugt durch ein klares Design, schnelle Ladezeiten und eine
        intuitive Navigation.
      </Typography>
      {/* Optionaler Screenshot der App */}
      {/* <Box sx={{ textAlign: 'center', my: 4 }}>
        <img
          src={appScreenshot}
          alt="Happybet Mobile App Screenshot"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Box> */}
      <Typography variant="body1" paragraph>
        Besonders praktisch ist die Quickbet-Funktion, die es dir erlaubt,
        Wetten blitzschnell zu platzieren, ideal für Livewetten. Auch der Bet
        Builder ist in der App vollständig integriert, sodass du deine
        individuellen Wetten bequem von unterwegs erstellen kannst. Zudem
        ermöglicht die Kombi Boost-Funktion, bis zu 30% zusätzlichen Gewinn auf
        Kombiwetten zu sichern.
      </Typography>
      <Typography variant="body1" paragraph>
        Die mobile Webseite ist ebenfalls gut optimiert und bietet eine
        hervorragende Alternative für Nutzer, die keine App installieren
        möchten. Die Navigation ist intuitiv, und die Ladezeiten sind kurz, was
        ein reibungsloses mobiles Wetterlebnis garantiert.
      </Typography>
    </>
  );

  const loyaltyProgramContent = (
    <>
      <Typography variant="body1" paragraph>
        Merkur Bets bietet ein Treueprogramm, bei dem du durch regelmäßiges
        Wetten Punkte sammelst. Diese Punkte kannst du gegen Bonusguthaben,
        Gratiswetten oder andere Prämien eintauschen. Zudem gibt es regelmäßige
        Promotionen und spezielle Aktionen für Bestandskunden, die dir
        zusätzliche Gewinnchancen bieten.
      </Typography>
      <Typography variant="body1" paragraph>
        Ein besonderes Highlight ist die 3er-Kombi-Versicherung. Sollte deine
        erste 3er-Kombiwette nicht erfolgreich sein, erhältst du bis zu 75€
        Cashback als Freebet. Dieses Feature minimiert dein Risiko und erhöht
        deine Gewinnchancen bei Kombiwetten erheblich.
      </Typography>
      <Typography variant="body1" paragraph>
        VIP-Services wie persönliche Betreuung oder exklusive Events sind
        derzeit nicht ausdrücklich beworben, könnten aber für besonders aktive
        Kunden verfügbar sein. Insgesamt bietet das Treueprogramm und die
        VIP-Services einen guten Mehrwert für Stammkunden.
      </Typography>
    </>
  );

  const cashOutContent = (
    <>
      <Typography variant="body1" paragraph>
        Die Cash-Out-Funktion ist bei Merkur Bets verfügbar und bietet dir mehr
        Kontrolle über deine Wetten. Du kannst deine Wetten vorzeitig auszahlen
        lassen, um Gewinne zu sichern oder Verluste zu minimieren. Dies ist
        sowohl für Einzel- als auch für Kombiwetten möglich.
      </Typography>
      <Typography variant="body1" paragraph>
        Allerdings sind teilweiser oder automatischer Cash-Out derzeit nicht
        verfügbar, was die Flexibilität etwas einschränkt. Trotzdem ist die
        vorhandene Cash-Out-Funktion ein nützliches Feature, das dein
        Wetterlebnis bereichert und dir erlaubt, schneller auf Veränderungen im
        Spielverlauf zu reagieren.
      </Typography>
    </>
  );

  const conclusionContent = (
    <>
      <Typography variant="body1" paragraph>
        Unsere Merkur Bets Erfahrungen aus dem Jahr 2024 zeigen, dass es sich um
        einen seriösen und äußerst attraktiven Sportwetten-Anbieter handelt. Die
        Kombination aus 25€ Freiwette ab 1€ Einzahlung, der Übernahme der
        Wettsteuer und innovativen Funktionen wie Quickbet und Bet Builder
        machen Merkur Bets zu einer ausgezeichneten Wahl für Wettfreunde.
      </Typography>
      <Typography variant="body1" paragraph>
        Das großzügige Willkommensangebot, das umfangreiche Wettangebot und die
        benutzerfreundliche Mobile App sorgen für ein rundum gelungenes
        Wett-Erlebnis. Zudem bieten die exklusiven Features wie Kombi Boost und
        die 3er-Kombi-Versicherung zusätzliche Vorteile, die deine Wettchancen
        erheblich steigern. Trotz einiger kleinerer Nachteile überwiegen die
        Vorteile bei Weitem und machen Merkur Bets zu einer empfehlenswerten
        Wahl für alle, die auf der Suche nach einem zuverlässigen und
        innovativen Wettanbieter sind.
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

      <OverviewSection
        overview={provider.overview}
        ctaLink={provider.ctaLink}
      />

      <BonusSection
        bonusContent={bonusContent}
        ratings={provider.ratings}
        bonusDetails={provider.bonus}
      />

      <OddsSection oddsContent={oddsContent} ratings={provider.ratings} />

      <SportsOfferSection
        sportsOfferContent={sportsOfferContent}
        ratings={provider.ratings}
      />

      <PaymentMethodsSection
        paymentMethodsContent={paymentMethodsContent}
        paymentMethods={provider.paymentMethods}
        ratings={provider.ratings}
      />

      <CustomerSupportSection
        customerSupportContent={customerSupportContent}
        ratings={provider.ratings}
      />

      <TaxFeesSection
        taxFeesContent={taxFeesContent}
        ratings={provider.ratings}
      />

      <MobileAppSection
        mobileAppContent={mobileAppContent}
        ratings={provider.ratings}
      />

      <LoyaltyProgramSection
        loyaltyProgramContent={loyaltyProgramContent}
        ratings={provider.ratings}
      />

      <CashOutSection
        cashOutContent={cashOutContent}
        ratings={provider.ratings}
      />

      <ConclusionSection
        conclusionContent={conclusionContent}
        ratings={provider.ratings}
        ctaLink={provider.ctaLink}
        buttonTitle="Jetzt bei Merkur Bets anmelden und vom exklusiven Willkommensangebot profitieren!"
      />

      <FAQSection faqs={provider.faqs} />
    </MainLayout>
  );
};

export default MerkurbetsReview;
