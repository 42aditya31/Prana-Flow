import React from "react";
import HeroSection from "./herosection/HeroSection";
import AboutSection from "./AboutSection";
import DailyPlannerFeature from "./dailyPlanner/DailyPlannerFeature";
import HabitRecommendations from "./habbitrecomndation/HabitRecommendations";
import TimeLineContent from "./TimeLineContent";
import Testimonial from "./Testimonial";
import TesimonialMain from "./TesimonialMain";
import FooterMain from "./FooterMain";
import NavMenu from "./NavMenu";

const MainPage = () => {
  return (
    <div>
        <NavMenu/>
      <HeroSection />
      <AboutSection />
      <DailyPlannerFeature />
      <HabitRecommendations />
      <TimeLineContent />
      {/* <TesimonialMain/> */}
      <FooterMain/>
    </div>
  );
};

export default MainPage;
