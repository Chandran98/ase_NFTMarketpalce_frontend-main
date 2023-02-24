/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

import images from "../../../img";

const DropZone = ({
  title,
  heading,
  subHeading,
  name,
  website,
  description,
  royalties,
  fileSize,
  category,
  properties,
  uploadToIPFS,
  setImage,
}) => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFile) => {
    const url = await uploadToIPFS(acceptedFile[0]);
    setFileUrl(url);
    setImage(url);
    console.log(url);
  });

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });
  return (
    <div className={"mt-1    justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-xl"}>
      <div className={"space-y-1 text-center"} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={" leading-3 p-4 "}>
          <p className="text-xs text-neutral-500 p-2 dark:text-neutral-400">{title}</p>
          <div className={"mx-auto h-12 w-12 text-neutral-400"}>
            <Image
              src={images.upload}
              alt="upload"
              width={200}
              height={200}
              objectFit="contain"
              className={"  rounded-lg "}
            />
          </div>
          <div className="p-2">
          <p className="   text-sm font-semibold text-neutral-6000 dark:text-neutral-300">{heading}</p>
          <p className="  text-sm">{subHeading}</p>
          </div>
        </div>
      </div>

      {fileUrl ?
      (
        <div className={" p-8 mt-12 rounded-lg border "}>
          <div className={"flex "}>
            <Image src={fileUrl} alt="nft image" width={200} height={200} />

            <div className={" p-4"}>
              <div className={" flex items-center justify-between font-bold text-md"}>
                <p className="flex-1">
                  <span  className="text-md font-bold ">Name:</span>
                <span  className=" px-4 text-md font-normal">{name || ""}</span>
                </p>
                <p className="flex-1">
                  <span className="   text-md font-bold ">Website:</span>
                  <span  className=" px-4 text-md font-normal">{website || ""}</span>
                </p>
              </div>

              <div className={""}>
                <p>
                  <span className="  text-md font-bold">Description</span>
                  <span  className=" px-4 text-md font-normal">{description || ""}</span>
                </p>
              </div>

              <div className={" grid grid-cols-3"}>
                <p>
                  <span className="  text-md font-bold">Royalties</span>
                  <span  className=" px-4 text-md font-normal">{royalties || ""}</span>
                </p>
                <p>
                  <span className="  text-md font-bold">FileSize</span>
                  <span  className=" px-4 text-md font-normal">{fileSize || ""}</span>
                </p>
                <p>
                  <span className="  text-md font-bold">Properties</span>
                  <span  className=" px-4 text-md font-normal">{properties || ""}</span>
           
                </p>
                <p>
                  <span className="  text-md font-bold">Category</span>
                  <span  className=" px-4 text-md font-normal">{category || ""}</span>
         
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      ):""}
    </div>
  );
};

export default DropZone;
