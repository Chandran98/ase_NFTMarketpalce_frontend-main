import React, { useState, useMemo, useCallback, useContext } from "react";
import Image from "next/image";
import useDropzone from "react-dropzone";

import images from "../img";
import Footer from "../components/Footer/Footer";
import From from "../components/form";

const account = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [fileUrl, setFileUrl] = useState(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const onDrop = useCallback(async (acceptedFile) => {
    setFileUrl(acceptedFile[0]);
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { getRootProps, getInputProps } = useDropzone({
  //   onDrop,
  //   accept: "image/*",
  //   maxSize: 5000000,
  // });

  return (
  <div className="">
    <div className="container">
      <div className={" my-12 sm:lg:my-16 lg:my-24 max-w-4xl mx-auto space-y-8 sm:space-y-10"}>
      <div className={"max-w-2xl"}>
        <h1 className="text-3xl sm:text-4xl font-semibold">Profile settings</h1>
        <p className="block mt-3 text-neutral-500 dark:text-neutral-400">
          You can set preferred display name, create your profile URL and manage
          other personal settings.
        </p>
      </div>
<div className="w-full border-b-2 border-neutral-100 dark:border-neutral-700"></div>
      <div className={"mt-12 gap-12 items-start"}>
        {/* <div className={"mt-8 cursor-pointer relative text-center"} {...getRootProps()}>
          <input {...getInputProps()} />
          <Image
            src={images.user1}
            alt="account upload"
            width={150}
            height={150}
            className={' rounded-full'}
          />
          <p className={" font-bold text-sm leading-3"}>Change Image</p>
        </div> */}
        <div className={"flex flex-col md:flex-row "}>
          <From />
        </div>
      </div>
    </div>
  </div>
  <Footer/>
  </div>
  );
};

export default account;
