// src/components/common/CookieConsentBanner.js

import React, { useEffect } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import CookieIcon from "@mui/icons-material/Cookie";
import { styled } from "@mui/material/styles";

const StyledCookieConsent = styled(CookieConsent)(({ theme }) => ({
  background: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(3),
  },
  zIndex: 9999, // Sicherstellen, dass das Banner oben angezeigt wird
  "& .CookieConsent--button": {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    fontSize: theme.typography.button.fontSize,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  "& .CookieConsent--declineButton": {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    fontSize: theme.typography.button.fontSize,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  "& .MuiSvgIcon-root": {
    marginRight: theme.spacing(1),
  },
}));

function CookieConsentBanner() {

  const initializeAnalytics = (consent) => {
    // Prüfen, ob GA bereits initialisiert wurde
    if (window.gtagInitialized) {
      return;
    }

    // GA-Skript dynamisch laden
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-B0QBZS0Z1X"; // Ersetzen Sie mit Ihrer Tracking-ID
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag("js", new Date());

    if (consent) {
      // Zustimmung erteilt, vollständiges Tracking
      gtag("config", "G-B0QBZS0Z1X", {
        anonymize_ip: true,
      });
    } else {
      // Zustimmung verweigert, anonymisiertes Tracking ohne Cookies
      gtag("config", "G-B0QBZS0Z1X", {
        anonymize_ip: true,
        storage: "none",
        client_storage: "none",
        allow_ad_personalization_signals: false,
      });
    }

    window.gtagInitialized = true;
  };

  useEffect(() => {
    const consent = getCookieConsentValue() === "true";
    initializeAnalytics(consent);
  }, []);

  const handleAccept = () => {
    initializeAnalytics(true);
  };

  const handleDecline = () => {
    initializeAnalytics(false);
  };

  return (
    <StyledCookieConsent
      location="bottom"
      buttonText="Ich stimme zu"
      declineButtonText="Ablehnen"
      enableDeclineButton
      expires={30}
      overlay={false}
      icon={<CookieIcon />}
      onAccept={handleAccept}
      onDecline={handleDecline}
      buttonClasses="CookieConsent--button"
      declineButtonClasses="CookieConsent--declineButton"
    >
      Diese Website verwendet Cookies, um die Benutzererfahrung zu verbessern.
    </StyledCookieConsent>
  );
}

export default CookieConsentBanner;
