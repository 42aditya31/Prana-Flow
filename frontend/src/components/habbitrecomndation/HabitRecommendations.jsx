"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import PredictSearch from "./PredictSearch"; // Import your PredictSearch component

const HabitRecommendations = () => {
  const [userInput, setUserInput] = useState("");
  const [predictedHabits, setPredictedHabits] = useState([
    "Prioritize tasks using the Eisenhower Matrix",
    "Set daily goals and stick to a schedule",
    "Use a time-tracking app to monitor productivity",
  ]);
  const [preRecommendedHabits] = useState([
    "Practice mindfulness for focus",
    "Break tasks into smaller, manageable parts",
    "Avoid multitasking and focus on one task at a time",
  ]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserInput(value);
    if (value.trim()) {
      setPredictedHabits([
        "Identify your top priorities each day",
        "Block time for deep work sessions",
        "Limit distractions like social media",
      ]);
    } else {
      setPredictedHabits([]);
    }
  };

  return (
    <>
      <div className="bg-white mt-44">
        {/* Title Section */}
        <div className="text-center py-4">
          <h1 className="text-black text-6xl pt-3 font-medium font-poppins">
            Predict. Improve. Thrive.
          </h1>
          <p className="text-black text-xl font-medium font-poppins mt-4">
            Let AI decode your routines and guide you toward consistent success—
            one habit at a time.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center min-h-24 bg-white text-black font-poppins px-6">
          {/* Combined Recommendations and Search Section */}
          <motion.div
            className="w-full md:w-2/3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Pre-Recommendations Section */}
            <div className="w-full md:w-1/2 mr-0 md:mr-6">
              <h2 className="text-2xl font-semibold mb-6 text-white">
                {userInput.trim() ? "Predicted Habits" : "Pre-Recommendations"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                {(userInput.trim()
                  ? predictedHabits
                  : preRecommendedHabits
                ).map((habit, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md border cursor-pointer border-gray-700 hover:shadow-lg hover:bg-[#D6D6D6] transition duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {habit}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Search Section */}
            <div className="w-full ml-0 md:ml-6">
              <h2 className="text-2xl font-semibold mb-6 text-white">
                Search Habits
              </h2>
              <PredictSearch />
              <button
                className="mt-4 w-full bg-[#118AB2] hover:bg-[#06D6A0] text-white py-2 px-4 rounded-lg transition duration-300 hover:shadow-lg"
                onClick={() => alert("Prediction logic goes here!")}
              >
                Predict Habits
              </button>
            </div>
          </motion.div>
        </div>

        {/* Footer Section */}
        <div className="text-center py-8">
          {/* Footer content */}
        </div>
      </div>
    </>
  );
};

export default HabitRecommendations;