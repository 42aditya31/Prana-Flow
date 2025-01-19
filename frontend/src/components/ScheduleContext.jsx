// ScheduleContext.jsx
import React, { createContext, useContext, useState } from "react";

const ScheduleContext = createContext();

export const ScheduleProvider = ({ children }) => {
  const [schedule, setSchedule] = useState([]);

  const addToSchedule = (tasks) => {
    setSchedule((prev) => [...prev, ...tasks]);
  };

  const clearSchedule = () => {
    setSchedule([]);
  };

  console.log(children)

  return (
    <ScheduleContext.Provider value={{ schedule, addToSchedule, clearSchedule }}>
      {children}
    </ScheduleContext.Provider>
  );
};

export const useSchedule = () => {
  const context = useContext(ScheduleContext);
  if (!context) {
    throw new Error("useSchedule must be used within a ScheduleProvider");
  }
  return context;
};
