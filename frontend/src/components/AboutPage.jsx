import React from "react";

const AboutPage = () => {
  return (
    <div id="about" className="bg-[#073B4C] text-[#FFD166] py-16 px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6 tracking-wider">About Bhrahma Niti&reg;</h2>
          <p className="text-lg text-[#F1FAEE] max-w-3xl mx-auto">
            At Bhrahma Niti&reg;, we blend the timeless wisdom of the <span className="font-bold text-[#FFD166]">Bhagavad Gita</span> and 
            <span className="font-bold text-[#FFD166]"> Yoga Sutras</span> with cutting-edge AI technology to create a transformative 
            habit-building platform. Our mission is to help individuals achieve balance, mindfulness, and personal growth in every aspect of their lives.
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-[#118AB2] text-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
            <p>
              To empower individuals with culturally inspired tools and personalized AI solutions, 
              enabling them to transform their habits and lead a fulfilling life.
            </p>
          </div>
          <div className="p-8 bg-[#06D6A0] text-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
            <p>
              To create a global community centered around mindfulness, personal growth, and the practical application of Indian wisdom in modern life.
            </p>
          </div>
        </div>

        {/* Why Us Section */}
        <div className="text-center space-y-6">
          <h3 className="text-3xl font-semibold">Why Choose Bhrahma Niti&reg;?</h3>
          <p className="text-lg max-w-4xl mx-auto text-[#F1FAEE]">
            Our platform uniquely combines ancient Indian teachings with innovative technology to provide users with:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <div className="p-6 bg-white text-[#073B4C] rounded-lg shadow-lg">
              <h4 className="text-xl font-bold">Personalized Habits</h4>
              <p>AI-powered habit recommendations tailored to your lifestyle.</p>
            </div>
            <div className="p-6 bg-white text-[#073B4C] rounded-lg shadow-lg">
              <h4 className="text-xl font-bold">Wisdom Snippets</h4>
              <p>Daily reflections from the Bhagavad Gita and Yoga Sutras.</p>
            </div>
            <div className="p-6 bg-white text-[#073B4C] rounded-lg shadow-lg">
              <h4 className="text-xl font-bold">Gamified Growth</h4>
              <p>Interactive tools like streaks, levels, and rewards to stay motivated.</p>
            </div>
            <div className="p-6 bg-white text-[#073B4C] rounded-lg shadow-lg">
              <h4 className="text-xl font-bold">Community Support</h4>
              <p>Connect with like-minded individuals for shared learning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
