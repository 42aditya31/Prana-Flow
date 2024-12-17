import React from "react";
import "@fortawesome/fontawesome-free/css/all.css"; // Font Awesome for icons

const LandingFeature = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#DFCFB7] px-4 py-12 lg:py-20 font-Poppins">
      {/* Main Heading Section */}
      <div className="text-center mb-12">
        <p className="text-sm text-[#645452] mb-2 font-actor">
          Empower Your Growth, One Habit at a Time
        </p>
        <h2 className="text-3xl font-bebas text-black sm:text-4xl">
          Revolutionize Your Habits with AI and Timeless Wisdom
        </h2>
        <p className="mt-4 text-[#645452] max-w-2xl mx-auto text-base leading-relaxed font-Actor">
          Our platform combines the power of AI with the ancient teachings of
          the Bhagavad Gita and Yoga Sutras to inspire mindful living. Build
          better habits, achieve balance, and embrace personal growth—all guided
          by insights tailored just for you.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <img src="" alt="Feature 1" className="h-12 w-12 mb-4" />
          <h3 className="text-lg font-semibold text-[#645452] mb-2 font-BebasNeue">
            AI-Powered Personalization
          </h3>
          <p className="text-sm text-[#645452] font-Actor leading-relaxed">
            Experience habit-building like never before. Our advanced AI
            analyzes your behavior and recommends habits that align with your
            unique goals and lifestyle.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <img src="" alt="Feature 2" className="h-12 w-12 mb-4" />
          <h3 className="text-lg font-semibold text-[#645452] mb-2 font-BebasNeue">
            Daily Wisdom Snippets
          </h3>
          <p className="text-sm text-[#645452] font-Actor leading-relaxed">
            Stay inspired with profound quotes and teachings from the Bhagavad
            Gita and Yoga Sutras, curated daily to spark reflection and
            motivation.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <img src="" alt="Feature 3" className="h-12 w-12 mb-4" />
          <h3 className="text-lg font-semibold text-[#645452] mb-2 font-BebasNeue">
            Gamified Progress Tracking
          </h3>
          <p className="text-sm text-[#645452] font-Actor leading-relaxed">
            Boost your engagement with habit streaks, levels, and rewards. Our
            gamification tools turn your journey into a fun, fulfilling
            experience.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center">
          <img src="" alt="Feature 4" className="h-12 w-12 mb-4" />
          <h3 className="text-lg font-semibold text-[#645452] mb-2 font-BebasNeue">
            Cultural Integration
          </h3>
          <p className="text-sm text-[#645452] font-Actor leading-relaxed">
            Dive into the richness of Indian traditions with Brahma Muhurta
            reminders, Sattvic diet trackers, and personalized pranayama
            suggestions for holistic well-being.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 flex justify-center space-x-4">
        <button className="bg-[#645452] text-white px-6 py-2 rounded-md text-sm font-Astraal hover:bg-opacity-80 transition">
          log In
        </button>
        <button className="text-[#645452] px-6 py-2 rounded-md text-sm font-Astraal hover:text-opacity-70 transition">
          Sign Up &gt;
        </button>
      </div>
    </section>
  );
};

export default LandingFeature;
