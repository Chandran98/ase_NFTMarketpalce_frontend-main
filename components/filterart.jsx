import React, { useState } from "react";
import Images from "next/image";
import images from "../img";
import {
  FaFilter,
  FaAngleDown,
  FaAngleUp,
  FaWallet,
  FaMusic,
  FaVideo,
  FaImages,
  FaUserAlt,
} from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import Titles from "../utils/titlecard";
export default function Filterart() {
  const [filter, setFilter] = useState(true);
  const [image, setImage] = useState(true);
  const [video, setVideo] = useState(true);
  const [music, setMusic] = useState(true);

  function openFilter() {
    filter ? setFilter(false) : setFilter(true);
  }
  function openImage() {
    image ? setImage(false) : setImage(true);
  }
  function openVideo() {
    image ? setVideo(false) : setVideo(true);
  }
  function openMusic() {
    image ? setMusic(false) : setMusic(true);
  }
  return (
    <div className={" p-16 w-full"}>
     <div className=" pl-20">  <Titles
        heading={"Featured NFTs "}
        paragraph=" Discover the most outstanding NFTs in all topics of life."
      /></div>
      <div className={"w-[80%] m-auto flex items-center justify-between  py-10 "}>
        <div className={"flex gap-8"}>
          <button
            className=" font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500  hover:text-neutral-800 hover:bg-cyan-100/75  focus:outline-none"
            onClick={() => {}}
          >
            NFTs
          </button>
          <button
            className="font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500  hover:text-neutral-800 hover:bg-cyan-100/75  focus:outline-none"
            onClick={() => {}}
          >
            Arts
          </button>
          <button
            className="font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500  hover:text-neutral-800 hover:bg-cyan-100/75  focus:outline-none"
            onClick={() => {}}
          >
            Musics
          </button>
          <button
            className="font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500  hover:text-neutral-800 hover:bg-cyan-100/75  focus:outline-none"
            onClick={() => {}}
          >
            Sports
          </button>
          <button
            className="font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-neutral-500  hover:text-neutral-800 hover:bg-cyan-100/75  focus:outline-none"
            onClick={() => {}}
          >
            Photography
          </button>
        </div>

        <div className={"bg-cyan-200  rounded-full"}>
          <div
            className={
              "p-4 cursor-pointer flex items-center gap-4 border-r-2 rounded-3xl "
            }
            onClick={() => openFilter()}
          >
            <FaFilter />
            <span>Filter</span> {filter ? <FaAngleDown /> : <FaAngleUp />}
          </div>
        </div>
      </div>

      {filter && (
        <div className={"w-[80%]  m-auto p-8 flex lg:space-x-4 border-t-2"}>
          <div
            className={
              "flex items-center justify-between px-4  text-sm rounded-full border focus:outline-none cursor-pointer  border-primary-500 bg-primary-50 text-primary-900"
            }
          >
            <div className={" gap-3 py-1 items-center flex"}>
              <FaWallet /> <span>10 ETH</span>
              <AiFillCloseCircle />
            </div>
          </div>

          <div
            className={
              "flex items-center justify-between px-4 py-2 text-sm rounded-full border focus:outline-none cursor-pointer  border-primary-500 bg-primary-50 text-primary-900"
            }
          >
            <div
              className={"  gap-3 py-1 items-center flex"}
              onClick={() => openImage()}
            >
              <FaImages /> <small>Images</small>
              {image ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>

          <div
            className={
              "flex items-center justify-between px-4 py-2 text-sm rounded-full border focus:outline-none cursor-pointer  border-primary-500 bg-primary-50 text-primary-900"
            }
          >
            <div
              className={" gap-3 py-1 items-center flex"}
              onClick={() => openVideo()}
            >
              <FaVideo /> <small>Videos</small>
              {video ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>

          <div
            className={
              "flex items-center justify-between px-4 py-2 text-sm rounded-full border focus:outline-none cursor-pointer  border-primary-500 bg-primary-50 text-primary-900"
            }
          >
            <div
              className={" gap-3 py-1 items-center flex"}
              onClick={() => openMusic()}
            >
              <FaMusic /> <small>Musics</small>
              {music ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>

          <div
            className={
              " flex items-center justify-between px-4 py-2 text-sm rounded-full border focus:outline-none cursor-pointer  border-primary-500 bg-primary-50 text-primary-900"
            }
          >
            <div className={" gap-3 py-1 items-center flex "}>
              <FaUserAlt /> <span className="">Verified</span>
              <MdVerified />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
