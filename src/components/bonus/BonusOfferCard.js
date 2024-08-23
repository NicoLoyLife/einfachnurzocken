import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Rating,
} from "@mui/material";

function BonusOfferCard({ offer, placement }) {
  return (
    <Card
      sx={{
        mb: 4,
        boxShadow: 3,
        borderRadius: "15px",
        overflow: "hidden",
        height: "500px",
        position: "relative",
      }}
    >
      <CardContent
        sx={{
          p: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >

        <Box
            sx={{
                backgroundColor: "primary.main",
                p: 2,
                borderRadius: "15px 15px 0 0",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    color: "primary.main",
                    backgroundColor: '#fff',
                    padding: "4px 10px",
                    borderRadius: "5px",
                    position: "absolute",
                    left: 16,
                }}
            >
                <Typography variant="body1"><strong>{placement}</strong></Typography>
            </Box>

            <Typography variant="h5" component="h5">
                {offer.provider}
            </Typography>
        </Box>

        <Box sx={{ padding: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                    <Typography variant="h5">
                    {offer.rating}/5
                    </Typography>
                    <Rating value={offer.rating} readOnly precision={0.1} />
                </Grid>

                <Grid item xs={12} md={8} sx={{ textAlign: "center" }}>
                    <Typography
                    variant="h4"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                    color="primary"
                    >
                    {offer.bonus}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, fontStyle: "italic" }}>
                    {offer.bonusType}
                    </Typography>
                </Grid>
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Typography variant="body2">
                RTP: <strong>{offer.rtp}%</strong>
            </Typography>
            <Typography variant="body2">
                Auszahlung: <strong>{offer.withdrawal_time}</strong>
            </Typography>
            </Box>

            <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Typography variant="body2">
                <strong>Umsatzbedingungen:</strong>
            </Typography>
            <Typography variant="body2">
                {offer.wageringRequirements}
            </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-around", mt: 3 }}>
            <Button variant="outlined" color="primary">
                Review
            </Button>
            <Button variant="contained" color="primary">
                Jetzt spielen
            </Button>
            </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default BonusOfferCard;
