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
import HeroSection2 from "./herosection/HeroSection2";
import NavBar2 from "./NavBar2";
const MainPage = () => {
  return (
    <div>
      <NavMenu/>
      {/* <NavBar2 /> */}
      {/* <HeroSection /> */}
      <HeroSection2 />
      <AboutSection />
      <DailyPlannerFeature />
      <HabitRecommendations />
      <TimeLineContent />
      <TesimonialMain/>
      <FooterMain/>
    </div>
  );
};

export default MainPage;
