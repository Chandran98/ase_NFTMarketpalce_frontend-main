import React from "react";
import images from "../img";
// import { Slider, Brand } from "../components/componentsindex";
// import Filter from "../components/Filter/Filter";
import Banner from "../components/subfolders/Collection_components/banner";
import CollectionProfile from "../components/subfolders/Collection_components/collections_profile";
import Filterart from "../components/filterart";
import NFTCard from "../components/nft_card";
import Brand from "../components/brand";
import AudioLive from "../components/audiolive/audiolive";
import Slider from "../components/slider/slider";
import Footer from "../components/Footer/Footer";

const collection = () => {
  const collectionArray = [
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
    {
      image: images.nft_image_3,
    },
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
    {
      image: images.nft_image_3,
    },
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
  ];
  return (
    <div className={"  h-44"}>
      <Banner bannerImage={images.creatorbackground1} />
      <CollectionProfile />
      <Filterart />
      {/* <NFTCardTwo NFTData={collectionArray} /> */}

      <NFTCard/>
      <Slider />
      <Brand />
      
      <Footer />
    </div>
  );
};

export default collection;
