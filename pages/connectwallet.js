/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

import images from "../img";

// //IMPORT FROM SMART CONTRACT
// import { Asecontext } from "../Context/Asecontext";
const connectWallet = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  // const { currentAccount, connectWallet } = useContext(Asecontext);
  const providerArray = [
    {
      provider: images.provider1,
      name: "Metamask",
    },
    {
      provider: images.provider2,
      name: "walletConnect",
    },
    {
      provider: images.provider3,
      name: "walletlink",
    },
    {
      provider: images.provider1,
      name: "Formatic",
    },
  ];
  return (
    <div className={" w-full m-8"}>
      <div className={" w-[50%] m-auto"}>
       <div className="max-w-2xl border-b pb-8">
       <h1 className="text-3xl sm:text-4xl font-semibold">Connect your wallet</h1>
        <p className={"block mt-3 text-neutral-500 dark:text-neutral-400"}>
          Connect with one of our available wallet providers or create a new one
        </p>
       </div>

        <div className={" mt-16 pr-20 "}>
          {providerArray.map((el, i) => (
            <div
              className={`${" flex items-center border my-4 gap-8 hover:shadow-gray-200 rounded-xl shadow-lg p-2 cursor-pointer transition-all duration-300 ease-in-out "} ${
                activeBtn == i + 1 ? "" : ""
              }`}
              key={i + 1}
              onClick={() => (setActiveBtn(i + 1), connectWallet())}
            >
              <Image
                src={el.provider}
                alt={el.provider}
                width={60}
                height={60}objectFit ="cover"
                className={" bg-white p-2 rounded-full"}
              />
              <p className="font-bold text-lg">{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default connectWallet;
