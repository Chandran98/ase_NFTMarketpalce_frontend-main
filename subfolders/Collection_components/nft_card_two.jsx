import React, { useState } from "react";
import Image from "next/image";
import BsImage from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import Link from "next/link";
import LikeProfile from "../../components/likeprofile";

const NFTCardTwo = ({ NFTData }) => {
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(21);
  console.log(NFTData, "asw");
  const likeNFT = () => {
    if (!like) {
      setLike(true);
      setLikeInc(23);
    } else {
      setLike(false);
      setLikeInc(23 + 1);
    }
  };
  NFTData.map((data, index) => {
    console.log(data);
  });

  return (
    <div className="grid grid-cols-3 ">
      {NFTData.map((data, index) => (
        <div key={index} className="w-[80%] flex flex-col gap-9 mb-56 p-7 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
        {/* <div>{data.price}</div> 
        <div>{data.seller}</div> 
        <div>{data.image}</div> 
        <div>{data.owner}</div> 
        <div>{data.tokenId}</div>  */}

        <div  className={" transition-all duration-300 ease-in-out rounded-3xl pb-4"}>
        <Image
            src={data.image}
            className={"rounded-3xl"}
            alt="slider profile"
            width={300}
            height={300}
            objectFit="cover"
          />
        </div>
        <div className="m-3">
          <div className={"  flex justify-between mb-4  items-center"}>
            <p className="sm:text-lg font-semibold">{data.name} #{index + 1}</p>
            <div className={" ml-2 flex items-center space-x-3"}>
              <LikeProfile />
              <small className="text-neutral-700 dark:text-neutral-400 text-xs">
                {index + 4} 0f 100
              </small>
            </div>
          </div>

          <div className={"flex justify-between    "}>
            <div
              className={
                "   border-2 border-green-500 w-[50%] rounded-lg relative py-1.5 md:py-2 px-2.5 md:px-3.5 text-sm sm:text-base font-semibold "
              }
            >
              <small className="block absolute font-normal bottom-full translate-y-1 p-1 -mx-1 text-xs text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-900 ">
                Current Bid
              </small>
              <p className=" text-green-500 !leading-none">{data.price} ETH</p>
            </div>

            <div className={" text-right"}>
              <small className="block text-xs text-neutral-500 dark:text-neutral-400 font-normal tracking-wide">
                Remaining time
              </small>
              <p className="block font-semibold mt-0.5">
                {index + 1}h : 15m : {index + 4}0s
              </p>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCardTwo;
