import React, { useMemo, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider, GlobalStyles, CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import News from "./pages/News";
import OnlineSpielotheken from "./pages/OnlineSpielotheken";
import Sportwetten from "./pages/Sportwetten";
import Guides from "./pages/Guides";
import Bonusangebote from "./pages/Bonusangebote";
import Promotions from "./pages/Promotions";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Wrapper from "./components/common/Wrapper";
import Impressum from "./pages/Impressum";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Spielerschutz from "./pages/Spielerschutz";
import AGB from "./pages/AGB";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { CasinoTheme, SportwettenTheme } from "./theme/themes";
import SportwettenRoutes from "./routes/SportwettenRoutes";
import { useDispatch } from "react-redux";
import { setSection, SECTIONS } from "./redux/sectionSlice";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  // Wähle das Theme basierend auf der aktuellen Route
  const currentTheme = useMemo(() => {
    if (location.pathname.startsWith("/sportwetten")) {
      return SportwettenTheme;
    } else {
      return CasinoTheme;
    }
  }, [location.pathname]);

  // Effekt, um die Sektion bei der Pfadänderung zu aktualisieren
  useEffect(() => {
    if (location.pathname.includes("/sportwetten")) {
      dispatch(setSection(SECTIONS.SPORTWETTEN));
    } else if (location.pathname.includes("/online-spielotheken")) {
      dispatch(setSection(SECTIONS.ONLINE_SPIELOTHEKEN));
    } else {
      dispatch(setSection(SECTIONS.DEFAULT));
    }
  }, [location.pathname, dispatch]);

  // Dynamische Aktualisierung der Theme-Farbe
  useEffect(() => {
    const themeColor = currentTheme.palette.primary.main || "#121212"; // Fallback-Farbe
    const metaTag = document.querySelector('meta[name="theme-color"]');
    if (metaTag) {
      metaTag.setAttribute("content", themeColor);
    } else {
      const newMetaTag = document.createElement("meta");
      newMetaTag.setAttribute("name", "theme-color");
      newMetaTag.setAttribute("content", themeColor);
      document.head.appendChild(newMetaTag);
    }
  }, [currentTheme]);

  return (
    <HelmetProvider>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        {/* Global Styles setzen */}
        <GlobalStyles
          styles={(theme) => ({
            body: {
              backgroundColor: theme.palette.background.default, // Hintergrundfarbe für den Body
              color: theme.palette.text.primary,
              margin: 0,
              padding: 0,
              boxSizing: "border-box",
              minHeight: "100vh",
            },
            "*": {
              boxSizing: "inherit",
            },
            "#root": {
              height: "100vh",
            },
          })}
        />
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route
              path="/online-spielotheken/*"
              element={<OnlineSpielotheken />}
            />
            <Route path="/sportwetten/*" element={<Sportwetten />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/bonusangebote" element={<Bonusangebote />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<PrivacyPolicy />} />
            <Route path="/spielerschutz" element={<Spielerschutz />} />
            <Route path="/agb" element={<AGB />} />
            <Route path="/about" element={<About />} />
            {/* Sportwetten-Routen einbinden */}
            {SportwettenRoutes()}
            {/* 404 Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Wrapper>
        <Footer />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
