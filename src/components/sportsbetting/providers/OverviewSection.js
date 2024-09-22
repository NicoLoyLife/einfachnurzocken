import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const OverviewSection = ({ overview }) => (
  <Box sx={{ mb: 4 }}>
    {/* Überschrift */}
    <Typography variant="h2" component="h2" gutterBottom>
      Überblick
    </Typography>

    {/* Liste der Übersichtspunkte */}
    <List>
      {overview.foundingYear && (
        <ListItem disableGutters>
          <ListItemIcon>
            <InfoIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Gründungsjahr" secondary={overview.foundingYear} />
        </ListItem>
      )}

      {overview.licence && (
        <ListItem disableGutters>
          <ListItemIcon>
            <InfoIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Lizenz" secondary={overview.licence} />
        </ListItem>
      )}

      {overview.specialFeatures && overview.specialFeatures.length > 0 && (
        <ListItem disableGutters alignItems="flex-start">
          <ListItemIcon>
            <InfoIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Besonderheiten"
            secondary={
              <>
                {overview.specialFeatures.map((feature, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    component="span"
                    display="block"
                  >
                    - {feature}
                  </Typography>
                ))}
              </>
            }
          />
        </ListItem>
      )}

      {overview.website && (
        <ListItem disableGutters>
          <ListItemIcon>
            <InfoIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Webseite"
            secondary={
              <a href={`https://${overview.website}`} target="_blank" rel="noopener noreferrer">
                {overview.website}
              </a>
            }
          />
        </ListItem>
      )}

      {overview.security && overview.security.length > 0 && (
        <ListItem disableGutters alignItems="flex-start">
          <ListItemIcon>
            <InfoIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Sicherheit"
            secondary={
              <>
                {overview.security.map((item, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    component="span"
                    display="block"
                  >
                    - {item}
                  </Typography>
                ))}
              </>
            }
          />
        </ListItem>
      )}
    </List>

    {/* Beschreibung */}
    {overview.description && (
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1">{overview.description}</Typography>
      </Box>
    )}
  </Box>
);

export default OverviewSection;