import React, { useEffect } from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
