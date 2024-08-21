import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins';
import '@fontsource/open-sans';

const typography = {
  // Standard-Schriftart für Fließtexte
  fontFamily: 'Open Sans, Arial, sans-serif',
    
  // Überschriften (h1, h2, h3, etc.) mit Poppins
  h1: {
    fontFamily: 'Poppins, Arial, sans-serif',
    fontWeight: 700, // Fett für zusätzliche Präsenz
    fontSize: '3rem', // Anpassung der Schriftgröße nach Bedarf
    lineHeight: 1.2, // Zeilenhöhe für bessere Lesbarkeit
  },
  h2: {
    fontFamily: 'Poppins, Arial, sans-serif',
    fontWeight: 700,
    fontSize: '2.5rem',
    lineHeight: 1.3,
  },
  h3: {
    fontFamily: 'Poppins, Arial, sans-serif',
    fontWeight: 600,
    fontSize: '2rem',
    lineHeight: 1.4,
  },
  h4: {
    fontFamily: 'Poppins, Arial, sans-serif',
    fontWeight: 600,
    fontSize: '1.75rem',
    lineHeight: 1.5,
  },
  h5: {
    fontFamily: 'Poppins, Arial, sans-serif',
    fontWeight: 500,
    fontSize: '1.5rem',
    lineHeight: 1.6,
  },
  h6: {
    fontFamily: 'Poppins, Arial, sans-serif',
    fontWeight: 500,
    fontSize: '1.25rem',
    lineHeight: 1.7,
  },
  
  // Body1 für normalen Fließtext
  body1: {
    fontFamily: 'Open Sans, Arial, sans-serif',
    fontWeight: 400, // Normalgewicht
    fontSize: '1rem', // Standard-Schriftgröße
    lineHeight: 1.75, // Angenehme Zeilenhöhe für längere Texte
  },
  
  // Body2 für kleinere Fließtexte oder sekundäre Textbereiche
  body2: {
    fontFamily: 'Open Sans, Arial, sans-serif',
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.7,
  },

  // Weitere Typografiestile wie Button, Caption, Overline, etc.
  button: {
    fontFamily: 'Poppins, Arial, sans-serif',
    fontWeight: 600,
    fontSize: '0.875rem',
    textTransform: 'none', // Deaktiviert automatische Großschreibung
  },
  caption: {
    fontFamily: 'Open Sans, Arial, sans-serif',
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 1.5,
  },
  overline: {
    fontFamily: 'Open Sans, Arial, sans-serif',
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 2,
    textTransform: 'uppercase', // Überstrichene Texte in Großbuchstaben
  },
};

const themes = {
  classicDark: createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#90caf9' },
      secondary: { main: '#f48fb1' },
      background: { default: '#121212', paper: '#1d1d1d' },
      text: { primary: '#ffffff', secondary: '#b0bec5' },
    },
    typography,
  }),
  elegantPurple: createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#7c4dff' },
      secondary: { main: '#ff4081' },
      background: { default: '#020202', paper: '#1e1e1e' },
      text: { primary: '#ffffff', secondary: '#bdbdbd' },
    },
    typography,
  }),
  boldAccent: createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#ff7043' },
      secondary: { main: '#ffee58' },
      background: { default: '#0d0d0d', paper: '#2c2c2c' },
      text: { primary: '#ffffff', secondary: '#eeeeee' },
    },
    typography,
  }),
  greenBlue: createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#26a69a' },
      secondary: { main: '#64b5f6' },
      background: { default: '#0a0a0a', paper: '#1a1a1a' },
      text: { primary: '#e0f7fa', secondary: '#b2ebf2' },
    },
    typography,
  }),
  redBlack: createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#f44336' },
      secondary: { main: '#ff5722' },
      background: { default: '#020202', paper: '#303030' },
      text: { primary: '#ffffff', secondary: '#ffcccb' },
    },
    typography,
  }),
};

export default themes;