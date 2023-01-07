import React, { useState, useEffect } from "react";
import {  RiUserFollowFill,  RiUserUnfollowFill,  RiAwardLine,} from "react-icons/ri";

//INTERNAL IMPORT
import FollowerTabCard from "./follower_card";
import images from "../../img";

export default function Follower ({ TopCreator }) {
  const CardArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
    },
  ];
  const FollowingArray = [
    {
      background: images.creatorbackground3,
      user: images.user3,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
  ];
  const NewsArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
  ];

  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  };
  const openFollower = () => {
    if (!following) {
      setPopular(false);
      setFollowing(true);
      setNews(false);
    }
  };
  const openNews = () => {
    if (!news) {
      setPopular(false);
      setFollowing(false);
      setNews(true);
    }
  };

  return (
    <div className={" relative inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-neutral-100/80 dark:bg-black/20 p-5"}>
    <div className={"flex flex-col items-center text-center w-full max-w-2xl mx-auto "}>
      <h2 className="flex items-center m-8 flex-wrap justify-center text-3xl md:text-4xl 2xl:text-5xl font-semibold"> Top Creators List..</h2>
      <div className={"mb-12 lg:mb-14 relative flex justify-center w-full text-sm md:text-base"}>
        <div className={"flex  p-2 bg-white h-12 rounded-full shadow-lg gap-3"}>
          <button className={`flex items-center gap-2 font-medium whitespace-nowrap bg-${popular? "cyan-700" : "white"} text-${!popular? "black" : "white"} hover:bg-cyan-700 hover:text-white px-3 py-2 text-sm sm:px-7 sm:py-3 capitalize rounded-full bg-primary-6000 text-primary-50 focus:outline-none`}  onClick={() => openPopular()}>
            <RiUserFollowFill /> Popular
          </button>
          <button className={`flex items-center gap-2 font-medium whitespace-nowrap bg-${following? "cyan-700" : "white"} text-${!following? "black" : "white"} hover:bg-cyan-700 hover:text-white px-3 py-2 text-sm sm:px-7 sm:py-3 capitalize rounded-full bg-primary-6000 text-primary-50 focus:outline-none`} onClick={() => openFollower()}>
            <RiUserFollowFill /> Following
          </button>
          <button className={`flex items-center gap-2 font-medium whitespace-nowrap bg-${news? "cyan-700" : "white"} text-${!news? "black" : "white"} hover:bg-cyan-700 hover:text-white px-3 py-2 text-sm sm:px-7 sm:py-3 capitalize rounded-full bg-primary-6000 text-primary-50 focus:outline-none`} onClick={() => openNews()}>
            <RiAwardLine /> NoteWorthy
          </button>
        </div>
      </div>
    </div>

    {popular && (
      <div className={" w-[80%] m-auto grid  grid-cols-4 gap-8"}>
        {CardArray.map((el, i) => (
          <FollowerTabCard key={i + 1} i={i} el={el} />
        ))}
      </div>
    )}

    {following && (
      <div className={"w-[80%] m-auto grid  grid-cols-4 gap-8"}>
        {FollowingArray.map((el, i) => (
          <FollowerTabCard key={i + 1} i={i} el={el} />
        ))}
      </div>
    )}

    {news && (
      <div className={"w-[80%] m-auto grid  grid-cols-4 gap-8"}>
        {NewsArray.map((el, i) => (
          <FollowerTabCard key={i + 1} i={i} el={el} />
        ))}
      </div>
    )}

    <div className={"mt-16 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-5"}>
      <div className={'mt-16 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-5'}>
      <button className={`flex items-center gap-2 font-medium whitespace-nowrap bg-${news? "cyan-700" : "white"} text-${!news? "black" : "white"} hover:bg-cyan-700 hover:text-white px-3 py-2 text-sm sm:px-7 sm:py-3 capitalize rounded-full bg-primary-6000 text-primary-50 focus:outline-none`} onClick={() => openNews()}>
             show more
          </button>
          <button className={`flex items-center gap-2 font-medium whitespace-nowrap bg-${news? "cyan-700" : "white"} text-${!news? "black" : "white"} hover:bg-cyan-700 hover:text-white px-3 py-2 text-sm sm:px-7 sm:py-3 capitalize rounded-full bg-primary-6000 text-primary-50 focus:outline-none`} onClick={() => openNews()}>
             Become a author
          </button>
      </div>
    </div>
  </div>
  );
};


