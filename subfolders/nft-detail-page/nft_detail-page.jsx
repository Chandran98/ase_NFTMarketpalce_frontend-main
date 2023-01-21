import React from "react";
import NFTDescription from "./nft_description";
// import {NFTTabs }  from "./nft_tab";
import NFTDetailsImg from "./nft_detailsimg";
const NFTDetailsPage = ({ nft }) => {
  return (
    <div className={"w-full flex p-20  "}>
      <div className={" w-[80%] m-auto flex"}>
        {/* <NFTDetailsImg nft={nft} />
        <NFTDescription nft={nft} /> */}
        <NFTDetailsImg />
        <NFTDescription />
      </div>
    </div>
  );
};

export default NFTDetailsPage;
