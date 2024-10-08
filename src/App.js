import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import OnlineCasinos from './pages/OnlineCasinos';
import Sportwetten from './pages/Sportwetten';
import Guides from './pages/Guides';
import Bonusangebote from './pages/Bonusangebote';
import Promotions from './pages/Promotions';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Wrapper from './components/common/Wrapper';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/online-casinos" element={<OnlineCasinos />} />
            <Route path="/sportwetten" element={<Sportwetten />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/bonusangebote" element={<Bonusangebote />} />
            <Route path="/promotions" element={<Promotions />} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;