import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#073B4C] text-[#FFD166] font-poppins">
      <div className="bg-[#FFFFFF] text-[#073B4C] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bebas mb-6 text-center">Log In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#FFD166]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#FFD166]"
              required
            />
          </div>
          <button
{/*             type="submit" */}
            className="w-full bg-[#073B4C] text-[#FFD166] py-2 rounded-lg hover:bg-[#FFD166] hover:text-[#073B4C] transition duration-300">
            Log In
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#073B4C] font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
