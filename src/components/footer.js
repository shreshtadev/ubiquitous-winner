import React from "react";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">S K Engineering</h2>
          <p className="text-gray-400">
            Building the future, one project at a time.
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="/home" className="text-gray-400 hover:text-white">
            Home
          </a>
          <a href="/services" className="text-gray-400 hover:text-white">
            Services
          </a>
          <a href="/contact" className="text-gray-400 hover:text-white">
            Contact
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        &copy; {new Date().getFullYear()} shreshtasmg.in - All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
