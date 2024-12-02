import React from 'react';
import HeroBanner from '../components/HeroBanner';
import TopCasinos from '../components/TopCasinos';
import LatestBonusangebote from '../components/LatestBonusangebote';
// import PopularGames from '../components/PopularGames';
import TopSportwetten from '../components/TopSportwetten';
// import LatestNews from '../components/LatestNews';
// import LatestGuides from '../components/LatestGuides';
import FAQ from '../components/FAQ';
import LatestTipps from '../components/LatestTipps';

function Home() {
  return (
    <>
      <HeroBanner />
      <TopCasinos />
      <LatestBonusangebote />
      {/* <PopularGames /> */}
      <TopSportwetten />
      <LatestTipps />
      {/* <LatestNews /> */}
      {/* <LatestGuides /> */}
      <FAQ />
    </>
  );
}

export default Home;