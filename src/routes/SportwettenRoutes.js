import React from 'react';
import { Route } from 'react-router-dom';
import Bonus from '../pages/sportwetten/Bonus';
import WettTipp from '../components/sportsbetting/wett-tipps/WettTipp';
import WettTippsOverview from '../components/sportsbetting/wett-tipps/WettTippsOverview';
import Guides from '../pages/sportwetten/Guides';
import BetanoReview from '../pages/sportwetten/BetanoReview';
import MerkurbetsReview from '../pages/sportwetten/MerkurbetsReview';
import WinamaxReview from '../pages/sportwetten/WinamaxReview';

const SportwettenRoutes = () => {
  return (
    <>
      <Route path="/sportwetten/bonus" element={<Bonus />} />
      <Route path="/sportwetten/wett-tipps" element={<WettTippsOverview />} />
      <Route path="/sportwetten/wett-tipps/:id" element={<WettTipp />} />
      <Route path="/sportwetten/guides" element={<Guides />} />
      <Route path="/sportwetten/betano" element={<BetanoReview />} />
      <Route path="/sportwetten/merkurbets" element={<MerkurbetsReview />} />
      <Route path="/sportwetten/winamax" element={<WinamaxReview />} />
    </>
  );
};

export default SportwettenRoutes;