import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";

//IMPORT SMART CONTRACT
import { AseContext } from "../context/AseContext";

const reSellToken = () => {
  const { createSale } = useContext(AseContext);
  const [image, setImage] = useState("");
  const [price, setPrice] = useState('"');
  const router = useRouter();
  const { id, tokenURI } = router.query;

  const fetchNFT = async () => {
    if (!tokenURI) return;

    const { data } = await axios.get(tokenURI);

    setImage(data.image);
  };

  useEffect(() => {
    fetchNFT();
  }, [id]);

  const resell = async () => {
    try {
      await createSale(tokenURI, price, true, id);
      // router.push("/author");
    } catch (error) {
      console.log("Error while resell", error);
    }
  };
  return (
    <div className={" w-full m-16"}>
      <div className={" w-[60%] m-auto"}>
        <h1 className="text-lg text-start mt-7 font-semibold">ReSell Your Token, Set Price</h1>
        <div className={"mt-4"}>
          <label htmlFor="name">Price</label>
          <input
            type="number"
            min={1}
            placeholder="reSell price"
            className={" w-full p-4 bg-right-transparent mt-2 "}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className={"m-8"}>
          {image && (
            <Image src={image} alt="resell nft" width={400} height={400} />
          )}
        </div>

        <div className={""}>
        
          <button className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonSecondary border bg-cyan-700 border-neutral-200 text-white dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0" onClick={()=>resell()}>Resell NFT</button>
        </div>
      </div>
    </div>
  );
};

export default reSellToken;
