import React from "react";
import Image from "next/image";

import images from "../img";

export default function Video() {
  return (
    <div className={"m-24"}>
      <div
        className={
          "nc-Section-Heading relative  flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50"
        }
      >
        <h1 className="text-3xl md:text-4xl font-semibold">
          <span>🎬</span> The Videos
        </h1>
        <p className="mt-2 md:mt-4 font-normal block text-base sm:text-lg text-neutral-500 dark:text-neutral-400">
          Check out our hottest videos. View more and share more new <br />
          perspectives on just about any topic. Everyone’s welcome.
        </p>

        <div
          className={
            "flex relative container justify-center  sm:pr-4 sm:py-4 md:pr-6 md:py-6 xl:pr-14 xl:py-14 lg:flex-row"
          }
        >
          <div className="  bg-black"></div>
          <div
            className={
              "h-[640px] z-0 w-[57%]  ml-96   bg-cyan-100   rounded-3xl   sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0  dark:bg-neutral-800/80"
            }
          ></div>
          <div className="group z-10 mt-24  ml-32 cursor-pointer w-[75%]  h-[550px] inset-0  items-center  absolute sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px]">
            <Image
              src={images.NFTVideo}
              alt="Video image"
              width={1920}
              height={1080}
              // objectFit="cover"
              className={
                "  object-cover w-full h-full transition-transform group-hover:scale-105 duration-300  "
              }
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
