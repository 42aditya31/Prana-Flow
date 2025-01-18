"use client";

import React from "react";
import { motion } from "framer-motion";
import Compare from "./ui/compare";
import before_img from "../assets/before.jpg"
import after_img from "../assets/after.jpg"

const AboutSection = () => {
  return (
    <>
      <div className="bg-[#1F2937]">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold font-poppins text-center mt-36 pt-10 text-[#FFD166]"
        >
          Our Purpose
        </motion.h1>
        <div className="Main flex flex-wrap lg:flex-nowrap h-auto lg:h-screen mt-4 gap-8 px-4 lg:px-16">
          {/* Right Section */}
          <div className="right lg:w-[60%] w-full pt-14">
            <div className="relative flex flex-col items-center justify-center px-8 py-20 text-white space-y-16">
              {/* Subheadline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl font-medium font-poppins text-center text-white max-w-4xl leading-relaxed"
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
                <div className="bg-[#118AB2] p-8 rounded-lg shadow-lg border border-gray-800">
                  <h3 className="text-3xl font-semibold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-[#ffd166] to-[#06d6a0] mb-6">
                    Why Us?
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="w-4 h-4 bg-[#06d6a0] rounded-full mr-4"></span>
                      <span className="text-lg text-gray-300">
                        <span className="font-semibold font-poppins text-white">Personalized Progress: </span>
                        Smart AI adapts to your goals.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-4 h-4 bg-[#ffd166] rounded-full mr-4"></span>
                      <span className="text-lg text-gray-300">
                        <span className="font-semibold font-poppins text-white">Timeless Wisdom: </span>
                        Daily insights from the Bhagavad Gita and Yoga Sutras.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-4 h-4 bg-[#EF476F] rounded-full mr-4"></span>
                      <span className="text-lg text-gray-300">
                        <span className="font-semibold font-poppins text-white">Holistic Growth: </span>
                        Balance mind, body, and habits—effortlessly.
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Left Section */}
          <div className="left lg:w-[40%] w-full flex pt-16 justify-center">
            <Compare
              firstImage= {before_img}
              secondImage= {after_img}
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-left-top"
              className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
              slideMode="hover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
