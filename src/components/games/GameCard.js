import React from "react";
import { Typography, Card, CardMedia, CardContent, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function GameCard({ game }) {
  return (
    <Card sx={{ mb: 4, borderRadius: '15px', overflow: 'hidden', position: 'relative' }}>
      <CardMedia
        component="img"
        alt={game.name}
        image={game.image}
        sx={{ height: '200px', objectFit: 'cover' }}
      />

      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'primary.main', color: '#fff', padding: '10px 16px', minHeight: '60px' }}>
        <Typography variant='body1'>
          {game.name}
        </Typography>
        <IconButton color="inherit" sx={{ padding: 0 }}>
          <ArrowForwardIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default GameCard;