import React, { useEffect, useState, useContext } from "react";
import Brand from "../components/brand";
import Banner from "../components/subfolders/Collection_components/banner";
import NFTCardTwo from "../components/subfolders/Collection_components/nft_card_two";
import SearchBar from "../components/subfolders/search/search_page";
import Slider from "../components/slider/slider";
import Footer from "../components/Footer/Footer";
import Filter from "../components/filterart";
import Loader from "../utils/loader";
import images from "../img";
import { AseContext } from "../context/AseContext";

export default function Search() {
  const { fetchNFTs, setError, currentAccount } = useContext(AseContext);
  const [nfts, setNfts] = useState(null);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    fetchNFTs().then((items) => {
      setNfts(items);
      setNftsCopy(items);
    });
  }, []);

  const onHandleSearch = (value) => {
    const filteredNft = nfts.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    if(filteredNft.length===0){
      setNfts(nftsCopy);
    }else{
      setNfts(filteredNft)
    }
  };

  // const onClearSearch=()=>{
  //   if(nfts.length && nftsCopy.length){
  //     setNfts(nftsCopy);
  //   }
  // }

  return (
    <div className={""}>
      <Banner bannerImage={images.creatorbackground2} />
      <div className="  ml-64 -mt-6 justify-center">
        <SearchBar
        onHandleSearch={onHandleSearch}
        // onClearSearch={onClearSearch}
        />
      </div>
      <Filter />
      <div className="px-32">
        {nfts === null ? <Loader /> : <NFTCardTwo NFTData={nfts} />}
      </div>
      <div className="p-10 ml-12">
        <Slider />
      </div>
      <Brand />
      <Footer />
    </div>
  );
}
