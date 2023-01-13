import React from "react";
import Image from "next/image";

import images from "../img";

const Loader = () => {
  return (
    <div className={" w-full "}>
      <div className={" w-[30%] m-auto text-center"}>
        <div className={" mb-56 -mt-8"}>
          <Image
            src={images.loader}
            alt="loader"
            width={100}
            height={200}
            className={" rounded-full"}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
