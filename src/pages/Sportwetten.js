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
import MainLayout from "../components/layout/MainLayout";
import SportsBettingHeader from "../components/sportsbetting/SportsBettingHeader";
import SportsBettingList from "../components/sportsbetting/SportsBettingList";
// import SportsBettingComparisonTable from "../components/sportsbetting/SportsBettingComparisonTable";
import WhyChooseSportsBetting from "../components/sportsbetting/WhyChooseSportsBetting";
import SportsBettingBonusSection from "../components/sportsbetting/SportsBettingBonusSection";
import SportsBettingFAQSection from "../components/sportsbetting/SportsBettingFAQSection";
// import SportsBettingNewsSection from "../components/sportsbetting/SportsBettingNewsSection";
// import SportsBettingGuidesSection from "../components/sportsbetting/SportsBettingGuidesSection";
import SportsBettingTippsSection from "../components/sportsbetting/SportsBettingTippsSection";

function Sportwetten() {
  return (
    <MainLayout>
      <SportsBettingHeader />
      <SportsBettingList />
      {/* <SportsBettingComparisonTable /> */}
      <WhyChooseSportsBetting />
      <SportsBettingBonusSection />
      <SportsBettingTippsSection />
      <SportsBettingFAQSection />
      {/* <SportsBettingNewsSection />
      <SportsBettingGuidesSection /> */}
    </MainLayout>
  );
}

export default Sportwetten;