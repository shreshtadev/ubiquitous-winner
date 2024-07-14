import React from "react";
import Header from "./header";
import "@fontsource/inter";
export default function Layout({ children }) {
  return (
    <section>
      <Header />
      <main className="font-inter">{children}</main>
    </section>
  );
}
