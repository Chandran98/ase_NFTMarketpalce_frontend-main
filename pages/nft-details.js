import React, { useEffect, useState, useContext } from "react";

// import { useRouter } from "next/router";

//INTERNAL IMPORT
import  Brand from "../components/brand";
import Category from "../components/category";
import NFTDetailsPage from "../subfolders/nft-detail-page/nft_detail-page";
import Footer from "../components/Footer/Footer";
// //IMPORT SMART CONTRACT DATA
// import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

export default function NFTDetails  () {
  // const { currentAccount } = useContext(NFTMarketplaceContext);

  // const [nft, setNft] = useState({
  //   image: "",
  //   tokenId: "",
  //   name: "",
  //   owner: "",
  //   price: "",
  //   seller: "",
  // });

  // const router = useRouter();
  // useEffect(() => {
  //   if (!router.isReady) return;
  //   setNft(router.query);
  // }, [router.isReady]);

  return (
    <div className="bg-white">
      {/* <NFTDetailsPage nft={nft} /> */}
      <NFTDetailsPage  />
      <Category />
      <Brand/>
      <Footer/>
    </div>
  );

};

