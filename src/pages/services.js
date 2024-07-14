import * as React from "react";
import Layout from "../components/layout";
import ImageGallery from "../components/ImageGallery";

const ServicesPage = () => {
  return (
    <Layout>
      <div className="relative h-screen">
        <section className="py-12">
          <ImageGallery />
        </section>
      </div>
    </Layout>
  );
};

export default ServicesPage;

export const Head = () => <title>Services Page</title>;
