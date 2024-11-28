import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import MainLayout from "../../layout/MainLayout";
import wettTippsData from "../../../services/wett-tipps.json";
import { format, parse } from "date-fns";
import { de } from "date-fns/locale";

const WettTippsOverview = () => {
  const [wettTipps, setWettTipps] = useState([]);

  useEffect(() => {
    // Erstelle eine Kopie der Daten und füge ein 'dateTime' Feld hinzu
    const tippsWithDateTime = wettTippsData.map((tipp) => {
      // Kombiniere das Datum und die Uhrzeit
      const dateTimeString = `${tipp.date} ${tipp.time}`;
      // Erstelle ein Date-Objekt unter Angabe des Formats
      const dateTime = parse(dateTimeString, 'yyyy-MM-dd HH:mm', new Date());
      return { ...tipp, dateTime };
    });

    // Sortiere die Wett-Tipps nach Datum und Uhrzeit (neueste zuerst)
    const sortedTipps = tippsWithDateTime.sort(
      (a, b) => b.dateTime - a.dateTime
    );

    setWettTipps(sortedTipps);
  }, []);

  return (
    <MainLayout>
      <Box sx={{ p: 4 }}>
        <Typography variant="h3" gutterBottom>
          Wett-Tipps
        </Typography>
        <Grid container spacing={4}>
          {wettTipps.map((tipp) => (
            <Grid item xs={12} md={6} key={tipp.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {tipp.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {format(tipp.dateTime, "dd. MMMM yyyy, HH:mm", {
                      locale: de,
                    })} Uhr
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {tipp.description}
                  </Typography>
                  <Button
                    component={Link}
                    to={`/sportwetten/wett-tipps/${tipp.id}`}
                    variant="contained"
                    color="primary"
                  >
                    Mehr lesen
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default WettTippsOverview;
