import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import matter from "gray-matter";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import markdownFiles from "../../../services/wett-tipps";

const WettTippsOverview = () => {
  const [wettTipps, setWettTipps] = useState([]);

  useEffect(() => {
    const wettTippsData = Object.entries(markdownFiles).map(([path, file]) => {
      const { data, content } = matter(file);
      return { ...data, content };
    });

    // Nach Datum sortieren
    wettTippsData.sort((a, b) => new Date(b.published) - new Date(a.published));
    setWettTipps(wettTippsData);
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3">Wett-Tipps</Typography>
      <Grid container spacing={4}>
        {wettTipps.map((tipp) => (
          <Grid item xs={12} md={6} key={tipp.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{tipp.title}</Typography>
                <Typography variant="body2">{tipp.description}</Typography>
                <Button
                  component={Link}
                  to={`/sportwetten/wett-tipps/${tipp.id}`}
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  Mehr lesen
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WettTippsOverview;