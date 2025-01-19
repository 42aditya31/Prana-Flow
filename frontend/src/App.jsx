// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import AboutPage from "./components/AboutPage";
import GetInvolvedPage from "./components/GetInvolvedPage";
import MainPage from "./components/MainPage";
import ForgotPassword from "./components/ForgotPassword";
import Profile from "./components/Profile";
import HabitTracker from "./components/HabitTracker";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import DailyPlanner from "./components/dailyPlanner/DailyPlanner";
import { ScheduleProvider } from "./components/ScheduleContext"; // Import ScheduleProvider
import Blog from "./components/Blog"

function App() {
  return (
    <ScheduleProvider> {/* Wrap the entire app */}
      <Router>
        <Routes>
          {/* Landing Page */}
          <Route
            path="/"
            element={
              <>
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

          {/* Forgot Password Page */}
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Sign Up Page */}
          <Route path="/signup" element={<SignUpPage />} />

          {/* Dashboard Page */}
          <Route path="/mainpage" element={<MainPage />} />

          {/* Profile Page */}
          <Route path="/profile" element={<Profile />} />

          {/* Dashboard Page */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Daily Planner Page */}
          <Route path="/daily-planner" element={<DailyPlanner />} />

          {/* Habit Tracker Page */}
          <Route path="/habit-tracker" element={<HabitTracker />} />

          {/* Blog Page */}
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </ScheduleProvider>
  );
}

export default App;
