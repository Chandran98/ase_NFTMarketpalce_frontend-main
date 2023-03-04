import React, { useEffect, useState, useContext } from "react";

import { useRouter } from "next/router";
import  Brand from "../components/brand";
import Category from "../components/category";
import NFTDetailsPage from "../components/subfolders/nft-detail-page/nft_detail-page";
import Footer from "../components/Footer/Footer";
import { AseContext } from "../context/AseContext";

export default function NFTDetails  () {
  // const { currentAccount } = useContext(AseContext);

  const [nft, setNft] = useState({
    image: "",
    tokenId: "",
    name: "",
    owner: "",
    price: "",
    seller: "",
  });

  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    setNft(router.query);
  }, [router.isReady]);

  return (
    <div className="bg-white">
      <NFTDetailsPage nft={nft} />
      <Category />
      <Brand/>
      <Footer/>
    </div>
  );

};

