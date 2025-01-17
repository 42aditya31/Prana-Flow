import React from "react";

const Schedule = ({ scheduleData }) => {
  const defaultSchedule = [
    {
      time: "8:00 AM",
      title: "Meditation",
      color: "#F94144",
    },
    {
      time: "9:00 AM",
      title: "Exercise",
      color: "#43AA8B",
    },
  ];

  const events = scheduleData || defaultSchedule;

  return (
    <div className="bg-[#06D6A0] text-[#073B4C] p-4 rounded-lg w-full h-auto">
      <h2 className="text-lg font-bold mb-4">Schedule</h2>
      {events.map((event, index) => {
        // Validate event and its properties
        const eventTitle = event?.title || "No Title"; // Default to "No Title" if undefined
        const eventTime = event?.time || "Time Unavailable";
        const eventColor = event?.color || "#cccccc";

        return (
          <div
            key={index}
            className="flex items-center mb-4"
            style={{ borderLeft: `4px solid ${eventColor}` }}
          >
            <div className="flex flex-col pl-4">
              <p className="font-medium text-sm">{eventTime}</p>
              <p className="text-md font-bold">{eventTitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Schedule;
