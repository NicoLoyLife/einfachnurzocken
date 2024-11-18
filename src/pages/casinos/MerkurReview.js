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

const MerkurReview = () => {
  const provider = providersData[["merkur"]];

  if (!provider) {
    return <div>Anbieter nicht gefunden</div>;
  }

  const summary = (
    <Typography variant="body1" gutterBottom>
      Bist du bereit für aufregende Spielaction und fantastische Gewinne? Dann
      melde dich jetzt bei unserem Top-Online-Casino an und sichere dir{" "}
      <strong>50 Freispiele ohne Einzahlung</strong>! Ja, du hast richtig gehört
      – einfach anmelden und losspielen, ohne einen Cent zu investieren. In
      unserem ausführlichen Test erfährst du alles, was du über Merkur Slots
      wissen musst – von den attraktiven Bonusangeboten bis hin zur
      umfangreichen Spielauswahl.
    </Typography>
  );

  const bonusContent = (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        🎰 Erlebe das ultimative Online-Casino-Erlebnis mit Merkur Slots! 🎰
      </Typography>
      <Typography variant="body1" paragraph>
        Merkur bietet neuen Kunden einen großzügigen Willkommensbonus, der einen
        optimalen Start in die Welt der Online-Casinos ermöglicht. Du erhältst{" "}
        <strong>50 Freispiele ohne Einzahlung</strong>, die es dir erlauben, die
        Slots von Merkur ohne eigenes Risiko auszuprobieren. Darüber hinaus
        verdoppelt der <strong>100% Bonus bis zu 50€</strong> deine erste
        Einzahlung, wodurch dein Spielguthaben effektiv erhöht wird. Zusätzlich
        erhältst du <strong>50 weitere Freispiele</strong>, die dir noch mehr
        Spielspaß und Gewinnmöglichkeiten bieten. Diese großzügigen
        Bonusangebote sorgen dafür, dass du mit einem starken Start ins
        Spielgeschehen eintauchst und deine Gewinnchancen von Anfang an
        maximierst.
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
                <strong>50 Freispiele ohne Einzahlung</strong> - starte sofort
                ins Vergnügen!
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
                <strong>100% Bonus bis zu 50€</strong> auf deine erste
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
                <strong>50 zusätzliche Freispiele</strong> mit deiner ersten
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
                <strong>Große Spielauswahl</strong> mit renommierten Anbietern
                wie Merkur, Play'n'GO & Pragmatic Play
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
        Dieser Willkommensbonus ermöglicht es dir, deine erste Einzahlung zu
        verdoppeln und zusätzlich zahlreiche Freispiele für ausgewählte Slots zu
        erhalten. Die <strong>50 Freispiele ohne Einzahlung</strong> bieten dir
        die Möglichkeit, die beliebten Spiele von Merkur risikofrei
        kennenzulernen. Mit den <strong>50 zusätzlichen Freispielen</strong>{" "}
        nach deiner Einzahlung kannst du das erhöhte Guthaben optimal nutzen und
        deine Gewinnchancen weiter steigern. Die Umsatzbedingungen von 35x sind
        branchenüblich und stellen eine ausgewogene Balance zwischen
        Spielerfreundlichkeit und Casino-Schutz dar. Der Zeitraum von 30 Tagen
        gibt dir ausreichend Zeit, die Bonusbedingungen zu erfüllen und die
        vielfältigen Spiele von Merkur in vollen Zügen zu genießen.
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
          Jetzt bei {provider.name} anmelden und Bonus sichern!
        </Button>
      </Box>
    </>
  );

  const gamesContent = (
    <>
      <Typography variant="body1" paragraph>
        <strong>Merkur</strong> überzeugt mit einer umfangreichen und
        abwechslungsreichen Spielauswahl, die keine Wünsche offen lässt. Im
        Bereich der <strong>Slots</strong> findest du Hunderte von
        Spielautomaten von führenden Anbietern wie Merkur selbst, Play'n'GO,
        Pragmatic Play, Red Tiger und Novomatic. Von klassischen Spielautomaten
        bis hin zu modernen Video-Slots mit beeindruckenden Grafiken und
        spannenden Bonusfunktionen bietet Merkur eine breite Palette an Spielen,
        die sowohl für Anfänger als auch für erfahrene Spieler geeignet sind.
        Besonders hervorzuheben sind legendäre Titel wie{" "}
        <strong>"Book of Ra Deluxe"</strong>, <strong>"El Toro"</strong>,{" "}
        <strong>"Eye of Horus"</strong>,<strong>"Zentaurus"</strong>,{" "}
        <strong>"Fruitinator"</strong> und <strong>"Triple Chance"</strong>, die
        für endlosen Spielspaß und zahlreiche Gewinnmöglichkeiten sorgen.
      </Typography>

      <Typography variant="body1" paragraph>
        Neben den Slots bietet Merkur auch eine Vielzahl an{" "}
        <strong>Tischspielen</strong> wie Blackjack, Roulette und Poker, die für
        Spieler geeignet sind, die ihr strategisches Geschick unter Beweis
        stellen möchten. Das <strong>Live-Casino</strong> von Merkur ermöglicht
        es dir, in Echtzeit mit professionellen Dealern zu spielen und die
        authentische Atmosphäre eines echten Casinos direkt von deinem
        Wohnzimmer aus zu genießen. Für diejenigen, die nach großen Gewinnen
        streben, bietet Merkur eine Auswahl an <strong>Jackpot-Slots</strong>{" "}
        mit progressiven Jackpots, die die Gewinnsummen kontinuierlich erhöhen
        und unglaubliche Auszahlungen ermöglichen.
      </Typography>
    </>
  );

  const paymentMethodsContent = (
    <>
      <Typography variant="body1" paragraph>
        <strong>Merkur</strong> legt großen Wert auf faire und transparente
        Auszahlungsbedingungen, um ein vertrauenswürdiges Spielerlebnis zu
        gewährleisten. Die <strong>Umsatzbedingungen</strong> von 35x Bonus sind
        branchenüblich und bieten eine ausgewogene Balance zwischen
        Spielerfreundlichkeit und Casino-Schutz. Dies bedeutet, dass du den
        Bonusbetrag 35-mal umsetzen musst, bevor eine Auszahlung möglich ist.
        Die <strong>Auszahlungszeiten</strong> bei Merkur sind äußerst schnell,
        da die meisten Auszahlungen innerhalb weniger Stunden bearbeitet werden.
        Dadurch erhältst du deine Gewinne zügig und ohne lange Wartezeiten. Alle
        Bedingungen sind klar und verständlich formuliert, ohne versteckte
        Klauseln. Dadurch weißt du immer genau, worauf du dich einlässt und
        welche Anforderungen erfüllt werden müssen.
      </Typography>

      <Typography variant="body1" paragraph>
        Zu den verfügbaren Zahlungsmethoden gehören:
      </Typography>
    </>
  );

  const customerSupportContent = (
    <>
      <Typography variant="body1" paragraph>
        Der Kundensupport von <strong>Merkur</strong> ist gut strukturiert und
        darauf ausgelegt, dir jederzeit kompetente Hilfe zu bieten. Der Support
        ist rund um die Uhr verfügbar, sodass du jederzeit Unterstützung
        erhalten kannst, egal zu welcher Tageszeit. Die Erreichbarkeit erfolgt
        über mehrere Kanäle, darunter <strong>Live-Chat</strong> und{" "}
        <strong>E-Mail</strong>. Der Live-Chat ist besonders praktisch, da du
        sofortige Antworten auf deine Fragen erhältst und keine langen
        Wartezeiten in Kauf nehmen musst. Das Support-Team besteht aus gut
        geschulten und freundlichen Mitarbeitern, die dir bei allen Anliegen
        schnell und effizient weiterhelfen. Egal, ob es um technische Probleme,
        Fragen zu Boni oder Unterstützung bei Auszahlungen geht – der
        Kundensupport von Merkur steht dir stets zur Seite. Obwohl der
        <strong>telefonische Kundensupport</strong> derzeit nicht verfügbar ist,
        stellt die Kombination aus Live-Chat und E-Mail sicher, dass du dennoch
        umfassend unterstützt wirst.
      </Typography>
    </>
  );

  const loyaltyProgramContent = (
    <>
      <Typography variant="body1" paragraph>
        <strong>Merkur</strong> belohnt seine treuen Spieler mit einem
        attraktiven Treueprogramm, das zahlreiche Vorteile bietet. Das
        Treueprogramm ist in verschiedene
        <strong>VIP-Level</strong> unterteilt, die jeweils exklusive Belohnungen
        und Vorteile bieten. Je mehr du spielst, desto höher steigt dein
        VIP-Level und desto besser werden die Angebote. Als VIP-Spieler erhältst
        du <strong>persönliche Boni</strong>, spezielle Promotions und
        maßgeschneiderte Angebote, die auf deine Spielgewohnheiten abgestimmt
        sind. Zusätzlich bietet das Treueprogramm regelmäßige{" "}
        <strong>Prämien</strong> und <strong>Cashback-Angebote</strong>, die
        dafür sorgen, dass deine Treue stets belohnt wird und dein Spielerlebnis
        noch lohnenswerter wird. Das Treueprogramm von Merkur ist ideal für
        Spieler, die regelmäßig spielen und von zusätzlichen Vorteilen
        profitieren möchten. Es schafft eine loyale Spielerbasis und sorgt
        dafür, dass sich Stammkunden besonders geschätzt fühlen.
      </Typography>
    </>
  );

  const conclusionContent = (
    <>
      <Typography variant="body1" paragraph>
        <strong>Merkur Slots</strong> ist eine ausgezeichnete Wahl für alle, die
        ein sicheres, vielfältiges und benutzerfreundliches Online-Casino
        suchen. Mit einem großzügigen Willkommensbonus, einer beeindruckenden
        Spielauswahl und einem zuverlässigen Kundensupport überzeugt Merkur auf
        ganzer Linie. Besonders die{" "}
        <strong>benutzerfreundliche Mobile App</strong> und die
        <strong>innovativen Funktionen</strong> wie Turbo Spins und die
        Cash-Out-Funktion bieten ein herausragendes Spielerlebnis, das sowohl
        für neue als auch für erfahrene Spieler attraktiv ist. Trotz kleinerer
        Nachteile wie der fehlenden telefonischen Unterstützung und der
        begrenzten Auswahl bei Auszahlungsmethoden bietet Merkur ein rundum
        gelungenes Casino-Erlebnis, das durch seine Seriosität, Sicherheit und
        Spielqualität besticht. Ob du nun auf der Suche nach klassischen Slots,
        modernen Video-Slots oder spannenden Live-Casino-Spielen bist – bei
        Merkur findest du garantiert das passende Angebot.
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

export default MerkurReview;
