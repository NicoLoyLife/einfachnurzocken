import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { spiele } from '../services/dummyData';

function PopularGames() {
  return (
    <Box m={2} p={2} border={1} borderRadius={1}>
      <Typography variant="h4" gutterBottom>
        Beliebte Spiele
      </Typography>
      <List>
        {spiele.slice(0, 3).map((game, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={game.title}
              secondary={game.description}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default PopularGames;
