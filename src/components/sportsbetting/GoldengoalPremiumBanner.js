import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import GoldengoalPremium from "../../assets/images/GoldengoalPremium.png"; // Stellen Sie sicher, dass der Pfad korrekt ist

// Styled-Komponente für das Banner
const BannerBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  cursor: "pointer",
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  "& img": {
    width: "100%",
    height: "auto",
    display: "block",
  },
  "&:hover": {
    opacity: 0.9,
  },
}));

const GoldengoalPremiumBanner = () => {
  return (
    <BannerBox
      component="a" // Verwenden Sie ein <a>-Tag für externe Links
      href="https://goldengoalsport.de" // Externe URL
      rel="noopener noreferrer" // Sicherheitsattribute
      target="_blank" // Öffnet den Link in einem neuen Tab
    >
      <img src={GoldengoalPremium} alt="Goldengoal Premium Community" loading="lazy" />
    </BannerBox>
  );
};

export default GoldengoalPremiumBanner;