import React from "react";
import { Typography, Box, Button } from "@mui/material";
import providersData from "../../services/providersData";
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
import ProsConsSection from "../../components/sportsbetting/providers/ProsConsSection";
import ConclusionSection from "../../components/sportsbetting/providers/ConclusionSection";
import FAQSection from "../../components/sportsbetting/providers/FAQSection";

const HappybetReview = () => {
  const provider = providersData[["happybet"]];

  if (!provider) {
    return <div>Anbieter nicht gefunden</div>;
  }

  const summary =
    "Happybet hat sich seit seiner Gründung im Jahr 2017 einen Namen in der Sportwetten-Branche gemacht. Mit attraktiven Bonusangeboten, einem breiten Wettangebot und kundenfreundlichen Features richtet sich Happybet sowohl an Neueinsteiger als auch an erfahrene Wettfreunde. In diesem Test teilen wir unsere aktuellen Happybet Erfahrungen aus dem Jahr 2024 und beleuchten, ob der Anbieter seriös ist und deinen individuellen Anforderungen entspricht.";

  const bonusContent = (
    <>
      <Typography variant="h4" component="h3">
        Willkommensbonus: 150% Einzahlungsbonus bis zu 100€
      </Typography>
      <Typography variant="body1" paragraph>
        Du bist bereit, das Beste aus deinen Sportwetten herauszuholen? Dann
        sichere dir jetzt das exklusive Angebot von Happybet. Mit einem 
        <strong>150% Einzahlungsbonus bis zu 100€</strong> startest du mit noch
        mehr Guthaben in deine Wettabenteuer. Das bedeutet, dass du bei einer
        Einzahlung von 67€ insgesamt 167€ Wettguthaben erhältst.
      </Typography>
      <Typography variant="body1" paragraph>
        Deine Vorteile auf einen Blick:
      </Typography>
      <Box component="ul" sx={{ pl: 4 }}>
        <li>
          150% Bonus auf deine erste Einzahlung – zahle 67€ ein und wette mit
          167€!
        </li>
        <li>
          Attraktive Quoten auf eine breite Auswahl an Sportarten und Events
        </li>
        <li>
          Riesiges Livewetten-Angebot – wette live und profitiere von
          Echtzeitquoten
        </li>
        <li>
          Schnelle und sichere Ein- und Auszahlungen – dein Geld ist immer
          schnell verfügbar
        </li>
      </Box>
      <Typography variant="body1" paragraph>
        Happybet bietet zudem regelmäßige Promotionen für Bestandskunden,
        darunter Gratiswetten, Cashback-Angebote und ein attraktives
        Treueprogramm. Diese Vielfalt an Bonusangeboten sorgt dafür, dass immer
        für zusätzliche Gewinnchancen gesorgt ist.
      </Typography>
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
        >
          Jetzt bei Happybet anmelden und Bonus kassieren!
        </Button>
      </Box>
    </>
  );

  const oddsContent = (
    <>
      <Typography variant="body1" paragraph>
        Happybet überzeugt durch attraktive Wettquoten, die im Vergleich zum
        Markt wettbewerbsfähig sind. Besonders bei populären Sportarten wie
        Fußball, Basketball und Tennis bietet der Anbieter Quoten, die oft über
        dem Branchendurchschnitt liegen. Obwohl der Quotenschlüssel nicht immer
        an der absoluten Spitze steht, sind die Quoten insgesamt fair und bieten
        ein gutes Preis-Leistungs-Verhältnis.
      </Typography>
      <Typography variant="body1" paragraph>
        Unsere Erfahrungen zeigen, dass Happybet insbesondere bei Top-Events und
        beliebten Ligen sehr gute Quoten anbietet. Durch die Möglichkeit,
        steuerfreie Wetten ab 2er Kombis zu platzieren, kannst du zusätzlich von
        höheren Gewinnen profitieren.
      </Typography>
    </>
  );

  const sportsOfferContent = (
    <>
      <Typography variant="body1" paragraph>
        Das Wettangebot von Happybet ist vielfältig und deckt eine breite
        Palette an Sportarten und Events ab. Du kannst aus über 20 verschiedenen
        Sportarten wählen, darunter Fußball, Basketball, Tennis, Eishockey und
        viele mehr. Auch E-Sports und Nischensportarten wie Darts oder Snooker
        sind vertreten.
      </Typography>
      <Typography variant="body1" paragraph>
        Besonders hervorzuheben sind die Spezialwetten wie Spielerwetten und
        Handicap-Wetten. Diese ermöglichen es dir, auf spezifische Ereignisse
        oder Leistungen einzelner Spieler zu setzen und erweitern deine
        Gewinnmöglichkeiten. Das umfangreiche Livewetten-Angebot ermöglicht es
        dir zudem, in Echtzeit auf laufende Spiele zu wetten und von dynamischen
        Quoten zu profitieren.
      </Typography>
    </>
  );

  const paymentMethodsContent = (
    <>
      <Typography variant="body1" paragraph>
        Happybet bietet eine gute Auswahl an Zahlungsmethoden, die sowohl sicher
        als auch bequem sind. Du kannst Einzahlungen über Kreditkarten (Visa,
        Mastercard), E-Wallets (PayPal, Skrill, Neteller), Banküberweisungen und
        Prepaid-Karten (Paysafecard) tätigen. Die Einzahlungen sind in der Regel
        sofort auf deinem Wettkonto verfügbar, und es fallen keine Gebühren an.
      </Typography>
      <Typography variant="body1" paragraph>
        Auszahlungen erfolgen schnell und zuverlässig. Die Bearbeitungszeiten
        liegen meistens zwischen 24 und 48 Stunden, abhängig von der gewählten
        Zahlungsmethode. Auch hier fallen keine Gebühren an, was einen weiteren
        Pluspunkt darstellt.
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
        Der Kundensupport von Happybet ist professionell und gut erreichbar. Du
        kannst den Support per Live-Chat, E-Mail und Telefon kontaktieren. Die
        Mitarbeiter sind freundlich, kompetent und bemüht, deine Anliegen
        schnell zu lösen. Die Reaktionszeiten sind insgesamt gut, wobei der
        Live-Chat die schnellste Kontaktmöglichkeit bietet.
      </Typography>
      <Typography variant="body1" paragraph>
        Leichte Abzüge gibt es, da der Kundensupport nicht rund um die Uhr
        verfügbar ist. Dennoch überzeugt Happybet mit einem qualitativ
        hochwertigen Service, der die meisten Fragen und Probleme zügig klärt.
      </Typography>
    </>
  );

  const taxFeesContent = (
    <>
      <Typography variant="body1" paragraph>
        In Deutschland fällt eine gesetzliche Wettsteuer von 5% an. Happybet
        zeigt sich hier kundenfreundlich: Ab einer 2er Kombiwette entfällt die
        Wettsteuer, was bedeutet, dass du deine Gewinne ohne Abzüge einstreichen
        kannst. Bei Einzelwetten wird die Wettsteuer jedoch auf den Kunden
        umgelegt und vom Gewinn abgezogen.
      </Typography>
      <Typography variant="body1" paragraph>
        Ein- und Auszahlungen sind gebührenfrei, was ein weiterer positiver
        Aspekt ist. Durch die Möglichkeit, die Wettsteuer bei Kombiwetten zu
        umgehen, kannst du deine Gewinnchancen erhöhen und mehr aus deinen
        Einsätzen herausholen.
      </Typography>
    </>
  );

  const mobileAppContent = (
    <>
      <Typography variant="body1" paragraph>
        Happybet bietet eine mobile App für iOS und Android, die alle wichtigen
        Funktionen der Desktop-Version beinhaltet. Die App ist
        benutzerfreundlich gestaltet und ermöglicht es dir, auch unterwegs
        problemlos Wetten zu platzieren, Livewetten zu verfolgen und Ein- und
        Auszahlungen vorzunehmen.
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
        Die mobile Webseite ist ebenfalls gut optimiert und passt sich
        verschiedenen Bildschirmgrößen an. Die Navigation ist intuitiv, und die
        Ladezeiten sind kurz. Allerdings könnte die App hinsichtlich Design und
        Performance noch etwas verbessert werden, um ein noch reibungsloseres
        Nutzererlebnis zu bieten.
      </Typography>
    </>
  );

  const loyaltyProgramContent = (
    <>
      <Typography variant="body1" paragraph>
        Happybet belohnt seine treuen Kunden mit einem attraktiven
        Treueprogramm. Durch regelmäßiges Wetten sammelst du Punkte, die du
        gegen Boni oder Gratiswetten eintauschen kannst. Besonders hervorzuheben
        ist die exklusive VIP-Kundenbetreuung. Als VIP-Kunde genießt du
        persönlichen Service, bevorzugten Support und exklusive Angebote, die
        dir zusätzliche Vorteile verschaffen.
      </Typography>
      <Typography variant="body1" paragraph>
        Das Treueprogramm und die VIP-Services sind gut strukturiert und bieten
        echten Mehrwert für aktive Nutzer. Dennoch gibt es noch Potenzial für
        weitere exklusive Promotionen und Events.
      </Typography>
    </>
  );

  const cashOutContent = (
    <>
      <Typography variant="body1" paragraph>
        Die Cash-Out-Funktion bei Happybet ist vorhanden, allerdings nicht so
        umfangreich wie bei einigen Konkurrenten. Du kannst bei ausgewählten
        Wetten die Cash-Out-Option nutzen, um Gewinne vorzeitig zu sichern oder
        Verluste zu minimieren. Allerdings sind teilweiser oder automatischer
        Cash-Out nicht verfügbar, was die Flexibilität etwas einschränkt.
      </Typography>
      <Typography variant="body1" paragraph>
        Für Gelegenheitsspieler ist die vorhandene Cash-Out-Funktion dennoch ein
        nützliches Feature. Wer jedoch umfangreichere Cash-Out-Optionen sucht,
        könnte hier etwas enttäuscht sein.
      </Typography>
    </>
  );

  const conclusionContent = (
    <>
      <Typography variant="body1" paragraph>
        Unsere Happybet Erfahrungen aus dem Jahr 2024 zeigen, dass es sich um
        einen seriösen und empfehlenswerten Sportwetten-Anbieter handelt. Der
        großzügige Willkommensbonus und die Möglichkeit, die Wettsteuer bei
        Kombiwetten zu umgehen, sind starke Argumente für eine Anmeldung. Das
        breite Wettangebot, die exklusiven VIP-Services und die schnellen
        Auszahlungen runden das positive Gesamtbild ab.
      </Typography>
      <Typography variant="body1" paragraph>
        Wenn du auf der Suche nach einem Wettanbieter bist, der attraktive Boni
        und steuerfreie Kombiwetten bietet, ist Happybet eine hervorragende
        Wahl.
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
        highlights={provider.highlights}
        ratings={provider.ratings}
      />

      <OverviewSection overview={provider.overview} />

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

      <ProsConsSection pros={provider.pros} cons={provider.cons} />

      <ConclusionSection
        conclusionContent={conclusionContent}
        ratings={provider.ratings}
        ctaLink={provider.ctaLink}
        buttonTitle="Jetzt bei Happybet anmelden und vom Willkommensbonus profitieren!"
      />

      <FAQSection faqs={provider.faqs} />
    </MainLayout>
  );
};

export default HappybetReview;
