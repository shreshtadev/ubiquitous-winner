import React from "react";
import Header from "./header";
export default function Layout({ children }) {
  return (
    <section>
      <Header />
      <main>{children}</main>
    </section>
  );
}
