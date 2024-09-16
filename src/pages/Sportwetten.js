/**
 * Was ist hier wichtig:
 * - Anbieter-Vergleich
 * - Bonus-Vergleich
 *
 * Anwendungen:
 * - Sortierfunktion (Aktualiät, Name von A-Z, Beliebtheit)
 * - Herausheben der TOP 5 Anbieter
 * - Herausheben neuer Anbieter
 */

import React from "react";
import { Container } from "@mui/material";
import SportsBettingHeader from "../components/sportsbetting/SportsBettingHeader";
import SportsBettingList from "../components/sportsbetting/SportsBettingList";
import SportsBettingComparisonTable from "../components/sportsbetting/SportsBettingComparisonTable";
import WhyChooseSportsBetting from "../components/sportsbetting/WhyChooseSportsBetting";
import SportsBettingBonusSection from "../components/sportsbetting/SportsBettingBonusSection";
import SportsBettingFAQSection from "../components/sportsbetting/SportsBettingFAQSection";
import SportsBettingNewsSection from "../components/sportsbetting/SportsBettingNewsSection";
import SportsBettingGuidesSection from "../components/sportsbetting/SportsBettingGuidesSection";

function Sportwetten() {
  return (
    <Container maxWidth="lg" sx={{ padding: { xs: 2, md: 4 }, backgroundColor: 'background.default' }}>
      <SportsBettingHeader />
      <SportsBettingList />
      <SportsBettingComparisonTable />
      <WhyChooseSportsBetting />
      <SportsBettingBonusSection />
      <SportsBettingFAQSection />
      <SportsBettingNewsSection />
      <SportsBettingGuidesSection />
    </Container>
  );
}

export default Sportwetten;