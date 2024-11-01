// StyledLink.js
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "underline",
  "&:hover": {
    color: theme.palette.primary.dark,
    textDecoration: "underline",
  },
  "&:visited": {
    color: theme.palette.primary.main, // Unterschiedliche Farbe für :visited
  },
  "&:active": {
    color: theme.palette.primary.dark,
  },
}));

export default StyledLink;