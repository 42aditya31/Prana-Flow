// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import AboutPage from "./components/AboutPage";
import GetInvolvedPage from "./components/GetInvolvedPage";
// import Dashboard from './components/Dashboard';
import HabitTracker from "./components/HabitTracker";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import HeroSection from "./components/herosection/HeroSection";
import MainPage from "./components/MainPage";
function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <MainPage />
              <LandingPage />
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
