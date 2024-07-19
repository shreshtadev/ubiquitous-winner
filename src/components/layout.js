import React, { useEffect } from "react";
import Header from "./header";
import "@fontsource/inter";
import Footer from "./footer";
import { scrollTrigger } from "../utils/scrollTrigger";
export default function Layout({ children }) {
  useEffect(() => {
    scrollTrigger(".reveal");
  }, []);
  return (
    <section>
      <Header />
      <main className="font-inter">
        <section className="reveal">{children}</section>
      </main>
      <Footer />
    </section>
  );
}
