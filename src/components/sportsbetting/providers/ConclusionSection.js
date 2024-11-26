import React from "react";
import PropTypes from "prop-types";
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
  Button,
  Divider,
  useTheme,
} from "@mui/material";

const ConclusionSection = ({
  conclusionContent,
  ratings,
  ctaLink,
  buttonTitle,
}) => {
  const theme = useTheme();

  // Berechne die Gesamtbewertung mit Fehlerbehandlung
  const overallRating = React.useMemo(() => {
    if (ratings && ratings.length > 0) {
      const average =
        ratings.reduce((sum, item) => sum + item.score, 0) / ratings.length;
      return Math.round(average * 10) / 10; // Runden auf eine Nachkommastelle
    }
    return null;
  }, [ratings]);

  return (
    <Box sx={{ mb: 4 }}>
      {/* Überschrift */}
      <Typography variant="h2" component="h2" gutterBottom sx={{ mt: 4 }}>
        Fazit
      </Typography>

      {/* Inhalt */}
      <Box sx={{ mt: 2 }}>{conclusionContent}</Box>

      {/* Bewertungenstabelle */}
      {ratings && ratings.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                {ratings.map((item, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      backgroundColor:
                        index % 2 === 0
                          ? theme.palette.action.hover
                          : "inherit",
                      "&:hover": {
                        backgroundColor: theme.palette.action.selected,
                      },
                    }}
                  >
                    <TableCell component="th" scope="row" sx={{ py: 1, px: 2 }}>
                      {item.category}
                    </TableCell>
                    <TableCell align="right" sx={{ py: 1, px: 2 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                        }}
                      >
                        <Rating value={item.score} precision={0.5} readOnly />
                        <Typography
                          variant="body2"
                          sx={{ ml: 1 }}
                        >
                          {item.score} / 5
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

      {/* Gesamtbewertung */}
      {overallRating !== null ? (
        <Box sx={{ mt: 4, display: "flex", alignItems: "center" }}>
          <Typography
            variant="h3"
            component="h3"
            gutterBottom
            sx={{ mr: 2 }}
          >
            Gesamtbewertung:
          </Typography>
          <Rating
            value={overallRating}
            precision={0.1}
            readOnly
          />
          <Typography variant="body1" sx={{ ml: 1 }}>
            {overallRating} / 5
          </Typography>
        </Box>
      ) : (
        <Typography variant="body1" sx={{ mt: 4 }}>
          Noch keine Bewertungen verfügbar.
        </Typography>
      )}

      {/* Call-to-Action */}
      {ctaLink && (
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            sx={{
              width: { xs: '75%', sm: 'auto' },
              maxWidth: { sm: 400 },
              whiteSpace: 'normal', // Ermöglicht Zeilenumbruch bei langem Text
            }}
          >
            {buttonTitle}
          </Button>
        </Box>
      )}

      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />
    </Box>
  );
};

ConclusionSection.propTypes = {
  conclusionContent: PropTypes.node.isRequired,
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })
  ).isRequired,
  ctaLink: PropTypes.string,
  buttonTitle: PropTypes.string,
};

export default ConclusionSection;
