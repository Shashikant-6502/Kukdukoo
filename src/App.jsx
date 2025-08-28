import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SponsorPage from './pages/SponsorPage';
import ContactPage from './pages/ContactPage';
import TicketsPage from './pages/TicketsPage';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import MumbaiCityPage from "./pages/MumbaiCityPage";
import './style.css'; // Ensure this file exists and is imported
function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <div className="page-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/sponsor" element={<SponsorPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/tickets" element={<TicketsPage />} />
              <Route path="/Mumbai" element={<MumbaiCityPage/>} />

            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;