import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "GuestHouseWebsite",
    description: "Built a responsive React.js website for Kingsukh Guest House with booking, gallery, contact form, and WhatsApp integration",
    techStack: ["React","CSS"],
    liveLink: "https://kingsukh-guesthouse.netlify.app/",
    githubLink: "https://github.com/Roobanvignesh/kingsukhguesthouse-innobytes-task.git",
  },
  {
    title: "Food Delivery App Clone",
    description: "A fully responsive React-based clone of a popular food delivery service.",
    techStack: ["React.js", "Node.js","Express.js","MangoDB"],
    liveLink: "https://food-del-web-ehha.onrender.com/",
    githubLink: "https://github.com/Roobanvignesh/food-del-web.git",
  },
  {
    title: "Weather App",
    description: "A real-time weather application providing current conditions and forecasts.",
    techStack: ["HTML", "CSS", "JavaScript", "React.js", "API"],
    liveLink: "https://weather-app-rvs.netlify.app/",
    githubLink: "https://github.com/Roobanvignesh/weather-app.git"
},{
  title: "Library Management System",
  description: "A web-based system for managing book records efficiently.",
  techStack: ["HTML","CSS","PHP", "MySQL", "JavaScript"],
  githubLink: "https://github.com/Roobanvignesh/online-library-management-system.git",
},
];

const ProjectsSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-12 tracking-wide text-teal-500">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl bg-gray-800 p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-700"
            >
              <h3 className="text-2xl font-semibold text-teal-400">{project.title}</h3>
              <p className="text-gray-300 mt-2 text-lg leading-relaxed">{project.description}</p>
              <div className="mt-4">
                <span className="font-semibold text-white">Tech Stack:</span>
                <ul className="flex gap-2 mt-2 text-sm text-gray-200 flex-wrap">
                  {project.techStack.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-teal-600 text-white px-3 py-1 rounded-full shadow-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex items-center gap-6">
                <a
                  href={project.liveLink}
                  className="text-teal-400 hover:text-teal-300 text-lg flex items-center gap-2 font-medium transition duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo <FaExternalLinkAlt />
                </a>
                <a
                  href={project.githubLink}
                  className="text-gray-400 hover:text-gray-200 text-lg flex items-center gap-2 font-medium transition duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
