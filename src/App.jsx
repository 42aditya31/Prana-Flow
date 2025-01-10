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
import AboutPage from './components/AboutPage'; 
import GetInvolvedPage from './components/GetInvolvedPage'; 
import Dashboard from './components/Dashboard';
import HabitTracker from './components/HabitTracker';
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
              {/* <Dashboard/> */}
              <HabitTracker/>
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
        
        {/* About Page */}
        <Route
          path="/about"
          element={
            <>
              <AboutPage />
              <Footer />
            </>
          }
        />

        {/* Get Involved Page */}
        <Route
          path="/get-involved"
          element={
            <>
              <GetInvolvedPage />
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
