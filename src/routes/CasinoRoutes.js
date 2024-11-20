import React from 'react';
import { Route } from 'react-router-dom';
import Bonus from '../pages/casinos/Bonus';
import News from '../pages/casinos/News';
import Guides from '../pages/casinos/Guides';
import Spiele from '../pages/casinos/Spiele';
import JackpotPiratenReview from '../pages/casinos/JackpotPiratenReview';
import BingBongReview from '../pages/casinos/BingBongReview';

const CasinoRoutes = () => {
  return (
    <>
      <Route path="/online-spielotheken/bonus" element={<Bonus />} />
      <Route path="/online-spielotheken/news" element={<News />} />
      <Route path="/online-spielotheken/guides" element={<Guides />} />
      <Route path="/online-spielotheken/spiele" element={<Spiele />} />
      <Route path="/online-spielotheken/jackpotpiraten" element={<JackpotPiratenReview />} />
      <Route path="/online-spielotheken/bing-bong" element={<BingBongReview />} />
    </>
  );
};

export default CasinoRoutes;