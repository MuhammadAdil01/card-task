import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Navbar from './Navbar.jsx';
import Section2 from './Section2.jsx';
import Section3 from './Section3.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BrowseCardsPage from './BrowseCardsPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Section2 />} />
        <Route path="/BrowseCardsPage" element={<BrowseCardsPage />} />
        <Route path="/section3" element={<Section3 />} />
      </Routes>
    </Router>
  </StrictMode>
);
