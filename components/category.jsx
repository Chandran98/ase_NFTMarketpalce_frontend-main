import React from "react";
import Images from "next/image";
import images from "../img";
import Titles from "../utils/titlecard"
import { BsCircleFill } from "react-icons/bs";

export default function nftslider2() {
  const CategoryArray = [
    {
      images: images.creatorbackground1,
      name: "Dance Monkey",
    },
    {
      images: images.creatorbackground2,
      name: "Sports",
    },
    {
      images: images.creatorbackground3,
      name: "Entirtment Art",
    },
    {
      images: images.creatorbackground4,
      name: "Time Life",
    },
    {
      images: images.creatorbackground6,
      name: "Animals Art",
    },
    // {
    //   images: images.creatorbackground6,
    //   name: "Music",
    // },
    // {
    //   images: images.creatorbackground7,
    //   name: "Digital Arts",
    // },
    // {
    //   images: images.creatorbackground8,
    //   name: "Hubby",
    // },
    // {
    //   images: images.creatorbackground8,
    //   name: "Bad Arts",
    // },
    // {
    //   images: images.creatorbackground9,
    //   name: " Arts",
    // },
    // {
    //   images: images.creatorbackground10,
    //   name: "My Fav",
    // },
  ];
  return (
  <>
    <div className={"m-auto w-[80%]"}>
        
  <Titles heading={"Browse by category"} paragraph={"Explore the NFTs in the most featured categories."}/>
      <div className={"p-16 flex gap-8"}>
        {CategoryArray.map((el, i) => (
          <div className={" leading-none  transition-all ease-in overflow-hidden cursor-pointer pb-4"} key={i + 1}>
            <Images
              src={el.images}
              className={" rounded-xl"}
              alt="Background image"
              width={800}
              height={150}
              // objectFit="cover"
            />

            <div className={'mt-4 flex items-center '}>
              <span>
                <BsCircleFill />
              </span>
              <div className={"ml-3"}>
                <h4>{images.name}</h4>
                <small>{i + 1}995 NFTS</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div></>
  );
}
