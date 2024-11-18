import React from "react";
import { Typography, Box, Button } from "@mui/material";
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
import CustomList from "../../components/common/CustomList";

const BingBongReview = () => {
  const provider = providersData[["bingBong"]];

  if (!provider) {
    return <div>Anbieter nicht gefunden</div>;
  }

  const summary = (
    <>
      <Typography variant="body1" gutterBottom>
        Willkommen bei Bing Bong, der führenden Online-Spielothek mit einer
        deutschen Lizenz, erstklassigem Spielangebot und attraktiven
        Bonusaktionen. Ob du ein erfahrener Spieler oder ein Neuling bist, Bing
        Bong bietet dir alles, was du für ein erstklassiges Spielerlebnis
        brauchst. Von Klassikern wie Book of Ra Deluxe bis hin zu modernen Slots
        wie Sweet Bonanza – hier findest du eine große Auswahl an Spielen,
        kombiniert mit einem sicheren und benutzerfreundlichen Umfeld.
      </Typography>
    </>
  );

  const bonusContent = (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        50 Freispiele + 100€ Einzahlungsbonus (100%)
      </Typography>

      <Typography variant="body1" paragraph>
        Bing Bong begeistert mit einem attraktiven Willkommensbonus, der
        besonders für neue Spieler ideal ist. Die Bedingungen sind fair, und der
        Bonus bietet eine hervorragende Möglichkeit, das vielfältige
        Spielangebot auszuprobieren.
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

      <CustomList
        listItems={[
          "50 Freispiele für Book of Ra Deluxe",
          "100€ Bonus (100%)",
          "Mindestumsatz: 35x Bonusbetrag",
          "Mindesteinzahlung: nur 1€",
        ]}
      />

      <Typography variant="h3" component="h3">
        Zusätzlich gibt es zahlreiche wöchentliche Aktionen:
      </Typography>

      <CustomList
        listItems={[
          "Free Spin Monday: 5 Freispiele ohne EInzahlung für den Slot der Woche",
          "Drops & Wins: Tägliche Cash-Preise an ausgewählten Slots",
          "Freispiele-Wochenenden: Bis zu 150 Freispiele für regelmäßige Einzahlungen",
        ]}
      />

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
          Jetzt bei Bing Bong anmelden und Bonus sichern!
        </Button>
      </Box>
    </>
  );

  const gamesContent = (
    <>
      <Typography variant="body1" paragraph>
        Das Herzstück von Bing Bong ist die beeindruckende Spielauswahl, die
        sowohl Klassiker als auch moderne Highlights umfasst. Insgesamt stehen
        mehr als 650 Spiele zur Verfügung, die von renommierten Entwicklern wie
        Merkur, Novomatic, Gamomat und Pragmatic Play bereitgestellt werden.
      </Typography>

      <Typography variant="h3" component="h3">
        Beliebte Slots bei Bing Bong:
      </Typography>

      <CustomList
        listItems={[
          "Book of Ra Deluxe: Der Klassiker von Novomatic entführt dich ins alte Ägypten.",
          "El Torero: Tauche ein in die spannende Welt spanischer Stierkämpfe.",
          "Eye of Horus: Erkunde antike Schätze und genieße mystischen Nervenkitzel.",
          "Sweet Bonanza: Ein moderner Slot mit süßem Thema und aufregenden Features.",
        ]}
      />

      <Typography variant="body1" paragraph>
        Die Spiele werden regelmäßig aktualisiert, sodass dir immer neue Titel
        zur Verfügung stehen.
      </Typography>
    </>
  );

  const paymentMethodsContent = (
    <>
      <Typography variant="body1" paragraph>
        Bing Bong setzt auf sichere und bewährte Zahlungsmethoden, die eine
        schnelle und unkomplizierte Abwicklung garantieren.
      </Typography>

      <Typography variant="body1" paragraph>
        Zu den verfügbaren Zahlungsmethoden gehören:
      </Typography>
      {/* Die Zahlungsmethoden werden in der Komponente angezeigt */}

      <Typography variant="body1" paragraph>
        <strong>Hervorzuheben ist die Blitz-Auszahlung:</strong> Gewinne können
        innerhalb von nur 24 auf dein Konto überwiesen werden. Zudem sind alle
        Ein- und Auszahlungen gebührenfrei, was Bing Bong besonders
        nutzerfreundliche macht.
      </Typography>
    </>
  );

  const customerSupportContent = (
    <>
      <Typography variant="body1" paragraph>
        Der Kundensupport von Bing Bong ist rund um die Uhr erreichbar und steht
        Spielern bei Fragen oder Problemen mit Rat und Tat zur Seite.
      </Typography>

      <Typography variant="body1" paragraph>
        Kontaktmöglichkeiten:
      </Typography>

      <CustomList
        listItems={[
          "Live-Chat (24/7 verfügbar)",
          "Telefonische Hotline",
          "E-Mail-Support",
        ]}
      />

      <Typography variant="body1" paragraph>
        Der Anbieter bietet außerdem einen umfangreichen FAQ-Bereich, in dem
        häufige Fragen bereits beantwortet werden. Die Qualität und
        Reaktionszeit des Supports sind hervorragend und zählen zu den besten in
        der Branche.
      </Typography>
    </>
  );

  const loyaltyProgramContent = (
    <>
      <Typography variant="body1" paragraph>
        Bing Bong belohnt loyale Spieler mit großzügigen Treueprogrammen und
        regelmäßigen Aktionen.
      </Typography>
      <Typography variant="body1" paragraph>
        Highlights des Treueprogramms:
      </Typography>

      <CustomList
        listItems={[
          "VIP-Level mit exklusiven Belohnungen",
          "Wöchentliche Freispiele für Bestandskunden",
          "Drops & Wins: Zusätzliche Preise bei ausgewählten Slots",
        ]}
      />

      <Typography variant="body1" paragraph>
        Diese Programme sorgen dafür, dass auch langfristige Spieler immer
        wieder von spannenden Vorteilen profitieren.
      </Typography>
    </>
  );

  const conclusionContent = (
    <>
      <Typography variant="body1" paragraph>
        Bing Bong überzeugt auf ganzer Linie: Von der deutschen Lizenz über das
        breite Spielangebot bis hin zu den attraktiven Bonusaktionen bietet der
        Anbieter alles, was Spieler erwarten. Besonders hervorzuheben sind die
        Sicherheit, die schnellen Auszahlungen und die umfangreichen Aktionen
        für Neu- und Bestandskunden. Bing Bong ist somit eine exzellente Wahl
        für alle, die nach einer verlässlichen und unterhaltsamen
        Online-Spielothek suchen.
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
        buttonTitle="Jetzt bei Jackpot Piraten anmelden und vom Willkommensbonus profitieren!"
      />

      <FAQSection faqs={provider.faqs} />
    </MainLayout>
  );
};

export default BingBongReview;
