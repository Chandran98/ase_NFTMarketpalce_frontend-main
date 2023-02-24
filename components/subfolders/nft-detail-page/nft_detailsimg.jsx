import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsImages } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import images from "../../../img";

const NFTDetailsImg = ({ nft }) => {
  const [description, setDescription] = useState(true);
  const [details, setDetails] = useState(true);
  const [like, setLike] = useState(false);

  const openDescription = () => {
    if (!description) {
      setDescription(true);
    } else {
      setDescription(false);
    }
  };

  const openDetails = () => {
    if (!details) {
      setDetails(true);
    } else {
      setDetails(false);
    }
  };

  const likeNFT = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <div className={" flex-1 p-16"}>
      <div className={" rounded-2xl  "}>
        <div className={" flex"}>
          <div className={" absolute p-6 items-start justify-between flex  z-auto "}>
            <BsImages className={"  text-xl"} />
            <p onClick={() => likeNFT()}>
              {like ? (
                <AiOutlineHeart
                  className={"  text-xl"}
                />
              ) : (
                <AiFillHeart
                  className={'  text-xl'}
                />
              )}
              <span>23</span>
            </p>
          </div>

          <div className={" grid  col-span-2 row-end-1"}>
            <Image
            // src={images.nft_image_3}
              src={nft.image}
              className={"rounded-lg"}
              alt="NFT image"
              width={700}
              height={800}
              objectFit="cover"
            />
          </div>
        </div>
<div className="w-full rounded-2xl "> 
<div className="mt-4">
    
<div
          className={" flex justify-between w-full px-4 py-2 font-medium text-left bg-neutral-100 dark:bg-neutral-700 dark:hover:bg-neutral-500 rounded-lg hover:bg-neutral-200 focus:outline-none focus-visible:ring focus-visible:ring-neutral-500 focus-visible:ring-opacity-75"}
          onClick={() => openDescription()}
        >
          <p>Description</p>
          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {description && (
          <div className={" "}>
            {/* <p>{nft.description}</p> */}
            
            <p>{nft.description}</p>
          </div>
        )}

</div>
     <div className="mt-4">
     <div
          className={"flex justify-between w-full px-4 py-2 font-medium text-left bg-neutral-100 dark:bg-neutral-700 dark:hover:bg-neutral-500 rounded-lg hover:bg-neutral-200 focus:outline-none focus-visible:ring focus-visible:ring-neutral-500 focus-visible:ring-opacity-75"}
          onClick={() => openDetails()}
        >
          <p>Details</p>
          {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {details && (
          <div className={" p-4 text-lg"}>
            <small>2000 x 2000 px.IMAGE(685KB)</small>
            <p>
              <small>Contract Address</small>
              <br></br>
              {nft.seller}
            </p>
            <p>
              <small>Token ID</small>
             {nft.tokenId}
            </p>
          </div>
        )}
     </div>
</div>
      </div>
    </div>
  );
};

export default NFTDetailsImg;
