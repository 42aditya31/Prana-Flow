// components/ProfileIntro.jsx
import React from "react";
import profileImage from "../assets/profile.png";

const ProfileIntro = () => {
  return (
    <div className="bg-[#073B4C] mt-8 mx-4 md:mx-auto max-w-3xl rounded-xl shadow-lg w-full py-8">
      <div className="flex flex-col md:flex-row items-center md:items-start rounded-xl h-full">
        {/* Left Content */}
        <div className="md:w-2/3 w-full px-6 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Hi Aditya !!
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white">
            Welcome! Manage all your habits & daily schedule here.
          </p>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-white">
            Your Score{" "}
            <span className="text-[#FFD166] text-2xl sm:text-3xl md:text-4xl font-extrabold">
              A+
            </span>
          </p>
        </div>
        {/* Right Content */}
        <div className="md:w-1/3 w-full flex justify-center items-center mt-6 md:mt-0">
          <img
            src={profileImage}
            alt="User Profile"
            className="h-24 w-24 sm:h-28 sm:w-28 md:h-36 md:w-36 object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileIntro;
