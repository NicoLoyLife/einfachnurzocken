import { createTheme } from "@mui/material/styles";
import { commonColors, casinoColors, sportwettenColors } from "./colors";

// Casino-Theme
export const CasinoTheme = createTheme({
  shape: {
    borderRadius: 15, // Einheitlicher Border-Radius für Banner
  },
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
    link: {
      main: casinoColors.primary,
      hover: casinoColors.linkHover,
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
      color: commonColors.textPrimary,
    },
    h2: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 700,
      fontSize: "1.75rem",
      letterSpacing: "0.05em",
      color: casinoColors.primary,
    },
    h3: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 700,
      fontSize: "1.5rem",
      letterSpacing: "0.05em",
      color: casinoColors.primary,
    },
    body1: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: "1rem",
      lineHeight: 1.5,
      color: commonColors.textPrimary,
    },
    body2: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: "0.875rem",
      lineHeight: 1.5,
      color: commonColors.textPrimary,
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
            backgroundColor: casinoColors.linkHover,
          },
        },
        outlinedPrimary: {
          borderColor: casinoColors.primary,
          color: casinoColors.primary,
          "&:hover": {
            backgroundColor: casinoColors.outlinedPrimaryHoverBg,
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
    MuiTypography: {
      defaultProps: {
        color: "textPrimary", // Standardfarbe für Typography
      },
      variants: [
        {
          props: { variant: "h1" },
          style: {
            color: commonColors.textPrimary,
          },
        },
        {
          props: { variant: "h2" },
          style: {
            color: casinoColors.primary,
          },
        },
        {
          props: { variant: "h3" },
          style: {
            color: casinoColors.primary,
          },
        },
        // Weitere Varianten nach Bedarf
      ],
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.link.main,
          "&:hover": {
            color: theme.palette.link.hover,
          },
        }),
      },
    },
  },
});

// Sportwetten-Theme
export const SportwettenTheme = createTheme({
  shape: {
    borderRadius: 15, // Einheitlicher Border-Radius für Banner und Buttons
  },
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
    link: {
      main: sportwettenColors.primary,
      hover: sportwettenColors.linkHover,
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
      color: commonColors.textPrimary,
    },
    h2: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 700,
      fontSize: "1.75rem",
      letterSpacing: "0.05em",
      color: sportwettenColors.primary,
    },
    h3: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 600,
      fontSize: "1.5rem",
      letterSpacing: "0.05em",
      color: sportwettenColors.primary,
    },
    body1: {
      fontFamily: '"Lato", sans-serif',
      fontSize: "1rem",
      lineHeight: 1.5,
      color: commonColors.textPrimary,
    },
    body2: {
      fontFamily: '"Lato", sans-serif',
      fontSize: "0.875rem",
      lineHeight: 1.5,
      color: commonColors.textSecondary,
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
            backgroundColor: sportwettenColors.linkHover,
          },
        },
        outlinedPrimary: {
          borderColor: sportwettenColors.secondary,
          color: sportwettenColors.secondary,
          "&:hover": {
            backgroundColor: sportwettenColors.outlinedPrimaryHoverBg,
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
    MuiTypography: {
      defaultProps: {
        color: "textPrimary", // Standardfarbe für Typography
      },
      variants: [
        {
          props: { variant: "h1" },
          style: {
            color: commonColors.textPrimary,
          },
        },
        {
          props: { variant: "h2" },
          style: {
            color: sportwettenColors.primary,
          },
        },
        {
          props: { variant: "h3" },
          style: {
            color: sportwettenColors.primary,
          },
        },
        // Weitere Varianten nach Bedarf
      ],
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.link.main,
          "&:hover": {
            color: theme.palette.link.hover,
          },
        }),
      },
    },
  },
});
