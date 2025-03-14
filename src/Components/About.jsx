import React from "react";
import image from "../assets/image.png"; // Replace with your actual image

const skills = [
  { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-12 bg-white shadow-md rounded-lg border border-gray-200">
      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            I am a passionate full-stack developer skilled in MERN stack and core
            Java. I build scalable, user-friendly web applications with robust
            backends and modern, interactive UIs. Always eager to learn and take
            on new challenges, I thrive on problem-solving and innovation.
          </p>

          {/* Skills Section Below About Content */}
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Skills</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md transition-all hover:bg-gray-200 hover:scale-105"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="h-12 w-12 mb-2"
                  />
                  <span className="text-gray-700 font-semibold text-center">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-auto flex justify-center">
          <img
            src={image}
            alt="Profile"
            className="max-w-xs sm:max-w-sm md:max-w-md lg:w-80 rounded-3xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;