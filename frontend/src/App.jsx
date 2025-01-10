// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingHeroSection from './components/LandingHeroSection';
import LandingFeature from './components/LandingFeature';
import LandingBenefits from './components/LandingBenefits';
import FeatureBenefits from './components/FeatureBenefits';
import Testimonial from './components/Testimonial';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <LandingHeroSection />
              {/* Uncomment the following sections if needed */}
              {/* <LandingFeature/> */}
              {/* <LandingBenefits/> */}
              <FeatureBenefits />
              <Testimonial />
              <CallToAction />
              <Footer />
            </>
          }
        />
        
        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Sign Up Page */}
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;