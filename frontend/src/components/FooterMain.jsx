"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const FooterMain = () => {
  return (
    <footer className="bg-[#1F2937] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Branding */}
          <div className="col-span-1">
            <h1 className="text-3xl font-bold mb-4">Prana Flow</h1>
            <p className="text-gray-400">
              Empowering you to achieve your goals with personalized habit recommendations. Think smarter, live better.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#06D6A0] transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-[#06D6A0] transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-[#06D6A0] transition-colors duration-300"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-[#06D6A0] transition-colors duration-300"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#blog"
                  className="hover:text-[#06D6A0] transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#guides"
                  className="hover:text-[#06D6A0] transition-colors duration-300"
                >
                  User Guides
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="hover:text-[#06D6A0] transition-colors duration-300"
                >
                  Support Center
                </a>
              </li>
              <li>
                <a
                  href="#developer"
                  className="hover:text-[#06D6A0] transition-colors duration-300"
                >
                  Developer API
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-2 text-gray-400">
              <li>Email: support@predictpro.com</li>
              <li>Phone: +1 (234) 567-890</li>
              <li>Address: 123 PredictPro Lane, SmartCity</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                className="text-white hover:text-[#06D6A0] transition-colors duration-300 text-2xl"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="text-white hover:text-[#06D6A0] transition-colors duration-300 text-2xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="text-white hover:text-[#06D6A0] transition-colors duration-300 text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                className="text-white hover:text-[#06D6A0] transition-colors duration-300 text-2xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} PredictPro. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Designed with 💻 by <span className="text-[#06D6A0]">Aditya Sharma</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
