import React, { useState } from "react";
import video from "../assets/laptop-video.mp4"

const LandingHeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  

  return (
    <div className="bg-secondary font-poppins">
      {/* Header Section */}
      <header className="flex justify-between items-center p-4 bg-primary text-secondary shadow-md">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bebas hover:scale-110 transform transition duration-300">
            Bhrahma Niti&reg;
          </h1>
        </div>

        {/* Navigation */}
        <nav>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <a
                href="#about"
                className="hover:text-white hover:underline transition duration-300 ease-in-out text-lg"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-white hover:underline transition duration-300 ease-in-out text-lg"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#login"
                className="bg-secondary text-primary px-4 py-2 rounded-lg hover:bg-white hover:text-primary border border-secondary transition duration-300 ease-in-out font-roboto font-medium"
              >
                Log In
              </a>
            </li>
            <li>
              <a
                href="#signup"
                className="bg-transparent text-secondary px-4 py-2 rounded-lg border border-secondary hover:bg-secondary hover:text-white transition duration-300 ease-in-out font-roboto font-medium"
              >
                Sign Up
              </a>
            </li>
          </ul>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-secondary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <ul className="absolute top-16 left-0 w-full bg-primary text-secondary p-4 space-y-4">
              <li>
                <a
                  href="#about"
                  className="block hover:text-white hover:underline transition duration-300 ease-in-out text-lg"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="block hover:text-white hover:underline transition duration-300 ease-in-out text-lg"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#login"
                  className="block bg-secondary text-primary px-4 py-2 rounded-lg hover:bg-white hover:text-primary border border-secondary transition duration-300 ease-in-out font-roboto font-medium"
                >
                  Log In
                </a>
              </li>
              <li>
                <a
                  href="#signup"
                  className="block bg-transparent text-secondary px-4 py-2 rounded-lg border border-secondary hover:bg-secondary hover:text-white transition duration-300 ease-in-out font-roboto font-medium"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col sm:flex-row bg-white w-full h-auto sm:h-[580px]">
        {/* Left Content */}
        <div className="w-full sm:w-[60vw] flex items-center justify-center">
          <div className="flex flex-col px-6 sm:px-10 md:pl-[80px] lg:pl-[120px] space-y-4 sm:space-y-6">
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-800 font-actor">
              Is your life feeling chaotic and out of balance?
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bebas leading-tight text-black">
              Ready to transform your
            </h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bebas leading-tight text-yellow-500">
                Habits?
              </div>
              <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-800 sm:pl-4 font-actor max-w-full sm:max-w-[360px] md:max-w-[400px] lg:max-w-[430px]">
                We're here to help you perfect your lifestyle with the wisdom of
                Indian culture.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full sm:w-[40vw] flex items-center justify-center mt-6 sm:mt-0">
          <div className="overflow-hidden rounded-xl w-full px-6 sm:px-10 md:px-4">
          <video
               src={video}
               autoPlay
               loop
               muted
               className="w-full h-auto"
          ></video>

          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingHeroSection;