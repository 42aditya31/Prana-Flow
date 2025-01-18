// Profile.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fetch user data (mock example, replace with real API call)
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:3000/profile", {
          method: "GET",
          credentials: "include", // For session-based auth
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          navigate("/login"); // Redirect to login if not authenticated
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        navigate("/login");
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3000/logout", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/login"); // Redirect to login on logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#073B4C] text-[#FFD166] font-poppins">
      <div className="bg-white text-[#073B4C] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bebas mb-6 text-center">Your Profile</h2>
        <div className="mb-4">
          <p className="text-lg font-medium">Name: {user.name}</p>
          <p className="text-lg font-medium">Email: {user.email}</p>
        </div>
        <button
          onClick={handleLogout}
          className="w-full bg-[#073B4C] text-[#FFD166] py-2 rounded-lg hover:bg-[#FFD166] hover:text-[#073B4C] transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
