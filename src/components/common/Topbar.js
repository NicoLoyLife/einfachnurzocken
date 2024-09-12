import React from "react";
import { AppBar, Tabs, Tab } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

function TopbarTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  // Aktuellen Pfad holen und activen Tab setzen (Sportwetten oder Online Spielotheken)
  const currentTab = location.pathname.includes("/sportwetten")
    ? "sportwetten"
    : "online-spielotheken";

  const handleTabChange = (event, newValue) => {
    navigate(
      newValue === "sportwetten" ? "/sportwetten" : "/online-spielotheken"
    );
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "primary.dark",
        backgroundImage: "none",
        boxShadow: "none",
        borderBottom: (theme) => `4px solid ${theme.palette.secondary.main}`, // BorderBottom in Primärfarbe
      }}
    >
      <Tabs
        value={currentTab}
        onChange={handleTabChange}
        textColor="inherit"
        sx={{
          ".MuiTabs-indicator": {
            display: "none", // Indikator vollständig ausblenden
          },
          ".MuiTab-root": {
            color: "white", // Textfarbe für inaktive Tabs
            opacity: 1, // Volle Deckkraft für inaktive Tabs
          },
          ".Mui-selected": {
            color: "secondary.main", // Textfarbe für aktive Tabs
          },
        }}
        centered
      >
        <Tab label="Online Spielotheken" value="online-spielotheken" />
        <Tab label="Sportwetten" value="sportwetten" />
      </Tabs>
    </AppBar>
  );
}

export default TopbarTabs;