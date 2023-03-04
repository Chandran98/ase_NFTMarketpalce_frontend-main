/* eslint-disable react/jsx-key */
import React, { useState, useEffect, useContext } from "react";

import Banner from "../components/subfolders/Collection_components/banner";
import Brand from "../components/brand";
import Title from "../utils/titlecard";
import FollowerTabCard from "../components/follower/follower_card";
import images from "../img";
import {
  AuthorProfileCard,
  AuthorTaps,
  AuthorNFTCardBox,
} from "../components/subfolders/author_profile/index";
import Footer from "../components/Footer/Footer";

// //IMPORT SMART CONTRACT DATA
import { AseContext } from "../context/AseContext";

const Author = () => {
  const followerArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
      seller: "7d64gf748849j47fy488444",
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      seller: "7d64gf748849j47fy488444",
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
      seller: "7d64gf748849j47fy488444",
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      seller: "7d64gf748849j47fy488444",
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      seller: "7d64gf748849j47fy488444",
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      seller: "7d64gf748849j47fy488444",
    },
  ];

  const [collectiables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);

  const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(AseContext);

  const [nfts, setNfts] = useState([]);
  const [myNFTs, setMyNFTs] = useState([]);

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchItemsListed").then((items) => {
      setNfts(items);
    });
  }, []);

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchMyNFTs").then((items) => {
      setMyNFTs(items);
    });
  }, []);

  return (
    <div >
      <Banner bannerImage={images.creatorbackground2} />

      <div className="px-16">
      <div className="-mt-20">
<AuthorProfileCard currentAccount={currentAccount} />
      </div>
    
      <AuthorTaps
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />
      <AuthorNFTCardBox
        collectiables={collectiables}
        created={created}
        like={like}
        follower={follower}
        following={following}
        nfts={nfts}
        myNFTS={myNFTs}
      />
      </div>
      

      <div className="m-16 rounded-2xl p-24 bg-white">
        <Title
          heading="Popular Creators"
          paragraph="Click on music icon and enjoy NTF music or audio
"
        />
        <div
          className={
            "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10"
          }
        >
          {followerArray.map((el, i) => (<div key={i}>
            <FollowerTabCard i={i} el={el} /></div>
          ))}
        </div>{" "}
      </div>

      <Brand />
      <Footer />
    </div>
  );
};

export default Author;
