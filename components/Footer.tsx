import React from "react";

export default function Footer() {
  return (
    <footer className="footer-area section-gap bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - About */}
          <div className="single-footer-widget">
            <h6 className="text-xl font-semibold mb-4">About Me</h6>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Licensed Real Estate Consultant, Southern Star Realty, New Zealand
            </p>
            <p className="footer-text text-sm text-gray-400">
              Copyright © {new Date().getFullYear()} All rights reserved | This
              website is made with <span className="text-red-400">❤️</span> by{" "}
              <a
                href="http://nzlouis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                NZ Louis
              </a>
            </p>
          </div>

          {/* Right side - Social Media */}
          <div className="single-footer-widget">
            <h6 className="text-xl font-semibold mb-4">Follow Me</h6>
            <p className="text-gray-300 mb-6">Let us be social</p>
            <div className="footer-social flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <span className="text-white text-lg">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <span className="text-white text-lg">t</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <span className="text-white text-lg">in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
