import { createTheme } from "@mui/material/styles";
import { commonColors, casinoColors, sportwettenColors } from "./colors";

const getTheme = (colors, typography) =>
  createTheme({
    shape: {
      borderRadius: 15,
    },
    palette: {
      mode: "dark",
      primary: {
        main: colors.primary,
        contrastText: colors.contrastText || commonColors.textPrimary,
      },
      secondary: {
        main: colors.secondary,
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
        main: colors.success,
      },
      warning: {
        main: colors.warning,
      },
      error: {
        main: colors.error,
      },
      link: {
        main: colors.primary,
        hover: colors.linkHover,
        visited: colors.primary,
        active: colors.primary,
      },
    },
    typography: {
      ...typography,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "none",
          },
          containedPrimary: {
            backgroundColor: colors.primary,
            color: colors.contrastText,
            "&:hover": {
              backgroundColor: colors.linkHover,
            },
          },
          outlinedPrimary: {
            borderColor: colors.primary,
            color: colors.primary,
            "&:hover": {
              backgroundColor: colors.outlinedPrimaryHoverBg,
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
              borderColor: colors.primary,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: colors.primary,
            },
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: colors.icon,
          },
        },
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
            "&:visited": {
              color: theme.palette.link.visited,
            },
            "&:active": {
              color: theme.palette.link.active,
            },
          }),
        },
      },
    },
  });

// Casino-Theme
export const CasinoTheme = getTheme(casinoColors, {
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
    color: casinoColors.primary,
  },
  h3: {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 600,
    fontSize: "1.5rem",
    letterSpacing: "0.05em",
    color: casinoColors.primary,
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
});

// Sportwetten-Theme
export const SportwettenTheme = getTheme(sportwettenColors, {
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
});
