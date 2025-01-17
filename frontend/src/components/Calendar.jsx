import React, { useState } from "react";
const Calendar = ({ onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const getMonthDays = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];
    const prevMonthDays = (firstDay === 0 ? 6 : firstDay - 1); 

    for (let i = 0; i < prevMonthDays; i++) {
      days.push({ day: null, isCurrentMonth: false });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true });
    }

    return days;
  };

  const handleDayClick = (day) => {
    if (day) {
      const selectedDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      setCurrentDate(selectedDate);
      onDateSelect(selectedDate);
    }
  };

  return (
    <div className="w-full bg-[#D1FAE5] p-4 rounded-2xl shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between text-[#073B4C] font-semibold">
        <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}>
          &lt;
        </button>
        <div>
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </div>
        <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}>
          &gt;
        </button>
      </div>

      {/* Week Days */}
      <div className="grid grid-cols-7 gap-2 mt-4 text-center text-[#073B4C]">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="font-bold">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2 mt-2 text-center">
        {getMonthDays(currentDate.getFullYear(), currentDate.getMonth()).map((date, index) => (
          <div
            key={index}
            className={`h-8 w-8 flex items-center justify-center rounded-full ${
              date.isCurrentMonth
                ? "bg-transparent text-gray-800 cursor-pointer hover:bg-[#073B4C] hover:text-white"
                : "text-gray-400"
            } ${
              date.day === currentDate.getDate() && date.isCurrentMonth
                ? "bg-[#073B4C] text-white font-bold"
                : ""
            }`}
            onClick={() => handleDayClick(date.day)}
          >
            {date.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
