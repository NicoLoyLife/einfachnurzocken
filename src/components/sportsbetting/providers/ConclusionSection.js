import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Rating,
  Button
} from '@mui/material';

const ConclusionSection = ({ conclusionContent, ratings, ctaLink }) => {
  return (
    <Box sx={{ mb: 4 }}>
      {/* Überschrift */}
      <Typography variant="h2" component="h2" gutterBottom>
        Fazit
      </Typography>

      {/* Inhalt */}
      {conclusionContent}

      {/* Bewertungenstabelle */}
      {ratings && ratings.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                {ratings.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {item.category}
                    </TableCell>
                    <TableCell align="right">
                      <Rating value={item.score} precision={0.5} readOnly />
                      <Typography variant="body2" sx={{ ml: 1, display: 'inline' }}>
                        {item.score} / 5
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

      {/* Call-to-Action */}
      {ctaLink && (
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Jetzt zu Betano
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ConclusionSection;