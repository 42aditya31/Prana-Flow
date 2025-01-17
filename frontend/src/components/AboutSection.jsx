"use client";

import React from "react";
import { motion } from "framer-motion";
import Compare from "./ui/compare"

const AboutSection = () => {
  return (
   <>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-extrabold text-center  mt-36 text-transparent text-black"
      >
       Our Purpose
      </motion.h1>
   <div className='Main flex flex-row h-screen mt-24'>

    <div className="left w-[40% ] ml-4">
    <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
      
    </div>
    <div className="right w-[60%]">
    <div className="relative flex flex-col items-center justify-center px-8 py-20 b text-white min-h-screen space-y-16">
      {/* Headline */}


      {/* Subheadline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl font-medium text-center text-gray-300 max-w-4xl leading-relaxed"
      >
        Fusing AI precision with the wisdom of ancient India, we make
        self-improvement smarter, simpler, and soulful.
      </motion.h2>

      {/* Body Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex flex-col space-y-12 w-full max-w-5xl"
      >
        {/* "Why Us?" Section */}
        <div className="bg-[#073b4c] p-8 rounded-lg shadow-lg border border-gray-800">
          <h3 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#ffd166] to-[#06d6a0] mb-6">
            Why Us?
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-4 h-4 bg-[#06d6a0] rounded-full mr-4"></span>
              <span className="text-lg text-gray-300">
                <span className="font-semibold text-white">Personalized Progress:</span>  
                Smart AI adapts to your goals.
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-4 h-4 bg-[#ffd166] rounded-full mr-4"></span>
              <span className="text-lg text-gray-300">
                <span className="font-semibold text-white">Timeless Wisdom:</span>  
                Daily insights from the Bhagavad Gita and Yoga Sutras.
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-4 h-4 bg-[#118ab2] rounded-full mr-4"></span>
              <span className="text-lg text-gray-300">
                <span className="font-semibold text-white">Holistic Growth:</span>  
                Balance mind, body, and habits—effortlessly.
              </span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Closing Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-center"
      >
        <p className="text-xl font-medium text-gray-300 max-w-3xl mx-auto">
          Upgrade your habits. Elevate your life. Let’s make the extraordinary,
          your everyday.
        </p>
      </motion.div>
    </div>
    </div>
   </div>
   </>
  )
}

export default AboutSection
