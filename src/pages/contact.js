import * as React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "abs2.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1920
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  const imageData = getImage(data.file.childImageSharp.gatsbyImageData);
  const backgroundImageStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${imageData.images.fallback.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "2rem",
  };
  return (
    <Layout>
      <div className="relative h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute bg-cover bg-center h-screen inset-0 filter blur-sm"
          style={backgroundImageStyle}
        ></motion.div>
        <section className="relative z-10 min-h-screen flex items-center justify-center">
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
              &copy; {new Date().getFullYear()} shengineeringworks - All rights
              reserved.
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <title>Contact Page</title>;
