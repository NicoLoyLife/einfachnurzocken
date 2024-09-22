import React from "react";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const ProsConsSection = ({ pros, cons }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h2" component="h2" gutterBottom>
      Vorteile und Nachteile
    </Typography>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <List>
          {pros.map((pro, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleIcon color="success" />
              </ListItemIcon>
              <ListItemText primary={pro} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12} md={6}>
        <List>
          {cons.map((con, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <HighlightOffIcon color="error" />
              </ListItemIcon>
              <ListItemText primary={con} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>

  </Box>
);

export default ProsConsSection;
