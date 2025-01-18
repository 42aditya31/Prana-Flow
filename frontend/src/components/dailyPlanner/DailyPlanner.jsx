"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // For GitHub-Flavored Markdown (tables, lists, etc.)
import { GoogleGenerativeAI } from "@google/generative-ai";

const DailyPlanner = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]); // Chat messages
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleGeneratePlan = async () => {
    if (!input.trim()) return; // Prevent empty inputs

    // Add user's message
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    // Show loading animation
    setIsLoading(true);

    try {
      const genAI = new GoogleGenerativeAI("AIzaSyAPZFKpq30_ng_jCXq9HyRP_g--LMct-QQ");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const result = await model.generateContent(input);
      const output = await result.response.text();

      // Add AI response, preserving markdown-like formatting
      setMessages((prev) => [...prev, { sender: "ai", text: output }]);
    } catch (error) {
      console.error("Error generating plan:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "An error occurred while generating the plan." },
      ]);
    } finally {
      // Stop loading animation
      setIsLoading(false);
    }

    // Clear input field
    setInput("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-4xl flex flex-col h-[95%] bg-white rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="p-6 bg-white text-center border-b border-gray-300">
          <h1 className="text-2xl font-bold text-gray-800">AI-Powered Daily Planner</h1>
          <p className="text-sm mt-1 text-gray-600">
            Describe your ideal day and get a tailored plan.
          </p>
        </div>

        {/* Chat Section */}
        <div className="flex-grow p-6 overflow-y-auto bg-white">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              <div
                className={`p-4 rounded-lg text-lg ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
                style={{
                  whiteSpace: "pre-wrap", // Handles line breaks
                  wordWrap: "break-word", // Prevents overflow
                  maxWidth: "70%", // Limit bubble width for readability
                  fontSize: message.sender === "ai" ? "0.875rem" : "1rem", // Smaller font for AI response
                }}
              >
                {message.sender === "ai" ? (
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      table: ({ children }) => (
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse border border-gray-300">
                            {children}
                          </table>
                        </div>
                      ),
                      th: ({ children }) => (
                        <th className="border border-gray-300 bg-gray-100 px-4 py-2 font-bold">
                          {children}
                        </th>
                      ),
                      td: ({ children }) => (
                        <td className="border border-gray-300 px-4 py-2">
                          {children}
                        </td>
                      ),
                    }}
                  >
                    {message.text}
                  </ReactMarkdown> // Render AI response with markdown, including tables
                ) : (
                  message.text
                )}
              </div>
            </div>
          ))}

          {/* Loading Animation */}
          {isLoading && (
            <div className="flex justify-center items-center mb-4">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>

        {/* Input Section */}
        <div className="p-4 bg-white border-t border-gray-300">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here..."
            className="w-full h-16 p-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
          />
          <button
            onClick={handleGeneratePlan}
            className="mt-4 w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-all duration-300"
          >
            {isLoading ? "Generating..." : "Generate My Plan"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyPlanner;
