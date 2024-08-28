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
  Box,
  Typography,
  Rating,
} from "@mui/material";
import { bonusangebote, findCasinoByName } from "../../services/dummyData";

function BonusComparisonTable() {
  const [orderDirection, setOrderDirection] = useState("desc");
  const [orderBy, setOrderBy] = useState("rating");

  // Funktion zum Sortieren der Tabelle
  const handleSortRequest = (property) => {
    const isAscending = orderBy === property && orderDirection === "asc";
    setOrderDirection(isAscending ? "desc" : "asc");
    setOrderBy(property);
  };

  // Bonusangebote mit zusätzlichen Casino-Informationen anreichern
  const enrichedBonusOffers = bonusangebote.map((offer) => {
    const casino = findCasinoByName(offer.provider);
    if (!casino) {
      console.error(`Casino nicht gefunden für Anbieter: ${offer.provider}`);
      return null;
    }
    
    return {
      ...offer,
      casinoName: casino.name,
      deposit_methods: casino.deposit_methods,
      withdrawal_time: casino.withdrawal_time,
      license: casino.license,
      rating: casino.rating,
    };
  }).filter(offer => offer !== null);

  // Funktion zum Sortieren der Daten
  const sortedBonusOffers = enrichedBonusOffers.sort((a, b) => {
    if (orderBy === "rating") {
      return orderDirection === "asc" ? a.rating - b.rating : b.rating - a.rating;
    }
    if (orderBy === "bonus") {
      return orderDirection === "asc" ? a.bonus.localeCompare(b.bonus) : b.bonus.localeCompare(a.bonus);
    }
    return 0; // Weitere Sortieroptionen hinzufügen
  });

  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Vergleich der besten Bonusangebote
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ borderRadius: "15px", boxShadow: 3, overflowX: "auto" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="bonus comparison table">
          <TableHead>
            <TableRow>
              <TableCell sortDirection={orderBy === "casinoName" ? orderDirection : false}>
                <TableSortLabel
                  active={orderBy === "casinoName"}
                  direction={orderBy === "casinoName" ? orderDirection : "asc"}
                  onClick={() => handleSortRequest("casinoName")}
                >
                  Anbieter
                </TableSortLabel>
              </TableCell>
              <TableCell align="center">Bonustyp</TableCell>
              <TableCell sortDirection={orderBy === "bonus" ? orderDirection : false}>
                <TableSortLabel
                  active={orderBy === "bonus"}
                  direction={orderBy === "bonus" ? orderDirection : "asc"}
                  onClick={() => handleSortRequest("bonus")}
                >
                  Höhe des Bonus
                </TableSortLabel>
              </TableCell>
              <TableCell align="center">Umsatzbedingungen</TableCell>
              <TableCell align="center">Einzahlungsmethoden</TableCell>
              <TableCell align="center">Auszahlungsdauer</TableCell>
              <TableCell align="center">Lizenz</TableCell>
              <TableCell align="center">Bewertung</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedBonusOffers.map((offer, index) => (
              <TableRow key={index}>
                <TableCell>{offer.casinoName}</TableCell>
                <TableCell align="center">{offer.bonusType}</TableCell>
                <TableCell align="center">{offer.bonus}</TableCell>
                <TableCell align="center">{offer.wageringRequirements}</TableCell>
                <TableCell align="center">
                  {offer.deposit_methods.join(", ")}
                </TableCell>
                <TableCell align="center">{offer.withdrawal_time}</TableCell>
                <TableCell align="center">{offer.license}</TableCell>
                <TableCell align="center">
                  <Rating value={offer.rating} readOnly precision={0.1} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default BonusComparisonTable;