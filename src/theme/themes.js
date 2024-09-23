import { createTheme } from "@mui/material/styles";
import { commonColors, casinoColors, sportwettenColors } from "./colors";

// Casino-Theme
export const CasinoTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: casinoColors.primary,
      contrastText: commonColors.background,
    },
    secondary: {
      main: casinoColors.secondary,
    },
    background: {
      default: commonColors.background,
      paper: commonColors.paper,
    },
    text: {
      primary: commonColors.textPrimary,
      secondary: commonColors.textSecondary,
    },
    success: {
      main: casinoColors.success,
    },
    warning: {
      main: casinoColors.warning,
    },
    error: {
      main: casinoColors.error,
    },
  },
  typography: {
    fontFamily:
      '"Montserrat", "Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 700,
      fontSize: "2rem",
      letterSpacing: "0.05em",
    },
    h2: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 700,
      fontSize: "1.75rem",
      letterSpacing: "0.05em",
    },
    h3: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 700,
      fontSize: "1.5rem",
      letterSpacing: "0.05em",
    },
    body1: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
        containedPrimary: {
          backgroundColor: casinoColors.primary,
          color: commonColors.background,
          "&:hover": {
            backgroundColor: "#c29e34", // Etwas dunkleres Gold beim Hover
          },
        },
        outlinedPrimary: {
          borderColor: casinoColors.primary,
          color: casinoColors.primary,
          "&:hover": {
            backgroundColor: "rgba(212, 175, 55, 0.1)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            backgroundColor: commonColors.paper,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: commonColors.textSecondary,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: casinoColors.primary,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: casinoColors.primary,
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: casinoColors.icon,
        },
      },
    },
  },
});

// Sportwetten-Theme
export const SportwettenTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: sportwettenColors.primary,
      contrastText: commonColors.textPrimary,
    },
    secondary: {
      main: sportwettenColors.secondary,
    },
    background: {
      default: commonColors.background,
      paper: commonColors.paper,
    },
    text: {
      primary: commonColors.textPrimary,
      secondary: commonColors.textSecondary,
    },
    success: {
      main: sportwettenColors.success,
    },
    warning: {
      main: sportwettenColors.warning,
    },
    error: {
      main: sportwettenColors.error,
    },
  },
  typography: {
    fontFamily:
      '"Roboto", "Lato", "Montserrat", "Open Sans", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 700,
      fontSize: "2rem",
      letterSpacing: "0.05em",
    },
    h2: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 700,
      fontSize: "1.75rem",
      letterSpacing: "0.05em",
    },
    h3: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 600,
      fontSize: "1.5rem",
      letterSpacing: "0.05em",
    },
    body1: {
      fontFamily: '"Lato", sans-serif',
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: '"Lato", sans-serif',
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
        containedPrimary: {
          backgroundColor: sportwettenColors.primary,
          color: sportwettenColors.contrastText,
          "&:hover": {
            backgroundColor: "#1C86EE", // Dunkleres Blau beim Hover
          },
        },
        outlinedPrimary: {
          borderColor: sportwettenColors.secondary,
          color: sportwettenColors.secondary,
          "&:hover": {
            backgroundColor: "rgba(50, 205, 50, 0.1)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            backgroundColor: commonColors.paper,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: commonColors.textSecondary,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: sportwettenColors.primary,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: sportwettenColors.primary,
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: sportwettenColors.icon,
        },
      },
    },
  },
});
