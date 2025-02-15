import  { useState } from "react";
import NavBar from "./NavMenu"
import Footer from "./FooterMain"
import profileImage from "../assets/profile.png"

const Profile = () => {
  const initialUser = {
    name: "Aditya Sharma",
    jobTitle: "Frontend Developer",
    location: "Mumbai, India",
    image: {profileImage},
    work: [
      { title: "Spotify New York", type: "Primary" },
      { title: "Metropolitan Museum", type: "Secondary" },
    ],
    skills: ["JavaScript", "ReactJS", "UI/UX"],
    about: "Passionate about creating immersive web experiences.",
    phone: "+91-9876543210",
    email: "aditya@example.com",
    website: "www.adityasharma.dev",
    birthday: "June 5, 1992",
    gender: "Male",
  };

  const initialHabits = [
    { title: "Morning Meditation", days: "Monday to Friday", time: "6:30 AM" },
    { title: "Workout", days: "Daily", time: "7:00 AM" },
  ];

  const [user, setUser] = useState(initialUser);
  const [habits, setHabits] = useState(initialHabits);

  const handleInputChange = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  const handleHabitChange = (index, field, value) => {
    const updatedHabits = [...habits];
    updatedHabits[index][field] = value;
    setHabits(updatedHabits);
  };

  return (
    <div>
      <NavBar />
      <div
        className="h-screen flex justify-center items-center"
        style={{ backgroundColor: "white" }}
      >
        <div className="w-full max-w-5xl bg-[#073B4C] rounded-lg shadow-lg p-8">
          {/* Header Section */}
          <div className="flex justify-between items-center pb-6 border-b border-gray-300">
            <div className="flex items-center">
              <img
                src={profileImage}
                alt="Profile"
                className="w-20 h-20 rounded-full mr-6 border-2 border-white"
              />
              <div>
                <input
                  className="text-2xl font-semibold text-white font-poppins bg-transparent border-none focus:outline-none"
                  value={user.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
                <input
                  className="text-white font-poppins bg-transparent border-none focus:outline-none"
                  value={user.jobTitle}
                  onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                />
                <input
                  className="text-sm text-white font-poppins bg-transparent border-none focus:outline-none"
                  value={user.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                className="px-6 py-2 rounded-md shadow"
                style={{ backgroundColor: "#118AB2", color: "white" }}
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="grid grid-cols-3 gap-8 mt-6">
            {/* Left Sidebar */}
            <div>
              <h2
                className="text-lg text-white font-poppins font-semibold mb-4"
                style={{ color: "#06D6A0" }}
              >
                Work
              </h2>
              <ul>
                {user.work.map((job, index) => (
                  <li
                    key={index}
                    className="text-sm text-white font-poppins mb-2 flex justify-between items-center"
                  >
                    <input
                      className="bg-transparent border-none focus:outline-none"
                      value={job.title}
                      onChange={(e) =>
                        handleInputChange(`work[${index}].title`, e.target.value)
                      }
                    />
                    <input
                      className="text-xs text-blue-500 bg-transparent border-none focus:outline-none"
                      value={job.type}
                      onChange={(e) =>
                        handleInputChange(`work[${index}].type`, e.target.value)
                      }
                    />
                  </li>
                ))}
              </ul>
              <h2
                className="text-lg font-semibold font-poppins mt-8 mb-4"
                style={{ color: "#06D6A0" }}
              >
                Skills
              </h2>
              <ul>
                {user.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="text-sm text-white font-poppins mb-2 flex justify-between items-center"
                  >
                    <input
                      className="bg-transparent border-none focus:outline-none"
                      value={skill}
                      onChange={(e) =>
                        handleInputChange(`skills[${index}]`, e.target.value)
                      }
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Middle Content */}
            <div>
              <h2
                className="text-lg font-semibold font-poppins mb-4"
                style={{ color: "#FFD166" }}
              >
                About
              </h2>
              <textarea
                className="text-sm text-white font-poppins leading-6 w-full bg-transparent border-none focus:outline-none"
                value={user.about}
                onChange={(e) => handleInputChange("about", e.target.value)}
              />
              <h2
                className="text-lg font-semibold font-poppins mt-8 mb-4"
                style={{ color: "#FFD166" }}
              >
                Current Habits
              </h2>
              <ul>
                {habits.map((habit, index) => (
                  <li
                    key={index}
                    className="p-4 rounded-md shadow-sm mb-3"
                    style={{ backgroundColor: "#F9F9F9" }}
                  >
                    <input
                      className="font-medium text-gray-800 bg-transparent border-none focus:outline-none"
                      value={habit.title}
                      onChange={(e) =>
                        handleHabitChange(index, "title", e.target.value)
                      }
                    />
                    <input
                      className="text-sm text-gray-500 bg-transparent border-none focus:outline-none"
                      value={habit.days}
                      onChange={(e) =>
                        handleHabitChange(index, "days", e.target.value)
                      }
                    />
                    <input
                      className="text-sm text-gray-500 bg-transparent border-none focus:outline-none"
                      value={habit.time}
                      onChange={(e) =>
                        handleHabitChange(index, "time", e.target.value)
                      }
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Sidebar */}
            <div>
              <h2
                className="text-lg font-semibold font-poppins mb-4"
                style={{ color: "#EF476F" }}
              >
                Contact Information
              </h2>
              <ul>
                <li className="text-sm text-white font-poppins mb-2">
                  <strong>Phone:</strong>{" "}
                  <input
                    className="bg-transparent border-none focus:outline-none"
                    value={user.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </li>
                <li className="text-sm text-white font-poppins mb-2">
                  <strong>Email:</strong>{" "}
                  <input
                    className="bg-transparent border-none focus:outline-none"
                    value={user.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </li>
                <li className="text-sm text-white font-poppins">
                  <strong>Website:</strong>{" "}
                  <input
                    className="bg-transparent border-none focus:outline-none"
                    value={user.website}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                  />
                </li>
              </ul>
              <h2
                className="text-lg font-semibold font-poppins mt-8 mb-4"
                style={{ color: "#EF476F" }}
              >
                Basic Information
              </h2>
              <ul>
                <li className="text-sm text-white font-poppins mb-2">
                  <strong>Birthday:</strong>{" "}
                  <input
                    className="bg-transparent border-none focus:outline-none"
                    value={user.birthday}
                    onChange={(e) =>
                      handleInputChange("birthday", e.target.value)
                    }
                  />
                </li>
                <li className="text-sm text-white font-poppins">
                  <strong>Gender:</strong>{" "}
                  <input
                    className="bg-transparent border-none focus:outline-none"
                    value={user.gender}
                    onChange={(e) => handleInputChange("gender", e.target.value)}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default Profile;

