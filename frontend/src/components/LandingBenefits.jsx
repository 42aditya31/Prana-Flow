import React from "react";
// import benefit1 from "../assets/benefit1.png"; // Replace with actual paths
// import benefit2 from "../assets/benefit2.png";
// import benefit3 from "../assets/benefit3.png";
// import benefit4 from "../assets/benefit4.png";

const LandingBenefits = () => {
  return (
    <section className="bg-[#DFCFB7] px-4 py-12 lg:py-20">
      {/* Main Heading Section */}
      <div className="text-center mb-12">
        <p className="text-sm text-[#645452] mb-2 uppercase tracking-widest">
          Transform
        </p>
        <h2 className="text-3xl font-bold text-[#645452] sm:text-4xl">
          Unlock Your Potential with Our Platform
        </h2>
        <p className="mt-4 text-[#645452] max-w-3xl mx-auto">
          Our platform empowers you to build lasting habits through a unique
          blend of AI technology and ancient wisdom. Start your journey towards
          a balanced lifestyle today.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {/* Benefit 1 */}
        <div className="flex flex-col items-center">
          <img
            src=" "
            alt="Benefit 1"
            className="w-full h-36 bg-gray-300 mb-4 rounded-md object-cover"
          />
          <h3 className="text-lg font-semibold text-[#645452] mb-2">
            Create Your Personalized Profile Effortlessly
          </h3>
          <p className="text-sm text-[#645452]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        {/* Benefit 2 */}
        <div className="flex flex-col items-center">
          <img
            src=" "
            alt="Benefit 2"
            className="w-full h-36 bg-gray-300 mb-4 rounded-md object-cover"
          />
          <h3 className="text-lg font-semibold text-[#645452] mb-2">
            Track Your Habits with Engaging Tools
          </h3>
          <p className="text-sm text-[#645452]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="flex flex-col items-center">
          <img
            src=" "
            alt="Benefit 3"
            className="w-full h-36 bg-gray-300 mb-4 rounded-md object-cover"
          />
          <h3 className="text-lg font-semibold text-[#645452] mb-2">
            Connect with Our Vibrant Community
          </h3>
          <p className="text-sm text-[#645452]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        {/* Benefit 4 */}
        <div className="flex flex-col items-center">
          <img
            src=" "
            alt="Benefit 4"
            className="w-full h-36 bg-gray-300 mb-4 rounded-md object-cover"
          />
          <h3 className="text-lg font-semibold text-[#645452] mb-2">
            Medium length section heading goes here
          </h3>
          <p className="text-sm text-[#645452]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 flex justify-center space-x-4">
        <button className="bg-[#645452] text-white px-6 py-2 rounded-md text-sm hover:bg-opacity-90 transition">
          Get Started
        </button>
        <button className="text-[#645452] px-6 py-2 rounded-md text-sm hover:text-opacity-70 transition">
          Learn More &gt;
        </button>
      </div>
    </section>
  );
};

export default LandingBenefits;
