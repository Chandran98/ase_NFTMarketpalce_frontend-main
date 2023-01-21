import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  MdVerified,
  MdCloudUpload,
  MdTimer,
  MdReportProblem,
  MdOutlineDeleteSweep,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BiTransferAlt, BiDollar } from "react-icons/bi";

import images from "../../img";
// import { Button } from "../../components/componentsindex.js";
import NFTTabs from "../nft-detail-page/nft_tab";

// //IMPORT SMART CONTRACT
// import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const NFTDescription = ({ nft }) => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [history, setHistory] = useState(true);
  const [provanance, setProvanance] = useState(false);
  const [owner, setOwner] = useState(false);

  const router = useRouter();

  const historyArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ];
  const provananceArray = [
    images.user6,
    images.user7,
    images.user8,
    images.user9,
    images.user10,
  ];
  const ownerArray = [
    images.user1,
    images.user8,
    images.user2,
    images.user6,
    images.user5,
  ];

  const openSocial = () => {
    if (!social) {
      setSocial(true);
      setNFTMenu(false);
    } else {
      setSocial(false);
    }
  };

  const openNFTMenu = () => {
    if (!NFTMenu) {
      setNFTMenu(true);
      setSocial(false);
    } else {
      setNFTMenu(false);
    }
  };

  const openTabs = (e) => {
    const btnText = e.target.innerText;

    if (btnText == "Bid History") {
      setHistory(true);
      setProvanance(false);
      setOwner(false);
    } else if (btnText == "Provanance") {
      setHistory(false);
      setProvanance(true);
      setOwner(false);
    }
  };

  const openOwmer = () => {
    if (!owner) {
      setOwner(true);
      setHistory(false);
      setProvanance(false);
    } else {
      setOwner(false);
      setHistory(true);
    }
  };

  // //SMART CONTRACT DATA
  // const { buyNFT, currentAccount } = useContext(NFTMarketplaceContext);

  return (
    <div className={"flex-1 p-16"}>
      <div className={"m-auto "}>
        {/* //Part ONE */}
        <div className=" ">
          <div className="mb-8">
            <div className={" flex items-center justify-between relative "}>
              <p className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-green-800 bg-green-100  ">
                Virtual Worlds
              </p>
              <div
                className={
                  " flex text-neutral-700 justify-between  gap-3  dark:text-neutral-300  text-sm -mx-3 -my-1.5"
                }
              >
                <MdCloudUpload
                  className={
                    "  cursor-pointer"
                  }
                  onClick={() => openSocial()}
                />

                {social && (
                  <div
                    className={
                      " absolute top-20 left-[65%] w-56 bg-red-500 rounded-lg p-4 "
                    }
                  >
                    {/* <a href="#" className="flex items-center gap-1 p-4" >
                      <TiSocialFacebook className="  items-center rounded-md w-full px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 truncate " />{" "}
                      Facebook
                    </a> */}
                    <a href="#" className="flex items-center gap-1 p-4">
                      <TiSocialInstagram /> Instagram
                    </a>
                    <a href="#" className="flex items-center gap-1 p-4">
                      <TiSocialLinkedin /> LinkedIn
                    </a>
                    <a href="#" className="flex items-center gap-1 p-4">
                      <TiSocialTwitter /> Twitter
                    </a>
                    <a href="#" className="flex items-center gap-1 p-4">
                      <TiSocialYoutube /> YouTube
                    </a>
                  </div>
                )}

                <BsThreeDots
                  className={" cursor-pointer"}
                  onClick={() => openNFTMenu()}
                />

                {NFTMenu && (
                  <div
                    className={
                      " absolute top-20 left-[65%]  bg-slate-500 rounded-lg p-4 "
                    }
                  >
                    <a href="#" className="flex items-center gap-1 p-4">
                      <BiDollar /> Change price
                    </a>
                    <a href="#" className="flex items-center gap-1 p-4">
                      <BiTransferAlt /> Transfer
                    </a>
                    <a href="#" className="flex items-center gap-1 p-4">
                      <MdReportProblem /> Report abouse
                    </a>
                    <a href="#" className="flex items-center gap-1 p-4">
                      <MdOutlineDeleteSweep /> Delete item
                    </a>
                  </div>
                )}
              </div>
            </div>
            {/* //Part TWO */}
            <div className={" pb-9 space-y-5"}>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                BearX #3636
                {/* {nft.name} #{nft.tokenId} */}
              </h1>
              <div className={" flex items-center gap-8 pb-6"}>
                <div className={"flex items-center gap-8 pb-6 self-center"}>
                  <Image
                    src={images.user1}
                    alt="profile"
                    width={40}
                    height={40}
                    className={" rounded-[50%]"}
                  />
                  <div className={" font-bold"}>
                    <small>Creator</small> <br />
                    <Link
                      href={{
                        pathname: "/author",
                        //  query: `${nft.seller}`
                      }}
                    >
                      <span className="flex items-center gap-2">
                        Karl Costa <MdVerified />
                      </span>
                    </Link>
                  </div>
                </div>

                <div className={" flex items-center gap-4 leading-5  pl-8"}>
                  <Image
                    src={images.creatorbackground1}
                    alt="profile"
                    width={40}
                    height={40}
                    className={" rounded-[50%]"}
                  />

                  <div className={" font-semibold"}>
                    <small>Collection</small> <br />
                    <span className="flex items-center gap-2">
                      Monkey app <MdVerified />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={" flex mt-16 items-center text-lg gap-4"}>
            <div className="">
              {" "}
              <p className="flex items-center gap-2">
                <MdTimer /> <span>Auction ending in:</span>
              </p>
              <div className={" flex gap-8 mt-4  rounded-xl  p-4 items-center"}>
                <div className={" font-semibold items-center"}>
                  <p>2</p>
                  <span>Days</span>
                </div>
                <div className={" font-semibold"}>
                  <p>22</p>
                  <span>hours</span>
                </div>
                <div className={" font-semibold"}>
                  <p>45</p>
                  <span>mins</span>
                </div>
                <div className={" font-semibold"}>
                  <p>12</p>
                  <span>secs</span>
                </div>
              </div>
            </div>

          </div>
        <div className=" border-b-2 mb-5">
        <div
            className={
              " flex flex-col sm:flex-row sm:items-end sm:justify-between mt-5 mb-10"
            }
          >
            <div className={"flex-1 flex flex-col sm:flex-row items-baseline p-6 border-2 border-green-500 rounded-xl relative"}>
              <small className="absolute bottom-full translate-y-1 py-1 px-1.5 bg-white dark:bg-neutral-900 text-sm text-neutral-500 dark:text-neutral-400">Current Bid</small>
              <p>1.000 
                {/* {nft.price} */}
                ETH <span>( ≈ $3,221.22)</span>
              </p>
            </div>

            <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-5 mt-2 sm:mt-0 sm:ml-10 gap-6">[96 in stock]</span>
          </div>
          
          <div className={"pb-9 pt-14"}>
              {/* {
              currentAccount == nft.seller.toLowerCase() ? (
                <p>You cant buy your own NFT</p>
              ) : currentAccount == nft.owner.toLowerCase() ? (
                
<button  classStyle={" text-lg p-5"} ><FaPercentage /> Make offer</button>
                // <Button
                //   icon=< FaWallet />
                //   btnName="List on Marketplace"
                //   handleClick={() =>
                //     router.push(
                //       `/reSellToken?id=${nft.tokenId}&tokenURI=${nft.tokenURI}&price=${nft.price}`
                //     )
                //   }
                //   classStyle={" text-lg p-5"}
                // />
              ) : (
                
<button  classStyle={" text-lg p-5"} ><FaPercentage /> Make offer</button>
                // <button/></button>
                // <Button
                //   icon=<FaWallet />
                //   btnName="Buy NFT"
                //   handleClick={() => buyNFT(nft)}
                //   classStyle={" text-lg p-5"}
                // />
              )} */}

              <button classStyle={" w-52 text-lg p-5"}>
                <FaPercentage /> Make offer
              </button>
              {/* <Button
                icon=<FaPercentage />
                btnName="Make offer"
                handleClick={() => {}}
                classStyle={" text-lg p-5"}
              /> */}
            </div>
        </div>
        <div className="flex justify-start pd-1 space-x-2.5 rounded-full  border-neutral-300 dark:border-neutral-500">
          <div className={" mt-11 flex gap-4"}>
            <button className="px-3.5 sm:px-8 py-1.5 sm:py-2 text-xs sm:text-sm leading-5 font-medium rounded-full focus:outline-none focus:ring-2 ring-primary-300 text-neutral-700 dark:text-neutral-300 bg-neutral-100/70 dark:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100" onClick={(e) => openTabs(e)}>Bid History</button>
            <button className="px-3.5 sm:px-8 py-1.5 sm:py-2 text-xs sm:text-sm leading-5 font-medium rounded-full focus:outline-none focus:ring-2 ring-primary-300 text-neutral-700 dark:text-neutral-300 bg-neutral-100/70 dark:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100" onClick={(e) => openTabs(e)}>Provanance</button>
            <button className="px-3.5 sm:px-8 py-1.5 sm:py-2 text-xs sm:text-sm leading-5 font-medium rounded-full focus:outline-none focus:ring-2 ring-primary-300 text-neutral-700 dark:text-neutral-300 bg-neutral-100/70 dark:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100" onClick={() => openOwmer()}>Owner</button>
          </div>
          </div>
          {history && (
            <div className={" mt-8 p-4"}>
              <NFTTabs dataTab={historyArray} />
            </div>
          )}
          {provanance && (
            <div className={"mt-8 p-4"}>
              <NFTTabs dataTab={provananceArray} />
            </div>
          )}

          {owner && (
            <div className={"mt-8 p-4"}>
              <NFTTabs dataTab={ownerArray} icon=<MdVerified /> />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NFTDescription;
