import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { bonusangebote } from '../services/dummyData';

function LatestBonusangebote() {
  return (
    <Box m={2} p={2} border={1} borderRadius={1}>
      <Typography variant="h4" gutterBottom>
        Neueste Bonusangebote
      </Typography>
      <List>
        {bonusangebote.slice(0, 3).map((bonus, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={bonus.title}
              secondary={bonus.details}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default LatestBonusangebote;