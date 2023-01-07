/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

//INTERNAL IMPORT
import images from "../img";

export default function NFTCard() {
  const CardArray = [
    { imaged: images.nft_image_1, name: "CHEX", price: "1", id: "2321" },
    { imaged: images.nft_image_2, name: "CHEX", price: "1", id: "4646" },
    { imaged: images.nft_image_3, name: "CHEX", price: "1", id: "4521" },
    { imaged: images.nft_image_1, name: "CHEX", price: "1", id: "6754" },
    { imaged: images.nft_image_2, name: "CHEX", price: "1", id: "3783" },
    { imaged: images.nft_image_3, name: "CHEX", price: "1", id: "2387" },
    { imaged: images.nft_image_1, name: "CHEX", price: "1", id: "5288" },
    { imaged: images.nft_image_2, name: "CHEX", price: "1", id: "7342" },
    { imaged: images.nft_image_3, name: "CHEX", price: "1", id: "9600" },
    // images.nft_image_1,
    // images.nft_image_2,
    // images.nft_image_3,
    // images.nft_image_1,
    // images.nft_image_2,
    // images.nft_image_3,
  ];

  const [like, setLike] = useState(true);

  const likeNft = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  // console.log(NFTData);
  return (
    <div className={"grid gap-6 lg:gap-8 sm:grid-cols-2 xl:grid-cols-3 mx-8"}>
      {CardArray.map((el) => (
        <Link href={{ pathname: "/", query: el }}>
          <div className={"relative bg-white  h-72 m-3 rounded-3xl flex p-8"}>
            {/* image */}
            <div className={"flex aspect-w-11 aspect-h-12 w-full rounded-3xl "}>
              <Image
                src={el.imaged}
                alt="NFT images"
                width={800}
                height={600}
                className={
                  "object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ease-in   will-change-transform"
                }
              />
            </div>
            {/* Top */}
            <div className={" p-4 m-3"}>
              <div
                className={
                  "absolute top-2.5 left-2.5 z-10 flex items-center space-x-2"
                }
              >
                <div
                  className={
                    "bg-black/50 px-3.5 h-10 flex items-center justify-center rounded-full text-white  "
                  }
                  onClick={() => likeNft()}
                >
                  {like ? (
                    <AiOutlineHeart />
                  ) : (
                    <AiFillHeart className={"w-5 h-5"} />
                  )}
                  {""} 22
                </div>
              </div>

              <div
                className={"absolute top-[-1px] right-[-1px] flex items-center"}
              >
                <div
                  className={
                    "text-white dark:text-neutral-900 w-44 md:w-[195px]"
                  }
                >
                  <small className="block text-xs text-neutral-500 dark:text-neutral-400 tracking-wide">
                    Remaining time
                  </small>
                  <p className="block md:text-lg font-semibold">
                    3h : 15m : 20s
                  </p>
                </div>
              </div>
            </div>
            {/* Bottom */}
            <div
              className={"absolute left-[-1px] bottom-[-0.4px] justify-between"}
            >
              <div className={"text-white w-64 md:w-[281px]"}>
                {/* left down */}
                <div
                  className={
                    "absolute left-0  rounded-bl-3xl  bottom-0 w-48  h-20 bg-white  "
                  }
                >
                  <h4 className=" font-semibold text-black">
                    {el.name} #{el.id}
                  </h4>

                  <div className={"  flex justify-between  items-center  group "}>
                    <div className={" px-5"}>
                      <small className="  text-green-500 ">Current Bid</small>
                      <p className="flex border-2 text-black border-green-500 rounded-lg relative py-1.5 md:py-2  md:px-3.5 text-sm sm:text-base font-semibold ">
                        {el.price} ETH
                      </p>
                    </div>
                    <div
                      className={
                        "block text-neutral-500  text-xs"
                      }
                    >
                      <small>61 in stock</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* corner image */}
              <div
                className={
                  "bg-black/50  flex items-center justify-center rounded-full text-white absolute bottom-2.5 right-2.5 w-7 h-7 md:w-9 md:h-9"
                }
              >
                <BsImages className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
