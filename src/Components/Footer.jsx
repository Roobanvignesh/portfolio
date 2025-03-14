import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold text-white">About Me</h2>
            <p className="text-gray-400 mt-2">
              I'm a passionate Full Stack Developer specializing in MERN stack 
              and Java. I love building high-performance, user-friendly web 
              applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold text-white">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#home" className="hover:text-teal-400 transition">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-teal-400 transition">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h2 className="text-xl font-bold text-white">Get in Touch</h2>
            <p className="text-gray-400 mt-2">📍 Theni, Tamil Nadu</p>
            <p className="text-gray-400">📞 8428575415</p>
            <p className="text-gray-400">✉️ roobanvignesh@gmail.com</p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl hover:text-teal-400 transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-teal-400 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-8 text-sm">
          © {new Date().getFullYear()} Roobanvignesh. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
