import React from "react";
import Image from "next/image";
import images from "../img";
const LikeProfile = () => {
  const imageArray = [images.user1, images.user2, images.user3, images.user4];
  return (
    <div className={" flex items-start"}>
      {imageArray.map((el, i) => (
        <div className={" border-collapse rounded-3xl"} key={i + 1}>
          <Image
            src={el}
            alt={""}
            width={15}
            
            height={15}
            key={i + 1}
            className={"rounded-3xl"}
          />
        </div>
      ))}
    </div>
  );
};

export default LikeProfile;
