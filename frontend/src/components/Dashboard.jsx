import React from "react";
import ProfileIntro from "./ProfileIntro";
import Graph from "./Graph";
import Streaks from "./Streaks";
import Calendar from "./Calendar";
import Schedule from "./Schedule";
import profileImage from "../assets/profile.png";

const Dashboard = () => {
  const user = {
    name: "Aditya Sharma",
    score: "A+",
    totalPoints: 1000,
    habits: 10,
    meditationMinutes: 300,
    longestStreak: 75,
    currentStreak: 90,
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Left Panel */}
      <div className="w-full md:w-2/3 p-6 space-y-6">
        <ProfileIntro name={user.name} score={user.score} />
        <Graph totalPoints={user.totalPoints} />
        <Streaks
          habits={user.habits}
          meditationMinutes={user.meditationMinutes}
          longestStreak={user.longestStreak}
          currentStreak={user.currentStreak}
        />
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/3 p-6 bg-[#073B4C] text-white flex flex-col items-center">
        {/* Button Section */}
        <div className="w-full flex justify-center mb-6">
          <button className="flex items-center justify-center w-[196px] h-[44px] rounded-3xl bg-[#FFD166] text-[#073B4C] font-semibold hover:bg-[#F9C74F] transition duration-200">
            <span className="mr-2">Aditya Sharma</span>
            <img
              src={profileImage}
              alt="Profile"
              className="w-6 h-6 rounded-full object-cover"
            />
          </button>
        </div>

        {/* Calendar Component */}
        <div className="w-full mb-6">
          <div className="flex justify-center">
            <Calendar />
          </div>
        </div>

        {/* Schedule Component */}
        <div className="w-full">
          <Schedule />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
