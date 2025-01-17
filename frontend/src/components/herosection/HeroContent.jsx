import React from "react";


const HeroContent = () => {
  return (
    <div className="relative flex flex-col justify-between items-start px-16 py-20 text-black">
      {/* Main Content */}
      <div className="mt-20">
        <h1 className="ubuntu-font text-6xl font-bold leading-tight text-black">
          Namaste to the New You! <br /> Your AI Guru Awaits.
        </h1>
        <p className="ubuntu-font text-lg w-[500px] font-normal mt-6 text-[#06d6a0]">
          From Brahma Muhurta reminders to wisdom-packed nudges, we blend
          ancient Indian teachings with cutting-edge AI to help you master
          habits, find balance, and level up your life.
        </p>
      </div>

      {/* Call to Action (Bottom-Right) */}
      <div className="absolute mt-96 right-10 text-center">
        <button className="px-8 py-4 text-lg font-semibold rounded-lg bg-[#ef476f] hover:bg-[#118ab2] transition duration-300 ease-in-out shadow-md hover:shadow-lg cursor-pointer">
          Unlock Daily Wisdom
        </button>
        <p className="poppins-font text-sm font-light m-4 text-[#06d6a0]">
          Tap into timeless truths, one wisdom nugget at a time. <br /> Your
          daily dose of clarity starts now!
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
