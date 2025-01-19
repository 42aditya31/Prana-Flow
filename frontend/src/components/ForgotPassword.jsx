import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email , password , confirm_password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.message || "Failed to send reset email.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Unable to connect to the server. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#073B4C] text-[#FFD166] font-poppins">
      <div className="bg-[#FFFFFF] text-[#073B4C] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-poppins font-bold mb-6 text-center">FORGOT PASSWORD</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#FFD166]"
              required
            />
            <label htmlFor="email" className="block mt-3 mb-1 text-sm font-medium">
              Add New Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#FFD166]"
              required
            />
            <label htmlFor="email" className="block mt-3 mb-1 text-sm font-medium">
              Confirm Your Password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              placeholder="Enter your password"
              value={confirm_password}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#FFD166]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#073B4C] text-[#FFD166] py-2 rounded-lg hover:bg-[#FFD166] hover:text-[#073B4C] transition duration-300"
          >
            Change Password
          </button>
        </form>
        {/* Display success/error message */}
        {message && (
          <p className="text-center mt-4 text-sm text-black">{message}</p>
        )}
        <p className="text-center mt-4 text-sm">
          <a
            href="/login"
            className="text-[#073B4C] font-medium hover:underline"
          >
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
