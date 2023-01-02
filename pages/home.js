import React from "react";
import Navbar from "../components/Nav_bar/navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/hero";
import Service from "../components/service";
import Nftslider from "../components/nftslider";

export default function home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Service/>
      <Nftslider/>
      <Footer />
    </>
  );
}
