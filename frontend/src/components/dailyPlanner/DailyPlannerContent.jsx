import React from "react";
import "@fontsource/anton"; // Import Anton font directly
import {TextHoverEffect} from "../ui/text-hover-effect"; // Adjust the path as per your project structure

const DailyPlanerContent = () => {
  return (
    <>
      <div className="main mt-16 flex flex-col">
        <div className="anton ml-12 font-bold text-5xl">Let's</div>
        <div className="middle">
          <div className="h-[25rem] flex items-center justify-center">
            <TextHoverEffect text="IMPROVE" />
          </div>
        </div>
        <div className="anton ml-[700px] font-bold text-5xl">
          Your Daily Planning with the Power of AI
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
