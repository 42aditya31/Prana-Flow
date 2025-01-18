import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Password reset instructions sent to your email!");
      } else {
        setMessage(data.error || "Failed to send reset email.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Unable to connect to the server. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#073B4C] text-[#FFD166] font-poppins">
      <div className="bg-[#FFFFFF] text-[#073B4C] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bebas mb-6 text-center">Forgot Password</h2>
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
          </div>
          <button
            type="submit"
            className="w-full bg-[#073B4C] text-[#FFD166] py-2 rounded-lg hover:bg-[#FFD166] hover:text-[#073B4C] transition duration-300"
          >
            Send Reset Link
          </button>
        </form>
        {/* Display success/error message */}
        {message && (
          <p className="text-center mt-4 text-sm text-red-500">{message}</p>
        )}
        <p className="text-center mt-4 text-sm">
          <a
            href="/"
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
