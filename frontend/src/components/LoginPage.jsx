import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(""); // For success/error messages
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Login successful!");
        // Redirect to another page or perform other actions here
        setTimeout(() => {
          navigate("/mainpage"); // Redirect to the dashboard page
        }, 1000); // Delay for user feedback
      } else {
        setMessage(data.error || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("Failed to connect to the server. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#073B4C] text-[#FFD166] font-poppins">
      <div className="bg-[#FFFFFF] text-[#073B4C] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-poppins font-bold mb-6 text-center">LOG IN</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium font-poppins">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border font-poppins border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#FFD166]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium font-poppins">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 font-poppins border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#FFD166]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full font-poppins bg-[#073B4C] text-[#FFD166] py-2 rounded-lg hover:bg-[#FFD166] hover:text-[#073B4C] transition duration-300"
          >
            Log In
          </button>
        </form>
        {/* Show success/error messages */}
        {message && (
          <p className="text-center mt-4 text-sm text-gray-500">{message}</p>
        )}
        <p className="text-center mt-4 text-sm font-poppins">
          <Link
            to="/forgot-password"
            className="text-[#073B4C] font-medium font-poppins hover:underline">
            Forgot Password
          </Link>
        </p>
        <p className="text-center mt-4 text-sm font-poppins">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#073B4C] font-poppins font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

