"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { HoverEffect } from "../ui/card-hover-effect";

const DailyPlanner = () => {
  const [input, setInput] = useState("");

  const prebuiltPrompts = [
    {
      title: "Study for 14 Hours",
      description: "Dive into focused study sessions with a structured approach to cover topics efficiently.",
      link: "https://example.com/study-14-hours"
    },
    {
      title: "Self-Time for 5 Hours",
      description: "Dedicate time to self-care and hobbies, fostering a balanced lifestyle and personal growth.",
      link: "https://example.com/self-time-5-hours"
    },
    {
      title: "Workout for 2 Hours",
      description: "Engage in physical activity to boost energy, enhance focus, and maintain fitness.",
      link: "https://example.com/workout-2-hours"
    },
    {
      title: "Focus on Mindfulness",
      description: "Practice mindfulness techniques to enhance mental clarity and reduce stress.",
      link: "https://example.com/focus-mindfulness"
    },
    {
      title: "Balanced Work-Study Routine",
      description: "Create a harmonious schedule to balance work, study, and personal time effectively.",
      link: "https://example.com/balanced-work-study"
    }
  ];

  const handleGeneratePlan = () => {
    // Add API call to OpenAI here with the `input` state
    alert(`Generating plan for: "${input}"`);
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white mt-8">
      {/* Top Section */}
      <div className="p-10 space-y-8">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#06d6a0] via-[#ffd166] to-[#118ab2]">
          AI-Powered Daily Planner
        </h1>
        <p className="text-xl text-gray-300">
          Describe your ideal day, and let AI craft the perfect plan for you.
        </p>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., I want to focus on studying, have some me-time, and work out..."
          className="w-full h-48 bg-gray-800 text-gray-300 rounded-lg p-4 text-lg outline-none border border-gray-600 focus:border-[#06d6a0] transition duration-300"
        />
        <button
          onClick={handleGeneratePlan}
          className="px-6 py-3 bg-[#06d6a0] hover:bg-[#118ab2] text-black font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
        >
          Generate My Plan
        </button>
      </div>

      {/* Bottom Section */}
      <div className="p-10 bg-black border-t border-gray-700 space-y-6">
        <h2 className="text-3xl font-semibold text-center">Pre-Built Prompts</h2>
        <div className="flex flex-col gap-4">
          <HoverEffect items={prebuiltPrompts} />
        </div>
        <p className="text-sm text-gray-400 mt-4">
          Tap on a prompt to use it as inspiration for your daily plan.
        </p>
      </div>
    </div>
  );
};

export default DailyPlanner;
