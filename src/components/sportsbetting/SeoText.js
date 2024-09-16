import React from 'react';
import { Box, Typography } from '@mui/material';

function SeoText() {
  return (
    <Box sx={{ padding: '2rem', textAlign: 'center', backgroundColor: 'primary.light', color: 'text.primary' }}>
      <Typography variant="body1" paragraph>
        Du befindest Dich in der Wettanbieter Übersicht. Hier sind alle Wettanbieter aufgelistet, die von uns als seriös eingestuft werden. Jeder Wettanbieter wird gründlich getestet, bevor er auf unserer Seite gelistet wird. Geprüft werden die Anbieter auf Benutzerfreundlichkeit, Wettangebot, Wettquoten, Ein- und Auszahlungen, Support und Spielerschutz.
      </Typography>
      <Typography variant="body1" paragraph>
        Hier zeigen wir Dir außerdem die aktuellen Willkommensangebote der einzelnen Wettanbieter. Du kannst über die Suchfunktion nach einem bestimmten Anbieter suchen und dank der Sortierfunktion nach Aktualität, Beliebtheit, Willkommensbonus oder Bewertung sortieren.
      </Typography>
      <Typography variant="body1" paragraph>
        Sportwetten werden in Deutschland immer beliebter. Das Wettangebot wächst stetig, und mit geringen Einsätzen können große Gewinne erzielt werden – besonders bei hohen Quoten für riskante Wetten.
      </Typography>
    </Box>
  );
}

export default SeoText;