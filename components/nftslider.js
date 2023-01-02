import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";
//INTERNAL IMPORT
import images from "../img";
import Button from "../components/Button/bt";

export default function Nftslider() {
  const [idNumber, setIdNumber] = useState(0);

  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Daulat Hussain",
      collection: "GYm",
      price: "00664 ETH",
      like: 243,
      image: images.user1,
      nftImage: images.nft_image_1,
      time: {
        days: 21,
        hours: 40,
        minutes: 81,
        seconds: 15,
      },
    },
    {
      title: "Buddy NFT",
      id: 2,
      name: "Shoaib Hussain",
      collection: "Home",
      price: "0000004 ETH",
      like: 243,
      image: images.user2,
      nftImage: images.nft_image_2,
      time: {
        days: 77,
        hours: 11,
        minutes: 21,
        seconds: 45,
      },
    },
    {
      title: "Gym NFT",
      id: 3,
      name: "Raayan Hussain",
      collection: "GYm",
      price: "0000064 ETH",
      like: 243,
      image: images.user3,
      nftImage: images.nft_image_3,
      time: {
        days: 37,
        hours: 20,
        minutes: 11,
        seconds: 55,
      },
    },
    {
      title: "Home NFT",
      id: 4,
      name: "Raayan Hussain",
      collection: "GYm",
      price: "4664 ETH",
      like: 243,
      image: images.user4,
      nftImage: images.nft_image_1,
      time: {
        days: 87,
        hours: 29,
        minutes: 10,
        seconds: 15,
      },
    },
  ];

  //-------INC
  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  //-------DEC
  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  return (
    <div className="bg-red-200 h-screen ">
      <div className=" bg-cyan-300  w-[70%] h-[60%] flex ">
        <div className="w-[50%] bg-white h-[75%] mt-28 z-40">
        <h2 className=" font-bold">{sliderData[idNumber].title}</h2>
        <div className={"grid items-center grid-cols-2"}>
          <div className={"flex items-center gap-4"}>
            <Image
              className={"  rounded-full"}
              src={sliderData[idNumber].image}
              alt="profile image"
              width={50}
              height={50}
            />
            <div className={"  leading-4"}>
              <p className="text-xs">Creator</p>
              <h4 className="flex ">
                {sliderData[idNumber].name}
                <span >
                  <MdVerified className="mx-2 text-blue-500"/>
                </span>
              </h4>
            </div>
          </div>

          <div className={" flex items-center gap-4"}>
            <AiFillFire
              className={" text-red-700 w-[20%]"}
            />

            <div
              className={"leading-3"}
            >
              <p className="text-xs">Collection</p>
              <h4 className="flex font-bold text-sm">{sliderData[idNumber].collection}</h4>
            </div>
          </div>

          <div className={'p-3'}>
          <div className={" "}>
            <small>Current Bid</small>
            <p className=" text-xl text-green-500">
              {sliderData[idNumber].price} <span className="text-sm mx-4 text-gray-500">$221,21</span>
            </p>
          </div>

          <div className="flex"><p className={" items-center "}>
            <MdTimer
            />
           
          </p>
          <span>Auction ending in</span></div>

         <div className="border-b">
         <div className={"flex flex-row, py-2 items-center, gap-5 my-2 mb-2 text-center p-3,  "}>
            <div
              className={" leading-3 text-sm"}
            >
              <p className="font-bold">{sliderData[idNumber].time.days}</p>
              <span>Days</span>
            </div>

            <div
              className={"leading-3 text-sm"}
            >
              <p className="font-bold">{sliderData[idNumber].time.hours}</p>
              <span>Hours</span>
            </div>

            <div
              className={"leading-3 text-sm"}
            >
              <p className="font-bold">{sliderData[idNumber].time.minutes}</p>
              <span>mins</span>
            </div>

            <div
              className={"leading-3 text-sm"}
            >
              <p className="font-bold">{sliderData[idNumber].time.seconds}</p>
              <span>secs</span>
            </div>
          </div></div>

          <div className={"flex flex-row,  items-center, justify-center, gap-12"}>
            <button onClick={()=>{}} className=" py-2 text-sm bg-blue-400 rounded-full w-32  h-8 text-white"> Place bid</button>
            <button onClick={()=>{}} className=" py-2 text-sm bg-blue-400 rounded-full w-32  h-8 text-white"> View</button>
           
          </div>
        </div>

        </div>
        </div>
        <div className="w-[50%] bg-gray-300 h-[75%] mt-28"></div>
      </div>
    </div>
  );
}