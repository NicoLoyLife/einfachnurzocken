import React from "react";
import { Box } from "@mui/material";

function Wrapper({ children }) {
  return (
    <Box
      sx={{
        margin: "0 auto", // Zentriere den Inhalt horizontal
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
      maxWidth='xl'
    >
      {children}
    </Box>
  );
}

export default Wrapper;
