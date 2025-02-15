// OnboardingForm.jsx
import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const OnboardingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    age: "",
    workingHours: "",
    profession: "",
    interests: [],
    problems: [],
  });

  const navigate = useNavigate();

  const interestsList = ["Fitness", "Reading", "Meditation", "Music", "Traveling"];
  const problemsList = ["Procrastination", "Stress", "Time Management", "Sleep Issues"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMultiSelect = (item, type) => {
    setFormData((prevData) => {
      const selected = prevData[type];
      if (selected.includes(item)) {
        return {
          ...prevData,
          [type]: selected.filter((i) => i !== item),
        };
      } else {
        return {
          ...prevData,
          [type]: [...selected, item],
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/profile", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/profile");
      } else {
        console.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="text-2xl font-semibold mb-4">Step 1: Basic Details</h2>
            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              value={formData.weight}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              required
            />
            <input
              type="number"
              name="height"
              placeholder="Height (cm)"
              value={formData.height}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              required
            />
          </>
        );
      case 2:
        return (
          <>
            <h2 className="text-2xl font-semibold mb-4">Step 2: Work Details</h2>
            <input
              type="number"
              name="workingHours"
              placeholder="Working Hours"
              value={formData.workingHours}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              required
            />
            <input
              type="text"
              name="profession"
              placeholder="Profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              required
            />
          </>
        );
      case 3:
        return (
          <>
            <h2 className="text-2xl font-semibold mb-4">Step 3: Interests & Problems</h2>
            <div>
              <h3 className="font-medium">Select Your Interests:</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {interestsList.map((interest) => (
                  <span
                    key={interest}
                    className={`cursor-pointer border rounded px-3 py-1 ${
                      formData.interests.includes(interest)
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleMultiSelect(interest, "interests")}
                  >
                    {interest}
                  </span>
                ))}
              </div>
              <h3 className="font-medium">Select Your Problems:</h3>
              <div className="flex flex-wrap gap-2">
                {problemsList.map((problem) => (
                  <span
                    key={problem}
                    className={`cursor-pointer border rounded px-3 py-1 ${
                      formData.problems.includes(problem)
                        ? "bg-red-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleMultiSelect(problem, "problems")}
                  >
                    {problem}
                  </span>
                ))}
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h2 className="text-2xl font-semibold mb-4">Step 4: Review & Submit</h2>
            <pre className="bg-gray-100 p-4 rounded mb-4">{JSON.stringify(formData, null, 2)}</pre>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Submit
            </button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#073B4C] text-[#FFD166] font-poppins">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-[#073B4C] p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        {renderStep()}
        <div className="mt-4 flex justify-between">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              Previous
            </button>
          )}
          {step < 4 && (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="bg-[#073B4C] text-[#FFD166] px-4 py-2 rounded hover:bg-[#FFD166] hover:text-[#073B4C]"
            >
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default OnboardingForm;
