import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

import images from "../../../img";

const collectionProfile = () => {
  const cardArray = [1, 2, 3, 4];
  return (
    <div className={" -mt-24 z-10 px-24 w-[80%] ml-32  lg:-mt-16"}>
      <div className={" relative bg-white flex dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-8 rounded-3xl md:rounded-[40px] shadow-xl  md:flex-row lg:items-center"}>
        <div className={"p-8 items-start sm:flex-row md:block sm:items-start sm:justify-between"}>
          <Image
            src={images.nft_image_1}
            alt="nft image"
            width={800}
            height={800}
            className={"w-40 sm:w-48 md:w-56 xl:w-60 rounded-xl"}
          />

          <div className={"mt-4 gap-2 flex items-center sm:justify-center space-x-3"}>
            <a className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:bg-neutral-800 cursor-pointer" href="#">
              <TiSocialFacebook />
            </a>
            <a className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:bg-neutral-800 cursor-pointer" href="#">
              <TiSocialInstagram />
            </a>
            <a className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:bg-neutral-800 cursor-pointer" href="#">
              <TiSocialLinkedin />
            </a>
            <a className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:bg-neutral-800 cursor-pointer" href="#">
              <TiSocialTwitter />
            </a>
            
          </div>
        </div>

        <div className={"mt-5 md:mt-0 md:ml-8 xl:ml-14 flex flex-col"}>
          <h1 className="font-bold text-xl">Awesome NFTs Collection</h1>
          <p>
            Karafuru is home to 5,555 generative arts where colors reign
            supreme. Leave the <br/> drab reality and enter the world of Karafuru by
            Museum of Toys.
          </p>

          <div className={"mt-6 xl:mt-8 flex  lg:grid-cols-4 gap-2 sm:gap-4 xl:gap-6"}>
            {cardArray.map((el, i) => (
              <div
                className={"rounded-2xl flex flex-col items-center justify-center shadow-md border border-neutral-50 dark:border-neutral-800 p-5 lg:p-6"}
                key={i + 1}
              >
                <small className="text-sm text-neutral-500 dark:text-neutral-400">Floor price</small>
                <p className="font-medium text-base mt-4 sm:text-xl sm:mt-6">${i + 1}95,4683</p>
                <span className="text-xs text-green-500 mt-1">+ {i + 2}.11%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default collectionProfile;
