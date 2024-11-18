// src/pages/Kontakt.js
import React from "react";
import { Box, Typography, Link as MuiLink, Grid, Container } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

function Kontakt() {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 8 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Kontakt
        </Typography>

        <Typography variant="body1" paragraph>
          Willkommen auf unserer <strong>Kontaktseite</strong>! Bei <strong>EinfachNurZocken.com</strong> liegt uns Deine Zufriedenheit und Sicherheit besonders am Herzen. Wenn Du Fragen, Anregungen oder Anliegen hast, zögere nicht, uns zu kontaktieren. Obwohl wir derzeit noch kein Kontaktformular anbieten, stehen Dir verschiedene Möglichkeiten zur Verfügung, um mit uns in Verbindung zu treten.
        </Typography>

        {/* Kontaktmöglichkeiten */}
        <Typography variant="h6" component="h2" gutterBottom>
          Unsere Kontaktmöglichkeiten
        </Typography>

        <Grid container spacing={2}>
          {/* E-Mail */}
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>📧 E-Mail:</strong><br />
              <MuiLink href="mailto:einfachnurzocken@web.de" color="inherit">
                einfachnurzocken@web.de
              </MuiLink>
            </Typography>
          </Grid>

          {/* Instagram */}
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>📱 Instagram:</strong><br />
              <MuiLink href="https://www.instagram.com/enzteam" target="_blank" rel="noopener noreferrer" color="inherit">
                @enzteam
              </MuiLink>
            </Typography>
          </Grid>

          {/* Skype */}
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>💬 Skype:</strong><br />
              live:einfachnurzocken_1
            </Typography>
          </Grid>
        </Grid>

        {/* Warum Kontaktieren */}
        <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
          Warum Du uns kontaktieren solltest
        </Typography>

        <Typography variant="body1" paragraph>
          <ul>
            <li><strong>Feedback und Anregungen:</strong> Deine Meinung ist uns wichtig! Teile uns mit, was Dir an unserer Webseite gefällt oder was wir verbessern können.</li>
            <li><strong>Partnerschaften und Kooperationen:</strong> Interessierst Du Dich für eine Zusammenarbeit? Wir freuen uns über Vorschläge und gemeinsame Projekte.</li>
            <li><strong>Support und Hilfe:</strong> Bei Fragen zu unseren Inhalten oder wenn Du Unterstützung benötigst, sind wir gerne für Dich da.</li>
          </ul>
        </Typography>

        {/* Antwortzeiten */}
        <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
          Unsere Antwortzeiten
        </Typography>

        <Typography variant="body1" paragraph>
          Wir bemühen uns, alle Anfragen innerhalb von <strong>48 Stunden</strong> zu beantworten. Bitte beachte, dass es je nach Auslastung und Komplexität Deiner Anfrage zu leichten Verzögerungen kommen kann. Deine Geduld und Dein Verständnis schätzen wir sehr.
        </Typography>

        {/* Datenschutz und Sicherheit */}
        <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
          Datenschutz und Sicherheit
        </Typography>

        <Typography variant="body1" paragraph>
          Deine Privatsphäre ist uns wichtig. Alle Informationen, die Du uns über die genannten Kontaktwege sendest, werden vertraulich behandelt und nicht an Dritte weitergegeben. Weitere Details findest Du in unserer <MuiLink component={RouterLink} to="/datenschutz" color="inherit">Datenschutzerklärung</MuiLink>.
        </Typography>

        {/* Social Media */}
        <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
          Besuche uns auf Social Media
        </Typography>

        <Grid container spacing={2}>
          {/* Instagram */}
          <Grid item xs={12} sm={4}>
            <MuiLink href="https://www.instagram.com/enzteam" target="_blank" rel="noopener noreferrer" color="inherit">
              <Typography variant="body1">Instagram: @enzteam</Typography>
            </MuiLink>
          </Grid>

          {/* Facebook */}
          <Grid item xs={12} sm={4}>
            <MuiLink href="https://www.facebook.com/EinfachNurZocken" target="_blank" rel="noopener noreferrer" color="inherit">
              <Typography variant="body1">Facebook: EinfachNurZocken</Typography>
            </MuiLink>
          </Grid>

          {/* Twitter */}
          <Grid item xs={12} sm={4}>
            <MuiLink href="https://twitter.com/EinfachZocken" target="_blank" rel="noopener noreferrer" color="inherit">
              <Typography variant="body1">Twitter: @EinfachZocken</Typography>
            </MuiLink>
          </Grid>
        </Grid>

        {/* Hinweis */}
        <Typography variant="body2" color="textSecondary" sx={{ mt: 4 }}>
          ⚠️ **Hinweis:** Glücksspiel ist ab 18 Jahren erlaubt. Bitte informiere Dich über die für Dich gültige Rechtslage, bevor Du ein Online-Angebot nutzt.
        </Typography>
      </Box>
    </Container>
  );
}

export default Kontakt;