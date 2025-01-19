import React, { useState, useEffect } from 'react';
// import Logo from '../../assets/Logo (2).png'; 
// import { NavbarLinks } from "../../Data/navbar-links.js";
// import ProfileDropdown from "../core/ProfileDropdown.jsx";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link, matchPath, useLocation } from "react-router-dom";

function NavBar2() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={`flex sticky top-0 z-50 transition duration-300 ease-in-out backdrop-blur-md ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="flex px-4 md:px-20 items-center justify-between sticky w-full z-30 bg-white bg-opacity-100 backdrop-blur-lg transition-all duration-300">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} className="mr-3 lg:h-14 h-12 select-none" loading='lazy' alt="Logo" />
          <h1 className='sr-only'>Career Hub</h1>
        </Link>
        {/* Navigation links */}
        <nav className="hidden md:hidden lg:block ml-56">
          <ul className="flex gap-x-6 text-richblack-25 text-md font-semibold">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                <Link to={link?.path}>
                  <p className={`${matchRoute(link?.path) ? "text-blue-900 font-bold" : "text-blue-900 opacity-65"}`}>
                    {link.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Login / Signup / Dashboard */}
        <div className="hidden items-center gap-x-4 lg:-mr-28 text-blue-900 pl-44 text-md font-semibold md:flex">
          {token == null && (
            <Link to="/login">
              <button className="hover:bg-blue-900 hover:text-white duration-200 font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                Log in
              </button>
            </Link>
          )}
          {token == null && (
            <Link to="/signup">
              <button className="hover:bg-blue-900 hover:text-white bg-[#e7f3ff] duration-200 font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                Get started
              </button>
            </Link>
          )}
          
        </div>
        <div className='text-blue-900 ml-20'>
        {token !== null && <ProfileDropdown />}
        </div>
        <button className="mr-4 md:hidden" onClick={toggleModal}>
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 mt-56 z-40 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md mx-auto">
            {/* <button className="absolute top-4 right-4" onClick={toggleModal}>
              <AiOutlineClose fontSize={24} fill="#000" />
            </button> */}
            <nav>
              <ul className="flex flex-col text-center gap-y-4 text-richblack-25 text-md font-semibold">
                {NavbarLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link?.path} onClick={toggleModal}>
                      <p className={`${matchRoute(link?.path) ? "text-blue-900 font-bold" : "text-blue-900 opacity-65"}`}>
                        {link.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col text-center gap-y-4 mt-6 text-blue-900 text-md font-semibold">
              {token == null && (
                <Link to="/login" onClick={toggleModal}>
                  <button className="hover:bg-blue-900 hover:text-white duration-200 font-medium rounded-lg px-4 py-2 focus:outline-none">
                    Log in
                  </button>
                </Link>
              )}
              {token == null && (
                <Link to="/signup" onClick={toggleModal}>
                  <button className="hover:bg-blue-900 hover:text-white bg-[#e7f3ff] duration-200 font-medium rounded-lg px-4 py-2 focus:outline-none">
                    Get started
                  </button>
                </Link>
              )}
              {/* {token !== null && <ProfileDropdown />} */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar2;
