import React from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";

function GameCard({ game }) {
  return (
    <Box 
      sx={{ 
        mb: 4,
        "&:hover": {
          "& .game-image": {
            transform: "scale(1.1)",
          },
          "& .game-name": {
            transform: "translateX(30px)",
          },
        },
      }}
    >
      {/* Bildbereich der Card */}
      <Card
        sx={{
          borderRadius: "15px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          alt={game.name}
          image={game.image}
          className="game-image"
          sx={{
            height: "200px",
            objectFit: "cover",
            transition: "transform 0.5s ease",
          }}
        />
      </Card>

      {/* Bereich unter der Card mit Namen und Linie */}
      <Box
        sx={{
          mt: 2,
          textAlign: "left",
          position: "relative",
        }}
      >
        <Typography
          variant="body1"
          className="game-name"
          sx={{
            display: "inline-block",
            color: "#fff",
            transition: "transform 0.5s ease",
          }}
        >
          {game.name}
        </Typography>
      </Box>
    </Box>
  );
}

export default GameCard;
