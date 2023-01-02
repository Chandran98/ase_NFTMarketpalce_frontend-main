import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";
//INTERNAL IMPORT
import images from "../img";
import Button from "../components/Button/bt";

const BigNFTSilder = () => {
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
      nftImage: images. nft_image_1,
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
    <div className={"w-[80%] bg-red-200"}>
    <div className={"m-auto bg-cyan-500 w-[80%] p-32 grid grid-cols-12 items-center"}>
      <div className={" p-8  z-[1111] h-96 border-r-4  "}>
        <h2>{sliderData[idNumber].title}</h2>
        <div className={"grid items-center grid-cols-2"}>
          <div className={"flex items-center gap-4"}>
            <Image
              className={"  border-r-[50%]"}
              src={sliderData[idNumber].image}
              alt="profile image"
              width={50}
              height={50}
            />
            <div className={"  leading-4"}>
              <p>Creator</p>
              <h4>
                {sliderData[idNumber].name}{" "}
                <span>
                  <MdVerified />
                </span>
              </h4>
            </div>
          </div>

          <div className={" flex items-center gap-4"}>
            <AiFillFire
              className={" font-medium"}
            />

            <div
              className={"leading-3"}
            >
              <p>Collection</p>
              <h4>{sliderData[idNumber].collection}</h4>
            </div>
          </div>
        </div>

        <div className={''}>
          <div className={" border-[30%]"}>
            <small>Current Bid</small>
            <p>
              {sliderData[idNumber].price} <span>$221,21</span>
            </p>
          </div>

          <p className={"flex, items-center , gap-4"}>
            <MdTimer
              className={" font-light"}
            />
            <span>Auction ending in</span>
          </p>

          <div className={"flex, items-center, gap-12, text-center p-3,  border-b "}>
            <div
              className={"font-bold leading-3 text-xl"}
            >
              <p>{sliderData[idNumber].time.days}</p>
              <span>Days</span>
            </div>

            <div
              className={"text-4xl font-bold"}
            >
              <p>{sliderData[idNumber].time.hours}</p>
              <span>Hours</span>
            </div>

            <div
              className={"flex items-center gap-12 text-center p-3  border-b-2"}
            >
              <p>{sliderData[idNumber].time.minutes}</p>
              <span>mins</span>
            </div>

            <div
              className={"font-bold, text-3xl"}
            >
              <p>{sliderData[idNumber].time.seconds}</p>
              <span>secs</span>
            </div>
          </div>

          <div className={"flex, items-center, justify-center, gap-12"}>
            <Button btnName="Place" handleClick={() => {}} />
            <Button btnName="View" handleClick={() => {}} />
          </div>
        </div>

        <div className={"flex items-center gap-7, mt-10, font-[20%]"}>
          <TbArrowBigLeftLines
            className={"cursor-pointer transition-all"}
            onClick={() => dec()}
          />
          <TbArrowBigRightLine
            className={"cursor-pointer transition-all"}
            onClick={() => inc()}
          />
        </div>
      </div>

      <div className={"relative"}>
        <div className={"relative"}>
          <Image
            src={sliderData[idNumber].nftImage}
            alt="NFT IMAGE"
            className={" rounded-3xl "}
          />

          <div className={"absolute , top-12, right-12, flex, items-center, gap-4, rounded-3xl, p-10 "}>
            <AiFillHeart />
            <span>{sliderData[idNumber].like}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default BigNFTSilder;
