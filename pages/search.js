import React, { useEffect, useState, useContext } from "react";
import Brand   from "../components/brand";
import Banner from "../subfolders/Collection_components/banner";
import NFTCardTwo from "../subfolders/Collection_components/nft_card_two";
import SearchBar from "../subfolders/search/search_page";
import Slider from "../components/slider/slider";
import Footer from "../components/Footer/Footer";
import Filter from "../components/filterart";
import Loader from "../utils/loader";
import images from "../img";

export default  function Search() {
  // const { fetchNFTs, setError, currentAccount } = useContext(
  //   NFTMarketplaceContext
  // );
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  // useEffect(() => {
  //   try {
  //     if (currentAccount) {
  //       fetchNFTs().then((items) => {
  //         setNfts(items.reverse());
  //         setNftsCopy(items);
  //         console.log(nfts);
  //       });
  //     }
  //   } catch (error) {
  //     setError("Please reload the browser", error);
  //   }
  // }, []);

  // const onHandleSearch = (value) => {
  //   const filteredNFTS = nfts.filter(({ name }) =>
  //     name.toLowerCase().includes(value.toLowerCase())
  //   );

  //   if (filteredNFTS.length === 0) {
  //     setNfts(nftsCopy);
  //   } else {
  //     setNfts(filteredNFTS);
  //   }
  // };

  // const onClearSearch = () => {
  //   if (nfts.length && nftsCopy.length) {
  //     setNfts(nftsCopy);
  //   }
  // };

  // const collectionArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  // ];
  return (
    <div className={""}>
      <Banner bannerImage={images.creatorbackground2} />
      <div className="  ml-64 -mt-6 justify-center"> <SearchBar
        // onHandleSearch={onHandleSearch}
        // onClearSearch={onClearSearch}
      /></div>
      <Filter />
      {nfts.length == 0 ? <Loader /> : <NFTCardTwo NFTData={nfts} />}
     <div className="p-10 ml-12"> <Slider /></div>
      <Brand />
      <Footer/>
    </div>
  );
}

