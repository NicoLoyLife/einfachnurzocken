import React from "react";
import { Box, Typography, Container } from "@mui/material";
import StyledLink from "../components/common/StyledLink";

function Impressum() {

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 8 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Impressum
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          Angaben gemäß § 5 TMG
        </Typography>

        {/* Anbieter */}
        <Typography variant="body1" paragraph>
          <strong>Anbieter:</strong>
          <br />
          Goldengoal Einzelunternehmen
          <br />
          Felix V.
          <br />
          Wilmersdorfer Str. 122-123
          <br />
          D-10627 Berlin
        </Typography>

        {/* Kontakt */}
        <Typography variant="body1" paragraph>
          <strong>Kontakt:</strong>
          <br />
          Telefon:
          <br />
          E-Mail: felix@goldengoalsport.de
        </Typography>

        {/* Umsatzsteuer-ID */}
        <Typography variant="body1" paragraph>
          <strong>Umsatzsteuer-ID:</strong>
          <br />
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          <br />
          DE363381457
        </Typography>

        {/* Verantwortlicher gemäß RStV */}
        <Typography variant="body1" paragraph>
          <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
          <br />
          Felix V.
          <br />
          Wilmersdorfer Str. 122-123
          <br />
          D-10627 Berlin
        </Typography>

        {/* EU-Streitschlichtung */}
        <Typography variant="body1" paragraph>
          <strong>EU-Streitschlichtung:</strong>
          <br />
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:
          <br />
          <StyledLink
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr
          </StyledLink>
          <br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </Typography>

        {/* Verbraucherstreitbeilegung */}
        <Typography variant="body1" paragraph>
          <strong>
            Verbraucherstreitbeilegung / Universalschlichtungsstelle:
          </strong>
          <br />
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </Typography>
      </Box>
    </Container>
  );
}

export default Impressum;
