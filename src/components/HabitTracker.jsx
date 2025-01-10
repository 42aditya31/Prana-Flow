import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");
  const [selectedHabit, setSelectedHabit] = useState(null);
  const [habitDetails, setHabitDetails] = useState({
    notification: false,
    frequency: "daily",
    duration: "1 month",
  });

  const predefinedHabits = ["Exercise", "Read", "Meditate", "Drink Water", "Learn Coding"];

  const addHabit = () => {
    if (selectedHabit || newHabit.trim()) {
      const habitName = selectedHabit || newHabit;
      setHabits([
        ...habits,
        { name: habitName, details: { ...habitDetails } },
      ]);
      resetForm();
    }
  };

  const resetForm = () => {
    setNewHabit("");
    setSelectedHabit(null);
    setHabitDetails({ notification: false, frequency: "daily", duration: "1 month" });
  };

  const deleteHabit = (habitName) => {
    setHabits(habits.filter((habit) => habit.name !== habitName));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Habit Tracking System</h1>

      {/* Predefined Habits */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-800 mb-4">Start with a predefined habit:</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {predefinedHabits.map((habit) => (
            <button
              key={habit}
              onClick={() => setSelectedHabit(habit)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
            >
              {habit}
            </button>
          ))}
        </div>
      </div>

      {/* Add Custom Habit Button */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setSelectedHabit("Custom")}
          className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700"
        >
          Add a Custom Habit
        </button>
      </div>

      {/* Habit Configuration Form */}
      {(selectedHabit || newHabit.trim()) && (
        <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Configure {selectedHabit === "Custom" ? "Custom Habit" : selectedHabit}
          </h2>
          {selectedHabit === "Custom" && (
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Habit Name</label>
              <input
                type="text"
                placeholder="Enter habit name"
                value={newHabit}
                onChange={(e) => setNewHabit(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Notification</label>
            <input
              type="checkbox"
              checked={habitDetails.notification}
              onChange={(e) =>
                setHabitDetails((prev) => ({ ...prev, notification: e.target.checked }))
              }
              className="mr-2"
            />
            Enable Notifications
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Frequency</label>
            <select
              value={habitDetails.frequency}
              onChange={(e) =>
                setHabitDetails((prev) => ({ ...prev, frequency: e.target.value }))
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Duration</label>
            <select
              value={habitDetails.duration}
              onChange={(e) =>
                setHabitDetails((prev) => ({ ...prev, duration: e.target.value }))
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1 week">1 Week</option>
              <option value="1 month">1 Month</option>
              <option value="3 months">3 Months</option>
            </select>
          </div>
          <div className="flex gap-4">
            <button
              onClick={addHabit}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
            >
              Save Habit
            </button>
            <button
              onClick={resetForm}
              className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Habit List */}
      <div className="space-y-6">
        {habits.length === 0 ? (
          <p className="text-gray-500 text-center">No habits added yet. Start by adding one!</p>
        ) : (
          habits.map((habit) => (
            <div
              key={habit.name}
              className="flex justify-between items-center p-5 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{habit.name}</h3>
                <p className="text-sm text-gray-500">
                  Frequency: {habit.details.frequency}, Duration: {habit.details.duration}
                </p>
              </div>
              <button
                onClick={() => deleteHabit(habit.name)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 shadow"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HabitTracker;
