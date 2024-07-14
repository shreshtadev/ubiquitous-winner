import React from "react";

const Services = () => (
  <div className="py-12 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Residential Construction</h3>
          <p>High-quality residential construction services.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Commercial Construction</h3>
          <p>Reliable commercial construction solutions.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Renovations</h3>
          <p>Expert renovation services for all types of projects.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Manufacturers</h3>
          <ul className="list-disc list-inside text-gray-500 mb-4">
            <li>All types of grills</li>
            <li>Steel Windows</li>
            <li>Section Windows</li>
            <li>Rolling Shutters</li>
            <li>Collapsable Gates</li>
            <li>Dining Table</li>
            <li>Gates</li>
            <li>Truss Works</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Contact Us For</h3>
          <ul className="list-disc list-inside text-gray-500 mb-4">
            <li>House & Flat</li>
            <li>Purchases</li>
            <li>Sales</li>
            <li>Lands etc</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
