import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#073B4C] text-[#FFD166] py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Branding */}
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold mb-4">Bhrahma Niti&reg;</h3>
            <p className="text-[#FFD166] opacity-80 mb-4 leading-relaxed">
              Unlock your potential with our tools. Empower your habits, balance life, and grow with us.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="hover:text-white transition duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-white transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-white transition duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="hover:text-white transition duration-300"
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
                <a
                  href="/about"
                  className="hover:text-white transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-white transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-white transition duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <p>📍 1234 Street Name, City, Country</p>
              </li>
              <li>
                <p>📞 +123 456 7890</p>
              </li>
              <li>
                <p>✉️ info@bhrahmaniti.com</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-[#FFD166] opacity-50 pt-8">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center">
            <p className="text-sm text-[#FFD166] opacity-80 mb-4 sm:mb-0">
              &copy; 2024 Bhrahma Niti&reg;. All Rights Reserved.
            </p>
            <div className="flex space-x-8">
              <a
                href="/privacy-policy"
                className="text-sm hover:text-white transition duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-sm hover:text-white transition duration-300"
              >
                Terms of Service
              </a>
              <a
                href="/cookie-policy"
                className="text-sm hover:text-white transition duration-300"
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
