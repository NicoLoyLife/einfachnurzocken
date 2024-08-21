import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { news } from '../services/dummyData';

function LatestNews() {
  return (
    <Box m={2} p={2} border={1} borderRadius={1}>
      <Typography variant="h4" gutterBottom>
        Neueste News
      </Typography>
      <List>
        {news.slice(0, 3).map((article, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={article.title}
              secondary={article.excerpt}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default LatestNews;
