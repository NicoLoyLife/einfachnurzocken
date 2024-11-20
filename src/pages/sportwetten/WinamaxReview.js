import React from "react";
import { Typography, Box, Button } from "@mui/material";
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
import CustomList from "../../components/common/CustomList";

const WinamaxReview = () => {
  const provider = sportsbettingProvidersData[["winamax"]];

  if (!provider) {
    return <div>Anbieter nicht gefunden</div>;
  }
  const summary = (
    <>
      <Typography variant="body1" gutterBottom>
        Winamax ist ein innovativer und zukunftsorientierter
        Sportwetten-Anbieter mit Sitz in Paris. Mit einzigartigen Features,
        spannenden Aktionen und steuerfreien Wetten bietet Winamax ein
        umfassendes Erlebnis für Sportwetten-Fans. Der Anbieter kombiniert
        attraktive Boni mit erstklassigem Service und modernster Technologie, um
        Neueinsteigern und erfahrenen Spielern gleichermaßen ein unschlagbares
        Angebot zu bieten.
      </Typography>
    </>
  );

  const bonusContent = (
    <>
      <Typography variant="body1" paragraph>
        Winamax überzeugt mit einem der attraktivsten Willkommensboni und
        regelmäßigen Promotionen, die sowohl neue als auch bestehende Spieler
        begeistern. Hier erfährst du alles über die Bonusangebote und Aktionen,
        die Winamax zu einem der besten Anbieter auf dem Markt machen.
      </Typography>
      <Typography variant="h3" component="h3" gutterBottom>
        Willkommensbonus: Bis zu 100€ in Freebets
      </Typography>
      <Typography variant="body1" paragraph>
        Neue Spieler werden bei Winamax mit einem unkomplizierten und
        großzügigen Willkommensbonus begrüßt. Bei der ersten Einzahlung
        verdoppelt der Anbieter den Betrag bis zu einem Maximum von 100 € in
        Form von Freebets.
      </Typography>

      <Typography variant="h4" component="h4" gutterBottom>
        So funktioniert der Bonus:
      </Typography>

      <CustomList
        listItems={[
          "Tätige eine Einzahlung ab mindestens 10 €.",
          "Winamax gewährt dir den gleichen Betrag als Freebets – ohne versteckte Bedingungen.",
          "Maximal kannst du 100 € als Freebets erhalten.",
        ]}
      />

      <Typography variant="h4" component="h4" gutterBottom>
        Beispiel:
      </Typography>

      <CustomList
        listItems={[
          "Du zahlst 50€ ein und erhältst 50€ in Freebets",
          "Du zahlst 100€ ein und erhältst 100€ in Freebets",
          "Du zahlst 200€ ein und erhältst 100€ in Freebets",
        ]}
      />

      <Typography variant="h4" component="h4" gutterBottom>
        Bedingungen für den Bonus:
      </Typography>

      <CustomList
        listItems={[
          "Die Einzahlung muss mindestens einmal zu einer Mindestquote von 1,05 umgesetzt werden.",
          "Es gibt kein Zeitlimit, sodass du den Bonus in deinem eigenen Tempo umsetzen kannst.",
          "Nur die ersten 100 € der Einzahlung unterliegen den Bonusbedingungen.",
        ]}
      />

      <Typography variant="body1" paragraph>
        Dieser Willkommensbonus ist besonders attraktiv, da er keine
        komplizierten Umsatzanforderungen beinhaltet und dir maximale
        Flexibilität bietet.
      </Typography>

      <Typography variant="h3" component="h3" gutterBottom>
        Regelmäßige Aktionen für Bestandskunden
      </Typography>

      <Typography variant="body1" paragraph>
        Winamax sorgt nicht nur für einen starken Einstieg, sondern belohnt auch
        treue Spieler mit innovativen Aktionen und regelmäßigen Boni:
      </Typography>

      <Typography variant="h4" component="h4" gutterBottom>
        1. Torschützen-Garantie:
      </Typography>
      <CustomList
        listItems={[
          "Setze auf einen Spieler als Torschützen. Wird er in der ersten Halbzeit ausgewechselt und sein Ersatzspieler trifft nicht, erhältst du deinen Einsatz zurück.",
          "Sollte der Ersatzspieler jedoch treffen, gewinnt deine Wette trotzdem!",
        ]}
      />

      <Typography variant="h4" component="h4" gutterBottom>
        2. Quoten-Boost:
      </Typography>
      <CustomList
        listItems={[
          "Winamax bietet regelmäßig erhöhte Quoten auf ausgewählte Spiele und Wettmärkte.",
          "Diese Boosts sind ideal, um deinen Gewinn bei Top-Spielen zu maximieren.",
        ]}
      />

      <Typography variant="h4" component="h4" gutterBottom>
        3. Swipe-Funktion:
      </Typography>
      <CustomList
        listItems={[
          "Eine der innovativsten Funktionen von Winamax: Durch einfaches Swipen kannst du deinen Wettschein spielerisch zusammenstellen.",
          "Intuitiv und effizient – perfekt für mobile Nutzer.",
        ]}
      />

      <Typography variant="h4" component="h4" gutterBottom>
        4. Winamax-Boutique:
      </Typography>
      <CustomList
        listItems={[
          "Für jede abgeschlossene Wette sammelst du Treuepunkte (Miles), die du in der Winamax-Boutique einlösen kannst.",
          "Prämien umfassen Freebets, Cash-Boni, Gaming-Zubehör und vieles mehr.",
        ]}
      />

      <Typography variant="h4" component="h4" gutterBottom>
        5. Livewetten und MyMatch:
      </Typography>
      <CustomList
        listItems={[
          "Kombiniere verschiedene Wettmöglichkeiten eines Spiels in einer einzigen Wette m der MyMatch-Funktion.",
          "Nutze Livewetten für spontane Entscheidungen während des Spiels.",
        ]}
      />

      <Typography variant="h3" component="h3" gutterBottom>
        Exklusiv: Steuerfreie Wette
      </Typography>

      <Typography variant="body1" paragraph>
        Ein weiterer großer Vorteil von Winamax ist die Übernahme der
        gesetzlichen Wettsteuer von 5 %. Dies bedeutet, dass deine Einsätze und
        Gewinne vollständig dir gehören – ohne Abzüge.
      </Typography>

      <Typography variant="h4" component="h4" gutterBottom>
        Vorteile der steuerfreien Wetten:
      </Typography>
      <CustomList
        listItems={[
          "Höhere Gewinne: Du erhältst 100 % deines Einsatzes und deiner Gewinne.",
          "Kein zusätzlicher Aufwand: Die Steuer wird automatisch von Winamax übernommen.",
        ]}
      />

      <Typography variant="body1" paragraph>
        Winamax setzt Maßstäbe bei Bonusprogrammen und Promotionen. Der
        Willkommensbonus ist einfach umzusetzen und bietet mit Freebets einen
        großartigen Einstieg in die Welt der Sportwetten. Ergänzt durch
        regelmäßige Aktionen, steuerfreie Wetten und die innovative
        Swipe-Funktion, bietet Winamax ein umfassendes und spannendes Erlebnis
        für alle Sportwetten-Fans.
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
          Jetzt bei Winamax anmelden und Bonus kassieren!
        </Button>
      </Box>
    </>
  );

  const oddsContent = (
    <>
      <Typography variant="body1" paragraph>
        Winamax überzeugt mit durchgehend attraktiven Wettquoten, die vor allem
        bei populären Sportarten wie Fußball, Tennis und Basketball zur
        Spitzengruppe gehören. Egal, ob du auf ein Top-Spiel der Champions
        League oder auf ein spannendes Tennismatch setzt – die Quoten bei
        Winamax bieten dir stets die Möglichkeit, das Maximum aus deinen Wetten
        herauszuholen.
      </Typography>

      <Typography variant="h3" component="h3" gutterBottom>
        Attraktive Quoten für Sportwetten
      </Typography>

      <CustomList
        listItems={[
          "Hohe Quoten auf Favoriten: Winamax gehört zu den Anbietern mit besonders wettbewerbsfähigen Quoten für Favoriten in beliebten Sportarten. Das macht die Plattform ideal für Spieler, die auf sichere Tipps setzen möchten.",
          "Starke Quoten bei Außenseitern: Neben den Favoriten punktet Winamax auch mit attraktiven Quoten für Außenseiter. Dies bietet dir die Möglichkeit, bei Überraschungen überdurchschnittliche Gewinne zu erzielen.",
          "Konstante Quoten: Winamax vermeidet extreme Schwankungen und sorgt für eine stabile Preisgestaltung, sodass du deine Wetten jederzeit optimal planen kannst.",
        ]}
      />

      <Typography variant="h3" component="h3" gutterBottom>
        Quoten-Boosts: Mehr Gewinn bei ausgewählten Wetten
      </Typography>
      <Typography variant="body1" paragraph>
        Winamax bietet regelmäßig spezielle Quoten-Boosts, die dir die Chance
        geben, auf ausgewählte Spiele oder Wettmärkte zu deutlich verbesserten
        Konditionen zu setzen. Diese Aktionen sind ideal, um bei besonders
        interessanten Events deinen Gewinn zu maximieren.
      </Typography>

      <Typography variant="h4" component="h4" gutterBottom>
        Beispiel für einen Quoten-Boost:
      </Typography>
      <Typography variant="body1" paragraph>
        Statt einer regulären Quote von 2,50 auf einen Sieg erhältst du
        beispielsweise eine erhöhte Quote von 3,00. Diese gesteigerten Gewinne
        werden direkt deinem Konto gutgeschrieben.
      </Typography>

      <Typography variant="h3" component="h3" gutterBottom>
        Vielfältige Wettmärkte mit Top-Quoten
      </Typography>
      <Typography variant="body1" paragraph>
        Winamax punktet nicht nur mit hohen Standardquoten, sondern auch mit
        einer großen Auswahl an Wettmärkten:
      </Typography>
      <CustomList
        listItems={[
          "Einzel- und Kombiwetten: Attraktive Quoten für klassische Wettscheine.",
          "Spezialwetten: Mit innovativen Wettarten wie MyMatch kannst du verschiedene Ereignisse innerhalb eines Spiels kombinieren (z. B. Spielergebnis + Torschütze).",
          "Livewetten: Besonders bei Livewetten überzeugt Winamax mit dynamischen und schnellen Anpassungen der Quoten, die dir jederzeit einen fairen Preis bieten.",
        ]}
      />

      <Typography variant="h3" component="h3" gutterBottom>
        Warum die Quoten bei Winamax überzeugen
      </Typography>
      <CustomList
        listItems={[
          "Marktführend bei populären Sportarten: Besonders in Fußball, Tennis und Basketball gehört Winamax zu den besten Anbietern.",
          "Stabile Quoten: Keine überraschenden Schwankungen, ideal für langfristige Strategien.",
          "Quoten-Boosts: Zusätzliche Gewinnmöglichkeiten bei ausgewählten Spielen.",
          "Große Vielfalt: Von klassischen Einzelwetten bis zu kreativen Spezialwetten wie MyMatch bietet Winamax für jeden Spieler den passenden Markt.",
        ]}
      />

      <Typography variant="body1" paragraph>
        Die Wettquoten bei Winamax sind ein echtes Highlight für
        Sportwetten-Fans. Mit konstant hohen Quoten, regelmäßigen Boosts und
        einer breiten Palette an Wettmärkten maximierst du deine Gewinnchancen.
        Besonders die attraktiven Quoten bei Top-Sportarten und die Flexibilität
        bei Spezialwetten machen Winamax zu einer hervorragenden Wahl für
        Anfänger und erfahrene Wettprofis gleichermaßen.
      </Typography>
    </>
  );

  const sportsOfferContent = (
    <>
      <Typography variant="body1" paragraph>
        Winamax bietet eines der vielseitigsten und umfassendsten Wettangebote
        auf dem Markt, das sowohl Anfänger als auch erfahrene Wettfans
        anspricht. Mit einer beeindruckenden Auswahl an Sportarten, innovativen
        Wettmärkten und kreativen Wettfunktionen stellt Winamax sicher, dass es
        für jeden etwas zu entdecken gibt.
      </Typography>

      <Typography variant="h3" component="h3" gutterBottom>
        Breite Auswahl an Sportarten
      </Typography>
      <Typography variant="body1" paragraph>
        Winamax deckt ein breites Spektrum an Sportarten ab, von weltweit
        beliebten Klassikern bis hin zu Nischensportarten:
      </Typography>

      <Typography variant="h4" component="h4" gutterBottom>
        Populäre Sportarten:
      </Typography>
      <CustomList
        listItems={[
          "Fußball (inkl. Bundesliga, Premier League, Champions League)",
          "Tennis (ATP, WTA, Grand Slams)",
          "Basketball (NBA, EuroLeague)",
          "American Football (NFL)",
          "eSports (Counter-Strike, League of Legends, Dota 2)",
        ]}
      />

      <Typography variant="h4" component="h4" gutterBottom>
        Nischensportarten:
      </Typography>
      <CustomList listItems={["Darts, Snooker, Cricket, Handball und mehr."]} />

      <Typography variant="body1" paragraph>
        Diese Vielfalt macht Winamax zur idealen Plattform für Sportfans mit
        unterschiedlichsten Interessen.
      </Typography>

      <Typography variant="h3" component="h3" gutterBottom>
        Innovative Wettmöglichkeiten
      </Typography>
      <Typography variant="body1" paragraph>
        Winamax hebt sich durch seine innovativen Wettoptionen von der
        Konkurrenz ab:
      </Typography>
      <CustomList
        listItems={[
          "Einzelwetten: Klassische Wetten auf Ergebnisse, Tore, Torschützen und mehr.",
          "Kombiwetten: Kombiniere mehrere Tipps zu einer Wette und erhöhe deinen potenziellen Gewinn.",
          "MyMatch: Mit MyMatch kannst du verschiedene Wetten auf ein Spiel kombinieren, z. B. das Spielergebnis, die Anzahl der Ecken und den ersten Torschützen. Diese Funktion bietet dir maximale Flexibilität und ermöglicht individuelle Wettstrategien.",
          "Livewetten: Setze während eines laufenden Spiels in Echtzeit. Dynamische Quoten und schnelle Aktualisierungen sorgen für Spannung. Verfolge bis zu vier Spiele gleichzeitig im Live-Stream.",
        ]}
      />

      <Typography variant="h3" component="h3" gutterBottom>
        Livewetten & Streaming
      </Typography>
      <Typography variant="body1" paragraph>
        Ein besonderes Highlight bei Winamax ist das umfangreiche
        Livewetten-Angebot, kombiniert mit einem der besten
        Live-Streaming-Dienste:
      </Typography>
      <CustomList
        listItems={[
          "Live-Streaming: Verfolge Tausende Sportevents direkt auf der Plattform, darunter Fußball, Tennis und Basketball.",
          "Multiscreen-Konferenz: Sieh dir bis zu vier Spiele gleichzeitig an und platziere deine Wetten in Echtzeit.",
          "Schnelle Updates: Dynamische Quoten sorgen dafür, dass du immer optimal reagieren kannst.",
        ]}
      />

      <Typography variant="h3" component="h3" gutterBottom>
        Warum Winamax überzeugt
      </Typography>
      <CustomList
        listItems={[
          "Umfangreiches Wettangebot: Von Standardwetten bis zu Spezialwetten wie MyMatch findest du alles, was du für ein abwechslungsreiches Wetterlebnis brauchst.",
          "Breite Sportarten-Auswahl: Egal, ob du dich für Fußball, Tennis oder Nischensportarten interessierst – bei Winamax wirst du fündig.",
          "Innovative Features: Funktionen wie MyMatch und die Live-Konferenz sorgen für ein modernes und spannendes Wetterlebnis.",
          "Echtzeit-Erlebnis: Kombiniere Livewetten mit Live-Streaming und bleib immer mitten im Geschehen.",
        ]}
      />

      <Typography variant="body1" paragraph>
        Das Sportarten- und Wettangebot von Winamax ist vielseitig, innovativ
        und benutzerfreundlich. Die große Auswahl an Sportarten, kombiniert mit
        kreativen Wettmöglichkeiten wie MyMatch und einem herausragenden
        Livewetten-Bereich, macht Winamax zu einer der besten Plattformen für
        alle Sportwetten-Fans. Egal, ob du auf klassische Einzelwetten,
        Kombiwetten oder Livewetten setzt – bei Winamax findest du ein
        erstklassiges Angebot, das keine Wünsche offenlässt.
      </Typography>
    </>
  );

  const paymentMethodsContent = (
    <>
      <Typography variant="body1" paragraph>
        Winamax legt großen Wert auf Sicherheit, Benutzerfreundlichkeit und
        Flexibilität bei allen Zahlungsprozessen. Egal ob Einzahlung oder
        Auszahlung – der Anbieter sorgt dafür, dass die Abwicklung schnell,
        sicher und gebührenfrei erfolgt. Die breite Auswahl an Zahlungsmethoden
        macht es jedem Spieler einfach, die passende Option zu finden.
      </Typography>

      <Typography variant="h3" component="h3" gutterBottom>
        Einzahlungsmöglichkeiten
      </Typography>
      <Typography variant="body1" paragraph>
        Bei Winamax kannst du aus einer Vielzahl an bewährten und sicheren
        Zahlungsmethoden wählen:
      </Typography>
      <CustomList
        listItems={[
          "PayPal: Eine der beliebtesten und sichersten Zahlungsmethoden in Deutschland.",
          "Visa und Mastercard: Kreditkartenzahlungen sind schnell und unkompliziert.",
          "Klarna/Sofortüberweisung: Direkte Transaktionen über dein Online-Banking ohne zusätzliche Registrierung.",
          "Skrill und Neteller: Schnelle und flexible E-Wallet-Lösungen, ideal für Online-Wetten.",
        ]}
      />

      <Typography variant="h4" component="h4" gutterBottom>
        Highlights der Einzahlung:
      </Typography>

      <CustomList
        listItems={[
          "Mindesteinzahlung: Bereits ab 10 € kannst du dein Konto aufladen.",
          "Gebührenfrei: Alle Einzahlungen sind ohne zusätzliche Kosten.",
          "Echtzeit-Transaktionen: Die meisten Einzahlungen werden sofort gutgeschrieben, sodass du direkt loslegen kannst.",
        ]}
      />

      <Typography variant="h3" component="h3" gutterBottom>
        Auszahlungen bei Winamax
      </Typography>
      <Typography variant="body1" paragraph>
        Auch bei den Auszahlungen überzeugt Winamax mit einem schnellen und
        reibungslosen Prozess:
      </Typography>
      <CustomList
        listItems={[
          "Blitz-Auszahlungen: Gewinne werden innerhalb von wenigen Stunden bearbeitet – bei E-Wallets wie PayPal oder Skrill oft sogar in Echtzeit.",
          "Zuverlässigkeit: Alle Transaktionen sind durch modernste Verschlüsselungstechnologien geschützt.",
          "Gebührenfrei: Wie bei den Einzahlungen erhebt Winamax auch bei Auszahlungen keine Gebühren.",
        ]}
      />

      <Typography variant="body1" paragraph>
        Winamax bietet eine beeindruckende Kombination aus
        Benutzerfreundlichkeit, Sicherheit und Flexibilität bei allen
        Zahlungsprozessen. Die gebührenfreien Transaktionen, schnelle
        Auszahlungen und die Übernahme der Wettsteuer machen den Anbieter
        besonders attraktiv. Egal, ob du Einzahlungen mit PayPal, Kreditkarte
        oder Sofortüberweisung bevorzugst – bei Winamax wird der Zahlungsprozess
        einfach und sorgenfrei gestaltet.
      </Typography>

      {/* Die Zahlungsmethoden werden in der Komponente angezeigt */}
    </>
  );

  const customerSupportContent = (
    <>
      <Typography variant="body1" paragraph>
        Winamax legt großen Wert auf einen exzellenten Kundensupport, der dir
        bei Fragen, Problemen oder Anmerkungen schnell und kompetent zur Seite
        steht. Egal, ob es sich um allgemeine Anliegen oder spezifische Probleme
        handelt – das Support-Team von Winamax ist zuverlässig und leicht
        erreichbar.
      </Typography>

      <Typography variant="h3" component="h3" gutterBottom>
        Kontaktmöglichkeiten
      </Typography>
      <Typography variant="body1" paragraph>
        Winamax bietet mehrere Wege, um Hilfe zu erhalten:
      </Typography>
      <CustomList
        listItems={[
          "E-Mail: Der Support ist rund um die Uhr unter support@winamax.de erreichbar. Hier kannst du deine Anliegen detailliert schildern und erhältst meist innerhalb kurzer Zeit eine Antwort.",
          "FAQ-Bereich: In der umfangreichen FAQ-Sektion findest du Antworten auf die häufigsten Fragen zu Themen wie Ein- und Auszahlungen, Bonusbedingungen oder technischen Problemen.",
          "Soziale Medien: Winamax ist auf Plattformen wie Twitter aktiv und bietet hier zusätzliche Informationen und Updates.",
        ]}
      />

      <Typography variant="h3" component="h3" gutterBottom>
        Qualität des Supports
      </Typography>
      <Typography variant="body1" paragraph>
        Der Kundensupport bei Winamax zeichnet sich durch schnelle
        Reaktionszeiten, freundliche Mitarbeiter und klare, hilfreiche Antworten
        aus. Das Support-Team nimmt sich Zeit, um deine Fragen umfassend zu
        beantworten, und bemüht sich, für jedes Problem die bestmögliche Lösung
        zu finden.
      </Typography>
      <Typography variant="h4" component="h4" gutterBottom>
        Hauptmerkmale des Supports:
      </Typography>
      <CustomList
        listItems={[
          "Kompetenz: Die Mitarbeiter sind gut geschult und können auch bei komplexeren Fragen weiterhelfen.",
          "Freundlichkeit: Ein höflicher und professioneller Umgangston ist bei jedem Kontakt garantiert.",
          "Effizienz: Anliegen werden schnell bearbeitet, sodass lange Wartezeiten vermieden werden.",
        ]}
      />

      <Typography variant="body1" paragraph>
        Der Kundensupport von Winamax gehört zu den besten in der Branche. Die
        Kombination aus verschiedenen Kontaktmöglichkeiten, schneller
        Reaktionszeit und kompetenten Antworten sorgt dafür, dass sich Spieler
        stets gut aufgehoben fühlen. Egal, ob du Hilfe bei einer Einzahlung
        benötigst, Fragen zu deinem Bonus hast oder technische Unterstützung
        suchst – der Support von Winamax steht dir jederzeit zur Verfügung.
      </Typography>
    </>
  );

  const taxFeesContent = (
    <>
      <Typography variant="body1" paragraph>
        Ein entscheidender Vorteil von Winamax im Vergleich zu vielen anderen
        Wettanbietern ist die Übernahme der gesetzlichen Wettsteuer von 5 %. Das
        bedeutet, dass du als Spieler deinen gesamten Einsatz und Gewinn ohne
        Abzüge behältst – ein großer Pluspunkt, der sich direkt auf deinen
        Gewinn auswirkt.
      </Typography>
      <Typography variant="h3" component="h3">
        Steuerfreie Wetten: Mehr Gewinn für dich
      </Typography>

      <Typography variant="body1" paragraph>
        Die Wettsteuer von 5 %, die in Deutschland gesetzlich vorgeschrieben
        ist, wird bei Winamax vollständig vom Anbieter übernommen. Du musst dich
        nicht um zusätzliche Berechnungen oder Abzüge kümmern und profitierst
        von 100 % deiner Einsätze und Gewinne.
      </Typography>

      <Typography variant="h4" component="h4" gutterBottom>
        Vorteile der steuerfreien Wetten bei Winamax:
      </Typography>
      <CustomList
        listItems={[
          "Höhere Gewinne: Deine Gewinne werden in voller Höhe ausgezahlt, ohne dass die Wettsteuer abgezogen wird.",
          "Automatische Steuerübernahme: Winamax kümmert sich im Hintergrund um die Abwicklung der Steuer, sodass du dich voll auf dein Spielerlebnis konzentrieren kannst.",
        ]}
      />

      <Typography variant="h4" component="h4" gutterBottom>
        Beispiel:
      </Typography>
      <CustomList
        listItems={[
          "Bei einem Einsatz von 100 € auf eine Quote von 2,00 beträgt dein Gewinn bei einem Treffer 200 € – ohne Abzug der Wettsteuer.",
        ]}
      />

      <Typography variant="h3" component="h3">
        Gebührenfreie Ein- und Auszahlungen
      </Typography>
      <Typography variant="body1" paragraph>
        Neben der Steuerfreiheit punktet Winamax auch mit gebührenfreien
        Transaktionen:
      </Typography>
      <CustomList
        listItems={[
          "Einzahlungen: Egal, welche Zahlungsmethode du wählst – alle Einzahlungen bei Winamax sind kostenlos.",
          "Auszahlungen: Auch für Auszahlungen fallen keine Gebühren an, sodass du den vollen Betrag auf dein Konto erhältst.",
          "Schnelle Transaktionen: Besonders bei E-Wallets wie PayPal oder Skrill erfolgt die Auszahlung häufig innerhalb weniger Stunden.",
        ]}
      />

      <Typography variant="h3" component="h3">
        Transparenz und Fairness
      </Typography>
      <Typography variant="body1" paragraph>
        Winamax setzt auf maximale Transparenz bei allen Gebühren und Abzügen.
        Es gibt keine versteckten Kosten oder zusätzlichen Aufschläge, die deine
        Einsätze oder Gewinne beeinträchtigen könnten. Dies schafft Vertrauen
        und macht Winamax zu einem der kundenfreundlichsten Anbieter auf dem
        Markt.
      </Typography>

      <Typography variant="body1" paragraph>
        Winamax bietet ein herausragendes Angebot für Sportwetten-Fans, die
        ihren Gewinn maximieren möchten. Die Übernahme der Wettsteuer bedeutet,
        dass du immer 100 % deines Einsatzes und Gewinns behältst, ohne Abzüge
        oder Mehraufwand. Kombiniert mit gebührenfreien Ein- und Auszahlungen
        setzt Winamax in puncto Transparenz und Fairness neue Maßstäbe.
      </Typography>
    </>
  );

  const mobileAppContent = (
    <>
      <Typography variant="body1" paragraph>
        Winamax bietet ein herausragendes mobiles Wetterlebnis, das speziell für
        Nutzer entwickelt wurde, die auch unterwegs nicht auf spannende Wetten
        verzichten möchten. Mit einer intuitiven App und einer optimierten
        mobilen Webseite garantiert Winamax maximale Benutzerfreundlichkeit und
        Funktionalität auf allen Geräten.
      </Typography>

      <Typography variant="h3" component="h3" gutterBottom>
        Winamax-App: Dein Wetterlebnis für unterwegs
      </Typography>
      <Typography variant="body1" paragraph>
        Die Winamax-App ist sowohl für iOS- als auch für Android-Geräte
        verfügbar und bietet alle Funktionen, die du von der Desktop-Version
        kennst. Egal, ob du Wetten platzieren, Spiele live verfolgen oder
        Einzahlungen tätigen möchtest – die App macht es dir einfach.
      </Typography>

      <Typography variant="h4" component="h4" gutterBottom>
        Hauptmerkmale der Winamax-App:
      </Typography>
      <CustomList
        listItems={[
          "Live-Streaming: Verfolge Tausende von Sportevents in Echtzeit, direkt in der App.",
          "MyMatch: Kombiniere verschiedene Wettmöglichkeiten eines Spiels intuitiv und mobil.",
          "Livewetten: Platziere Wetten während des Spiels mit dynamischen Quoten und schnellen Aktualisierungen.",
          "Cash-Out-Funktion: Sichere deine Gewinne oder reduziere Verluste direkt in der App.",
          "Benutzerfreundlichkeit: Klare Navigation, schnelle Ladezeiten und ein ansprechendes Design sorgen für ein reibungsloses Wetterlebnis.",
        ]}
      />

      <Typography variant="h3" component="h3" gutterBottom>
        Optimierte mobile Webseite
      </Typography>
      <Typography variant="body1" paragraph>
        Für Nutzer, die keine App herunterladen möchten, bietet Winamax eine
        perfekt optimierte mobile Webseite. Diese ist über jeden Browser
        aufrufbar und passt sich automatisch an die Größe deines Geräts an.
      </Typography>
      <Typography variant="h4" component="h4" gutterBottom>
        Funktionen der mobilen Webseite:
      </Typography>
      <CustomList
        listItems={[
          "Zugriff auf alle Wettmöglichkeiten, Live-Streams und Funktionen der Desktop-Version.",
          "Schnelle Ladezeiten und intuitive Bedienung.",
          "Keine Installation erforderlich – ideal für Gelegenheitsnutzer.",
        ]}
      />

      <Typography variant="body1" paragraph>
        Die Winamax-App und die optimierte mobile Webseite setzen Maßstäbe im
        Bereich der mobilen Sportwetten. Mit einer benutzerfreundlichen
        Oberfläche, innovativen Funktionen und umfassenden Wettmöglichkeiten
        bietet Winamax alles, was du für ein erstklassiges mobiles Wetterlebnis
        benötigst. Egal, ob du Wetten platzierst, Spiele live streamst oder
        Gewinne sicherst – bei Winamax bist du auch unterwegs bestens
        ausgestattet.
      </Typography>
    </>
  );

  const loyaltyProgramContent = (
    <>
      <Typography variant="body1" paragraph>
        Winamax belohnt loyale Spieler mit einem einzigartigen Treueprogramm und
        exklusiven VIP-Services, die dein Wetterlebnis auf ein neues Level
        heben. Egal, ob du gelegentlich wettest oder ein echter Highroller bist
        – das Programm bietet dir zahlreiche Vorteile und Prämien, die sich
        lohnen.
      </Typography>

      <Typography variant="h3" component="h3" gutterBottom>
        Das Winamax Treueprogramm
      </Typography>
      <Typography variant="body1" paragraph>
        Das Treueprogramm von Winamax basiert auf dem Sammeln von Miles, die für
        jede abgeschlossene Wette gutgeschrieben werden. Diese Punkte kannst du
        in der exklusiven Winamax-Boutique gegen attraktive Belohnungen
        eintauschen.
      </Typography>
      <Typography variant="h4" component="h4" gutterBottom>
        So funktioniert es:
      </Typography>
      <CustomList
        listItems={[
          "Punkte sammeln: Für jede platzierte Wette erhältst du abhängig von deinem Einsatz und den Quoten eine bestimmte Anzahl von Miles.",
          "Multiplikatoren: Je höher dein VIP-Status, desto schneller sammelst du Miles durch Multiplikator-Boni.",
          "Belohnungen einlösen: Tausche deine gesammelten Miles gegen Freebets, Cash-Prämien, Gaming-Zubehör oder andere Sachpreise ein.",
        ]}
      />

      <Typography variant="h3" component="h3" gutterBottom>
        Exklusive Vorteile für VIPs
      </Typography>
      <Typography variant="body1" paragraph>
        Winamax belohnt seine treuesten Spieler mit einem gestaffelten
        VIP-Programm, das zusätzlichen Mehrwert bietet. Je höher dein Status,
        desto besser werden die Vorteile.
      </Typography>
      <Typography variant="h4" component="h4" gutterBottom>
        VIP-Vorteile im Überblick:
      </Typography>
      <CustomList
        listItems={[
          "Höhere Multiplikatoren: Verdiene Miles schneller, je höher dein VIP-Level ist.",
          "Exklusive Prämien: Zugriff auf besondere Belohnungen in der Boutique, die nur VIP-Mitglieder erhalten.",
          "Personalisierter Service: Als VIP erhältst du eine bevorzugte Behandlung, einschließlich eines direkten Ansprechpartners.",
        ]}
      />

      <Typography variant="h3" component="h3" gutterBottom>
        Die Winamax-Boutique: Prämien für deine Treue
      </Typography>
      <Typography variant="body1" paragraph>
        In der Winamax-Boutique kannst du deine gesammelten Miles gegen
        hochwertige Prämien eintauschen. Die Auswahl ist vielfältig und bietet
        für jeden Spieler etwas:
      </Typography>
      <Typography variant="h4" component="h4" gutterBottom>
        Prämienangebote:
      </Typography>
      <CustomList
        listItems={[
          "Freebets: Tausche deine Punkte gegen zusätzliche Wetteinsätze.",
          "Cash-Prämien: Gewinne echtes Geld für deine Miles.",
          "Sachpreise: Gaming-Zubehör, exklusive Merchandising-Artikel und vieles mehr.",
        ]}
      />

      <Typography variant="body1" paragraph>
        Das Treueprogramm von Winamax ist eine der besten Möglichkeiten, das
        Beste aus deinen Wetten herauszuholen. Mit einem klaren System,
        spannenden Belohnungen und exklusiven VIP-Services sorgt Winamax dafür,
        dass Treue immer belohnt wird. Egal, ob du auf Freebets, Cash oder
        Sachpreise aus bist – das Programm bietet dir vielfältige Optionen und
        einen echten Mehrwert.
      </Typography>
    </>
  );

  const cashOutContent = (
    <>
      <Typography variant="body1" paragraph>
        Die Cash-Out-Funktion von Winamax gibt dir volle Kontrolle über deine
        Wetten und ermöglicht es dir, Gewinne frühzeitig zu sichern oder
        Verluste zu minimieren. Mit dieser flexiblen Option kannst du deine
        Wettstrategie individuell anpassen und auf Veränderungen in Echtzeit
        reagieren.
      </Typography>

      <Typography variant="h3" component="h3" gutterBottom>
        Was ist die Cash-Out-Funktion?
      </Typography>
      <Typography variant="body1" paragraph>
        Die Cash-Out-Funktion erlaubt es dir, deine Wetten vorzeitig zu beenden
        – noch bevor das Ergebnis des Events feststeht. Dabei kannst du entweder
        einen Gewinn sichern, wenn sich die Wette zu deinen Gunsten entwickelt,
        oder einen Teil deines Einsatzes zurückholen, falls der Ausgang unsicher
        ist.
      </Typography>
      <Typography variant="h4" component="h4" gutterBottom>
        Beispiel:
      </Typography>
      <CustomList
        listItems={[
          "Gewinn sichern: Deine Mannschaft führt 2:0, aber du bist unsicher, ob sie den Vorsprung halten kann. Mit Cash-Out sicherst du deinen Gewinn sofort.",
          "Verlust minimieren: Dein Team liegt zurück, aber es besteht noch eine geringe Chance auf einen Ausgleich. Mit Cash-Out kannst du einen Teil deines Einsatzes zurückerhalten.",
        ]}
      />

      <Typography variant="h3" component="h3" gutterBottom>
        Cash-Out-Optionen bei Winamax
      </Typography>
      <Typography variant="body1" paragraph>
        Winamax bietet verschiedene Möglichkeiten, die Cash-Out-Funktion zu
        nutzen:
      </Typography>
      <CustomList
        listItems={[
          "Vollständiger Cash-Out: Beende die Wette komplett und nimm den aktuellen Cash-Out-Betrag an.",
          "Teilweiser Cash-Out: Sichere dir einen Teil deines Gewinns, während der Restbetrag weiterläuft.",
        ]}
      />
      <Typography variant="body1" paragraph>
        Diese Flexibilität gibt dir die Möglichkeit, deine Wetten optimal zu
        steuern und auf Veränderungen im Spielverlauf zu reagieren.
      </Typography>

      <Typography variant="h3" component="h3" gutterBottom>
        Cash-Out in Echtzeit
      </Typography>
      <Typography variant="body1" paragraph>
        Die Cash-Out-Funktion bei Winamax ist besonders dynamisch:
      </Typography>
      <CustomList
        listItems={[
          "Verfügbar für Livewetten: Während des Spiels kannst du in Echtzeit auf die Cash-Out-Option zugreifen.",
          "Dynamische Beträge: Der Cash-Out-Wert wird basierend auf dem aktuellen Spielverlauf und den Quoten angepasst.",
          "Einfach zu bedienen: Mit wenigen Klicks kannst du den Cash-Out-Betrag annehmen und deine Wette abschließen.",
        ]}
      />

      <Typography variant="body1" paragraph>
        Die Cash-Out-Funktion von Winamax ist ein leistungsstarkes Werkzeug für
        alle Sportwetten-Fans. Sie gibt dir volle Kontrolle über deine Wetten
        und ermöglicht es dir, flexibel und strategisch auf den Spielverlauf zu
        reagieren. Mit Optionen wie dem teilweisen Cash-Out und der
        Echtzeit-Dynamik gehört Winamax zu den besten Anbietern für Spieler, die
        ihre Wettgewinne maximieren und ihre Verluste begrenzen möchten.
      </Typography>
    </>
  );

  const conclusionContent = (
    <>
      <Typography variant="body1" paragraph>
        Winamax ist weit mehr als ein gewöhnlicher Wettanbieter – es bietet ein
        umfassendes und innovatives Wetterlebnis, das sowohl Einsteiger als auch
        erfahrene Spieler begeistert. Mit steuerfreien Wetten, einem attraktiven
        Willkommensbonus und einzigartigen Funktionen wie der MyMatch-Wette hebt
        sich Winamax klar von der Konkurrenz ab.
      </Typography>

      <Typography variant="h3" component="h3" gutterBottom>
        Die wichtigsten Vorteile auf einen Blick:
      </Typography>
      <CustomList
        listItems={[
          "Attraktiver Willkommensbonus: Bis zu 100 € in Freebets ohne komplizierte Bedingungen.",
          "Steuerfreie Wetten: Gewinne werden ohne Abzüge vollständig ausgezahlt.",
          "Innovative Features: Funktionen wie MyMatch, Cash-Out und Live-Streaming machen das Wetterlebnis einzigartig.",
          "Umfangreiches Wettangebot: Eine große Auswahl an Sportarten und Wettmärkten bietet für jeden Spieler etwas.",
          "Exklusives Treueprogramm: Mit dem VIP-Programm und der Winamax-Boutique werden loyale Spieler belohnt.",
          "Sichere und gebührenfreie Zahlungen: Schnelle und kostenlose Ein- und Auszahlungen mit zahlreichen Zahlungsmethoden.",
        ]}
      />
      <Typography variant="body1" paragraph>
        Mit einer benutzerfreundlichen Plattform, einem starken mobilen Angebot
        und einem kompetenten Kundensupport stellt Winamax sicher, dass du
        jederzeit bestens betreut wirst. Ob du deine ersten Schritte in der Welt
        der Sportwetten machst oder nach einem Anbieter suchst, der deine
        Ansprüche erfüllt – Winamax ist die ideale Wahl.
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

export default WinamaxReview;
