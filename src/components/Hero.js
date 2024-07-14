import React from "react";
import { motion } from "framer-motion";
import { useStaticQuery, graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "absengg.png" }) {
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
    <div className="relative h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute bg-cover bg-center h-screen inset-0 filter blur-0"
        style={backgroundImageStyle}
      ></motion.div>
      {/* <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">S K Engineering</h1>
          <p className="text-xl mb-8">
            Your trusted partner in construction excellence.
          </p>
          <Link
            to="/about"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Learn More
          </Link>
        </div>
      </div> */}
    </div>
  );
};
export default Hero;
