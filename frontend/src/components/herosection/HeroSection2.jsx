import React from 'react';
import { Link } from 'react-router-dom';
import Mainimg from "../../assets/MainImage.png";
import Counts from "../Counts";

const HeroSection2 = () => {
    return (
        <>

            <div className="relative lg:mt-0 md:mt-0">
                {/* Background Animation */}
                <div className="area absolute inset-0">
                    <ul className="circles">
                        {Array(10)
                            .fill(null)
                            .map((_, index) => (
                                <li key={index}></li>
                            ))}
                    </ul>
                </div>

                <div className="flex lg:flex-row md:flex-row flex-col-reverse -mt-5 lg:px-20">
                    {/* Left Section: Text Content */}
                    <div className="lg:w-1/2 lg:p-8 lg:ml-12 ml-8 mr-8 text-center lg:text-left">
                        <h2 className="lg:text-6xl text-4xl lg:mt-16 bg-gradient-to-r from-[#073B4C] via-[#0D5870] to-[#06D6A0] inline-block text-transparent bg-clip-text font-bold mb-4">
                            When Culture <br />
                            Meets Intelligence <br />
                            <span>Elevate Your Habits</span>
                        </h2>
                        <p className="text-gray-600 text-[1.4rem] py-3">
                            Redefine your routine with a perfect blend of AI-powered insights and timeless Indian wisdom. Build habits that truly transform your life.
                        </p>
                        <div className="flex items-center lg:py-6 py-4 gap-4 lg:ml-0 lg:justify-start justify-center">
                            {/* Start Your Journey Button */}
                            <button
                                className="bg-[#06D6A0] hover:bg-[#073B4C] hover:text-white rounded-md duration-200 font-semibold py-2 px-4 text-xl shadow-lg"
                                type="button"
                            >
                                <Link to="/blog">Explore</Link>
                            </button>
                            {/* Learn More Button */}
                            {/* <button
                                className="bg-[#06D6A0] hover:bg-[#073B4C] hover:text-white duration-200 font-semibold rounded-md py-2 px-4 text-xl"
                                type="button"
                            >
                                <Link to="/login">Login</Link>
                            </button> */}
                        </div>
                    </div>

                    {/* Right Section: Image */}
                    <div className="lg:w-1/2 pt-16 flex flex-col lg:space-y-4 lg:-ml-20 -mt-5">
                        <img
                            className="lg:h-[500px] lg:ml-20 lg:w-[500px] md:h-[400px] md:w-[700px] h-[150px] w-[300px] hidden lg:block opacity-50 lg:opacity-100 "
                            src={Mainimg}
                            alt="Background"
                        />
                    </div>
                </div>

                {/* Counts Component */}
                <Counts />
            </div>


        </>
    );
};

export default HeroSection2;

