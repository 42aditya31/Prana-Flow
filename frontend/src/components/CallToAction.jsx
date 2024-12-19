import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-white text-[#073B4C] py-16 px-8 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Take the First Step Towards a Balanced Life Today
        </h2>
        <p className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed">
          Join our vibrant community, unlock personalized tools, and transform
          the way you build habits. Start now and experience the power of
          innovation combined with ancient wisdom.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-6">
          <button
            className="bg-[#FFD166] text-[#073B4C] font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-[#073B4C] transition duration-300"
            onClick={() => window.location.href = "/login"} // Replace with your login URL
          >
            Login
          </button>
          <button
            className="bg-transparent text-[#FFD166] border-2 border-[#FFD166] font-semibold py-3 px-8 rounded-full hover:bg-[#FFD166] hover:text-[#073B4C] transition duration-300"
            onClick={() => window.location.href = "/signup"} // Replace with your signup URL
          >
            Sign Up
          </button>
        </div>

        {/* Visual Cue */}
        <div className="mt-12">
          <img
            src="https://via.placeholder.com/600x300?text=Your+Journey+Begins+Here"
            alt="Start Your Journey"
            className="mx-auto rounded-lg shadow-xl border-4 border-[#FFD166]"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
