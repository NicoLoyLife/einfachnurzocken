import React from 'react';
import { Route } from 'react-router-dom';
// import Bonus from '../pages/casinos/Bonus';
// import WettTipps from '../pages/casinos/WettTipps';
// import Guides from '../pages/casinos/Guides';
import BetanoReview from '../pages/casinos/BetanoReview';
// import HappybetReview from '../pages/casinos/HappybetReview';
import MerkurReview from '../pages/casinos/MerkurReview';
// Weitere Anbieter-Review-Komponenten importieren...

const CasinoRoutes = () => {
  return (
    <>
      {/* <Route path="/online-spielotheken/bonus" element={<Bonus />} /> */}
      {/* <Route path="/online-spielotheken/wett-tipps" element={<WettTipps />} /> */}
      {/* <Route path="/online-spielotheken/guides" element={<Guides />} /> */}
      <Route path="/online-spielotheken/betano" element={<BetanoReview />} />
      {/* <Route path="/online-spielotheken/happybet" element={<HappybetReview />} /> */}
      <Route path="/online-spielotheken/merkur" element={<MerkurReview />} />
      {/* Weitere Routen für Anbieter hinzufügen... */}
    </>
  );
};

export default CasinoRoutes;