import React from 'react';
import HeroBanner from '../components/HeroBanner';
import TopCasinos from '../components/TopCasinos';
import LatestBonusangebote from '../components/LatestBonusangebote';
import LatestGuides from '../components/LatestGuides';

function Home() {
  return (
    <div>
      <HeroBanner />
      <TopCasinos />
      <LatestBonusangebote />
      <LatestGuides />
    </div>
  );
}

export default Home;