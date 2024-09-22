import { createTheme } from "@mui/material/styles";
import "@fontsource/poppins";
import "@fontsource/open-sans";

const typography = {
  // Standard-Schriftart für Fließtexte
  fontFamily: "Poppins, Open Sans, Arial, sans-serif",

  // Überschriften (h1, h2, h3, etc.) mit Poppins
  h1: {
    fontFamily: "Poppins, Arial, sans-serif",
    fontWeight: 700, // Fett für zusätzliche Präsenz
    fontSize: "2.5rem", // Anpassung der Schriftgröße nach Bedarf
    lineHeight: 1.2, // Zeilenhöhe für bessere Lesbarkeit
  },
  h2: {
    fontFamily: "Poppins, Arial, sans-serif",
    fontWeight: 700,
    fontSize: "1.75rem",
    lineHeight: 1.2,
  },
  h3: {
    fontFamily: "Poppins, Arial, sans-serif",
    fontWeight: 700,
    fontSize: "1.5rem",
    lineHeight: 1.2,
  },
  h4: {
    fontFamily: "Poppins, Arial, sans-serif",
    fontWeight: 700,
    fontSize: "1.25rem",
    lineHeight: 1.2,
  },
  h5: {
    fontFamily: "Poppins, Arial, sans-serif",
    fontWeight: 700,
    fontSize: "1rem",
    lineHeight: 1.2,
  },
  h6: {
    fontFamily: "Poppins, Arial, sans-serif",
    fontWeight: 700,
    fontSize: "0.75rem",
    lineHeight: 1.2,
  },

  // Body1 für normalen Fließtext
  body1: {
    fontFamily: "Poppins, Arial, sans-serif",
    fontWeight: 400, // Normalgewicht
    fontSize: "1rem", // Standard-Schriftgröße
    lineHeight: 1.4, // Angenehme Zeilenhöhe für längere Texte
  },

  // Body2 für kleinere Fließtexte oder sekundäre Textbereiche
  body2: {
    fontFamily: "Poppins, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: 1.4,
  },

  // Weitere Typografiestile wie Button, Caption, Overline, etc.
  button: {
    fontFamily: "Poppins, Arial, sans-serif",
    // fontWeight: 600,
    fontSize: "0.875rem",
    textTransform: "none", // Deaktiviert automatische Großschreibung
  },
  caption: {
    fontFamily: "Poppins, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 1.5,
  },
  overline: {
    fontFamily: "Poppins, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "0.75rem",
    lineHeight: 2,
    textTransform: "uppercase", // Überstrichene Texte in Großbuchstaben
  },
};

const themes = {
  // Casino-Theme mit dunklem Rot und Gold
  casinoTheme: createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#b71c1c" }, // Dunkles Rot
      secondary: { main: "#FFD700" }, // Gold/helles Gelb
      background: { default: "#191919", paper: "#2b2b2b" },
      text: { primary: "#ffffff", secondary: "#bdbdbd" },
    },
    typography,
  }),
  // Sportwetten-Theme mit dunklem und hellem Grün
  sportwettenTheme: createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#28A745" }, // Dunkles Grün
      secondary: { main: "#FFD700" }, // Helleres Grün
      background: { default: "#191919", paper: "#2b2b2b" },
      text: { primary: "#ffffff", secondary: "#bdbdbd" },
    },
    typography,
  }),
};

export default themes;
