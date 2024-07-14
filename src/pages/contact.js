import * as React from "react";
import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <Layout>
      <section className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <div className="mb-6">
            <h3 className="text-3xl font-bold mb-2">S K Engineering Works</h3>
            <h3 className="text-2xl font-light mb-2">Nethra Mahesh</h3>
            <p className="text-gray-700">Bommankatte last bus stop</p>
            <p className="text-gray-700">Shivamogga, 577204</p>
            <p className="text-gray-700">Phone: 9945153462</p>
          </div>
          <div className="mt-8 text-center text-gray-400">
            &copy; {new Date().getFullYear()} shreshtasmg.in - All rights
            reserved.
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <title>Contact Page</title>;
