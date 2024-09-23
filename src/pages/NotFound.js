import React from 'react';
import { Typography, Container } from '@mui/material';

const NotFound = () => (
  <Container>
    <Typography variant="h1" gutterBottom>
      404 - Seite nicht gefunden
    </Typography>
    <Typography variant="body1" paragraph>
      Die von dir gesuchte Seite existiert nicht.
    </Typography>
  </Container>
);

export default NotFound;