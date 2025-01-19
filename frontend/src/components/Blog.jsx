import React from "react";
import Blogcard from "./blog/BlogCard";
import Navbar from "./NavMenu";
import Footer from "./FooterMain";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="pt-10 pb-4">
        <h2 className="text-center text-[#073B4C] font-bold font-poppins text-5xl">
          Mindful Living Insights
        </h2>
        <p className="text-gray-600 text-center tracking-wide text-xl m-2">
          Explore wisdom-driven tips and insights to build better habits and live a balanced life.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:px-32 md:px-24 px-6 pb-5">
        <Blogcard />
      </div>
      <Footer />
    </>
  );
};

export default Blog;