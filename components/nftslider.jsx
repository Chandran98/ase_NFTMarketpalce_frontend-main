import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";
//INTERNAL IMPORT
import images from "../img";
// import Button from "../Button/bt";

export default function Nftslider() {
  const [idNumber, setIdNumber] = useState(0);

  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Daulat Hussain",
      collection: "Joey",
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
    <div className="bg-neutral-100/70 h-[50%]py-20 lg: py-24 ">
      <div className="container items-center justify-center">
        <div className="nc-SectionLargeSlider relative">
          <div className="nc-CardLarge1 nc-CardLarge1--hasAnimation relative flex flex-col-reverse lg:flex-row justify-center ">
            <div className="lg:relative z-10 lg:left-0  -mt-2 lg:mt-0 sm:px-5 lg:px-0 w-[30%] lg:max-w-lg ">
              <div className="nc-CardLarge1__left p-4 sm:p-8 xl:py-14 md:px-10 bg-white shadow-lg rounded-3xl space-y-3 sm:space-y-8 ">
                <h2 className="text-2xl lg:text-3xl 2xl:text-5xl font-semibold ">
                  {sliderData[idNumber].title}
                </h2>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-12">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-10 h-10 ring-1 ring-white">
                        <Image
                          className={"  rounded-full"}
                          src={sliderData[idNumber].image}
                          alt="profile image"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                    <div className="ml-3">
                      <div className="text-xs">Creator</div>
                      <div className="text-sm font-semibold flex items-center">
                        <span> {sliderData[idNumber].name}</span>
                        <span>
                          <MdVerified className="mx-2 text-blue-500" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-10 h-10 ring-1 ring-white ">
                        <span className="wil-avatar__name">J</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <div className="text-xs ">Collection</div>
                      <div className="text-sm font-semibold ">
                        {sliderData[idNumber].collection}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex flex-col sm:flex-row items-baseline p-6 border-2 border-green-500 rounded-xl relative">
                    <span className="block absolute bottom-full translate-y-1.5 py-1 px-1.5 bg-white  text-sm text-neutral-500  ring ring-offset-0 ring-white ">
                      Current Bid
                    </span>
                    <span className="text-xl xl:text-2xl font-semibold text-green-500">
                      {sliderData[idNumber].price}
                    </span>
                    <span className="text-lg text-neutral-400 sm:ml-3.5">
                      (≈ $3,221.22)
                    </span>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="text-neutral-500  flex items-center space-x-2 ">
                    <MdTimer />
                    <span className="leading-none mt-1">
                      Auction ending in:
                    </span>
                  </div>
                  <div className="flex space-x-5 sm:space-x-10">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl sm:text-3xl font-semibold">
                        {sliderData[idNumber].time.days}
                      </span>
                      <span className="sm:text-lg text-neutral-500 ">Days</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl sm:text-3xl font-semibold">
                        {sliderData[idNumber].time.hours}
                      </span>
                      <span className="sm:text-lg text-neutral-500 ">
                        hours
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl sm:text-3xl font-semibold">
                        {sliderData[idNumber].time.minutes}
                      </span>
                      <span className="sm:text-lg text-neutral-500 ">mins</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl sm:text-3xl font-semibold">
                        {sliderData[idNumber].time.seconds}
                      </span>
                      <span className="sm:text-lg text-neutral-500">secs</span>
                    </div>
                  </div>
                </div>
                <div className="w h-[1px] bg-neutral-100 "></div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <button
                    onClick={() => {}}
                    className=" py-2 text-sm bg-blue-400 rounded-full  w-36  h-18 text-white inline-flex items-center justify-center transition-colors sm:text-base font-medium px-4 sm:px-6"
                  >
                    Place bid
                  </button>
                  <button
                    onClick={() => {}}
                    className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonSecondary border bg-white border-neutral-200 text-neutral-700  hover:bg-neutral-100  flex-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 "
                  >
                   View item
                  </button>
                  
                </div>
              </div>
              <div className="p-4 sm:pt-8 sm:px-10 ">
                <div
                  className="nc-NextPrev relative flex items-center text-neutral-500 "
                  data-nc-id="NextPrev"
                  data-glide-el="controls"
                >
                  <button
                    onClick={() => dec()}
                    className="w-11 h-11 text-xl mr-2 border-neutral-200  rounded-full flex items-center justify-center border-2 "
                    title="Prev"
                    data-glide-dir="<"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M20.5 12H3.67004"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <button
                    onClick={() => inc()}
                    className="w-11 h-11 text-xl  border-neutral-200  rounded-full flex items-center justify-center border-2"
                    title="Next"
                    data-glide-dir=">"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M3.5 12H20.33"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[44%] relative ">
              <div className="nc-CardLarge1__right ">
                <a href="/ciscryp/nft-detailt">
                  <div
                    className="nc-NcImage aspect-w-1 aspect-h-1 relative"
                    data-nc-id="NcImage"
                  >
                    <Image
                      src={sliderData[idNumber].nftImage}
                      alt="NFT IMAGE"
                      className={
                        "absolute inset-0 object-cover rounded-3xl sm:rounded-[40px] border-4 sm:border-[14px] border-white"
                      }
                    />
                  </div>
                </a>
                <button className="bg-black/50 px-3.5 h-10 flex items-center justify-center rounded-full text-white absolute right-3 top-3 sm:right-7 sm:top-7">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                      stroke="currentColor"
                      fill="#ef4444"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="ml-2 text-sm">
                    {sliderData[idNumber].like}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
