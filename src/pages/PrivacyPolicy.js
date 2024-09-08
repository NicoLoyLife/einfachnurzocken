import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Datenschutzerklärung
        </Typography>

        <Typography variant="body1" paragraph>
          Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer
          Privatsphäre ist für uns sehr wichtig. Nachstehend informieren wir Sie ausführlich
          über den Umgang mit Ihren Daten.
        </Typography>

        <Typography variant="h6" gutterBottom>
          1. Allgemeine Hinweise und Pflichtinformationen
        </Typography>

        <Typography variant="body1" paragraph>
          Der Schutz Ihrer persönlichen Daten hat für uns höchste Priorität. In dieser Datenschutzerklärung
          informieren wir Sie über die Verarbeitung personenbezogener Daten bei der Nutzung unserer
          Website.
        </Typography>

        {/* Füge hier weitere Abschnitte hinzu, z.B. zu Cookies, Tracking, etc. */}
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;