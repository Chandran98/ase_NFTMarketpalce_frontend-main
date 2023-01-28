/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

import images from "../../img";

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
    <div className={"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-xl"}>
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

      {fileUrl && (
        <aside className={" p-8 mt-12 rounded-lg"}>
          <div className={" grid grid-cols-2 gap-12"}>
            <Image src={fileUrl} alt="nft image" width={200} height={200} />

            <div className={" text-lg font-semibold"}>
              <div className={" flex items-center justify-between font-bold text-lg"}>
                <p>
                  <samp>NFT Name:</samp>
                  {name || ""}
                </p>
                <p>
                  <samp>Website:</samp>
                  {website || ""}
                </p>
              </div>

              <div className={""}>
                <p>
                  <span>Description</span>
                  {description || ""}
                </p>
              </div>

              <div className={" grid grid-cols-3"}>
                <p>
                  <span>Royalties</span>
                  {royalties || ""}
                </p>
                <p>
                  <span>FileSize</span>
                  {fileSize || ""}
                </p>
                <p>
                  <span>Properties</span>
                  {properties || ""}
                </p>
                <p>
                  <span>Category</span>
                  {category || ""}
                </p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default DropZone;
