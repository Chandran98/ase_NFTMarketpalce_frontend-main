import React from "react";
import Image from "next/image";


const NFTTabs = ({ dataTab, icon }) => {
  return (
    <div className={" "}>
      {dataTab.map((el, i) => (
        <div className={" flex items-center gap-4 p-4 border-b-2 leading-3"} key={i + 1}>
          <Image
            src={el}
            alt="profile image"
            width={40}
            height={40}
            className={" rounded-3xl"}
          />
          <div className={" flex flex-col self-start leading-4 mt-2 "}>
            <div className="flex items-center gap-3" >
            <span >
              Offer by $770 by  <span className="font-bold  ">Shoaib  Bhai  </span>
              
            </span>
            {icon}  
            </div>

            <small>Jun 14 - 4:12 PM</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTTabs;
