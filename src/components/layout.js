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
      <main className="font-inter reveal">{children}</main>
      <section className="reveal">
        <Footer />
      </section>
    </section>
  );
}
