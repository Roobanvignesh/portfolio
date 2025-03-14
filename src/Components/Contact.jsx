import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center min-h-screen bg-white py-12">
      {/* Contact Form Container */}
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-8 border border-gray-100">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-teal-500">Get in Touch</h2>
          <p className="text-gray-600 mt-2">
            Let's connect! Fill out the form, and I'll get back to you soon.
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          {/* Full Name Field */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              rows="5"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-semibold py-3 rounded-md hover:bg-teal-600 transition-all focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;