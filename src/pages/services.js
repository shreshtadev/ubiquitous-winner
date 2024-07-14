import * as React from "react";
import Layout from "../components/layout";
import ImageGallery from "../components/ImageGallery";

const ServicesPage = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-blue-500 to-teal-500 py-12">
        <ImageGallery />
      </section>
    </Layout>
  );
};

export default ServicesPage;

export const Head = () => <title>Services Page</title>;
