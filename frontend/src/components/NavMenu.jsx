import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";

function NavMenu({ className }) {
  const location = useLocation(); // Get the current location
  const [active, setActive] = useState(location.pathname); // Track active route
  const [scrolled, setScrolled] = useState(false); // Track scrolling state
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state

  // Update active route on location change
  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  // Scroll event listener for sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div
      className={cn(
        "sticky top-0 z-50 transition duration-300 ease-in-out backdrop-blur-md",
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "flex py-6 px-4 md:px-20 items-center justify-between w-full transition-all duration-300",
          scrolled ? "bg-white" : "bg-opacity-100"
        )}
      >
        {/* Logo */}
        <Link to="/">
          <h1 className="text-blue-900 font-bold text-xl font-poppins">Prana Flow</h1>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex gap-x-6 font-poppins text-[#073B4C] text-md ">
          <Link
            to="/mainpage"
            className={cn(
              active === "/mainpage" ? "font-bold" : "opacity-65"
            )}
            onClick={() => setActive("/mainpage")}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className={cn(
              active === "/dashboard" ? "font-bold" : "opacity-65"
            )}
            onClick={() => setActive("/dashboard")}
          >
            Dashboard
          </Link>
          <Link
            to="/habit-tracker"
            className={cn(active === "/habit-tracker" ? "font-bold" : "opacity-65")}
            onClick={() => setActive("/habit-tracker")}
          >
            Habit Tracker
          </Link>
          <Link
            to="/about"
            className={cn(active === "/about" ? "font-bold" : "opacity-65")}
            onClick={() => setActive("/about")}
          >
            About
          </Link>
          <Link
            to="/blog"
            className={cn(active === "/blog" ? "font-bold" : "opacity-65")}
            onClick={() => setActive("/blog")}
          >
            Blog
          </Link>
          <Link
            to="/profile"
            className={cn(active === "/profile" ? "font-bold" : "opacity-65")}
            onClick={() => setActive("/profile")}
          >
            Profile
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={toggleModal}>
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
      </div>

      {/* Mobile Menu Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-40 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md mx-auto">
            <nav className="flex flex-col text-center gap-y-4 text-blue-900 text-md font-semibold">
              <Link
                to="/mainpage"
                onClick={() => {
                  toggleModal();
                  setActive("/mainpage");
                }}
                className={active === "/mainpage" ? "font-bold" : "opacity-65"}
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                onClick={() => {
                  toggleModal();
                  setActive("/dashboard");
                }}
                className={active === "/dashboard" ? "font-bold" : "opacity-65"}
              >
                Dashboard
              </Link>
              <Link
                to="/about"
                onClick={() => {
                  toggleModal();
                  setActive("/about");
                }}
                className={active === "/about" ? "font-bold" : "opacity-65"}
              >
                About
              </Link>
              <Link
                to="/explore"
                onClick={() => {
                  toggleModal();
                  setActive("/explore");
                }}
                className={active === "/explore" ? "font-bold" : "opacity-65"}
              >
                Explore
              </Link>
              <Link
                to="/profile"
                onClick={() => {
                  toggleModal();
                  setActive("/profile");
                }}
                className={active === "/profile" ? "font-bold" : "opacity-65"}
              >
                Profile
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavMenu;
