import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import images from "../../img";
import LikeProfile from "../../components/likeprofile";

const SliderCard = ({ el, i }) => {
  return (
    <motion.div className={" flex "}>
      <div
        className={" transition-all duration-300 ease-in-out rounded-3xl pb-4"}
      >
        <motion.div className={"nc-NcImage flex aspect-w-16 aspect-h-9 w-full h-15 object-cover rounded-3xl overflow-hidden z-0"}>
          <Image
            src={el.background}
            className={"rounded-3xl"}
            alt="slider profile"
            width={500}
            height={300}
            objectFit="cover"
          />
        </motion.div>
     <div className="m-3">
     <div className={"  flex justify-between mb-4  items-center"}>
          <p className="sm:text-lg font-semibold">NFT Video #{i + 1}</p>
          <div className={" ml-2 flex items-center space-x-3"}>
            <LikeProfile />
            <small className="text-neutral-700 dark:text-neutral-400 text-xs">
              {i + 4} 0f 100
            </small>
          </div>
        </div>

        <div className={"flex justify-between    "}>
          <div
            className={"   border-2 border-green-500 w-[50%] rounded-lg relative py-1.5 md:py-2 px-2.5 md:px-3.5 text-sm sm:text-base font-semibold "}
          >
            <small className="block absolute font-normal bottom-full translate-y-1 p-1 -mx-1 text-xs text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-900 ">
              Current Bid
            </small>
            <p className=" text-green-500 !leading-none">{i + 2}.000 ETH</p>
          </div>

          <div className={" text-right"}>
            <small className="block text-xs text-neutral-500 dark:text-neutral-400 font-normal tracking-wide">
              Reaming time
            </small>
            <p className="block font-semibold mt-0.5">
              {i + 1}h : 15m : {i + 4}0s
            </p>
          </div>
        </div>
     </div>
      </div>
    </motion.div>
  );
};

export default SliderCard;
