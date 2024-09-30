import React from "react";
import { AppBar, Tabs, Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { setSection } from "../../redux/sectionSlice";
import { SECTIONS } from "../../redux/sectionSlice";

function TopbarTabs() {
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();
  const currentSection = useSelector((state) => state.section.currentSection);

  // Aktuellen Pfad holen und activen Tab setzen (Sportwetten oder Online Spielotheken)
  const currentTab =
    currentSection === SECTIONS.SPORTWETTEN
      ? SECTIONS.SPORTWETTEN
      : SECTIONS.ONLINE_SPIELOTHEKEN;

  const handleTabChange = (event, newValue) => {
    dispatch(setSection(newValue));
    navigate(
      newValue === SECTIONS.SPORTWETTEN
        ? "/sportwetten"
        : "/online-spielotheken"
    );
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        zIndex: theme.zIndex.appBar + 1,
        backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Tabs
        value={currentTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="inherit"
        variant="fullWidth"
      >
        <Tab
          label="Online Spielotheken"
          value={SECTIONS.ONLINE_SPIELOTHEKEN}
          sx={{
            color:
              currentTab === SECTIONS.ONLINE_SPIELOTHEKEN
                ? theme.palette.primary.main
                : theme.palette.text.secondary,
            fontWeight:
              currentTab === SECTIONS.ONLINE_SPIELOTHEKEN ? "bold" : "normal",
          }}
        />
        <Tab
          label="Sportwetten"
          value={SECTIONS.SPORTWETTEN}
          sx={{
            color:
              currentTab === SECTIONS.SPORTWETTEN
                ? theme.palette.primary.main
                : theme.palette.text.secondary,
            fontWeight: currentTab === SECTIONS.SPORTWETTEN ? "bold" : "normal",
          }}
        />
      </Tabs>
    </AppBar>
  );
}

export default TopbarTabs;
