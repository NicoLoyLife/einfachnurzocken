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
import SportsBettingHeader from "../components/sportsbetting/SportsBettingHeader";
import SeoText from "../components/sportsbetting/SeoText";
import TopProviders from "../components/sportsbetting/TopProviders";
import BonusOffers from "../components/sportsbetting/BonusOffers";
import NewsAndTips from "../components/sportsbetting/NewsAndTips";
import SportsBettingGuide from "../components/sportsbetting/SportsBettingGuide";

function Sportwetten() {
  return (
    <>
      {/* Hero-Bereich */}
      <SportsBettingHeader />

      {/* SEO-relevanter Einleitungstext */}
      <SeoText />

      {/* Top 5 Anbieter */}
      <TopProviders />

      {/* Aktuelle Bonusangebote */}
      <BonusOffers />

      {/* News und Tipps */}
      <NewsAndTips />

      {/* Sportwetten Guide */}
      <SportsBettingGuide />

    </>
  );
}

export default Sportwetten;