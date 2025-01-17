"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa"; // Assuming you want the same PredictSearch component
import PredictSearch from "./PredictSearch"; // Keep the import as it is

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
      <div className="bg-white mt-[31rem]">
        {/* Title Section */}
        <div className="text-center py-12">
          <h1 className="text-black text-5xl font-medium font-poppins">
            Predict. Improve. Thrive.
          </h1>
          <p className="text-black text-xl font-medium font-poppins mt-4">
            Let AI decode your routines and guide you toward consistent success—
            one habit at a time.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white text-black font-poppins px-6">
          {/* Input Section */}
          <motion.div
            className="w-full md:w-1/2 bg-[#A0B8BF] rounded-lg shadow-xl p-6 mb-8 md:mb-0 md:mr-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold mb-6 text-[#1F2937]">
              What's Your Goal?
            </h2>
            <PredictSearch />
            <button
              className="mt-4 w-full bg-[#118AB2] hover:bg-[#1F2937] text-white py-2 px-4 rounded-lg transition duration-300 hover:shadow-lg"
              onClick={() => alert("Prediction logic goes here!")}
            >
              Predict Habits
            </button>
          </motion.div>

          {/* Habits Section */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl p-6">
              <h2 className="text-2xl font-semibold mb-6 text-purple-300 text-center">
                {userInput.trim() ? "Predicted Habits" : "Pre-Recommendations"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(userInput.trim()
                  ? predictedHabits
                  : preRecommendedHabits
                ).map((habit, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-900 p-4 rounded-lg shadow-md border border-gray-700 hover:shadow-lg hover:bg-gray-700 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {habit}
                  </motion.div>
                ))}
              </div>
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
