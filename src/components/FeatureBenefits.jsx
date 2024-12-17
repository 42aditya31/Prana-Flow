import React, { useState } from "react";

const FeatureBenefits = () => {
  const data = [
    {
      id: 1,
      image: "https://via.placeholder.com/300",
      head: " AI-Powered Personalization ",
      p: " Experience habit-building like never before. Our advanced AI analyzes your behavior and recommends habits that align with your unique goals and lifestyle.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      head: "  Daily Wisdom Snippets ",
      p: "  Stay inspired with profound quotes and teachings from the Bhagavad Gita and Yoga Sutras, curated daily to spark reflection and motivation.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300",
      head: "   Gamified Progress Tracking ",
      p: "  Boost your engagement with habit streaks, levels, and rewards. Our gamification tools turn your journey into a fun, fulfilling experience.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300",
      head: "  Cultural Integration ",
      p: "  Dive into the richness of Indian traditions with Brahma Muhurta reminders, Sattvic diet trackers, and personalized pranayama  suggestions for holistic well-being.",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/300",
      head: "Your journey, your pace.",
      p: "Our advanced AI understands you. By analyzing your goals and behaviors, it recommends habits tailored to your unique lifestyle—so every step brings you closer to success.",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/300",
      head: "Words that inspire action.",
      p: "Stay connected to profound teachings from the Bhagavad Gita and Yoga Sutras. Each day, receive curated quotes and reflections to motivate and guide you through mindful living",
    },
    {
      id: 7,
      image: "https://via.placeholder.com/300",
      head: "Make growth a game worth winning.",
      p: "Build consistency with engaging habit streaks, unlock rewards, and level up your habits. Our gamification tools turn your personal growth journey into a fun, interactive experience.",
    },
    {
      id: 8,
      image: "https://via.placeholder.com/300",
      head: "Tradition meets transformation.",
      p: "Explore Indian traditions like Brahma Muhurta routines, Sattvic diet suggestions, and personalized pranayama practices. Achieve balance in body, mind, and soul as you embrace a holistic lifestyle.",
    },
  ];

  const [toggleActive, setToggleActive] = useState("FirstHalf");

  // Split data dynamically
  const midpoint = Math.ceil(data.length / 2);
  const firstHalf = data.slice(0, midpoint);
  const secondHalf = data.slice(midpoint);

  const displayData = toggleActive === "FirstHalf" ? firstHalf : secondHalf;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50">
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-8">
        <button
          className={`px-8 py-3 font-semibold border transition-all duration-300 ${
            toggleActive === "FirstHalf"
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          } rounded-l-full`}
          onClick={() => setToggleActive("FirstHalf")}
        >
        Features
        </button>
        <button
          className={`px-8 py-3 font-semibold border transition-all duration-300 ${
            toggleActive === "SecondHalf"
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          } rounded-r-full`}
          onClick={() => setToggleActive("SecondHalf")}
        >
        Benifits
        </button>
      </div>

      {/* Display Cards */}
      <div className="flex flex-col gap-10">
        {displayData.length > 0 ? (
          displayData.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center bg-white rounded-lg overflow-hidden`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.head}
                className="w-full md:w-64 h-64 object-cover"
              />
              {/* Content */}
              <div className="p-8 flex flex-col items-center md:items-start text-center md:text-left md:ml-8">
                <h5 className="text-2xl font-bold text-gray-800 mb-4">{item.head}</h5>
                <p className="text-base text-gray-600 leading-relaxed">{item.p}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No items available to display.</p>
        )}
      </div>
    </div>
  );
};

export default FeatureBenefits;
