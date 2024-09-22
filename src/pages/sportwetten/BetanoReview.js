import React from "react";
import { Typography, Box } from "@mui/material";
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
  // Angenommen, wir verwenden React Router und holen den Anbieternamen aus der URL
  const provider = providersData[["betano"]];

  if (!provider) {
    return <div>Anbieter nicht gefunden</div>;
  }

  const summary =
    "Betano hat sich in den letzten Jahren als einer der dynamischsten und innovativsten Sportwetten-Anbieter auf dem deutschen Markt etabliert. Mit einer breiten Palette von Sportarten, attraktiven Bonusangeboten und einer benutzerfreundlichen Plattform zieht Betano sowohl Anfänger als auch erfahrene Wettende an. In diesem umfassenden Test teilen wir unsere Betano Erfahrungen und untersuchen, ob der Anbieter seriös ist und ob er deinen individuellen Bedürfnissen entspricht.";

  const bonusContent = (
    <>
      <Typography variant="body1" paragraph>
        Betano begrüßt neue Kunden mit einem großzügigen Willkommensbonus. Du
        erhältst einen 100% Einzahlungsbonus von bis zu 100€ auf deine erste
        Einzahlung. Dieser Bonus ermöglicht es dir, mit doppeltem Budget in die
        Welt der Sportwetten einzusteigen. Zusätzlich gibt es eine 20€
        Gratiswette ohne Einzahlung.
      </Typography>
      <Typography variant="body1" paragraph>
        Um den Bonus zu erhalten, musst du dich registrieren und eine
        Mindesteinzahlung von 10€ tätigen. Der Bonusbetrag muss innerhalb von 90
        Tagen fünfmal mit einer Mindestquote von 1,65 umgesetzt werden. Es
        zählen sowohl Einzel- als auch Kombiwetten, jedoch sind Systemwetten von
        der Bonusaktion ausgeschlossen.
      </Typography>
      <Typography variant="body1" paragraph>
        Neben dem Willkommensbonus bietet Betano regelmäßig Promotionen für
        Bestandskunden an. Dazu gehören Gratiswetten, Quotenboosts und
        Cashback-Aktionen. Besonders hervorzuheben ist das Loyalitätsprogramm,
        bei dem du für jede Wette Punkte sammelst, die du später gegen Boni oder
        Gratiswetten eintauschen kannst.
      </Typography>
      <Typography variant="body1" paragraph>
        Unsere Erfahrungen zeigen, dass Betano eines der attraktivsten
        Bonusprogramme auf dem Markt bietet, das sowohl für Neulinge als auch
        für erfahrene Wettende interessant ist.
      </Typography>
    </>
  );

  const oddsContent = (
    <>
      <Typography variant="body1" paragraph>
        Betano überzeugt durch wettbewerbsfähige Quoten, die oft über dem
        Branchendurchschnitt liegen. Besonders bei Top-Events in Sportarten wie
        Fußball, Basketball und Tennis kannst du von hohen Quoten profitieren.
        Der durchschnittliche Quotenschlüssel liegt bei 95% bis 97%, was
        bedeutet, dass Betano nur eine geringe Marge einbehält und dir somit
        bessere Gewinnchancen bietet.
      </Typography>
      <Typography variant="body1" paragraph>
        In unseren Tests haben wir Betano mit anderen führenden Anbietern
        verglichen und festgestellt, dass Betano insbesondere bei Fußballwetten
        sehr attraktive Quoten anbietet. Auch die Live-Quoten sind stabil und
        passen sich schnell an das aktuelle Spielgeschehen an.
      </Typography>
      <Typography variant="body1" paragraph>
        Durch die hohen Wettquoten maximierst du deine potenziellen Gewinne und
        erhältst ein ausgezeichnetes Preis-Leistungs-Verhältnis.
      </Typography>
    </>
  );

  const sportsOfferContent = (
    <>
      <Typography variant="body1" paragraph>
        Das Wettangebot von Betano ist beeindruckend und deckt sowohl
        Mainstream- als auch Nischensportarten ab. Du kannst aus über 30
        verschiedenen Sportarten wählen, darunter Fußball, Basketball, Tennis,
        E-Sports, Handball, Volleyball und sogar Spezialwetten auf politische
        Ereignisse oder Unterhaltungsshows.
      </Typography>
      <Typography variant="body1" paragraph>
        Im Bereich Fußball sind nahezu alle internationalen Ligen und
        Wettbewerbe vertreten. Von der Bundesliga über die Premier League bis
        hin zur Champions League findest du ein umfangreiches Angebot. Auch
        untere Ligen und regionale Wettbewerbe sind verfügbar, was besonders für
        Fans des Amateurfußballs interessant ist.
      </Typography>
      <Typography variant="body1" paragraph>
        Die Anzahl der Wettmärkte pro Spiel ist ebenfalls beeindruckend. Du
        kannst aus über 200 verschiedenen Wettoptionen wählen, darunter
        klassische Wetten wie Sieg, Unentschieden oder Niederlage, aber auch
        Spezialwetten wie Handicap, Over/Under, beide Teams treffen oder genaue
        Ergebniswetten.
      </Typography>
      <Typography variant="body1" paragraph>
        Betano punktet zudem mit innovativen Funktionen wie dem Bet Mentor,
        einem Tool, das dir basierend auf deinen Präferenzen und deinem Budget
        Wettempfehlungen gibt. Die Match Combo-Funktion ermöglicht es dir,
        mehrere Wetten innerhalb eines Spiels zu kombinieren, um höhere Quoten
        zu erzielen.
      </Typography>
      <Typography variant="body1" paragraph>
        Mit diesem vielfältigen Angebot findest du garantiert die passenden
        Wetten für deine Interessen und Strategien.
      </Typography>
      <Typography variant="body1" paragraph>
        Die angebotenen Sportarten umfassen unter anderem:
      </Typography>
      <Box component="ul" sx={{ pl: 4 }}>
        <li>Fußball</li>
        <li>Tennis</li>
        <li>Basketball</li>
        <li>Eishockey</li>
        <li>Handball</li>
        <li>Darts</li>
        <li>Snooker</li>
        <li>Tischtennis</li>
        <li>eSports</li>
        {/* Weitere Sportarten */}
      </Box>
      <Typography variant="body1" paragraph>
        Die Tiefe des Wettangebots ist ebenfalls beeindruckend. Für einzelne
        Spiele stehen oft mehrere hundert Wettmärkte zur Verfügung, darunter
        Spezialwetten, Handicap-Wetten und Langzeitwetten.
      </Typography>
    </>
  );

  const paymentMethodsContent = (
    <>
      <Typography variant="body1" paragraph>
        Betano legt großen Wert auf sichere und schnelle Transaktionen und
        bietet eine Vielzahl bewährter Zahlungsmethoden an. Für Einzahlungen
        stehen dir Kreditkarten (Visa, Mastercard), E-Wallets (PayPal, Skrill,
        Neteller), Prepaid-Karten (Paysafecard) und Banküberweisungen
        (Sofortüberweisung, Trustly) zur Verfügung. Die Mindesteinzahlung
        beträgt 10€, und der Betrag steht dir sofort zum Wetten zur Verfügung.
      </Typography>
      <Typography variant="body1" paragraph>
        Auszahlungen können ebenfalls über verschiedene Methoden erfolgen,
        darunter Kreditkarten, E-Wallets und Banküberweisungen. Die
        Bearbeitungszeit für Auszahlungen liegt in der Regel zwischen 24 und 48
        Stunden, je nach gewählter Methode. Positiv hervorzuheben ist, dass
        Betano keine Gebühren für Ein- oder Auszahlungen erhebt.
      </Typography>
      <Typography variant="body1" paragraph>
        Die Vielfalt der Zahlungsmethoden sowie die schnellen Bearbeitungszeiten
        sorgen für ein reibungsloses Wetterlebnis.
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
        Der Kundensupport von Betano ist erstklassig und steht dir rund um die
        Uhr zur Verfügung. Du kannst den Support über Live-Chat, E-Mail oder
        eine kostenlose Hotline erreichen. Die Mitarbeiter sind kompetent,
        freundlich und bemüht, dein Anliegen schnell zu lösen.
      </Typography>
      <Typography variant="body1" paragraph>
        Besonders der Live-Chat überzeugt durch schnelle Reaktionszeiten; in
        unseren Tests haben wir in der Regel innerhalb von wenigen Sekunden eine
        Antwort erhalten. Die Hilfeseiten auf der Webseite sind ebenfalls
        ausführlich und beantworten die häufigsten Fragen bereits im Vorfeld.
      </Typography>
      <Typography variant="body1" paragraph>
        Unsere Erfahrungen zeigen, dass Betano großen Wert auf
        Kundenzufriedenheit legt und sich durch exzellenten Service auszeichnet.
      </Typography>
    </>
  );

  const taxFeesContent = (
    <>
      <Typography variant="body1" paragraph>
        In Deutschland unterliegen Sportwetten einer gesetzlichen Wettsteuer von
        5%. Betano legt diese Wettsteuer auf die Kunden um, was bedeutet, dass
        bei erfolgreichen Wetten 5% deines Gewinns einbehalten werden. Dein
        Einsatz bleibt dabei unverändert, sodass die Wettsteuer nur im
        Gewinnfall anfällt.
      </Typography>
      <Typography variant="body1" paragraph>
        Um dies zu veranschaulichen: Wenn du 100€ auf eine Quote von 2,0 setzt
        und gewinnst, beträgt dein Bruttogewinn 200€. Von diesem Betrag zieht
        Betano die Wettsteuer in Höhe von 5% ab, was 10€ entspricht. Dein
        Nettogewinn beläuft sich somit auf 190€. Bei verlorenen Wetten erfolgt
        kein Steuerabzug, da die Wettsteuer nur auf Gewinne erhoben wird.
      </Typography>
      <Typography variant="body1" paragraph>
        Hinsichtlich der Gebühren für Ein- und Auszahlungen zeigt sich Betano
        kundenfreundlich. Einzahlungen sind generell gebührenfrei und werden in
        der Regel sofort deinem Wettkonto gutgeschrieben. Auch Auszahlungen sind
        in den meisten Fällen kostenfrei. Die Bearbeitungszeit für Auszahlungen
        variiert je nach gewählter Zahlungsmethode, liegt aber meistens zwischen
        24 und 48 Stunden. Es ist wichtig zu beachten, dass bei bestimmten
        Zahlungsmethoden oder bei häufigen Auszahlungen innerhalb kurzer Zeit
        gelegentlich Gebühren anfallen können. Es empfiehlt sich daher, die
        aktuellen Konditionen auf der Betano-Webseite zu prüfen oder den
        Kundensupport zu kontaktieren.
      </Typography>
      <Typography variant="body1" paragraph>
        Obwohl die Umlegung der Wettsteuer auf den Kunden zunächst als Nachteil
        erscheinen mag, bleibt dein Einsatz vollständig für die Wette verfügbar.
        Es ist daher wichtig, die Wettsteuer in deine Gewinnkalkulation
        einzubeziehen, um realistische Erwartungen zu haben. Insgesamt zeigt
        sich Betano transparent in der Kommunikation über Steuern und Gebühren,
        was zu einem vertrauenswürdigen Gesamteindruck beiträgt.
      </Typography>
    </>
  );

  const mobileAppContent = (
    <>
      <Typography variant="body1" paragraph>
        In einer Zeit, in der mobiles Wetten immer wichtiger wird, hat Betano
        eine hervorragende Mobile App entwickelt. Die App ist für iOS und
        Android verfügbar und bietet das vollständige Wettangebot, das du auch
        auf der Desktop-Version findest. Die Benutzeroberfläche ist intuitiv
        gestaltet, sodass du dich schnell zurechtfindest.
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
        Besonders praktisch ist die Möglichkeit, Push-Benachrichtigungen zu
        aktivieren. So bleibst du immer auf dem Laufenden und verpasst keine
        wichtigen Ereignisse oder Promotionen. Die App läuft stabil und
        überzeugt durch schnelle Ladezeiten.
      </Typography>
      <Typography variant="body1" paragraph>
        Solltest du keine App installieren wollen, kannst du auch die mobile
        Webseite von Betano nutzen. Diese ist für alle gängigen Browser
        optimiert und bietet ebenfalls alle Funktionen der Desktop-Version.
      </Typography>
      <Typography variant="body1" paragraph>
        Die Betano App bietet somit ein herausragendes mobiles Wetterlebnis und
        ermöglicht es dir, jederzeit und überall zu wetten.
      </Typography>
    </>
  );

  const loyaltyProgramContent = (
    <>
      <Typography variant="body1" paragraph>
        Betano belohnt seine treuen Kunden mit einem umfangreichen
        Loyalitätsprogramm. Für jede platzierte Wette sammelst du
        Loyalitätspunkte, die du im Betano Shop gegen Gratiswetten, Boni oder
        Merchandise eintauschen kannst. Je aktiver du bist, desto schneller
        steigst du in höhere Level auf und erhältst bessere Prämien.
      </Typography>
      <Typography variant="body1" paragraph>
        Für High Roller und besonders aktive Kunden bietet Betano zudem
        exklusive VIP-Services an. Dazu gehören ein persönlicher Account
        Manager, individuelle Bonusangebote, höhere Einsatzlimits und
        Einladungen zu exklusiven Events.
      </Typography>
      <Typography variant="body1" paragraph>
        Das Treueprogramm von Betano ist eines der besten in der Branche und
        bietet echten Mehrwert für regelmäßige Nutzer.
      </Typography>
    </>
  );

  const cashOutContent = (
    <>
      <Typography variant="body1" paragraph>
        Die Cash-Out-Funktion von Betano ermöglicht es dir, deine Wetten
        vorzeitig auszuwerten. Das ist besonders praktisch, wenn sich der
        Spielverlauf anders entwickelt als erwartet oder du bereits einen
        Teilgewinn sichern möchtest.
      </Typography>
      <Typography variant="body1" paragraph>
        Du hast die Möglichkeit, einen vollständigen oder teilweisen Cash-Out
        vorzunehmen. Bei der teilweisen Auszahlung lässt du einen Teil deines
        Einsatzes weiterlaufen, während du den restlichen Betrag sicherst. Zudem
        bietet Betano einen automatischen Cash-Out an, bei dem du einen
        Schwellenwert festlegst, ab dem die Wette automatisch ausgezahlt wird.
      </Typography>
      <Typography variant="body1" paragraph>
        Die Cash-Out-Option steht für eine Vielzahl von Sportarten und Wettarten
        zur Verfügung, sowohl für Einzel- als auch für Kombiwetten. Dadurch hast
        du mehr Kontrolle über deine Wetten und kannst flexibel auf das
        Spielgeschehen reagieren.
      </Typography>
    </>
  );

  const conclusionContent = (
    <>
      <Typography variant="body1" paragraph>
        Insgesamt hat Betano in unserem Test überzeugt. Der Anbieter punktet mit einem umfangreichen Wettangebot, attraktiven Bonusaktionen und einer benutzerfreundlichen Plattform. Besonders hervorzuheben sind die hervorragende mobile App und der kompetente Kundensupport.
      </Typography>
      <Typography variant="body1" paragraph>
        Ein kleiner Nachteil ist die Weitergabe der Wettsteuer an die Kunden, was jedoch bei vielen Anbietern der Branche üblich ist. Dennoch überwiegen die Vorteile bei Weitem, und wir können Betano uneingeschränkt empfehlen.
      </Typography>
      <Typography variant="body1" paragraph>
        Wenn du auf der Suche nach einem zuverlässigen und innovativen Wettanbieter bist, der dir ein erstklassiges Wetterlebnis bietet, solltest du Betano definitiv ausprobieren.
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

      <ProsConsSection
        pros={provider.pros}
        cons={provider.cons}
        summary="Insgesamt überwiegen die Vorteile bei Weitem und die wenigen Nachteile fallen im Gesamtbild kaum ins Gewicht."
      />

      <ConclusionSection
        conclusionContent={conclusionContent}
        ratings={provider.ratings}
        ctaLink={provider.ctaLink}
      />

      <FAQSection faqs={provider.faqs} />
    </MainLayout>
  );
};

export default BetanoReview;
