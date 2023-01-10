import React from "react";
import Title from "./../../utils/titlecard";
import AudioCard from "./audiocard";
import AudioCardSmall from "./audiocardsmall";

const AudioLive = () => {
  return (
    <div className={" w-[100%]  p-8 "}>
      <div className=" ml-32 py-5 mb-10">
        <Title
          heading={"Listen NFTs audio live"}
          paragraph={" Click on music icon and enjoy NTF music or audio"}
        />
      </div>
      <div className={"justify-center   w-[100%]   flex "}>
        <div className=" flex gap-5">
          <AudioCard />
          <AudioCard />
        </div>
        <div className={"mx-4 w-[30%]"}>
          <AudioCardSmall />
          <AudioCardSmall />
          <AudioCardSmall />
        </div>
      </div>
    </div>
  );
};
export default AudioLive;
