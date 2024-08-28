import React from "react";
import { Container } from "@mui/material";
import BonusHeader from "../components/bonus/BonusHeader";
import TopBonusSection from "../components/bonus/TopBonusSection";
import BonusComparisonTable from "../components/bonus/BonusComparisonTable";
import BonusTypesSection from "../components/bonus/BonusTypesSection";
import BonusFAQSection from "../components/bonus/BonusFAQSection";

function BonusOffers() {
  return (
    <Container maxWidth="lg" sx={{ padding: { xs: 2, md: 4 }, backgroundColor: 'background.default' }}>
      <BonusHeader />
      <TopBonusSection />
      <BonusComparisonTable />
      <BonusTypesSection />
      <BonusFAQSection />
    </Container>
  );
}

export default BonusOffers;