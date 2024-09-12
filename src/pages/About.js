import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';

function About() {
  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Das ist EinfachNurZocken.com
      </Typography>

      <Typography variant="body1" paragraph>
        <strong>Über EinfachNurZocken.com - Das erwartet Dich & das sind Deine Vorteile</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        EinfachNurZocken.com ist eine unabhängige Webseite, die von einem Team von aktiven, aber auch ehemaligen Spielern verschiedenen Alters und verschiedener Berufsgruppen betrieben wird. Wie unser Name schon sagt, wollen wir einfach nur zocken und auch Spaß dabei haben. Jedoch mussten wir schnell feststellen, dass genau das nicht immer gegeben und auch nicht leicht zu finden ist. Mit der Intention, anderen Spielern zu helfen und unsere Eindrücke + Erfahrungen zu teilen, wurde EinfachNurZocken.com ins Leben gerufen.
      </Typography>

      <Typography variant="body1" paragraph>
        Angefangen hat alles mit den klassischen Spielotheken und Spielbanken (Casinos). Zuerst nur als einfache Spielotheken-Videos auf YouTube und später auch mit Artikeln hier auf dieser Webseite. Viele unserer hilfreichen Tipps und News wurden zahlreich geklickt, und schon bald wurde das Thema Online Casinos bzw. Online Spielotheken ein großer Punkt. Zahlreiche Anfragen erreichten uns, die unsere Einschätzung zu bestimmten Anbietern wissen wollten. So starteten wir das Abenteuer Online Casinos & Online Spielotheken.
      </Typography>

      <Typography variant="body1" paragraph>
        Dein großer Vorteil dabei ist:
      </Typography>
      <ul>
        <li>✅ Komplett werbefrei</li>
        <li>✅ Keine Marketingfirma</li>
        <li>✅ Strenge Tests</li>
        <li>✅ Ehrliche Meinungen & Erfahrungen</li>
      </ul>

      <Typography variant="body1" paragraph>
        ▶️ Kein Test, keine Erfahrung und auch keine Bewertung kann bei uns erkauft werden!
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        Diese Themen bieten wir Dir an
      </Typography>

      <Typography variant="body1" paragraph>
        Unsere Webseite ist in mehrere Bereiche unterteilt. So bieten wir Dir einen News-Bereich mit den neuesten Berichten zu Spielen und politischen Entscheidungen sowie zu aktuellen Bonus-Angeboten oder Online Spielotheken-Tests. Zusätzlich findest Du eine Übersicht zu allen von uns getesteten und bewerteten Online Casinos & Online Spielotheken.
      </Typography>

      <ul>
        <li>▶️ Home (Wichtigste im Überblick)</li>
        <li>▶️ News</li>
        <li>▶️ Online Spielotheken Vergleich</li>
        <li>▶️ Online Slots Übersicht</li>
        <li>▶️ Online Sportwetten Vergleich</li>
        <li>▶️ Casino Guide + FAQ</li>
      </ul>

      <Typography variant="h2" component="h2" gutterBottom>
        Darum ist EinfachNurZocken kostenlos & so wird die Webseite finanziert
      </Typography>

      <Typography variant="body1" paragraph>
        Wie bereits gesagt, ist es unser persönliches Anliegen, dass Du ein sicheres und faires Spielerlebnis hast. Unsere Tests, Erfahrungen und Bewertungen sind ausführlich und in verschiedene Bereiche aufgeteilt. Dabei haben wir ein eigenes Testverfahren + Bewertungssystem entwickelt, das stetig verbessert wird.
      </Typography>

      <Typography variant="body1" paragraph>
        Trotzdem entstehen Kosten für Server und Programmierarbeiten. Die Webseite finanziert sich über Affiliate-Marketing, bezahlte Newsberichte und Links zu Drittanbietern.
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        Wir legen großen Wert auf Transparenz & Spielerschutz
      </Typography>

      <Typography variant="body1" paragraph>
        Da wir selbst Spieler sind, liegt uns der Spielerschutz besonders am Herzen. Unsere Tests sind ehrlich und transparent. Wenn Du merkst, dass Du Probleme mit dem Glücksspiel hast, empfehlen wir Dir, unseren Bericht zum <MuiLink component="a" href="/spielerschutz" color="primary">Spielerschutz</MuiLink> zu lesen.
      </Typography>

      <Typography variant="h2" component="h2" gutterBottom>
        So kannst Du uns erreichen
      </Typography>

      <Typography variant="body1" paragraph>
        📧 einfachnurzocken@web.de <br />
        📱 Instagram: enzteam <br />
        💬 Skype: live:einfachnurzocken_1
      </Typography>

      <Typography variant="body1" paragraph sx={{ mt: 4 }}>
        ⚠️ Hinweis: Glücksspiel ist ab 18 Jahren erlaubt. Bitte informiere Dich über die für Dich gültige Rechtslage, bevor Du ein Online-Angebot nutzt.
      </Typography>
    </Box>
  );
}

export default About;