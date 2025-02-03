import React, { useState } from "react";
// import benifit3 from "../assets/benifit1"
// import benifit3 from "../assets/benifit2"
// import benifit3 from "../assets/benifit3.jpg";
// import benifit3 from "../assets/benifit4"
// import benifit3 from "../assets/feature1"
// import benifit3 from "../assets/feature2"
// import benifit3 from "../assets/feature3"
// import benifit3 from "../assets/feature4"


const FeatureBenefits = () => {
  const data = [
    {
      id: 1,
      image: " https://img.freepik.com/free-vector/chatbot-healthcare-abstract-concept-vector-illustration-artificial-intelligence-caregiver-chatbot-healthcare-use-anonymous-consultation-clinic-ai-assistant-chat-service-abstract-metaphor_335657-6052.jpg?t=st=1734628138~exp=1734631738~hmac=285609bc47d7f8e8cf040833695d03a27613d7af6920e7046c3b9dee4e03cc43&w=740",
      head: " AI-Powered Personalization ",
      p: " Experience habit-building like never before. Our advanced AI analyzes your behavior and recommends habits that align with your unique goals and lifestyle.",
    },
    {
      id: 2,
      image: "https://img.freepik.com/free-vector/elegant-hindu-religious-om-sign-spiritual-knowledge-peace_1017-44275.jpg?t=st=1734668258~exp=1734671858~hmac=6419445695f501225d5f120fb47d4dfafe79fe4151387808dbc3e2dcee84280b&w=740",
      head: "  Daily Wisdom Snippets ",
      p: "  Stay inspired with profound quotes and teachings from the Bhagavad Gita and Yoga Sutras, curated daily to spark reflection and motivation.",
    },
    {
      id: 3,
      image: "https://img.freepik.com/free-vector/board-games-abstract-concept-vector-illustration-tabletop-activities-strategic-gaming-stay-home-gamers-social-isolation-free-time-spending-family-fun-activity-idea-abstract-metaphor_335657-6228.jpg?t=st=1737344976~exp=1737348576~hmac=d05d428605d39cf709f542da98bc6b5ccff7d2767b46eef2d4d76f50e3150606&w=740",
      head: "   Gamified Progress Tracking ",
      p: "  Boost your engagement with habit streaks, levels, and rewards. Our gamification tools turn your journey into a fun, fulfilling experience.",
    },
    {
      id: 4,
      image: "https://img.freepik.com/premium-vector/black-white-illustration-young-lady-doing-yoga_1237658-22.jpg?w=740",
      head: "  Cultural Integration ",
      p: "  Dive into the richness of Indian traditions with Brahma Muhurta reminders, Sattvic diet trackers, and personalized pranayama  suggestions for holistic well-being.",
    },
    {
      id: 5,
      image: "https://img.freepik.com/premium-vector/chatbot-app-development-abstract-concept-vector-illustration_107173-26258.jpg?w=740",
      head: "Your journey, your pace.",
      p: "Our advanced AI understands you. By analyzing your goals and behaviors, it recommends habits tailored to your unique lifestyle—so every step brings you closer to success.",
    },
    {
      id: 6,
      image: "https://img.freepik.com/free-vector/hand-draw-lectern-with-book_23-2147513062.jpg?t=st=1734668388~exp=1734671988~hmac=0f25cd276c46709b98ccf7d6c4ec180a2946f2ad8b897d4d479da7698d881010&w=740",
      head: "Words that inspire action.",
      p: "Stay connected to profound teachings from the Bhagavad Gita and Yoga Sutras. Each day, receive curated quotes and reflections to motivate and guide you through mindful living",
    },
    {
      id: 7,
      image: "https://img.freepik.com/free-vector/ambition-abstract-concept-vector-illustration-business-ambition-determination-setting-big-goal-making-fast-career-selfconfident-getting-what-you-want-desire-success-abstract-metaphor_335657-6206.jpg?t=st=1734668422~exp=1734672022~hmac=c0ebe685ff24681271381d48cb5371ffdaa74fe158a8ecc3be18222cbd896104&w=740",
      head: "Make growth a game worth winning.",
      p: "Build consistency with engaging habit streaks, unlock rewards, and level up your habits. Our gamification tools turn your personal growth journey into a fun, interactive experience.",
    },
    {
      id: 8,
      image: "https://img.freepik.com/premium-vector/woman-practicing-yoga-sport-mat-healthy-lifestyle-concept-monochrome-vector-illustration_831490-6533.jpg?w=740",
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
          className={`px-8 py-3 font-semibold border transition-all duration-300 ${toggleActive === "FirstHalf"
              ? "bg-[#118AB2] text-white border-blue-500"
              : "bg-[#073B4C] text-white border-gray-300 hover:bg-gray-100"
          } rounded-l-full`}
          onClick={() => setToggleActive("FirstHalf")}
        >
          Features
        </button>
        <button
          className={`px-8 py-3 font-semibold border transition-all duration-300 ${toggleActive === "SecondHalf"
              ? "bg-[#118AB2] text-white border-blue-500"
              : "bg-[#073B4C] text-white border-gray-300 hover:bg-gray-100"
          } rounded-r-full`}
          onClick={() => setToggleActive("SecondHalf")}
        >
          Benefits
        </button>
      </div>

      {/* Display Cards */}
      <div className="flex flex-col gap-10">
        {displayData.length > 0 ? (
          displayData.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
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
