import React from "react";
import {
  Typography,
  Box,
  Button,
  // List,
  // ListItem,
  // ListItemIcon,
  // ListItemText,
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

// import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const HappybetReview = () => {
  const provider = providersData[["happybet"]];

  if (!provider) {
    return <div>Anbieter nicht gefunden</div>;
  }

  const summary = (
    <Typography variant="body1" gutterBottom>
      Willkommen bei Happybet Slots, deinem Tor zu aufregender Spielaction und
      fantastischen Gewinnchancen! Auch wenn Happybet aktuell keine
      Willkommensboni oder Freispiele anbietet, überzeugt dieser Anbieter durch
      sein beeindruckendes Slot-Angebot. Von zeitlosen Klassikern bis hin zu den
      neuesten Blockbustern bietet Happybet eine breite Palette an Spielen, die
      sowohl für Nostalgiker als auch für moderne Slot-Enthusiasten etwas
      bereithält. In unserem ausführlichen Test nehmen wir Happybet unter die
      Lupe und zeigen dir, warum dieses Casino trotz des fehlenden Bonusangebots
      eine attraktive Wahl für Spieler in Deutschland ist.
    </Typography>
  );

  const bonusContent = (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        🎰 Erlebe das ultimative Online-Casino-Erlebnis mit Happybet Slots! 🎰
      </Typography>

      <Typography variant="body1" paragraph>
        Leider bietet Happybet aktuell keinen Willkommensbonus oder Freispiele
        für neue Spieler an. Doch lass dich davon nicht abschrecken! Das Casino
        überzeugt durch sein beeindruckendes Slot-Angebot und die Möglichkeit,
        die meisten Spiele im Demo-Modus auszuprobieren. So kannst du dich ganz
        ohne Risiko mit den verschiedenen Slots vertraut machen und deine
        Favoriten finden. Darüber hinaus bietet Happybet regelmäßige Promotionen
        und Turniere, bei denen du zusätzliche Gewinne und Belohnungen abstauben
        kannst. Schau einfach regelmäßig auf der Aktionsseite vorbei, um keine
        der spannenden Aktionen zu verpassen!
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
          Jetzt bei {provider.name} anmelden!
        </Button>
      </Box>
    </>
  );

  const gamesContent = (
    <>
      <Typography variant="body1" paragraph>
        <strong>Happybet</strong> überzeugt mit einer umfangreichen und
        abwechslungsreichen Spielauswahl, die keine Wünsche offen lässt. Im
        Bereich der <strong>Slots</strong>
        findest du Hunderte von Spielautomaten von führenden Anbietern wie
        NetEnt, Play'n GO, Pragmatic Play, Red Tiger und Novomatic. Von
        klassischen Spielautomaten bis hin zu modernen Video-Slots mit
        beeindruckenden Grafiken und spannenden Bonusfunktionen bietet Happybet
        eine breite Palette an Spielen, die sowohl für Anfänger als auch für
        erfahrene Spieler geeignet sind. Besonders hervorzuheben sind legendäre
        Titel wie <strong>"Book of Ra Deluxe"</strong>,{" "}
        <strong>"El Toro"</strong>, <strong>"Eye of Horus"</strong>,{" "}
        <strong>"Zentaurus"</strong>,<strong>"Fruitinator"</strong> und{" "}
        <strong>"Triple Chance"</strong>. Diese Spiele bieten nicht nur
        ansprechende Grafiken und fesselnde Geschichten, sondern auch zahlreiche
        Gewinnmöglichkeiten und Bonusfunktionen, die jedes Spielerlebnis
        unvergesslich machen.
      </Typography>

      <Typography variant="body1" paragraph>
        Neben den Slots bietet Happybet auch eine Vielzahl an{" "}
        <strong>Tischspielen</strong> wie Blackjack, Roulette und Poker, die für
        Spieler geeignet sind, die ihr strategisches Geschick unter Beweis
        stellen möchten. Das <strong>Live-Casino</strong> von Happybet
        ermöglicht es dir, in Echtzeit mit professionellen Dealern zu spielen
        und die authentische Atmosphäre eines echten Casinos direkt von deinem
        Wohnzimmer aus zu genießen. Für diejenigen, die nach großen Gewinnen
        streben, bietet Happybet eine Auswahl an <strong>Jackpot-Slots</strong>{" "}
        mit progressiven Jackpots, die die Gewinnsummen kontinuierlich erhöhen
        und unglaubliche Auszahlungen ermöglichen.
      </Typography>
    </>
  );

  const customerSupportContent = (
    <>
      <Typography variant="body1" paragraph>
        Der Kundensupport von <strong>Happybet</strong> ist gut strukturiert und
        darauf ausgelegt, dir jederzeit kompetente Hilfe zu bieten. Happybet
        bietet einen <strong>24/7 Kundensupport</strong>, sodass du jederzeit
        Unterstützung erhalten kannst, egal zu welcher Tageszeit. Die
        Erreichbarkeit erfolgt über mehrere Kanäle, darunter{" "}
        <strong>Live-Chat</strong> und <strong>E-Mail</strong>. Der Live-Chat
        ist besonders praktisch, da du sofortige Antworten auf deine Fragen
        erhältst und keine langen Wartezeiten in Kauf nehmen musst. Das
        Support-Team besteht aus gut geschulten und freundlichen Mitarbeitern,
        die dir bei allen Anliegen schnell und effizient weiterhelfen. Egal, ob
        es um technische Probleme, Fragen zu Boni oder Unterstützung bei
        Auszahlungen geht – der Kundensupport von Happybet steht dir stets zur
        Seite. Obwohl der <strong>telefonische Kundensupport</strong> derzeit
        nicht verfügbar ist, stellt die Kombination aus Live-Chat und E-Mail
        sicher, dass du dennoch umfassend unterstützt wirst.
      </Typography>
    </>
  );

  const loyaltyProgramContent = (
    <>
      <Typography variant="body1" paragraph>
        <strong>Happybet</strong> belohnt seine treuen Spieler mit einem
        attraktiven Treueprogramm, das zahlreiche Vorteile bietet. Das
        Treueprogramm ist in verschiedene <strong>VIP-Level</strong> unterteilt,
        die jeweils exklusive Belohnungen und Vorteile bieten. Je mehr du
        spielst, desto höher steigt dein VIP-Level und desto besser werden die
        Angebote. Als VIP-Spieler erhältst du
        <strong>persönliche Boni</strong>, spezielle Promotions und
        maßgeschneiderte Angebote, die auf deine Spielgewohnheiten abgestimmt
        sind. Zusätzlich bietet das Treueprogramm regelmäßige{" "}
        <strong>Prämien</strong> und <strong>Cashback-Angebote</strong>, die
        dafür sorgen, dass deine Treue stets belohnt wird und dein Spielerlebnis
        noch lohnenswerter wird. Das Treueprogramm von Happybet ist ideal für
        Spieler, die regelmäßig spielen und von zusätzlichen Vorteilen
        profitieren möchten. Es schafft eine loyale Spielerbasis und sorgt
        dafür, dass sich Stammkunden besonders geschätzt fühlen.
      </Typography>
    </>
  );

  const paymentMethodsContent = (
    <>
      <Typography variant="body1" paragraph>
        <strong>Happybet</strong> legt großen Wert auf faire und transparente
        Auszahlungsbedingungen, um ein vertrauenswürdiges Spielerlebnis zu
        gewährleisten. Die <strong>Umsatzbedingungen</strong> sind klar und fair
        gestaltet, was eine ausgewogene Balance zwischen Spielerfreundlichkeit
        und Casino-Schutz bietet. Dies bedeutet, dass du den Bonusbetrag 35-mal
        umsetzen musst, bevor eine Auszahlung möglich ist. Die{" "}
        <strong>Auszahlungszeiten</strong>
        bei Happybet sind äußerst schnell, da die meisten Auszahlungen innerhalb
        weniger Stunden bearbeitet werden. Dadurch erhältst du deine Gewinne
        zügig und ohne lange Wartezeiten. Alle Bedingungen sind klar und
        verständlich formuliert, ohne versteckte Klauseln. Dadurch weißt du
        immer genau, worauf du dich einlässt und welche Anforderungen erfüllt
        werden müssen.
      </Typography>

      <Typography variant="body1" paragraph>
        Zahlungsarten umfassen eine breite Palette an sicheren und zuverlässigen
        Zahlungsmethoden, die schnelle Transaktionen ohne versteckte Gebühren
        gewährleisten. Zu den verfügbaren Zahlungsmethoden gehören:
      </Typography>

      <Typography variant="body1" paragraph>
        Zu den verfügbaren Zahlungsmethoden gehören:
      </Typography>
    </>
  );

  const conclusionContent = (
    <>
      <Typography variant="body1" paragraph>
        <strong>Happybet Slots</strong> ist eine ausgezeichnete Wahl für alle,
        die ein sicheres, vielfältiges und benutzerfreundliches Online-Casino
        suchen. Trotz des aktuell fehlenden Bonusangebots überzeugt Happybet
        durch eine beeindruckende Spielauswahl, die von klassischen Slots bis
        hin zu modernen Video-Slots reicht. Die{" "}
        <strong>benutzerfreundliche Mobile App</strong>
        ermöglicht es dir, jederzeit und überall zu spielen, während innovative
        Funktionen wie <strong>Turbo Spins</strong>, <strong>Autoplay</strong>{" "}
        und die <strong>Cash-Out-Funktion</strong> dir mehr Kontrolle und
        Flexibilität über dein Spielerlebnis bieten. Der zuverlässige
        Kundensupport und das attraktive Treueprogramm runden das Angebot ab und
        sorgen dafür, dass sich Stammkunden besonders geschätzt fühlen. Obwohl
        der <strong>telefonische Kundensupport</strong> derzeit nicht verfügbar
        ist und die <strong>Auswahl bei Auszahlungsmethoden</strong> noch
        ausgebaut werden könnte, bietet Happybet ein rundum gelungenes
        Casino-Erlebnis, das durch seine Seriosität, Sicherheit und
        Spielqualität besticht. Ob du nun auf der Suche nach klassischen Slots,
        modernen Video-Slots oder spannenden Live-Casino-Spielen bist – bei
        Happybet findest du garantiert das passende Angebot.
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
        buttonTitle="Jetzt bei Happybet anmelden!"
      />

      <FAQSection faqs={provider.faqs} />
    </MainLayout>
  );
};

export default HappybetReview;
