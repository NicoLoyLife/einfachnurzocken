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

const BetanoReview = () => {
  const provider = providersData[["betano"]];

  if (!provider) {
    return <div>Anbieter nicht gefunden</div>;
  }

  const summary =
    "Betano hat sich seit seiner Gründung im Jahr 2016 zu einem der führenden Sportwetten-Anbieter in Deutschland entwickelt. Mit einem breiten Angebot an Sportarten, attraktiven Bonusaktionen und einer benutzerfreundlichen Plattform spricht Betano sowohl Anfänger als auch erfahrene Wettfans an. In diesem Test teilen wir unsere aktuellen Betano Erfahrungen aus dem Jahr 2024 und beleuchten, ob der Anbieter seriös ist und deinen individuellen Anforderungen entspricht.";

  const bonusContent = (
    <>
      <Typography variant="h4" component="h3">
        Willkommensbonus: 100% Einzahlungsbonus bis 80€ + 20€ Freiwette ohne
        Einzahlung
      </Typography>
      <Typography variant="body1" paragraph>
        Entdecke den ultimativen Sportwettenanbieter und profitiere von einem
        unschlagbaren Willkommensangebot! Betano bietet neuen Kunden einen{" "}
        <strong>100% Einzahlungsbonus bis zu 80€</strong> auf die erste
        Einzahlung. Das bedeutet, dass du deine erste Einzahlung verdoppelst und
        mit einem größeren Wettguthaben durchstarten kannst. Aber das ist noch
        nicht alles: Zusätzlich erhältst du eine{" "}
        <strong>20€ Freiwette ohne Einzahlung</strong>. Einfach registrieren,
        Freiwette sichern und loslegen!
      </Typography>
      <Typography variant="body1" paragraph>
        Um den Bonus zu erhalten, musst du dich registrieren und eine
        Mindesteinzahlung von 10€ tätigen. Der Bonusbetrag muss innerhalb von 90
        Tagen fünfmal mit einer Mindestquote von 1,65 umgesetzt werden.
      </Typography>
      <Typography variant="body1" paragraph>
        Deine Vorteile auf einen Blick:
      </Typography>
      <Box component="ul" sx={{ pl: 4 }}>
        <li>100% Bonus bis 80€ auf deine erste Einzahlung</li>
        <li>20€ Freiwette ohne Einzahlung</li>
        <li>Attraktive Quoten und eine riesige Auswahl an Sportwetten</li>
        <li>Sichere und schnelle Auszahlungen</li>
      </Box>
      <Typography variant="body1" paragraph>
        Betano bietet zudem regelmäßige Promotionen für Bestandskunden, darunter
        Einzahlungsboni, Gratiswetten, Cashback-Angebote und ein umfangreiches
        Treueprogramm. Diese Vielfalt an Bonusangeboten sorgt dafür, dass immer
        für Abwechslung und zusätzliche Gewinnchancen gesorgt ist.
      </Typography>
      <Typography variant="body1" paragraph>
        Verpasse nicht deine Chance, mit diesem unschlagbaren Angebot
        durchzustarten!
      </Typography>
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          href={provider.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Jetzt bei Betano anmelden und Bonus sichern!
        </Button>
      </Box>
    </>
  );

  const oddsContent = (
    <>
      <Typography variant="body1" paragraph>
        Betano überzeugt durch attraktive Wettquoten, die im Vergleich zum Markt
        durchaus konkurrenzfähig sind. Besonders bei populären Sportarten wie
        Fußball, Basketball und Tennis bietet Betano Quoten, die häufig über dem
        Branchendurchschnitt liegen. Obwohl der Quotenschlüssel nicht immer an
        der absoluten Spitze liegt, sind die Quoten insgesamt sehr fair und
        bieten ein gutes Preis-Leistungs-Verhältnis.
      </Typography>
      <Typography variant="body1" paragraph>
        Unsere Erfahrungen zeigen, dass Betano insbesondere bei Top-Events und
        beliebten Ligen sehr gute Quoten anbietet. In Kombination mit den
        zahlreichen Wettmärkten und Spezialwetten können Wettende hier das
        Maximum aus ihren Einsätzen herausholen.
      </Typography>
    </>
  );

  const sportsOfferContent = (
    <>
      <Typography variant="body1" paragraph>
        Das Wettangebot von Betano ist beeindruckend und verdient die
        Höchstnote. Mit einer Vielfalt von über 30 Sportarten und unzähligen
        Ligen und Wettbewerben lässt der Anbieter keine Wünsche offen. Ob
        Fußball, Basketball, Tennis, Eishockey oder exotischere Sportarten wie
        Darts und Snooker – bei Betano findest du nahezu alles.
      </Typography>
      <Typography variant="body1" paragraph>
        Besonders hervorzuheben sind die Spezialwetten wie Spielerwetten und
        Handicap-Wetten. Du kannst beispielsweise auf die Leistung einzelner
        Spieler setzen oder spezielle Ereignisse innerhalb eines Spiels
        vorhersagen. Dieses breite Angebot ermöglicht es dir, deine
        Wettstrategien individuell zu gestalten und vielfältige
        Wettmöglichkeiten zu nutzen.
      </Typography>
    </>
  );

  const paymentMethodsContent = (
    <>
      <Typography variant="body1" paragraph>
        Betano bietet eine umfangreiche Auswahl an Zahlungsmethoden, die sowohl
        sicher als auch benutzerfreundlich sind. Du kannst Einzahlungen über
        Kreditkarten (Visa, Mastercard), E-Wallets (PayPal, Skrill, Neteller),
        Banküberweisungen und Prepaid-Karten (Paysafecard) tätigen. Die
        Einzahlungen sind in der Regel sofort auf deinem Wettkonto verfügbar,
        und es fallen keine Gebühren an.
      </Typography>
      <Typography variant="body1" paragraph>
        Auszahlungen erfolgen ebenfalls schnell und zuverlässig. Die
        Bearbeitungszeit liegt meistens zwischen 24 und 48 Stunden. Auch hier
        stehen dir verschiedene Methoden zur Verfügung, wobei die Auswahl bei
        Auszahlungen etwas eingeschränkter ist als bei Einzahlungen. Trotzdem
        überzeugt Betano durch sichere und schnelle Auszahlungen, sodass du
        deine Gewinne zügig erhältst.
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
      <Typography variant="body1" paragraph>
        Es gibt allerdings leichte Abzüge, da der telefonische Support nicht
        rund um die Uhr verfügbar ist. Dennoch zeigt sich Betano bemüht, einen
        hohen Standard im Kundenservice zu halten, und bietet umfangreiche
        Hilfeseiten und FAQs auf der Webseite an.
      </Typography>
    </>
  );

  const taxFeesContent = (
    <>
      <Typography variant="body1" paragraph>
        In Deutschland fällt eine gesetzliche Wettsteuer von 5% auf Sportwetten
        an. Betano legt diese Wettsteuer auf die Kunden um, was bedeutet, dass
        bei erfolgreichen Wetten 5% deines Gewinns einbehalten werden. Dein
        Einsatz bleibt dabei vollständig erhalten, sodass die Wettsteuer nur im
        Gewinnfall anfällt.
      </Typography>
      <Typography variant="body1" paragraph>
        Beispielrechnung:
      </Typography>
      <Box component="ul" sx={{ pl: 4 }}>
        <li>Einsatz: 100€ auf eine Quote von 2,0</li>
        <li>Bruttogewinn: 200€</li>
        <li>Abzug Wettsteuer (5% von 200€): 10€</li>
        <li>Nettogewinn: 190€</li>
      </Box>
      <Typography variant="body1" paragraph>
        Ein- und Auszahlungen sind in der Regel gebührenfrei. Dennoch fällt die
        Bewertung in diesem Bereich weniger positiv aus, da einige Konkurrenten
        die Wettsteuer für ihre Kunden übernehmen und somit steuerfreies Wetten
        ermöglichen.
      </Typography>
    </>
  );

  const mobileAppContent = (
    <>
      <Typography variant="body1" paragraph>
        Die mobile App von Betano ist hervorragend umgesetzt und bietet alle
        Funktionen der Desktop-Version. Sie ist für iOS und Android verfügbar
        und überzeugt durch ein ansprechendes Design und eine intuitive
        Benutzeroberfläche. Die App läuft stabil und ermöglicht es dir, auch
        unterwegs problemlos Wetten zu platzieren, Ein- und Auszahlungen
        vorzunehmen und Bonusangebote zu nutzen.
      </Typography>
      {/* Optionaler Screenshot der App */}
      {/* <Box sx={{ textAlign: 'center', my: 4 }}>
        <img
          src={appScreenshot}
          alt="Betano Mobile App Screenshot"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Box> */}
      <Typography variant="body1" paragraph>
        Die mobile Webseite ist ebenfalls optimiert und passt sich verschiedenen
        Bildschirmgrößen an. Die Navigation ist einfach, und die Ladezeiten sind
        kurz. Insgesamt bietet Betano ein reibungsloses mobiles Wetterlebnis auf
        höchstem Niveau.
      </Typography>
    </>
  );

  const loyaltyProgramContent = (
    <>
      <Typography variant="body1" paragraph>
        Betano belohnt treue Kunden mit einem umfangreichen Treueprogramm. Für
        jede platzierte Wette sammelst du Punkte, die du gegen Gratiswetten,
        Boni oder andere Prämien eintauschen kannst. Je aktiver du bist, desto
        mehr Vorteile kannst du genießen.
      </Typography>
      <Typography variant="body1" paragraph>
        Für besonders aktive Kunden gibt es zudem VIP-Services. Diese umfassen
        exklusive Bonusangebote, persönliche Betreuung durch einen Account
        Manager und Einladungen zu besonderen Events. Obwohl das Treueprogramm
        bereits viel bietet, gibt es im VIP-Bereich noch Luft nach oben, weshalb
        hier nicht die Höchstnote vergeben wird.
      </Typography>
    </>
  );

  const cashOutContent = (
    <>
      <Typography variant="body1" paragraph>
        Die Cash-Out-Funktion von Betano ist vielseitig und bietet dir maximale
        Flexibilität. Du kannst sowohl einen vollständigen als auch einen
        teilweisen Cash-Out vornehmen. Zudem gibt es die Möglichkeit des
        automatischen Cash-Outs, bei dem du einen Schwellenwert festlegst, ab
        dem die Wette automatisch ausgezahlt wird.
      </Typography>
      <Typography variant="body1" paragraph>
        Diese Funktion steht für zahlreiche Sportarten und Wettmärkte zur
        Verfügung, sowohl für Einzel- als auch für Kombiwetten. Sie ermöglicht
        es dir, Gewinne frühzeitig zu sichern oder Verluste zu minimieren, was
        dein Wett-Erlebnis noch dynamischer gestaltet.
      </Typography>
    </>
  );

  const conclusionContent = (
    <>
      <Typography variant="body1" paragraph>
        Unsere Betano Erfahrungen aus dem Jahr 2024 zeigen, dass es sich um
        einen seriösen und empfehlenswerten Sportwetten-Anbieter handelt. Trotz
        der Umlegung der Wettsteuer auf den Kunden überzeugt Betano durch ein
        herausragendes Bonusangebot, ein umfangreiches Wettangebot und
        exzellente mobile Lösungen. Die innovativen Funktionen und das
        attraktive Treueprogramm runden das positive Gesamtbild ab.
      </Typography>
      <Typography variant="body1" paragraph>
        Wenn du auf der Suche nach einem zuverlässigen Wettanbieter mit
        attraktiven Boni und vielfältigen Wettmöglichkeiten bist, ist Betano
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
        buttonTitle="Jetzt bei Betano anmelden und vom Willkommensbonus profitieren!"
      />

      <FAQSection faqs={provider.faqs} />
    </MainLayout>
  );
};

export default BetanoReview;
