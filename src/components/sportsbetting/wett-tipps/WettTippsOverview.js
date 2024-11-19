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

const WettTippsOverview = () => {
  const [wettTipps, setWettTipps] = useState([]);

  useEffect(() => {
    // Sortiere Wett-Tipps nach Veröffentlichungsdatum (neueste zuerst)
    const sortedTipps = [...wettTippsData].sort(
      (a, b) => new Date(b.published) - new Date(a.published)
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