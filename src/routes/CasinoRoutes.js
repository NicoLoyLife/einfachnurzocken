import React from 'react';
import { Route } from 'react-router-dom';
import Bonus from '../pages/casinos/Bonus';
import News from '../pages/casinos/News';
import Guides from '../pages/casinos/Guides';
import Spiele from '../pages/casinos/Spiele';
// import BetanoReview from '../pages/casinos/BetanoReview';
import JackpotPiratenReview from '../pages/casinos/JackpotPiratenReview';
import BingBongReview from '../pages/casinos/BingBongReview';
// import HappybetReview from '../pages/casinos/HappybetReview';
// import MerkurReview from '../pages/casinos/MerkurReview';
// Weitere Anbieter-Review-Komponenten importieren...

const CasinoRoutes = () => {
  return (
    <>
      <Route path="/online-spielotheken/bonus" element={<Bonus />} />
      <Route path="/online-spielotheken/news" element={<News />} />
      <Route path="/online-spielotheken/guides" element={<Guides />} />
      <Route path="/online-spielotheken/spiele" element={<Spiele />} />
      {/* <Route path="/online-spielotheken/betano" element={<BetanoReview />} /> */}
      <Route path="/online-spielotheken/jackpotpiraten" element={<JackpotPiratenReview />} />
      <Route path="/online-spielotheken/bing-bong" element={<BingBongReview />} />
      {/* <Route path="/online-spielotheken/happybet" element={<HappybetReview />} /> */}
      {/* <Route path="/online-spielotheken/merkur" element={<MerkurReview />} /> */}
      {/* Weitere Routen für Anbieter hinzufügen... */}
    </>
  );
};

export default CasinoRoutes;