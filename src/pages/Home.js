import React from 'react';
import HeroBanner from '../components/HeroBanner';
import TopCasinos from '../components/TopCasinos';
import LatestPromotions from '../components/LatestPromotions';
import LatestGuides from '../components/LatestGuides';

function Home() {
  return (
    <div>
      <HeroBanner />
      <TopCasinos />
      <LatestPromotions />
      <LatestGuides />
    </div>
  );
}

export default Home;