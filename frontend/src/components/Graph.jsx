import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Graph = () => {
  const chartData = {
    overall: [
      { day: "Mon", points: 200 },
      { day: "Tue", points: 300 },
      { day: "Wed", points: 250 },
      { day: "Thu", points: 400 },
      { day: "Fri", points: 350 },
      { day: "Sat", points: 450 },
      { day: "Sun", points: 1000 },
    ],
    habits: [
      { day: "Mon", points: 50 },
      { day: "Tue", points: 75 },
      { day: "Wed", points: 60 },
      { day: "Thu", points: 90 },
      { day: "Fri", points: 80 },
      { day: "Sat", points: 100 },
      { day: "Sun", points: 120 },
    ],
    tasks: [
      { day: "Mon", points: 30 },
      { day: "Tue", points: 40 },
      { day: "Wed", points: 35 },
      { day: "Thu", points: 50 },
      { day: "Fri", points: 45 },
      { day: "Sat", points: 60 },
      { day: "Sun", points: 70 },
    ],
    schedule: [
      { day: "Mon", points: 10 },
      { day: "Tue", points: 20 },
      { day: "Wed", points: 15 },
      { day: "Thu", points: 25 },
      { day: "Fri", points: 20 },
      { day: "Sat", points: 30 },
      { day: "Sun", points: 35 },
    ],
  };

  const [activeTab, setActiveTab] = useState("overall");

  const totalPoints = chartData[activeTab].reduce(
    (sum, data) => sum + data.points,
    0
  );

  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="main flex flex-col items-center px-4 py-6 sm:py-8 lg:px-8 w-full">
      {/* Navbar */}
      <div className="w-full max-w-6xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Dashboard</h1>
        <nav className="flex flex-wrap justify-around md:justify-start gap-4 text-center border-b-2 border-gray-200 pb-2">
          {["overall", "habits", "tasks", "schedule"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-medium pb-1 capitalize ${
                activeTab === tab
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              {tab} Report
            </button>
          ))}
        </nav>
      </div>

      {/* Graph Section */}
      <div className="bg-[#E0F7F5] rounded-lg shadow-md mt-8 w-full max-w-6xl py-6 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              {totalPoints}
            </h2>
            <p className="text-base md:text-lg font-medium text-gray-600">
              Total Points Earned
            </p>
          </div>
          <p className="text-sm md:text-base font-medium text-gray-600 mt-4 sm:mt-0">
            {currentDate}
          </p>
        </div>

        {/* Chart Section */}
        <div className="h-64 sm:h-72 md:h-80 lg:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData[activeTab]}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorPoints" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3DDAB4" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3DDAB4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="day"
                tick={{ fill: "#6B7280" }}
                tickMargin={5}
              />
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="points"
                stroke="#3DDAB4"
                fillOpacity={1}
                fill="url(#colorPoints)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Graph;
