import React, { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import logo from "../../assets/images/logo.png";
import TopbarTabs from "./Topbar";
import { useSelector } from "react-redux";
import { SECTIONS } from "../../redux/sectionSlice";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const currentSection = useSelector((state) => state.section.currentSection); // Redux state für die aktuelle Section (sportwetten oder online-spielotheken)

  // State für Scroll-Status
  const [isScrolled, setIsScrolled] = useState(false);

  // Event Listener für Scroll-Event
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    currentSection === SECTIONS.SPORTWETTEN
      ? menuItemsSportwetten
      : currentSection === SECTIONS.ONLINE_SPIELOTHEKEN
      ? menuItemsOnlineSpielotheken
      : defaultMenuItems;

  return (
    <>
      {/* Topbar nur auf Unterseiten sichtbar (Mobile und Desktop) */}
      {currentSection !== SECTIONS.DEFAULT && <TopbarTabs />}

      {/* Navbar */}
      <AppBar
        position="sticky"
        color="inherit"
        elevation={isScrolled ? 4 : 0}
        sx={{
          backgroundColor: isScrolled
            ? theme.palette.background.paper
            : "transparent",
          transition: "background-color 0.3s, height 0.3s",
          height: isScrolled ? "64px" : "90px",
          zIndex: theme.zIndex.appBar,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", height: "100%" }}>
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src={logo}
              alt="EinfachNurZocken"
              style={{
                height: isScrolled ? "40px" : "55px",
                transition: "height 0.3s",
              }}
            />
          </Box>

          {/* Navigation Links für Desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            {menuItems.map((item) => (
              <Typography
                key={item.text}
                component={Link}
                to={item.link}
                variant="h6"
                sx={{
                  color: theme.palette.text.primary,
                  textDecoration: "none",
                  marginLeft: theme.spacing(3),
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                {item.text}
              </Typography>
            ))}
          </Box>

          {/* Hamburger Menu für Mobile */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer für Mobile */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 250,
            backgroundColor: theme.palette.background.default,
          },
        }}
      >
        <Box sx={{ padding: theme.spacing(2) }}>
          {/* Close Button */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Menü Items */}
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.link}
                  onClick={handleMenuItemClick}
                >
                  <ListItemText
                    primary={
                      <Typography
                        variant="body1"
                        sx={{ color: theme.palette.text.primary }}
                      >
                        {item.text}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Trennlinie */}
          <Divider sx={{ marginY: theme.spacing(2) }} />

          {/* Social Media Icons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: theme.spacing(2),
            }}
          >
            <IconButton>
              <Facebook />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
            <IconButton>
              <Twitter />
            </IconButton>
            <IconButton>
              <YouTube />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
