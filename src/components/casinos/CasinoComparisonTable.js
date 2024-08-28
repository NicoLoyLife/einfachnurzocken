import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  Rating,
  Box,
  Typography,
} from "@mui/material";
import { casinos } from "../../services/dummyData";

function CasinoComparisonTable() {
  const [orderDirection, setOrderDirection] = useState("desc");
  const [orderBy, setOrderBy] = useState("rating");

  // Funktion zum Sortieren der Tabelle
  const handleSortRequest = (property) => {
    const isAscending = orderBy === property && orderDirection === "asc";
    setOrderDirection(isAscending ? "desc" : "asc");
    setOrderBy(property);
  };

  // Funktion zum Sortieren der Daten
  const sortedCasinos = casinos.sort((a, b) => {
    if (orderBy === "rating") {
      return orderDirection === "asc"
        ? a.rating - b.rating
        : b.rating - a.rating;
    }
    // Weitere Sortieroptionen hinzufügen
    return 0;
  });

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Vergleich der besten Online Casinos
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ borderRadius: "15px", boxShadow: 3, overflowX: "auto" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="casino comparison table">
          <TableHead>
            <TableRow>
              <TableCell
                sortDirection={orderBy === "name" ? orderDirection : false}
              >
                <TableSortLabel
                  active={orderBy === "name"}
                  direction={orderBy === "name" ? orderDirection : "asc"}
                  onClick={() => handleSortRequest("name")}
                >
                  Casino-Name
                </TableSortLabel>
              </TableCell>
              <TableCell
                align="center"
                sortDirection={orderBy === "rating" ? orderDirection : false}
              >
                <TableSortLabel
                  active={orderBy === "rating"}
                  direction={orderBy === "rating" ? orderDirection : "asc"}
                  onClick={() => handleSortRequest("rating")}
                >
                  Bewertung
                </TableSortLabel>
              </TableCell>
              <TableCell align="center">Willkommensbonus</TableCell>
              <TableCell align="center">RTP</TableCell>
              <TableCell align="center">Einzahlungsmethoden</TableCell>
              <TableCell align="center">Auszahlungsdauer</TableCell>
              <TableCell align="center">Lizenz</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedCasinos.map((casino, index) => (
              <TableRow key={index}>
                <TableCell>{casino.name}</TableCell>
                <TableCell align="center">
                  <Rating value={casino.rating} readOnly precision={0.1} />
                </TableCell>
                <TableCell align="center">{casino.welcome_bonus}</TableCell>
                <TableCell align="center">96%</TableCell>{" "}
                {/* Beispielwert für RTP */}
                <TableCell align="center">
                  {casino.deposit_methods.join(", ")}
                </TableCell>
                <TableCell align="center">{casino.withdrawal_time}</TableCell>
                <TableCell align="center">{casino.license}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CasinoComparisonTable;
