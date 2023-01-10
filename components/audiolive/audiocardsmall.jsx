import React, { useState } from "react";
import Image from "next/image";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

//INTERNAL IMPORT
import images from "../../img";
import LikeProfile from "../../components/likeprofile";

const AudioCardSmall = () => {
  const [play, setPlay] = useState(false);

  const playMusic = () => {
    if (!play) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  };
  return (
    <div className={" mt-5 "}>
      <div
        className={
          " nc-CardNFTMusic2 relative flex justify-between px-1 py-3 space-x-2 rounded-3xl bg-neutral-100 dark:bg-neutral-800 hover:shadow-xl transition-shadow "
        }
      >
        <Image
          src={images.creatorbackground1}
          alt="music"
          width={100}
          height={100}
          className={
            " relative w-16 h-20  ml-2 sm:w-24 nc-NcImage  inset-0 rounded-2xl overflow-hidden shadow-lg "
          }
        />

        <div className={"flex flex-col justify-center flex-grow"}>
          <h4 className="block font-medium sm:text-lg">NFT music #1142</h4>
          <div className={" flex gap-3 items-center pt-3 mt-1.5"}>
            <LikeProfile />
            <div
              className={
                " border-2 text-sm w-[40%] rounded-md font-medium px-2 "
              }
            >
              <span className="block relative font-normal bottom-full  text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 ">
                Price
              </span>
              <p className=" text-green-500 !leading-none">1.00 ETH</p>
            </div>
          </div>
        </div>

        <div
          className={
            "w-10 h-10 sm:w-11 mt-5 sm:h-11 flex items-center justify-center rounded-full bg-white dark:bg-neutral-900/50 text-primary-6000 dark:text-primary-200 shadow-lg cursor-pointer"
          }
          onClick={() => playMusic()}
        >
          {play ? <TbPlayerPause /> : <TbPlayerPlay />}
        </div>
      </div>
    </div>
  );
};

export default AudioCardSmall;
