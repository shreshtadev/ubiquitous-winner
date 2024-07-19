import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "gatsby";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 sticky top-0 p-4 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold flex-shrink-0">
          S K Engineering
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:w-auto">
          <ul className="lg:flex lg:justify-between text-white">
            <li className="lg:mx-4 my-2 lg:my-0">
              <Link
                to="/"
                className="block hover:text-gray-100 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li className="lg:mx-4 my-2 lg:my-0">
              <Link
                to="/about"
                className="block hover:text-gray-100 transition duration-300"
              >
                About
              </Link>
            </li>
            <li className="lg:mx-4 my-2 lg:my-0">
              <Link
                to="/services"
                className="block hover:text-gray-100 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li className="lg:mx-4 my-2 lg:my-0">
              <Link
                to="/contact"
                className="block hover:text-gray-100 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="text-white">
              <li className="my-2">
                <a
                  href="/"
                  className="block hover:text-blue-400 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li className="my-2">
                <a
                  href="/about"
                  className="block hover:text-blue-400 transition duration-300"
                >
                  About
                </a>
              </li>
              <li className="my-2">
                <a
                  href="/services"
                  className="block hover:text-blue-400 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li className="my-2">
                <a
                  href="/contact"
                  className="block hover:text-blue-400 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
