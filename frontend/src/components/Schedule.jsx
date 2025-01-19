import React from "react";
import { useSchedule } from "./ScheduleContext";

const Schedule = () => {
  const { schedule } = useSchedule();

  // If no schedule is available, show a message
  if (!schedule || schedule.length === 0) {
    return (
      <div className="bg-[#06D6A0] text-[#073B4C] p-4 rounded-lg w-full h-auto">
        <p>No tasks scheduled yet.</p>
      </div>
    );
  }

  // Helper function to remove the stars for bold text
  const removeStars = (text) => {
    if (!text) return "";
    return text.replace(/\*\*(.*?)\*\*/g, "$1"); // Remove **bold** markdown stars
  };

  return (
    <div className="bg-[#06D6A0] text-[#073B4C] p-4 rounded-lg w-full h-auto">
      <h2 className="text-lg font-bold mb-4">Schedule</h2>
      {schedule.map((task, index) => {
        // Validate task and its properties
        const taskTitle = removeStars(task?.title) || "No Title"; // Remove stars from title
        const taskTime = removeStars(task?.time) || "Time Unavailable"; // Remove stars from time
        const taskColor = task?.color || "#cccccc";

        return (
          <div
            key={index}
            className="flex items-center mb-4"
            style={{ borderLeft: `4px solid ${taskColor}` }} // Dynamic left border color
          >
            <div className="flex flex-col pl-4">
              <p className="font-medium text-sm">{taskTime}</p>
              <p className="text-md font-bold">{taskTitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Schedule;
