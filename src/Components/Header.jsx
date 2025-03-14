import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Toggle Menu Button (Left on sm screens) */}
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          {toggleMenu ? (
            <XMarkIcon className="h-7 w-7 text-gray-800" />
          ) : (
            <Bars3Icon className="h-7 w-7 text-gray-800" />
          )}
        </button>

        {/* Logo (Center on sm screens, Left on lg screens) */}
        <div className="logo flex-grow text-center lg:text-left lg:flex-grow-0">
          <h1 className="text-4xl font-bold text-gray-800 hover:text-teal-500 transition-colors duration-300">
            RV
          </h1>
        </div>

        {/* Navigation Menu (Center on lg screens) */}
        <nav className="hidden lg:flex lg:flex-grow lg:justify-center">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#home"
                className="text-gray-800 hover:text-teal-500 text-xl font-medium transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-800 hover:text-teal-500 text-xl font-medium transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-800 hover:text-teal-500 text-xl font-medium transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-800 hover:text-teal-500 text-xl font-medium transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Icons (Right) */}
        <div className="flex space-x-6">
          <a
            href="#"
            className="text-gray-800 hover:text-teal-500 text-3xl transition-colors duration-300"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-teal-500 text-3xl transition-colors duration-300"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        {/* Mobile Navigation Menu (Dropdown on sm screens) */}
        {toggleMenu && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50">
            <nav>
              <ul className="flex flex-col">
                <li className="w-full text-center border-b-2 py-3">
                  <a
                    href="#home"
                    className="text-gray-800 hover:text-teal-500 text-xl font-medium transition-colors duration-300"
                    onClick={() => setToggleMenu(false)}
                  >
                    Home
                  </a>
                </li>
                <li className="w-full text-center border-b-2 py-3">
                  <a
                    href="#about"
                    className="text-gray-800 hover:text-teal-500 text-xl font-medium transition-colors duration-300"
                    onClick={() => setToggleMenu(false)}
                  >
                    About
                  </a>
                </li>
                <li className="w-full text-center border-b-2 py-3">
                  <a
                    href="#projects"
                    className="text-gray-800 hover:text-teal-500 text-xl font-medium transition-colors duration-300"
                    onClick={() => setToggleMenu(false)}
                  >
                    Projects
                  </a>
                </li>
                <li className="w-full text-center border-b-2 py-3">
                  <a
                    href="#contact"
                    className="text-gray-800 hover:text-teal-500 text-xl font-medium transition-colors duration-300"
                    onClick={() => setToggleMenu(false)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;