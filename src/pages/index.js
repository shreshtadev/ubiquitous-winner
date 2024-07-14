import React, { useEffect } from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { scrollTrigger } from "../utils/scrollTrigger";
import Footer from "../components/footer";
const IndexPage = () => {
  useEffect(() => {
    scrollTrigger(".reveal");
  }, []);
  return (
    <Layout>
      <section className="bg-gradient-to-r from-blue-500 to-teal-500">
        <section class="reveal">
          <Hero />
        </section>
        <section class="reveal">
          <Services />
        </section>
        <Footer />
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
