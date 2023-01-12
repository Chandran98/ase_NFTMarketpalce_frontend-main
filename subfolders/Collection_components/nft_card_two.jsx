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

  const likeNFT = () => {
    if (!like) {
      setLike(true);
      setLikeInc(23);
    } else {
      setLike(false);
      setLikeInc(23 + 1);
    }
  };

  return (
    <div className={" w-[80%] grid grid-cols-4 gap-9 mb-56"}>
      {NFTData.map((el, i) => (
        <Link href={{ pathname: "/NFT-details", query: el }} key={i + 1}>
          <div className={" grid cursor-pointer rounded-xl transition-all duration-300 ease-in-out"} key={i + 1}>
            <div className={"p-4 grid grid-cols-1 z-50"}>
              <div className={" "}>
                <div className={" flex items-center justify-between"}>
                  <BsImage className={"text-lg text-cyan-400"} />
                  <p onClick={() => likeNFT()}>
                    {like ? <AiOutlineHeart /> : <AiFillHeart />}
                    {""}
                    <span>{likeInc + 1}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={"grid grid-cols-1 grid-rows-1"}>
              <Image
                src={el.image}
                alt="NFT"
                width={500}
                height={500}
                objectFit="cover"
                className={" rounded-lg"}
              />
            </div>

            <div className={" flex justify-between p-4"}>
              <div className={" "}>
                <LikeProfile />
                <p>{el.name}</p>
              </div>
              <small>4{i + 2}</small>
            </div>

            <div className={" flex justify-between items-end p-4"}>
              <div className={" border-1 p-4 text-lg rounded-md mt-2"}>
                <small>Current Bid</small>
                <p>{el.price || i + 4} ETH</p>
              </div>
              <p className={" flex items-center gap-2 text-lg"}>
                <MdTimer /> <span>{i + 1} hours left</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NFTCardTwo;
