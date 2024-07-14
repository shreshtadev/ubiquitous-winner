import * as React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "j.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  const image = getImage(data.file.childImageSharp.gatsbyImageData);
  return (
    <Layout>
      <section className="bg-gradient-to-r from-blue-500 to-teal-500 py-12 text-xl font-medium">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">About Us</h2>
            <p className="text-gray-200 mt-4">
              Building the Future, Restoring the Past
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <GatsbyImage
                image={image}
                alt="Construction Image"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-200 mb-4">
                At{" "}
                <span className="font-bold text-pretty text-2xl">
                  S K Engineering
                </span>
                , we are dedicated to delivering top-notch construction
                engineering services that exceed our clients' expectations. Our
                mission is to build sustainable and innovative structures that
                stand the test of time.
              </p>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Our Values
              </h3>
              <ul className="list-disc list-inside text-gray-200 mb-4">
                <li>Integrity and Transparency</li>
                <li>Quality and Excellence</li>
                <li>Innovation and Sustainability</li>
                <li>Client Satisfaction</li>
              </ul>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Our Team
              </h3>
              <p className="text-gray-200">
                Our team of experienced engineers, architects, and project
                managers work collaboratively to ensure every project is
                completed on time and within budget. We are committed to
                continuous improvement and staying ahead of industry trends.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>About Page</title>;
