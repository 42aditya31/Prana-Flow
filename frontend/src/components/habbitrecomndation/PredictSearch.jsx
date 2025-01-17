"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const PredictSearch = () => {
  const [expanded, setExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef(null);

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleClickOutside = (event) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target) &&
      searchValue.trim() === ""
    ) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchValue]);

  return (
    <div className="flex items-center justify-center rounded-lg h-40 bg-[#1F2937]">
      <div
        ref={searchRef}
        onClick={handleExpand}
        className={`${
          expanded
            ? "w-96 h-24 rounded-lg bg-white pl-6"
            : "w-28 h-28 rounded-full bg-[#118AB2]"
        } transition-all duration-300 flex items-center justify-${
          expanded ? "start" : "center"
        } cursor-pointer`}
      >
        {!expanded && <FaSearch className="text-white text-2xl" />}
        {expanded && (
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search..."
            className="w-full h-full outline-none bg-transparent text-black"
          />
        )}
      </div>
    </div>
  );
};

export default PredictSearch;
