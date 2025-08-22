import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
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
              {/* Add more routes here for other pages */}
              {/* <Route path="/about" element={<AboutPage />} /> */}
              {/* <Route path="/sponsor" element={<SponsorPage />} /> */}
              {/* <Route path="/contact" element={<ContactPage />} /> */}
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;