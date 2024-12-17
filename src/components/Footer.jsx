import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#645452] text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-12">
          {/* Logo & Branding */}
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold mb-4">YourCompany</h3>
            <p className="text-gray-300 mb-4">
              Unlock your potential with our cutting-edge tools. Empowering
              you to build habits and live a balanced life.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="hover:text-[#DFCFB7] transition duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-[#DFCFB7] transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-[#DFCFB7] transition duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="hover:text-[#DFCFB7] transition duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="hover:text-[#DFCFB7] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#DFCFB7] transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-[#DFCFB7] transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#DFCFB7] transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Get the latest updates and tips delivered straight to your inbox.
            </p>
            
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-300 mb-4">
              Have any questions? Feel free to reach out to us!
            </p>
            <ul>
              <li>
                <p className="text-gray-300">📍 1234 Street Name, City, Country</p>
              </li>
              <li>
                <p className="text-gray-300">📞 +123 456 7890</p>
              </li>
              <li>
                <p className="text-gray-300">✉️ info@yourcompany.com</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center">
            <p className="text-sm text-gray-300 mb-4 sm:mb-0">
              &copy; 2024 YourCompany. All Rights Reserved.
            </p>
            <div className="flex space-x-8">
              <a
                href="/privacy-policy"
                className="text-sm text-gray-300 hover:text-[#DFCFB7] transition"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-sm text-gray-300 hover:text-[#DFCFB7] transition"
              >
                Terms of Service
              </a>
              <a
                href="/cookie-policy"
                className="text-sm text-gray-300 hover:text-[#DFCFB7] transition"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
