import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import SliderCard from "./slider_card";
import images from "../../img";

const Slider = () => {
  const FollowingArray = [
    // {
    //   background: images.creatorbackground3,
    //   user: images.user3,
    // },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
  ];
  const [width, setWidth] = useState(0);
  const dragSlider = useRef();

  useEffect(() => {
    setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
  }, []);

  const handleScroll = (direction) => {
    const { current } = dragSlider;
    const scrollAmount = window.innerWidth > 1600 ? 270 : 210;

    if (direction == "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className={"   m-10 ml-25 w-[90%]   "}>
      <h2 className="flex items-center   text-3xl md:text-4xl font-semibold">
        Explore NFTs Video
      </h2>
      <div
        className={
          " md:mt-3 flex justify-between mb-5 font-normal  text-base sm:text-xl text-neutral-500 dark:text-neutral-400"
        }
      >
        <p>Click on play icon & enjoy Nfts Video</p>
        <div className={" mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0"}>
          <div
            className={
              "w-10 h-10 mr-2 border-neutral-200 dark:border-neutral-6000 rounded-full flex items-center justify-center "
            }
            onClick={() => handleScroll("left")}
          >
            <TiArrowLeftThick />
          </div>
          <div
            className={
              "w-10 h-10 mr-2 border-neutral-200 dark:border-neutral-6000 rounded-full flex items-center justify-center "
            }
            onClick={() => handleScroll("right")}
          >
            <TiArrowRightThick />
          </div>
        </div>
      </div>
      <div
        className={
          "  sm:flex-row sm:items-end  mb-12 lg:mb-16 text-neutral-900 dark:text-neutral-50"
        }
      >
        <motion.div className="w-full overflow-hidden">
          <motion.div
            ref={dragSlider}
            className={"grid grid-cols-4 gap-4 p-8  cursor-grab"}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {FollowingArray.map((el, i) => (
              <SliderCard key={i + 1} el={el} i={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
