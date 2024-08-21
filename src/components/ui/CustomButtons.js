import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// Definiere den Primärbutton
const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  padding: '8px 16px',
  borderRadius: '4px',
  textTransform: 'none', // Verhindert automatische Großschreibung
}));

// Definiere den Sekundärbutton
const SecondaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
  padding: '8px 16px',
  borderRadius: '4px',
  textTransform: 'none',
}));

export { PrimaryButton, SecondaryButton };