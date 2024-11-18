import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Divider,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  useTheme,
} from "@mui/material";

const OverviewSection = ({ overview, ctaLink }) => {
  const theme = useTheme();

  const data = [
    { label: "Gründungsjahr", value: overview.foundingYear },
    { label: "Lizenz", value: overview.licence },
    { label: "Webseite", value: overview.website },
    { label: "Besonderheiten", value: overview.specialFeatures },
    { label: "Sicherheit", value: overview.security },
  ];

  return (
    <Box sx={{ mb: 4 }}>
      {/* Überschrift */}
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        color={theme.palette.primary.main}
        sx={{ mt: 4 }}
      >
        Überblick
      </Typography>

      {/* Tabelle mit den wichtigsten Informationen */}
      <TableContainer
        component={Paper}
        elevation={3}
        sx={{ borderRadius: 1, overflowX: "auto" }}
      >
        <Table>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                {/* Beschriftungsspalte */}
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    borderBottom: "none",
                    paddingY: 1,
                    width: "30%",
                    fontWeight: "bold",
                    color: theme.palette.text.primary,
                  }}
                >
                  {item.label}
                </TableCell>
                {/* Wertespalte */}
                <TableCell
                  sx={{
                    borderBottom: "none",
                    paddingY: 1,
                    color: theme.palette.text.secondary,
                  }}
                >
                  {Array.isArray(item.value) ? (
                    <ul style={{ paddingLeft: "1.2em", margin: 0 }}>
                      {item.value.map((val, idx) => (
                        <li key={idx} style={{ listStyleType: "disc" }}>
                          {val}
                        </li>
                      ))}
                    </ul>
                  ) : item.label === "Webseite" ? (
                    <a
                      href={ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: theme.palette.primary.main,
                        textDecoration: "none",
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Beschreibung */}
      {overview.description && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">{overview.description}</Typography>
        </Box>
      )}

      {/* Visuelle Abgrenzung */}
      <Divider sx={{ my: 4 }} />
    </Box>
  );
};

OverviewSection.propTypes = {
  overview: PropTypes.shape({
    foundingYear: PropTypes.string,
    licence: PropTypes.string,
    specialFeatures: PropTypes.arrayOf(PropTypes.string),
    website: PropTypes.string,
    security: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
  }).isRequired,
};

export default OverviewSection;