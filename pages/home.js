import React from "react";
import Navbar from "../components/Nav_bar/navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/hero";

export default function home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Footer />
    </>
  );
}
