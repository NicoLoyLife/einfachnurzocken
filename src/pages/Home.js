import React from 'react';
import HeroBanner from '../components/HeroBanner';
import TopCasinos from '../components/TopCasinos';
import LatestBonusangebote from '../components/LatestBonusangebote';
import PopularGames from '../components/PopularGames';
import TopSportwetten from '../components/TopSportwetten';

function Home() {
  return (
    <div>
      <HeroBanner />
      <TopCasinos />
      <LatestBonusangebote />
      <PopularGames />
      <TopSportwetten />
    </div>
  );
}

export default Home;