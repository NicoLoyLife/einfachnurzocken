import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider, GlobalStyles } from '@mui/material';
import Home from './pages/Home';
import News from './pages/News';
import OnlineCasinos from './pages/OnlineCasinos';
import Sportwetten from './pages/Sportwetten';
import Guides from './pages/Guides';
import Bonusangebote from './pages/Bonusangebote';
import Promotions from './pages/Promotions';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Wrapper from './components/common/Wrapper';
import Impressum from './pages/Impressum';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Spielerschutz from './pages/Spielerschutz';
import AGB from './pages/AGB';
import themes from './theme';

function App() {
  const location = useLocation();

  // Wähle das Theme basierend auf der aktuellen Route
  const getTheme = () => {
    if (location.pathname.includes('/sportwetten')) {
      return themes.sportwettenTheme; // Sportwetten Theme für den Sportwetten-Bereich
    } else {
      return themes.casinoTheme; // Casino Theme für den Online-Spielotheken-Bereich
    }
  };

  return (
    <ThemeProvider theme={getTheme()}>
      {/* Global Styles setzen */}
      <GlobalStyles
        styles={(theme) => ({
          body: {
            backgroundColor: theme.palette.background.default, // Hintergrundfarbe für den Body
            color: theme.palette.text.primary, // Textfarbe
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            minHeight: '100vh',
          },
          '*': {
            boxSizing: 'inherit',
          },
          '#root': {
            height: '100vh',
          },
        })}
      />
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/online-casinos" element={<OnlineCasinos />} />
          <Route path="/sportwetten" element={<Sportwetten />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/bonusangebote" element={<Bonusangebote />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<PrivacyPolicy />} />
          <Route path="/spielerschutz" element={<Spielerschutz />} />
          <Route path="/agb" element={<AGB />} />
        </Routes>
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
}

export default App;