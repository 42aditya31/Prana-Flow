import React, { useState } from "react";
import NavBar from "./NavMenu";
import Footer from "./FooterMain"

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [form, setForm] = useState({
    title: "",
    days: "",
  });
  const [isAdding, setIsAdding] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const addHabit = () => {
    if (!form.title || !form.days) {
      alert("Please fill in all fields");
      return;
    }
    setHabits([
      ...habits,
      {
        id: Date.now(),
        title: form.title,
        days: parseInt(form.days),
        completedDates: [],
      },
    ]);
    setForm({ title: "", days: "" });
    setIsAdding(false);
  };

  const calculateStreak = (completedDates) => {
    if (!completedDates.length) return 0;

    const today = new Date().toISOString().split("T")[0];
    const sortedDates = [...completedDates].sort();
    let streak = 0;

    for (let i = sortedDates.length - 1; i >= 0; i--) {
      const date = sortedDates[i];
      const previousDate = new Date(date);
      const difference = (new Date(today) - previousDate) / (1000 * 60 * 60 * 24);

      if (difference === streak) {
        streak++;
      } else {
        break;
      }
    }

    return streak;
  };

  const toggleComplete = (id) => {
    const today = new Date().toISOString().split("T")[0];

    setHabits((prevHabits) =>
      prevHabits.map((habit) => {
        if (habit.id === id) {
          const isAlreadyCompleted = habit.completedDates.includes(today);
          return {
            ...habit,
            completedDates: isAlreadyCompleted
              ? habit.completedDates.filter((date) => date !== today)
              : [...habit.completedDates, today],
          };
        }
        return habit;
      })
    );
  };

  const editHabit = (id, newTitle) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, title: newTitle } : habit
      )
    );
  };

  const deleteHabit = (id) => {
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
  };

  return (
    <>
    <NavBar />
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Habit Tracker
      </h1>

      {/* Add Habit Form */}
      {isAdding ? (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-lg font-semibold font-poppins mb-4 text-center">
            Add a New Habit
          </h2>
          <input
            type="text"
            name="title"
            placeholder="Habit Title"
            value={form.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border font-poppins rounded-md mb-4 focus:ring focus:ring-green-200"
          />
          <input
            type="number"
            name="days"
            placeholder="Number of Days"
            value={form.days}
            onChange={handleChange}
            className="w-full px-4 py-2 border font-poppins rounded-md mb-4 focus:ring focus:ring-green-200"
          />
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setIsAdding(false)}
              className="bg-[#073B4C] text-white font-poppins px-4 py-2 rounded-md hover:bg-[#06D6A0]"
            >
              Cancel
            </button>
            <button
              onClick={addHabit}
              className="bg-[#073B4C] text-white font-poppins px-4 py-2 rounded-md hover:bg-[#06D6A0]"
            >
              Add Habit
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsAdding(true)}
          className="bg-[#06D6A0] text-white px-4 font-poppins py-2 rounded-md hover:bg-[#073B4C] transition block mx-auto"
        >
          Add New Habit
        </button>
      )}

      {/* Habits List */}
      <div className="mt-6 space-y-4">
        {habits.length === 0 && !isAdding ? (
          <p className="text-gray-500 text-center font-poppins">
            No habits added yet. Start tracking now!
          </p>
        ) : (
          habits.map((habit) => (
            <div
              key={habit.id}
              className="flex flex-col md:flex-row justify-between items-center p-4 bg-white rounded-lg shadow-md"
            >
              <div className="flex-grow">
                <p className="text-lg font-medium text-gray-800 font-poppins">
                  {habit.title}
                </p>
                <p className="text-sm text-gray-600 font-poppins">
                  Target: {habit.days} days | Streak:{" "}
                  <span
                    className={`font-semibold ${
                      calculateStreak(habit.completedDates) > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {calculateStreak(habit.completedDates)} days
                  </span>
                </p>
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-md h-4 mt-2">
                  <div
                    className="bg-green-500 h-4 rounded-md"
                    style={{
                      width: `${
                        (calculateStreak(habit.completedDates) / habit.days) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <input
                  type="checkbox"
                  checked={habit.completedDates.includes(
                    new Date().toISOString().split("T")[0]
                  )}
                  onChange={() => toggleComplete(habit.id)}
                  className="w-5 h-5"
                />
                <button
                  onClick={() => {
                    const newTitle = prompt("Edit Habit", habit.title);
                    if (newTitle) editHabit(habit.id, newTitle);
                  }}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteHabit(habit.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Weekly Challenges */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 font-poppins">
          Weekly Challenges
        </h2>
        <p className="text-gray-600 font-poppins">
          Complete 5 habits in a week to unlock a special badge!
        </p>
        <p className="text-green-500 font-bold mt-2 font-poppins">
          Progress:{" "}
          {habits.filter((habit) =>
            habit.completedDates.includes(new Date().toISOString().split("T")[0])
          ).length}{" "}
          / 5 habits completed this week
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default HabitTracker;
