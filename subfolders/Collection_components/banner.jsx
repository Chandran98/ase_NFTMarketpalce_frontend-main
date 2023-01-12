/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import img from "../../img"


const Banner = ({ bannerImage }) => {
  return (
    <div className={""}>
    {/* <img src='../../img/collection.png' alt=" background" /> */}
    <Image
      src={img.banner}
      alt="background"
      // alt="nft image"
      width={800}
      height={800}
      className={" w-screen h-[80%] object-contain sm:w-48 md:w-56 xl:w-60"}
    />
  </div>
  );
};

export default Banner;
