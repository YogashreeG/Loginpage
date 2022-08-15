import React from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

export function App() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}></div>
      <Content />
      <Footer />
    </div>
  );
}
