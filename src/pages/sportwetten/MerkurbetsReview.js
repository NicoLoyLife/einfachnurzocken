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

const MerkurbetsReview = () => {
  const provider = providersData[["merkurbets"]];

  if (!provider) {
    return <div>Anbieter nicht gefunden</div>;
  }

  const summary =
    "Merkur Bets ist ein Teil der renommierten Gauselmann Gruppe, einem deutschen Traditionsunternehmen mit jahrzehntelanger Erfahrung in der Glücksspielbranche. Die bekannte Merkur Sonne steht seit jeher für Vertrauen und Qualität. Mit Merkur Bets erweitert das Unternehmen sein Angebot in den Bereich der Online-Sportwetten und bietet Wettfreunden eine moderne Plattform mit zahlreichen Features. In diesem Test teilen wir unsere aktuellen Merkur Bets Erfahrungen aus dem Jahr 2024 und beleuchten, ob der Anbieter seriös ist und deinen individuellen Anforderungen entspricht.";

  const bonusContent = (
    <>
      <Typography variant="h4" component="h3">
        Willkommensbonus: 10€ Freiwette ohne Einzahlung
      </Typography>
      <Typography variant="body1" paragraph>
        Merkur Bets begrüßt neue Kunden mit einem besonderen Angebot:
        <strong>Eine 10€ Freiwette – ganz ohne Einzahlung!</strong> Das
        bedeutet, du kannst direkt nach der Registrierung loslegen und erste
        Wetten platzieren, ohne eigenes Geld einsetzen zu müssen.
      </Typography>
      <Typography variant="h4" component="h3">
        Zusätzliche Promotionen:
      </Typography>
      <Box component="ul" sx={{ pl: 4 }}>
        <li>
          <strong>Wettsteuer? Übernimmt der Anbieter!</strong> Bei Merkur Bets
          fällt für dich keine Wettsteuer an. Der Anbieter übernimmt die
          gesetzliche Wettsteuer von 5%, sodass du deine Gewinne in voller Höhe
          ausgezahlt bekommst.
        </li>
        <li>
          <strong>Kombi Boost:</strong> Hol dir bis zu
          <strong>30% extra Gewinn auf Kombiwetten</strong>. Je mehr Auswahlen
          du kombinierst, desto höher fällt dein Bonus aus.
        </li>
        <li>
          <strong>3er-Kombi-Versicherung:</strong> Wenn deine erste Kombiwette
          mit drei Auswahlen scheitert, erhältst du bis zu
          <strong>90€ Cashback als Freebet</strong>.
        </li>
      </Box>
      <Typography variant="body1" paragraph>
        Deine Vorteile auf einen Blick:
      </Typography>
      <Box component="ul" sx={{ pl: 4 }}>
        <li>
          Quickbet: Platziere deine Wetten blitzschnell mit der
          Quickbet-Funktion.
        </li>
        <li>
          Betbuilder: Erstelle deine individuelle Wunschwette, indem du
          verschiedene Märkte innerhalb eines Spiels kombinierst.
        </li>
        <li>
          Mobile App: Mit der benutzerfreundlichen App kannst du jederzeit und
          überall wetten.
        </li>
      </Box>
      <Typography variant="body1" paragraph>
        Verpasse nicht die Chance, von diesen attraktiven Angeboten zu
        profitieren!
      </Typography>
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          href={provider.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
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
        liegt bei etwa 95% bis 96%, was ein gutes Niveau darstellt.
      </Typography>
      <Typography variant="body1" paragraph>
        Durch die Übernahme der Wettsteuer profitierst du zusätzlich, da deine
        Gewinne nicht durch Abzüge gemindert werden. Unsere Erfahrungen zeigen,
        dass Merkur Bets insbesondere bei Top-Events und in den großen
        europäischen Fußballligen sehr gute Quoten anbietet.
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
      <Typography variant="h4" component="h3">
        Highlights des Wettangebots:
      </Typography>
      <Box component="ul" sx={{ pl: 4 }}>
        <li>
          <strong>Betbuilder:</strong> Mit dieser Funktion kannst du
          verschiedene Wettmärkte innerhalb eines Spiels kombinieren und so
          deine individuelle Wunschwette erstellen.
        </li>
        <li>
          <strong>Livewetten:</strong> Ein umfangreiches Livewetten-Angebot
          ermöglicht es dir, in Echtzeit auf laufende Spiele zu wetten und von
          dynamischen Quoten zu profitieren.
        </li>
        <li>
          <strong>Spezialwetten:</strong> Neben klassischen Wettmärkten bietet
          Merkur Bets eine Vielzahl von Spezialwetten, beispielsweise auf
          Spielerleistungen, Eckbälle oder Karten.
        </li>
      </Box>
      <Typography variant="body1" paragraph>
        Die Plattform ist übersichtlich gestaltet, sodass du schnell die
        gewünschten Wetten findest. Die Kombination aus breitem Angebot und
        innovativen Funktionen wie dem Betbuilder macht das Wett-Erlebnis bei
        Merkur Bets besonders attraktiv.
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
        Stunden. Auch hier fallen keine Gebühren an. Die Vielfalt der
        Zahlungsmethoden bietet dir Flexibilität und Komfort bei der
        Kontoverwaltung.
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
        Der Kundensupport von Merkur Bets ist professionell und gut erreichbar -
        täglich von 8:00 bis 24:00 Uhr.
      </Typography>
      <Typography variant="body1" paragraph>
        Die Mitarbeiter sind freundlich, kompetent und bemüht, deine Anliegen
        schnell zu lösen. Die Reaktionszeiten sind insgesamt gut, insbesondere
        der Live-Chat bietet schnelle Hilfe. Umfangreiche FAQs auf der Webseite
        beantworten zudem viele Fragen im Vorfeld.
      </Typography>
    </>
  );

  const taxFeesContent = (
    <>
      <Typography variant="body1" paragraph>
        Ein großer Vorteil bei Merkur Bets ist die Übernahme der Wettsteuer. Die
        gesetzliche Wettsteuer von 5% wird vollständig vom Anbieter getragen.
        Das bedeutet, dass weder dein Einsatz noch dein Gewinn durch die Steuer
        gemindert werden.
      </Typography>
      <Typography variant="body1" paragraph>
        Beispielrechnung:
      </Typography>
      <Box component="ul" sx={{ pl: 4 }}>
        <li>Einsatz: 100€ auf eine Quote von 2,0</li>
        <li>Gewinn: 200€ (ohne Abzüge)</li>
        <li>Du erhältst den vollen betrag ausgezahlt.</li>
      </Box>
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
        Die Quickbet-Funktion erlaubt es dir, blitzschnell Wetten zu platzieren,
        was besonders bei Livewetten von Vorteil ist. Auch der Betbuilder ist in
        der App vollständig integriert, sodass du deine individuellen Wetten
        bequem von unterwegs erstellen kannst.
      </Typography>
      <Typography variant="body1" paragraph>
        Die mobile Webseite ist ebenfalls optimiert und bietet eine gute
        Alternative für Nutzer, die keine App installieren möchten.
      </Typography>
    </>
  );

  const loyaltyProgramContent = (
    <>
      <Typography variant="body1" paragraph>
        Merkur Bets bietet ein Treueprogramm, bei dem du durch regelmäßiges
        Wetten Punkte sammelst. Diese Punkte kannst du gegen Bonusguthaben,
        Freiwetten oder andere Prämien eintauschen. Aktive Kunden profitieren
        zudem von regelmäßigen Promotionen und speziellen Angeboten.
      </Typography>
      <Typography variant="body1" paragraph>
        Die 3er-Kombi-Versicherung ist ein besonderes Highlight: Wenn deine
        erste Kombiwette mit drei Auswahlen scheitert, erhältst du bis zu 90 €
        Cashback als Freebet. Dies erhöht deine Gewinnchancen und minimiert das
        Risiko bei Kombiwetten.
      </Typography>
      <Typography variant="body1" paragraph>
        VIP-Services wie persönliche Betreuung oder exklusive Events sind bisher
        nicht ausdrücklich beworben, könnten aber für besonders aktive Kunden
        verfügbar sein.
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
        verfügbar. Dennoch ist die vorhandene Cash-Out-Funktion ein nützliches
        Feature, das dein Wetterlebnis bereichert.
      </Typography>
    </>
  );

  const conclusionContent = (
    <>
      <Typography variant="body1" paragraph>
        Unsere Merkur Bets Erfahrungen aus dem Jahr 2024 zeigen, dass es sich um
        einen seriösen und äußerst attraktiven Sportwetten-Anbieter handelt. Die
        Kombination aus 10€ Freiwette ohne Einzahlung, der Übernahme der
        Wettsteuer und innovativen Funktionen wie Betbuilder und Quickbet machen
        Merkur Bets zu einer ausgezeichneten Wahl für Wettfreunde.
      </Typography>
      <Typography variant="body1" paragraph>
        Die benutzerfreundliche Mobile App, das umfangreiche Wettangebot und die
        attraktiven Promotionen runden das positive Gesamtbild ab. Wenn du auf
        der Suche nach einem Wettanbieter bist, der dir mehr für dein Geld
        bietet und dabei auf Qualität und Sicherheit setzt, ist Merkur Bets
        definitiv eine Empfehlung wert.
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
        buttonTitle="Jetzt bei Merkur Bets anmelden und Bonus kassieren!"
      />

      <FAQSection faqs={provider.faqs} />
    </MainLayout>
  );
};

export default MerkurbetsReview;
