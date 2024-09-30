import React from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

function Wrapper({ children }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Bestimme die maximale Höhe der Navbar (90px) und der Topbar (48px)
  const navbarMaxHeight = 90;
  const topbarHeight = 48;

  // Berechne das paddingTop basierend darauf, ob die Topbar angezeigt wird
  const paddingTop = isHomePage
    ? `${navbarMaxHeight}px`
    : `${topbarHeight + navbarMaxHeight}px`;

  return (
    <Box
      sx={{
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: paddingTop,
      }}
    >
      {children}
    </Box>
  );
}

export default Wrapper;