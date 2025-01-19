import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // For GitHub-Flavored Markdown (tables, lists, etc.)
import { GoogleGenerativeAI } from "@google/generative-ai";
import { HoverEffect } from "../ui/card-hover-effect";
import { useSchedule } from "../ScheduleContext";

const DailyPlanner = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]); // Chat messages
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const { addToSchedule } = useSchedule();

  // Function to parse AI output into a structured format
  const parseAIOutput = (output) => {
    const parsedData = [];
    const lines = output.split("\n"); // Split AI output into lines
    const timeRegex = /(\d{1,2}:\d{2}\s*(AM|PM))/i; // Match time format

    lines.forEach((line) => {
      const timeMatch = line.match(timeRegex);
      if (timeMatch) {
        const time = timeMatch[1]; // Extract the time (e.g., "9:00 AM")
        const task = line.replace(time, "").trim(); // Remove time from the line to get the task
        parsedData.push({
          time: time,
          title: task || "Untitled Task", // Use "Untitled Task" if no task title is provided
          color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random color
        });
      }
    });

    return parsedData;
  };

  const handleGeneratePlan = async () => {
    if (!input.trim()) return; // Prevent empty inputs

    // Add user's message
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    // Show loading animation
    setIsLoading(true);

    try {
      const genAI = new GoogleGenerativeAI("AIzaSyAPZFKpq30_ng_jCXq9HyRP_g--LMct-QQ");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      // const myinput = `you have to generate a daily plan with task and time {$task1} at {$time}`
      const result = await model.generateContent(input);
      const output = await result.response.text();

      // Add AI response, preserving markdown-like formatting
      setMessages((prev) => [...prev, { sender: "ai", text: output }]);

      // Parse AI output into schedule data
      const parsedData = parseAIOutput(output);

      const confirmSchedule = window.confirm("Do you want to schedule this plan?");
      if (confirmSchedule) {
        addToSchedule(parsedData); // Sync with the schedule
      }

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

  const handleCardClick = (title) => {
    if (!title) {
      console.error("Card title is missing!");
      return;
    }
    setInput(title); // Set input value to the clicked card's title
  };

  const prebuiltPrompts = [
    {
      title: "Study for 14 Hours with time and task name",
      description: "Dive into focused study sessions with a structured approach to cover topics efficiently.",
    },
    {
      title: "Self-Time for 5 Hours",
      description: "Dedicate time to self-care and hobbies, fostering a balanced lifestyle and personal growth.",
    },
    {
      title: "Workout for 2 Hours",
      description: "Engage in physical activity to boost energy, enhance focus, and maintain fitness.",
    },
    {
      title: "Focus on Mindfulness",
      description: "Practice mindfulness techniques to enhance mental clarity and reduce stress.",
    },
    {
      title: "Balanced Work-Study Routine",
      description: "Create a harmonious schedule to balance work, study, and personal time effectively.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-auto bg-white">
      <div>
        <div className="w-[60rem] mb-10 flex flex-col h-screen bg-white rounded-2xl overflow-hidden">
          {/* Header Section */}
          <div className="p-6 bg-[#1F2937] text-center">
            <h1 className="text-4xl font-bold font-poppins text-white">AI-Powered Daily Planner</h1>
            <p className="text-sm font-poppins mt-3 text-white">
              Describe your ideal day and get a tailored plan.
            </p>
          </div>

          {/* Chat Section */}
          <div className="flex-grow p-3 overflow-y-auto bg-white border-solid border-4 border-black">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"
                  } mb-4`}
              >
                <div
                  className={`p-4 rounded-lg text-lg ${message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-[#F4F4F4] text-black"
                    }`}
                  style={{
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                    maxWidth: "70%",
                    fontSize: message.sender === "ai" ? "0.875rem" : "1rem",
                  }}
                >
                  {message.sender === "ai" ? (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]} // Use remarkGfm for GitHub-flavored markdown (tables, lists)
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
                    </ReactMarkdown>
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
          <div className="p-4 bg-[#1F2937]">
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
      {/* Bottom Section */}
      <div className="p-10 bg-[#1F2937] border-gray-700 space-y-6">
        <h2 className="text-5xl font-semibold text-center text-white font-poppins">Pre-Built Prompts</h2>
        <div className="flex flex-col gap-4 font-poppins">
          <HoverEffect items={prebuiltPrompts} onCardClick={handleCardClick} />
        </div>
        <p className="text-sm text-white font-poppins mt-4">
          Tap on a prompt to use it as inspiration for your daily plan.
        </p>
      </div>
    </div>
  );
};

export default DailyPlanner;
