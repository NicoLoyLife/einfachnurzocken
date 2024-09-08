import React from 'react';
import { Container, Typography } from '@mui/material';

const Impressum = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Impressum
      </Typography>
      <Typography variant="body1">
        <strong>Dummy Firma</strong> <br />
        Musterstraße 1 <br />
        12345 Musterstadt <br />
        Deutschland <br />
        <br />
        <strong>Kontakt:</strong> <br />
        Telefon: 01234/567890 <br />
        E-Mail: info@dummyfirma.de
      </Typography>
    </Container>
  );
};

export default Impressum;