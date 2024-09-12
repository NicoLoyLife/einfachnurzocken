import React from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

function TopbarTabs() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Aktuellen Pfad holen und activen Tab setzen (Sportwetten oder Online Spielotheken)
  const currentTab = location.pathname.includes('/sportwetten') ? 'sportwetten' : 'online-spielotheken';

  const handleTabChange = (event, newValue) => {
    navigate(newValue === 'sportwetten' ? '/sportwetten' : '/online-spielotheken');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary.main' }}>
      <Tabs
        value={currentTab}
        onChange={handleTabChange}
        indicatorColor="secondary"
        textColor="secondary"
        centered
      >
        <Tab label="Sportwetten" value="sportwetten" />
        <Tab label="Online Spielotheken" value="online-spielotheken" />
      </Tabs>
    </AppBar>
  );
}

export default TopbarTabs;