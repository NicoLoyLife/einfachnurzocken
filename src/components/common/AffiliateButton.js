import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const AffiliateButton = ({ to, text }) => {
  return (
    <Button
      component={Link}
      to={to}
      variant="contained"
      color="primary"
      sx={{
        width: { xs: "75%", sm: "auto" },
        maxWidth: { sm: 400 },
        whiteSpace: "normal", // Ermöglicht Zeilenumbruch bei langem Text
      }}
      rel="noopener noreferrer sponsored"
    >
      {text}
    </Button>
  );
};

export default AffiliateButton;