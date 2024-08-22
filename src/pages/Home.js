import React from 'react';
import HeroBanner from '../components/HeroBanner';
import TopCasinos from '../components/TopCasinos';
import LatestBonusangebote from '../components/LatestBonusangebote';
import PopularGames from '../components/PopularGames';
import TopSportwetten from '../components/TopSportwetten';
import LatestNews from '../components/LatestNews';
import LatestGuides from '../components/LatestGuides';
import FAQ from '../components/FAQ';

function Home() {
  return (
    <div>
      <HeroBanner />
      <TopCasinos />
      <LatestBonusangebote />
      <PopularGames />
      <TopSportwetten />
      <LatestNews />
      <LatestGuides />
      <FAQ />
    </div>
  );
}

export default Home;