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

const JackpotPiratenReview = () => {
  const provider = providersData[["jackpotPiraten"]];

  if (!provider) {
    return <div>Anbieter nicht gefunden</div>;
  }

  const summary = (
    <>
      <Typography variant="body1" gutterBottom>
        JackpotPiraten entführt dich auf eine spannende Reise durch die Welt der
        Online-Spielautomaten. Unter der Flagge von Captain Jack Pott erwartet
        dich ein Abenteuer voller Bonusangebote, fesselnder Slots und
        blitzschneller Auszahlungen. Ob du ein erfahrener Spieler oder ein
        neugieriger Einsteiger bist, bei JackpotPiraten findest du eine sichere
        und abwechslungsreiche Plattform, die mit einer deutschen Lizenz und
        einem Top-Angebot überzeugt.
      </Typography>
    </>
  );

  const bonusContent = (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        50 Freispiele + 100€ Einzahlungsbonus (100%)
      </Typography>

      <CustomList
        listItems={[
          "50 Freispiele für Book of Ra Deluxe",
          "100€ Einzahlungsbonus (100%)",
          "Mindestumsatz: 30x Bonusbetrag",
          "Mindesteinzahlung nur 1€",
        ]}
      />

      <Typography variant="body1" paragraph>
        Zusätzliche Aktionen:
      </Typography>

      <CustomList
        listItems={[
          "Freispiel-Montag: Wöchentliche Freispiele für den Slot der Woche",
          "Donnerstags-Jackpot: Bis zu 5.000 Freispiele ohne Einzahlung",
          "Drops & Wins: Tägliche Cash-Gewinne an ausgewählten Slots",
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
          Jetzt bei Jackpot Piraten anmelden und Bonus sichern!
        </Button>
      </Box>
    </>
  );

  const gamesContent = (
    <>
      <Typography variant="body1" paragraph>
        Mit mehr als 620 Slots bietet JackpotPiraten eine beeindruckende
        Vielfalt. Die Spiele stammen von renommierten Entwicklern wie Merkur,
        Novomatic, Gamomat und Pragmatic Play. Spieler können aus einer Vielzahl
        von Themen und Spielmechaniken wählen.
      </Typography>

      <Typography variant="body1" paragraph>
        Beliebte Slots bei Jackpot Piraten:
      </Typography>

      <CustomList
        listItems={[
          "Book of Ra Deluxe: Entdecke die Schätze des alten Ägyptens.",
          "Eye of Horus: Tauche ein in die mystische Welt der ägyptischen Götter.",
          "Big Bass Bonanza: Gewinne mit aufregenden Angeltouren.",
          "Fruitinator: Ein fruchtiger Klassiker mit einfachen, schnellen Gewinnen.",
        ]}
      />
    </>
  );

  const paymentMethodsContent = (
    <>
      <Typography variant="body1" paragraph>
        JackpotPiraten setzt auf sichere und zuverlässige Zahlungsmethoden, die
        schnelle und gebührenfreie Ein- und Auszahlungen ermöglichen.
      </Typography>

      <Typography variant="body1" paragraph>
        Zu den verfügbaren Zahlungsmethoden gehören:
      </Typography>
      {/* Die Zahlungsmethoden werden in der Komponente angezeigt */}

      <Typography variant="body1" paragraph>
        <strong>Blitz-Auszahlungen:</strong> Gewinne können innerhalb von nur 24
        Stunden auf dein Konto überwiesen werden – ein Highlight für jeden
        Spieler.
      </Typography>
    </>
  );

  const customerSupportContent = (
    <>
      <Typography variant="body1" paragraph>
        Der Kundensupport von JackpotPiraten überzeugt mit schnellen
        Reaktionszeiten und kompetenter Hilfe.
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
        Ergänzt wird der Support durch eine umfangreiche FAQ-Sektion, die
        Antworten auf häufige Fragen bietet.
      </Typography>
    </>
  );

  const loyaltyProgramContent = (
    <>
      <Typography variant="body1" paragraph>
        JackpotPiraten belohnt seine treuen Spieler mit regelmäßigen Aktionen
        und exklusiven Angeboten:
      </Typography>

      <CustomList
        listItems={[
          "Wöchentliche Freispiele: Jeden Montag und Freitag gibt es Freispiele für den Slot der Woche.",
          "Donnerstags-Jackpot: Gewinne bis zu 5.000 Freispiele ohne Einzahlung.",
          "Drops & Wins: Zusätzliche Preise bei ausgewählten Slots von Pragmatic Play.",
        ]}
      />
    </>
  );

  const conclusionContent = (
    <>
      <Typography variant="body1" paragraph>
        JackpotPiraten ist eine herausragende Online-Spielothek, die Sicherheit,
        Vielfalt und Spannung vereint. Das breite Spielangebot, die attraktiven
        Bonusaktionen und die blitzschnellen Auszahlungen machen sie zur idealen
        Wahl für Spieler in Deutschland.
      </Typography>

      <Typography variant="body1" paragraph>
        JackpotPiraten besitzt eine deutsche Lizenz und garantiert damit ein
        sicheres und seriöses Spielerlebnis. Alle sensiblen Daten werden durch
        moderne Verschlüsselungstechnologien geschützt. Die Plattform erfüllt
        alle Vorgaben des Glücksspielstaatsvertrags und bietet umfassende
        Maßnahmen zum Spieler- und Jugendschutz.
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
        buttonTitle="Jetzt bei Jackpot Piraten anmelden und vom Willkommensbonus profitieren!"
      />

      <FAQSection faqs={provider.faqs} />
    </MainLayout>
  );
};

export default JackpotPiratenReview;
