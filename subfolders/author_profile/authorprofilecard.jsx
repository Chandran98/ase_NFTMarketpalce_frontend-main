import React, { useState } from "react";
import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdOutlineReportProblem,
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";

import images from "../../img";
// import { Button } from "../../components/componentsindex.js";

// const AuthorProfileCard = ({ currentAccount }) => {
const AuthorProfileCard = ({  }) => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);

  //copyAddress function
  const copyAddress = () => {
    const copyText = document.getElementById("myInput");

    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };

//   const openShare = () => {
//     if (!share) {
//       setShare(true);
//       setReport(false);
//     } else {
//       setShare(false);
//     }
//   };

//   const openReport = () => {
//     if (!report) {
//       setReport(true);
//       setShare(false);
//     } else {
//       setReport(false);
//     }
//   };

  return (
    <div className={"-mt-24 px-24 w-[80%] ml-32  lg:-mt-16"}>
      <div className={"relative bg-white     dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-8 rounded-3xl md:rounded-[40px] shadow-xl flex  md:flex-row"}>
        <div className={"nc-NcImage  aspect-w-1 aspect-h-1 rounded-3xl overflow-hidden"}> 
          <Image
            src={images.nft_image_1}
            className={"object-cover w-120 h-120"}
            alt="NFT IMAGES"
            width={220}
            height={220}
          />
        </div>

        <div className={"p-5 ml-3 md:pt-1 md:ml-6 xl:ml-14 "}>
          <h2 className="inline-flex items-center text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Dony Herrera
            <span className="ml-2">
              <MdVerified  style={{color:"#7BB3EE"}} />
            </span>
          </h2>

          <div className={"flex items-center text-sm font-medium space-x-2.5 mt-2.5 text-green-600 cursor-pointer"}>
            
            <input className=" w-[30%] text-neutral-700 dark:text-neutral-300" type="text" value={"0fxd7d6sadsadsdasdadsadsadsadsaa64a3sdas5d6ds"} id="myInput" />
            {/* <input className="text-neutral-700 dark:text-neutral-300" type="text" value={currentAccount} id="myInput" /> */}
            <FiCopy
              onClick={() => copyAddress()}
              className={'ml-2'}
            />
          </div>

          <p className="block mt-4 text-sm text-neutral-500 dark:text-neutral-400">
            Punk #4786 / An OG Cryptopunk Collector, hoarder of NFTs.
            Contributing to @ether_cards,<br/> an NFT Monetization Platform.
          </p>

          <div className={"nc-SocialsList flex space-x-2.5 text-2xl mt-4 text-neutral-6000 dark:text-neutral-300 "}>
            <a className="block w-10 h-7" href="#">
              <TiSocialFacebook />
            </a>
            <a className="block w-10 h-7" href="#">
              <TiSocialInstagram />
            </a>
            <a className="block w-10 h-7" href="#">
              <TiSocialLinkedin  />
            </a>
            <a className="block w-10 h-7" href="#">
              <TiSocialYoutube />
            </a>
          </div>
        </div>

        <div className={" md:static left-5 top-4 sm:left-auto sm:top-5 sm:right-5 flex flex-row-reverse justify-end"}>
          {/* <Button btnName="Follow" handleClick={() => {}} /> */}
          <MdCloudUpload
            onClick={() => openShare()}
            className={"w-10 h-10 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:bg-neutral-800 cursor-pointer mx-2 p-2"}
          />

          {share && (
            <div className={"absolute origin-top-right  sm:!w-52 right-0 w-56 mt-2 bg-white dark:bg-neutral-900 rounded-2xl divide-y divide-neutral-100 shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 focus:outline-none z-30 transform opacity-100 scale-100"}>
              <p className="flex items-center rounded-md w-full px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 truncate ">
                <span className="lab la-facebook-f mr-1 w-7 text-base">
                  <TiSocialFacebook />
                </span>{" "}
                
                Facebook
              </p>
              <p className="flex items-center rounded-md w-full px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 truncate ">
                <span className="lab la-facebook-f mr-1 w-7 text-base">
                  <TiSocialInstagram />
                </span>{" "}
                
                Instragram
              </p>
              <p className="flex items-center rounded-md w-full px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 truncate ">
                <span className="lab la-facebook-f mr-1 w-7 text-base">
                  <TiSocialLinkedin />
                </span>{" "}
                
                LinkedIn
              </p>
              <p className="flex items-center rounded-md w-full px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 truncate ">
                <span className="lab la-facebook-f mr-1 w-7 text-base">
                  <TiSocialYoutube />
                </span>{" "}
                
                YouTube
              </p>
            </div>
          )}

          <BsThreeDots
            onClick={() => openReport()}
            className={" w-10 h-10 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:bg-neutral-800 cursor-pointer p-2 "}
          />

          {report && (
            <p className={"px-1 py-3 text-sm text-neutral-6000 dark:text-neutral-300"}>
              <span>
                <MdOutlineReportProblem className=" mr-1 w-7 text-base" />
              </span>{" "}
              
              Report abuse
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorProfileCard;
