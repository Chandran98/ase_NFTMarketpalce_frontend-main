import React from "react";
import Navbar from "../components/Nav_bar/navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/hero";
import Service from "../components/service";
import Nftslider from "../components/nftslider";
import Subscription from "../components/subscription";
import Filterart from "../components/filterart";
import Category from "../components/category";
// import Title from "../utils/titlecard";
import Nftcard from "../components/nft_card";
import Nftslider2 from "../components/dummy/nftslider2";
import Collection from "../components/Collections/collections";
import Follower from "../components/follower/follower";
import Alive from "../components/audiolive/audiolive";
import Dragsilder from "../components/slider/slider";
import Brand from "../components/brand";
import Video from "../components/video_slide";

export default function home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Service/>
      <Collection/>
      <Nftslider/>
      <Alive/>
      <Dragsilder/>
      <Follower/>
      <Filterart/>
      <Nftcard/>
      <Category/>
      <Brand/>
      <Video/>
      <Subscription/>
      <Footer />
    </>
  );
}
