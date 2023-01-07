import React, { useState } from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

//INTERNAL IMPORT
import images from "../../img";
const FollowerTabCard = ({ i, el }) => {
  const [following, setFollowing] = useState(false);

  const followMe = () => {
    if (!following) {
      setFollowing(true);
    } else {
      setFollowing(false);
    }
  };
  return (
    <div className={"nc-CardAuthorBox4 relative flex flex-col overflow-hidden group bg-white dark:bg-neutral-800 group rounded-3xl hover:shadow-xl transition-shadow "}>
      <div className={"relative flex-shrink-0 "}>
        <p className="nc-Badge inline-flex px-2.5 py-1 rounded-full  text-xs  top-2 left-3  text-red-800 bg-red-100  absolute ">
          #{i + 1} <span className="">🥇</span>
        </p>
      </div>

      <div className={" "}>
        <div className={" "}>
          <Image
            className={""}
            src={el.background || images[`creatorbackground${i + 1}`]}
            alt="profile background"
            width={500}
            height={300}
            objectFit="cover"
          />
        </div>

        <div className={"relative -top-5 left-1/2 "}>
          <Image
            className={" wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-12  text-2xl "}
            alt="profile picture"
            width={50}
            height={50}
            src={el.user || images[`user${i + 1}`]}
          />
        </div>

        <div className={"flex items-start px-2 justify-between"}>
          <div className={"pb-3 px-2 pt-0.5"}>
            <h4 className="text-base font-medium gap-2 flex items-center">
              {/* {el.seller.slice(0, 9)} */}
             John rey
              <span>
                <MdVerified />
              </span>
            </h4>
            <p>{el.total || 0} ETH</p>
          </div>

          <div className={"mt-2.5 flex items-center justify-between"}>
            {following ? (
              <button className={`nc-Button h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm font-medium px-4 py-2 min-w-[84px]  ttnc-ButtonSecondary border bg- ${ following?"bg-cyan-700":"white"}   border-neutral-200 text-${ following?"white":"black"} hover:bg-cyan-700 dark:hover:bg-neutral-800 relative z-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0`} onClick={() => followMe()}>
                Follow
                <span>
                  <TiTick />
                </span>
              </button>
            ) : (
              <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm font-medium px-4 py-2 min-w-[84px]  ttnc-ButtonSecondary border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 relative z-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0" onClick={() => followMe()}>Following</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowerTabCard;
