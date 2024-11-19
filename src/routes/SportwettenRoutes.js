import React from 'react';
import { Route } from 'react-router-dom';
import Bonus from '../pages/sportwetten/Bonus';
// import WettTipps from '../pages/sportwetten/WettTipps';
import WettTipp from '../components/sportsbetting/wett-tipps/WettTipp';
import WettTippsOverview from '../components/sportsbetting/wett-tipps/WettTippsOverview';
import Guides from '../pages/sportwetten/Guides';
import BetanoReview from '../pages/sportwetten/BetanoReview';
// import HappybetReview from '../pages/sportwetten/HappybetReview';
import MerkurbetsReview from '../pages/sportwetten/MerkurbetsReview';
// Weitere Anbieter-Review-Komponenten importieren...

const SportwettenRoutes = () => {
  return (
    <>
      <Route path="/sportwetten/bonus" element={<Bonus />} />
      <Route path="/sportwetten/wett-tipps" element={<WettTippsOverview />} />
      <Route path="/sportwetten/wett-tipps/:id" element={<WettTipp />} />
      <Route path="/sportwetten/guides" element={<Guides />} />
      <Route path="/sportwetten/betano" element={<BetanoReview />} />
      {/* <Route path="/sportwetten/happybet" element={<HappybetReview />} /> */}
      <Route path="/sportwetten/merkurbets" element={<MerkurbetsReview />} />
      {/* Weitere Routen für Anbieter hinzufügen... */}
    </>
  );
};

export default SportwettenRoutes;