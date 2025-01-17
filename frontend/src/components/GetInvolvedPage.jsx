import React from "react";

const GetInvolvedPage = () => {
  return (
    <div id="get-involved" className="bg-[#118AB2] text-[#FFD166] py-16 px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6 tracking-wider">Get Involved</h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Join us in building a mindful, balanced world. Whether you volunteer, donate, or partner with us, your contribution drives meaningful change.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-[#06D6A0] text-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-3xl font-semibold mb-4">Volunteer</h3>
            <p>
              Contribute your time and skills to our mission. Whether it’s community-building or content creation, your efforts matter.
            </p>
          </div>
          <div className="p-8 bg-[#073B4C] text-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-3xl font-semibold mb-4">Donate</h3>
            <p>
              Help us expand our reach and improve our platform with your generous financial support.
            </p>
          </div>
          <div className="p-8 bg-[#FFD166] text-[#073B4C] rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-3xl font-semibold mb-4">Partner</h3>
            <p>
              Collaborate with us to launch innovative projects and bring cultural wisdom to a modern audience.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6 mt-12">
          <h3 className="text-3xl font-semibold text-white">How Can You Help?</h3>
          <ul className="text-lg text-white list-disc pl-8 max-w-4xl mx-auto space-y-4">
            <li>Spread awareness about Bhrahma Niti&reg; through your network.</li>
            <li>Contribute ideas to enhance our platform and features.</li>
            <li>Organize events to inspire mindfulness and well-being in your community.</li>
            <li>Join hands with us to bring wisdom and AI together.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedPage;
