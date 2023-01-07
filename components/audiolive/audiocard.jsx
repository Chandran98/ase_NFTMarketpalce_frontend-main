import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

//INTERNAL IMPORT
import images from "../../img";
import LikeProfile from "../../components/likeprofile";

const AudioCard = () => {
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);

  const likeNft = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  const playMusic = () => {
    if (!play) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  };
  return (
    //
    <div
      className="nc-CardNFTMusic relative shadow-white   drop-shadow-xl	 group sm:col-span-3  xl:col-span-2  "
      data-nc-id="CardNFTMusic"
    >
      <div className="">
        <div
          className="nc-NcImage   w-96 shadow-white   drop-shadow-xl	    h-96 rounded-3xl overflow-hidden z-0"
        >
           <Image
            src={images.creatorbackground10}
            alt="background"
            width={500}
            height={500}
            className="w-full h-full   group-hover:scale-105 transition-all duration-200 ease-out"
          />
      
        </div>
      </div>
      <div className=" top-2.5 left-2.5 z-10 absolute flex items-center space-x-2">
        <button className="bg-black/50 px-3.5 h-10 flex items-center justify-center rounded-full text-white " onClick={()=>likeNft()}>
        {like ? (
              <AiFillHeart className={" text-white w-5 h-10 text-sm"} />
            ) : (
              <AiOutlineHeart
                className={"text-white text-sm w-5 h-10"}
              />
            )}
          <span className="ml-2 text-sm">22</span>
        </button>
      </div>
      <div className="absolute top-[-1px] right-[-1px] flex items-center">
        <svg
          className="text-white dark:text-neutral-900 w-44 md:w-[195px]"
          viewBox="0 0 196 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M196 55V0H0.5V1H4.05286C12.4067 1 20.1595 5.34387 24.5214 12.4685L43.5393 43.5315C47.9012 50.6561 55.654 55 64.0078 55H196Z"
            fill="currentColor"
          ></path>
        </svg>
        <div className="absolute right-5 top-1/2 -translate-y-1/2">
          <span className="block text-xs text-neutral-500 dark:text-neutral-400 tracking-wide">
            Remaining time
          </span>
          <span className="block md:text-lg font-semibold">3h : 15m : 20s</span>
        </div>
      </div>
      <div className="w-11/12 max-w-[360px] transform  -mt-40 relative z-10">
        <div className="px-5 py-2 flex items-center space-x-4 relative ">
          <div className="flex-grow flex justify-center">
          <Image src={images.musiceWave} alt="music" width={200} />
     
          </div>
          <div
            className="nc-ButtonPlayMusicRunningContainer select-none relative z-10"
            data-nc-id="ButtonPlayMusicRunningContainer"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-neutral-50 text-primary-500 cursor-pointer" onClick={()=>playMusic()}>
            {play ? (
              <div className={" p-7 flex items-center rounded-3xl text-lg cursor-pointer"}>
                <TbPlayerPause />
              </div>
            ) : (
              <div className={"p-7 flex items-center rounded-3xl text-lg cursor-pointer"}>
                <TbPlayerPlay />
              </div>
            )}
            </div>
          </div>
        </div>
        <a
          className="block p-5 bg-white rounded-3xl rounded-tl-none"
          href="/ciscryp/nft-detailt"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">NFT music #1132</h2>
            <div className="flex -space-x-1.5 ">
            <LikeProfile />
            </div>
          </div>
          <div className="w-[56%] mt-1.5 flex justify-between items-end ">
            <div className="pt-3">
              <div className="flex items-baseline border-2 border-green-500 rounded-lg relative py-1.5 md:py-2 px-2.5 md:px-3.5 text-sm sm:text-base font-semibold ">
                <span className="block absolute font-normal bottom-full translate-y-1 p-1 -mx-1 text-xs text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-800 ">
                  Price
                </span>
                <span className=" text-green-500 !leading-none">1.000 ETH</span>
              </div>
            </div>
            <span className="block text-neutral-500 dark:text-neutral-400 text-xs">
              59 in stock
            </span>
          </div>
        </a>
      </div>
      {/* <a className="absolute inset-0 " href="/ciscryp/nft-detailt"></a> */}
    </div>
  );
};

export default AudioCard;
