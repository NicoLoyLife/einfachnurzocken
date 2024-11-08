import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import logo from "../assets/images/logo.png";
import OpenGraphMeta from "../components/common/OpenGraphMeta";
import StyledLink from "../components/common/StyledLink";

function AGB() {
  const theme = useTheme();

  // Open Graph Daten
  const pageTitle = "Allgemeine Geschäftsbedingungen (AGB)";
  const pageDescription =
    "Hier findest du die Allgemeinen Geschäftsbedingungen (AGB) von EinfachNurZocken. Erfahre mehr über die rechtlichen Rahmenbedingungen für die Nutzung unserer Website.";
  const pageUrl = "https://einfachnurzocken.com/agb";
  const pageImage = logo;

  return (
    <Box
      sx={{
        mt: theme.spacing(4),
        mb: theme.spacing(6),
      }}
    >
      <OpenGraphMeta
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        image={pageImage}
      />

      <Typography
        variant="h1"
        component="h1"
        sx={{
          mb: 2,
          fontSize: {
            xs: "2rem",
            sm: "3rem",
            md: "4rem",
          },
          textAlign: "center",
        }}
      >
        {pageTitle}
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        1. Geltungsbereich
      </Typography>
      <Typography variant="body1" paragraph>
        1.1 Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten
        für die Nutzung der Webseite <strong>einfachnurzocken.com</strong>{" "}
        (nachfolgend "Webseite"), die von uns (nachfolgend "Betreiber")
        betrieben wird.
      </Typography>

      <Typography variant="body1" paragraph>
        1.2 Mit dem Zugriff auf die Webseite und deren Nutzung erklären Sie sich
        mit diesen AGB einverstanden. Bitte lesen Sie diese sorgfältig durch,
        bevor Sie die Webseite nutzen.
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        2. Leistungen der Webseite
      </Typography>

      <Typography variant="body1" paragraph>
        2.1 Die Webseite bietet Vergleiche und Informationen zu verschiedenen
        Online-Casinos, Online-Spielotheken und Sportwettenanbietern.
      </Typography>

      <Typography variant="body1" paragraph>
        2.2 Die auf der Webseite bereitgestellten Inhalte dienen ausschließlich
        Informationszwecken und stellen keine Rechts-, Finanz- oder sonstige
        Beratung dar.
      </Typography>

      <Typography variant="body1" paragraph>
        2.3 <strong>Jugendschutz:</strong> Die Inhalte der Webseite richten sich
        ausschließlich an Personen, die das 18. Lebensjahr vollendet haben.
        Minderjährigen ist der Zugriff auf die Webseite untersagt.
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        3. Nutzungsbedingungen
      </Typography>

      <Typography variant="body1" paragraph>
        3.1 Die Nutzung der Webseite ist ausschließlich volljährigen Personen
        gestattet, die nach den gesetzlichen Bestimmungen ihres Landes zum
        Glücksspiel berechtigt sind.
      </Typography>

      <Typography variant="body1" paragraph>
        3.2 Sie verpflichten sich, die Webseite nicht für rechtswidrige Zwecke
        zu nutzen und alle geltenden Gesetze und Vorschriften, insbesondere die
        Bestimmungen des Glücksspielstaatsvertrags und des Jugendschutzes, zu
        beachten.
      </Typography>

      <Typography variant="body1" paragraph>
        3.3 <strong>Verantwortungsbewusstes Spielen:</strong> Sie sind
        angehalten, Glücksspielangebote verantwortungsbewusst zu nutzen und sich
        der Risiken bewusst zu sein.
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        4. Haftungsausschluss
      </Typography>

      <Typography variant="body1" paragraph>
        4.1 <strong>Inhalte Dritter:</strong> Die Webseite enthält Links zu
        externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
        Wir übernehmen keine Gewähr für die Richtigkeit, Vollständigkeit und
        Aktualität der Inhalte externer Links. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
      </Typography>

      <Typography variant="body1" paragraph>
        4.2 <strong>Keine Gewährleistung:</strong> Wir bemühen uns, die
        Informationen auf der Webseite aktuell und korrekt zu halten, übernehmen
        jedoch keine Haftung für die Richtigkeit, Vollständigkeit oder
        Aktualität der bereitgestellten Informationen, insbesondere in Bezug auf
        Glücksspielangebote und deren rechtliche Zulässigkeit.
      </Typography>

      <Typography variant="body1" paragraph>
        4.3 <strong>Haftungsbeschränkung:</strong>
      </Typography>

      <Typography variant="body1" paragraph>
        a{")"} <strong>Allgemeine Haftung:</strong> Wir haften unbeschränkt für
        Vorsatz und grobe Fahrlässigkeit sowie nach Maßgabe des
        Produkthaftungsgesetzes. Bei leichter Fahrlässigkeit haften wir nur bei
        Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), deren
        Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst
        ermöglicht und auf deren Einhaltung der Nutzer regelmäßig vertrauen
        darf. In diesem Fall ist die Haftung auf den vorhersehbaren,
        vertragstypischen Schaden begrenzt.
      </Typography>

      <Typography variant="body1" paragraph>
        b{")"} <strong>Keine Haftung für Glücksspielverluste:</strong> Wir
        haften nicht für Verluste oder Schäden, die aus der Nutzung von
        Glücksspielangeboten resultieren, auf die auf der Webseite verwiesen
        wird. Glücksspiel kann süchtig machen; bitte spielen Sie
        verantwortungsbewusst.
      </Typography>

      <Typography variant="body1" paragraph>
        c{")"} <strong>Jugendschutz:</strong> Wir übernehmen keine Haftung für
        Schäden, die dadurch entstehen, dass Minderjährige trotz Verbots auf
        unsere Webseite zugreifen oder Glücksspielangebote nutzen.
      </Typography>

      <Typography variant="body1" paragraph>
        4.4 <strong>Keine Rechtsberatung:</strong> Die auf der Webseite
        bereitgestellten Informationen stellen keine Rechtsberatung dar. Bei
        rechtlichen Fragen wenden Sie sich bitte an einen qualifizierten
        Rechtsanwalt.
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        5. Geistiges Eigentum
      </Typography>

      <Typography variant="body1" paragraph>
        5.1 Alle auf der Webseite veröffentlichten Inhalte, einschließlich
        Texte, Bilder, Grafiken und Logos, sind urheberrechtlich geschützt.
      </Typography>

      <Typography variant="body1" paragraph>
        5.2 Die Vervielfältigung, Bearbeitung, Verbreitung oder jede Art der
        Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
        vorherigen schriftlichen Zustimmung von uns.
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        6. Datenschutz
      </Typography>

      <Typography variant="body1" paragraph>
        6.1 Der Schutz Ihrer persönlichen Daten ist uns wichtig. Informationen
        zur Verarbeitung personenbezogener Daten finden Sie in unserer{" "}
        <StyledLink href="/datenschutz">Datenschutzerklärung</StyledLink>.
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        7. Cookies
      </Typography>

      <Typography variant="body1" paragraph>
        7.1 Die Webseite verwendet Cookies, um die Nutzererfahrung zu
        verbessern. Durch die Nutzung der Webseite erklären Sie sich mit der
        Verwendung von Cookies einverstanden. Weitere Informationen finden Sie
        in unserer{" "}
        <StyledLink href="/datenschutz">Cookie-Richtlinie</StyledLink>.
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        8. Änderungen der AGB
      </Typography>

      <Typography variant="body1" paragraph>
        8.1 Wir behalten uns das Recht vor, diese AGB jederzeit zu ändern. Die
        aktuellen AGB sind stets auf der Webseite einsehbar.
      </Typography>

      <Typography variant="body1" paragraph>
        8.2 Durch die fortgesetzte Nutzung der Webseite nach Änderungen der AGB
        erklären Sie sich mit den Änderungen einverstanden.
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        9. Glücksspielverantwortung und Jugendschutz
      </Typography>

      <Typography variant="body1" paragraph>
        9.1 <strong>Verantwortungsbewusstes SPielen:</strong> Wir unterstützen
        verantwortungsbewusstes Spielen und fördern den Spielerschutz.
        Glücksspiel kann süchtig machen. Bitte spielen Sie nur, wenn Sie das
        gesetzliche Mindestalter erreicht haben, und setzen Sie nur Geldbeträge
        ein, deren Verlust Sie verkraften können.
      </Typography>

      <Typography variant="body1" paragraph>
        9.2 <strong>Jugendschutz:</strong>
      </Typography>

      <Typography variant="body1" paragraph>
        a{")"} <strong>Altersbeschränkung:</strong> Die Angebote auf unserer
        Webseite sind ausschließlich für Personen ab 18 Jahren bestimmt. Wir
        setzen technische und organisatorische Maßnahmen ein, um den Zugang für
        Minderjährige zu verhindern.
      </Typography>

      <Typography variant="body1" paragraph>
        b{")"} <strong>Elterliche Verantwortung:</strong> Wir appellieren an
        Eltern und Erziehungsberechtigte, geeignete Maßnahmen zu ergreifen, um
        den Zugang von Minderjährigen zu Glücksspielangeboten zu verhindern
        (z.B. durch Filtersoftware).
      </Typography>

      <Typography variant="body1" paragraph>
        9.3 <strong>Prävention:</strong> Wir informieren über die Risiken des
        Glücksspiels und stellen Informationen zu Hilfsangeboten bei
        problematischem Spielverhalten bereit.
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        10. Anwendbares Recht
      </Typography>

      <Typography variant="body1" paragraph>
        10.1 Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss
        des UN-Kaufrechts.
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        11. Salvatorische Klausel
      </Typography>

      <Typography variant="body1" paragraph>
        11.1 Sollte eine Bestimmung dieser AGB unwirksam sein oder werden,
        bleiben die übrigen Bestimmungen hiervon unberührt. Die unwirksame
        Bestimmung gilt als durch eine wirksame ersetzt, die dem
        wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        12. Kontakt
      </Typography>

      <Typography variant="body1" paragraph>
        12.1 Bei Fragen oder Anmerkungen zu diesen AGB oder der Webseite wenden
        Sie sich bitte an:
      </Typography>

      <Typography variant="body1" paragraph>
        Goldengoal Einzelunternehmen
        <br />
        Felix V.
        <br />
        Wilmersdorfer Str. 122-123, D-10627 Berlin
        <br />
        E-Mail: info@einfachnurzocken.com
      </Typography>
    </Box>
  );
}

export default AGB;
