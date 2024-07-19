import * as React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

const AboutPage = () => {
  const bgdata = useStaticQuery(graphql`
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

  const imageData = getImage(bgdata.file.childImageSharp.gatsbyImageData);
  const backgroundImageStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${imageData.images.fallback.src})`,
    backgroundSize: "fill",
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
        <section className="relative z-10  py-12 text-xl font-medium flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg md:w-1/2 max-x-md">
            <div className="text-center mb-4">
              <h2 className="text-4xl font-bold text-black">About Us</h2>
              <p className="text-black mt-4">
                Building the Future, Restoring the Past
              </p>
            </div>
            <div className="flex -mx-4">
              <div className="w-full px-4">
                <h3 className="text-2xl font-semibold text-black mb-4">
                  Our Mission
                </h3>
                <p className="text-black mb-4">
                  At{" "}
                  <span className="font-bold text-pretty text-2xl">
                    S K Engineering
                  </span>
                  , we are dedicated to delivering top-notch construction
                  engineering services that exceed our clients' expectations.
                  Our mission is to build sustainable and innovative structures
                  that stand the test of time.
                </p>
                <h3 className="text-2xl font-semibold text-black mb-4">
                  Our Values
                </h3>
                <ul className="list-disc list-inside text-black mb-4">
                  <li>Integrity and Transparency</li>
                  <li>Quality and Excellence</li>
                  <li>Innovation and Sustainability</li>
                  <li>Client Satisfaction</li>
                </ul>
                <h3 className="text-2xl font-semibold text-black mb-4">
                  Our Team
                </h3>
                <p className="text-black">
                  Our team of experienced engineers, architects, and project
                  managers work collaboratively to ensure every project is
                  completed on time and within budget. We are committed to
                  continuous improvement and staying ahead of industry trends.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>About Page</title>;
