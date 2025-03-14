import React from "react";
import bgImage from "../assets/img4.jpg"; // Background image
import cvFile from "../assets/Roobanvignesh_CV.pdf"; // Import the CV file

const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-[#231f20] flex items-center justify-center px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left w-full lg:order-1 order-2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-200">
            I'm <span className="text-teal-500">Roobanvignesh</span>
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium">
            I'm a Full Stack Developer
          </p>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl">
            I am a passionate full-stack developer skilled in the MERN stack,
            dedicated to building user-friendly web applications. I also use Java
            for problem-solving and specialize in creating scalable, high-performance
            applications with modern technologies.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-gray-400 text-base md:text-lg">
            <div>📍 Theni</div>
            <div>📞 8428575415</div>
            <div>✉️ roobanvignesh@gmail.com</div>
          </div>

          {/* Download Button */}
          <a
            href={cvFile} // Link to the CV file
            download="Roobanvignesh_CV.pdf" // Name of the downloaded file
            className="inline-block bg-teal-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-600 active:scale-95 focus:ring-4 focus:ring-teal-300 transition-all duration-300 font-semibold"
            aria-label="Download CV"
          >
            Download CV
          </a>
        </div>

        {/* Right Content - Image */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <img
            src={bgImage}
            alt="Roobanvignesh - Full Stack Developer"
            className="w-52 md:w-72 lg:w-80 rounded-full shadow-lg border-4 border-teal-500 hover:border-teal-600 transition-all duration-300"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;