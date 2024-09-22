import React from 'react';
import { Route } from 'react-router-dom';
import BetanoReview from '../pages/sportwetten/BetanoReview';
import HappybetReview from '../pages/sportwetten/HappybetReview';
// Weitere Anbieter-Review-Komponenten importieren...

const SportwettenRoutes = () => {
  return (
    <>
      <Route path="/sportwetten/betano" element={<BetanoReview />} />
      <Route path="/sportwetten/happybet" element={<HappybetReview />} />
      {/* Weitere Routen für Anbieter hinzufügen... */}
    </>
  );
};

export default SportwettenRoutes;