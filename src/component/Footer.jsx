import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full">
      <footer className="f w-full bg-gray-500 mt-10 text-white">
        <div className="container mx-auto px-4 py-8 font-serif flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold">StepNest</h2>
            <p className="mt-2 font-mono">
              Step into comfort with StepNest shoes, crafted for every occasion.
            </p>
          </div>

          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <h3 className="text-lg font-serif font-medium mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/explore" className=" font-serif hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className=" font-serif hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/policy" className=" font-serif hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 text-center md:text-right">
            <h3 className="text-lg md:mr-2 font-medium mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-white hover:text-gray-300 social-icon">
                <i className="fa fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300 social-icon">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300 social-icon">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300 social-icon">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center py-4 bg-gray-700">
          <p>&copy; 2024 StepNest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
