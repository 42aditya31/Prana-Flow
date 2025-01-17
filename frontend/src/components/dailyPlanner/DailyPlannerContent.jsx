import React from "react";
import "@fontsource/anton"; // Import Anton font directly
import {TextHoverEffect} from "../ui/text-hover-effect"; // Adjust the path as per your project structure

const DailyPlanerContent = () => {
  return (
    <>
      <div className="main mt-16 flex flex-col">
        <div className="ml-28 font-bold font-poppins text-3xl">LET'S</div>
        <div className="middle">
          <div className="h-[25rem] mt-[-55px] flex items-center justify-center">
            <TextHoverEffect text="IMPROVE" />
          </div>
        </div>
        <div className="ml-[720px] mt-[-100px] mb-20 font-bold font-poppins text-3xl">
          YOUR DAILY PLANNING WITH THE POWER OF AI
        </div>
      </div>
      {/* Inline styles or global styles can add the font-family */}
      <style jsx>{`
        .anton {
          font-family: "Anton", sans-serif;
        }
      `}</style>
    </>
  );
};

export default DailyPlanerContent;
