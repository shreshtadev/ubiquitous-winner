import React from "react";
import { motion } from "framer-motion";

const Hero = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="bg-cover bg-center h-screen flex items-center justify-center"
    style={{ backgroundImage: "url('/images/absengg.png')" }}
  >
    <div className="text-center text-white">
      <h1 className="text-5xl font-bold mb-4">
        Building the Future, One Project at a Time
      </h1>
      <p className="text-xl mb-8">
        Your trusted partner in construction excellence.
      </p>
      <a
        role="button"
        href="/contact"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Get in Touch
      </a>
    </div>
  </motion.div>
);

export default Hero;
