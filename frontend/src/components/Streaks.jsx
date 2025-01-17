// components/Streaks.jsx
import React from "react";

const Streaks = () => {
  const streaks = {
    habits: 10,
    meditationMinutes: 300,
    longestStreak: 75,
    currentStreak: 90,
  };

  return (
    <div className="bg-white py-6 px-4 rounded-lg grid grid-cols-2 sm:grid-cols-4 gap-4">
      {/* Current Streak */}
      <div className="streak-card">
        <h2 className="text-3xl font-bold">{streaks.currentStreak}</h2>
        <p className="text-sm font-medium mt-2">Current Streak</p>
      </div>

      {/* Habits */}
      <div className="streak-card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 mb-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h11M9 21V3m7 7h4m-2 0v7"
          />
        </svg>
        <h2 className="text-2xl font-bold">{streaks.habits}</h2>
        <p className="text-sm font-medium mt-1">Habits</p>
      </div>

      {/* Meditation Minutes */}
      <div className="streak-card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 mb-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h6m-6-6H6m6 0h6M6 12h6"
          />
        </svg>
        <h2 className="text-2xl font-bold">{streaks.meditationMinutes}</h2>
        <p className="text-sm font-medium mt-1">Minutes Meditation</p>
      </div>

      {/* Longest Streak */}
      <div className="streak-card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 mb-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.121 19.071a7 7 0 1 1 13.757 0M8 11h8m-8 4h8"
          />
        </svg>
        <h2 className="text-2xl font-bold">{streaks.longestStreak}</h2>
        <p className="text-sm font-medium mt-1">Days Streak</p>
      </div>
    </div>
  );
};

export default Streaks;
