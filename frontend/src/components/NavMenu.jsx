"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import { Link } from "react-router-dom"; // Changed from next/link to react-router-dom

function NavMenu({ className }) { // Removed type annotation for className
  const [active, setActive] = useState(null);
  
  return (
    <>
      <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 opacity-80", className)}
      >
        <Menu setActive={setActive}>
          <Link to={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>
          <Link to={"/dashboard"}>
            <MenuItem setActive={setActive} active={active} item="Dashboard" />
          </Link>
          <Link to={"/about"}>
            <MenuItem setActive={setActive} active={active} item="About" />
          </Link>
          <MenuItem setActive={setActive} active={active} item="Explore">
            <div className="text-sm flex flex-col space-y-4">
              <HoveredLink href="/courses">Habit Tracking</HoveredLink>
              <HoveredLink href="/courses">Community Engagement</HoveredLink>
              <HoveredLink href="/courses">Gamification</HoveredLink>
            </div>
          </MenuItem>
          <Link to={"/profile"}>
            <MenuItem setActive={setActive} active={active} item="Profile" />
          </Link>
        </Menu>
      </div>
    </>
  );
}

export default NavMenu;
