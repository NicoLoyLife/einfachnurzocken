import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import logo from "../../assets/images/logo.png";
import TopbarTabs from "./Topbar";
import { setSection } from "../../redux/sectionSlice"; // Redux action to update the section

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const dispatch = useDispatch();
  const currentSection = useSelector((state) => state.section.currentSection); // Redux state für die aktuelle Section (sportwetten oder online-spielotheken)
  const location = useLocation();

  useEffect(() => {
    // Setze die Section basierend auf der aktuellen URL
    if (location.pathname.includes("/sportwetten")) {
      dispatch(setSection("sportwetten"));
    } else if (location.pathname.includes("/online-spielotheken")) {
      dispatch(setSection("online-spielotheken"));
    }
  }, [location.pathname, dispatch]);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleMenuItemClick = () => {
    setDrawerOpen(false);
  };

  // Standard Menü für die allgemeine Startseite
  const defaultMenuItems = [
    { text: "Home", link: "/" },
    { text: "Online Spielotheken", link: "/online-spielotheken" },
    { text: "Sportwetten", link: "/sportwetten" },
    { text: "Über uns", link: "/about" },
  ];

  // Menü für Sportwetten-Bereich
  const menuItemsSportwetten = [
    { text: "Home", link: "/sportwetten" },
    { text: "Sportwetten-Bonus", link: "/sportwetten-bonus" },
    { text: "Wett-Tipps", link: "/sportwetten/wett-tipps" },
    { text: "Guides", link: "/sportwetten/guides-sportwetten" },
  ];

  // Menü für Online-Spielotheken-Bereich
  const menuItemsOnlineSpielotheken = [
    { text: "Home", link: "/online-spielotheken" },
    {
      text: "Anbieter-Vergleich",
      link: "/online-spielotheken/anbieter-vergleich",
    },
    { text: "News", link: "/online-spielotheken/news" },
    { text: "Spiele", link: "/online-spielotheken/spiele" },
    { text: "Guides", link: "/online-spielotheken/guides" },
  ];

  // Festlegen welches Menü gezeigt wird basierend auf der aktuellen Section
  const menuItems =
    location.pathname === "/"
      ? defaultMenuItems
      : currentSection === "sportwetten"
      ? menuItemsSportwetten
      : menuItemsOnlineSpielotheken;

  const drawer = (
    <Box sx={{ width: "100vw", height: "100vh", padding: "30px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          component={Link}
          to="/"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <img src={logo} alt="EinfachNurZocken" style={{ height: "55px" }} />
        </Box>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="close"
          onClick={toggleDrawer(false)}
          sx={{
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
              cursor: "pointer",
            },
          }}
        >
          <Typography sx={{ mr: 1 }}>Schließen</Typography>
          <CloseIcon
            sx={{
              fontSize: 32,
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "rotate(180deg)",
              },
            }}
          />
        </IconButton>
      </Box>

      <List sx={{ marginTop: "20px" }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.link}
              onClick={handleMenuItemClick}
              sx={{
                padding: "5px",
                color: "grey.300",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "white",
                },
              }}
            >
              <ListItemText
                primary={<Typography variant="h6">{item.text}</Typography>}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ marginTop: "20px", marginBottom: "10px" }} />

      {/* Social Media Links */}
      <Box sx={{ display: "flex", justifyContent: "flex-start", gap: "15px" }}>
        <IconButton color="inherit" href="https://facebook.com" target="_blank">
          <Facebook />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://instagram.com"
          target="_blank"
        >
          <Instagram />
        </IconButton>
        <IconButton color="inherit" href="https://twitter.com" target="_blank">
          <Twitter />
        </IconButton>
        <IconButton color="inherit" href="https://youtube.com" target="_blank">
          <YouTube />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Top Bar nur auf Unterseiten sichtbar (Mobile und Desktop) */}
      {location.pathname !== "/" && <TopbarTabs />}

      {/* Haupt-Navigation */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          backgroundImage: "none",
          boxShadow: "none",
          height: "90px",
          padding: "0 20px",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", height: "100%" }}>
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img src={logo} alt="EinfachNurZocken" style={{ height: "55px" }} />
          </Box>

          {/* Hamburger Menu für Mobile */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: "block", md: "none" },
              padding: "0",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
                cursor: "pointer",
              },
            }}
          >
            <MenuIcon sx={{ fontSize: 32 }} />
          </IconButton>

          {/* Navigation Links für Desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "20px",
              alignItems: "center",
            }}
          >
            {menuItems.map((item) => (
              <Link
                key={item.text}
                to={item.link}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontSize: "1.2rem",
                }}
              >
                {item.text}
              </Link>
            ))}
          </Box>
        </Toolbar>

        <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              width: "100%",
              height: "100%",
              backgroundColor: "background.default",
            },
          }}
        >
          {drawer}
        </Drawer>
      </AppBar>
    </>
  );
}

export default Navbar;