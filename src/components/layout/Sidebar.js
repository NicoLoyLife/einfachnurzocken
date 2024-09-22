// Sidebar.js
import React from 'react';
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemButton,
  Paper,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom'; // Angenommen, dass react-router-dom verwendet wird

const topProviders = [
  { name: 'Betano', link: '/betano' },
  { name: 'Happybet', link: '/happybet' },
  { name: 'Bet365', link: '/bet365' },
  { name: 'Tipico', link: '/tipico' },
  { name: 'Bwin', link: '/bwin' },
];

const Sidebar = ({ isSticky }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: isSticky ? 'sticky' : 'static',
        top: isSticky ? theme.spacing(10) : 'auto', // Abstand von der Oberkante
      }}
    >
      {/* Top 5 Anbieter */}
      <Typography variant="h5" gutterBottom>
        Top 5 Sportwetten-Anbieter
      </Typography>
      <List>
        {topProviders.map((provider, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton component={Link} to={provider.link}>
              <ListItemText primary={`${index + 1}. ${provider.name}`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Bonus-Box */}
      <Paper sx={{ mt: 4, p: 2 }} elevation={3}>
        <Typography variant="h6" gutterBottom>
          Hol dir den besten Sportwetten Bonus!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Entdecke exklusive Bonusangebote bei den besten Sportwettenanbietern. Sichere dir jetzt deinen Bonus!
        </Typography>
        <Button variant="contained" color="primary" fullWidth component={Link} to="/bonus">
          Zum Bonusbereich
        </Button>
      </Paper>
    </Box>
  );
};

export default Sidebar;