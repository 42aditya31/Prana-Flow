"use client";
import React, { useState } from "react";
import { HoveredLink, Menu } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import { Link } from "react-router-dom";

function NavMenu({ className }) {
  const [active, setActive] = useState(null); // To track active menu item

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 opacity-80",
        className
      )}
    >
      <Menu>
        {/* Home */}
        <Link to="/" className="link-class">
          <div
            className={`menu-item ${active === "Home" ? "active" : ""}`}
            onClick={() => setActive("Home")}
          >
            Home
          </div>
        </Link>

        {/* Dashboard */}
        <Link to="/dashboard" className="link-class">
          <div
            className={`menu-item ${active === "Dashboard" ? "active" : ""}`}
            onClick={() => setActive("Dashboard")}
          >
            Dashboard
          </div>
        </Link>

        {/* About */}
        <Link to="/about" className="link-class">
          <div
            className={`menu-item ${active === "About" ? "active" : ""}`}
            onClick={() => setActive("About")}
          >
            About
          </div>
        </Link>

        {/* Explore - Dropdown */}
        <div className="menu-item">
          <div
            className={`menu-item ${active === "Explore" ? "active" : ""}`}
            onClick={() => setActive("Explore")}
          >
            Explore
          </div>
          {active === "Explore" && (
            <div className="text-sm flex flex-col space-y-4 mt-2">
              <HoveredLink href="/courses">Habit Tracking</HoveredLink>
              <HoveredLink href="/courses">Community Engagement</HoveredLink>
              <HoveredLink href="/courses">Gamification</HoveredLink>
            </div>
          )}
        </div>

        {/* Profile */}
        <Link to="/profile" className="link-class">
          <div
            className={`menu-item ${active === "Profile" ? "active" : ""}`}
            onClick={() => setActive("Profile")}
          >
            Profile
          </div>
        </Link>
      </Menu>
    </div>
  );
}

export default NavMenu;
