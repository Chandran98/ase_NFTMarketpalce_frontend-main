/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState, useContext } from "react";

import dropzone from "../subfolders/uploadnft/dropzone";
import Upload from "../subfolders/uploadnft/upload";
import Footer from "../components/Footer/Footer"

// //SMART CONTRACT IMPORT
// import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const uploadNFT = () => {
  // const { uploadToIPFS, createNFT } = useContext(NFTMarketplaceContext);
  return (
    <div className="">
    <div className={" w-full m-20 "}>
      <div className={"  w-[60%] m-auto"}>
        <div className={" max-w-2xl border-b-2 mb-8"}>
          <h1 className=" text-3xl sm:text-4xl font-semibold">Create New NFT</h1>
          <p className="block mt-3 text-neutral-500 dark:text-neutral-400">
            You can set preferred display name, create your profile URL and
            manage other personal settings.
          </p>
        </div>

        <div className={"mt-10 md:mt-0 space-y-5 sm:space-y-6 md:sm:space-y-8"}>
          <h2 className="text-lg sm:text-2xl font-semibold">Image, Video, Audio, or 3D Model</h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm"> 
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF. Max size: 100 MB
          </p>
        </div>

        <div className={"mt-5 "}>
          {/* <Upload uploadToIPFS={uploadToIPFS} createNFT={createNFT} /> */}
          <Upload />
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default uploadNFT;
