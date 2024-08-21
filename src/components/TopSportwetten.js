import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { sportwetten } from '../services/dummyData';

function TopSportwetten() {
  return (
    <Box m={2} p={2} border={1} borderRadius={1}>
      <Typography variant="h4" gutterBottom>
        Top Sportwetten Anbieter
      </Typography>
      <List>
        {sportwetten.slice(0, 3).map((wetten, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={wetten.name}
              secondary={`Rating: ${wetten.rating} | Bonus: ${wetten.welcome_bonus}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default TopSportwetten;