import React, { useState } from "react";
import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
import {useRouter} from "next/router";

import images from "../../img";
import DropZone from "../uploadnft/dropzone";

const UloadNFT = ({ uploadToIPFS, createNFT }) => {
  const [price, setPrice] = useState("");
  const [active, setActive] = useState(0);
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [category, setCategory] = useState(0);
  const [properties, setProperties] = useState("");
  const [image, setImage] = useState(null);

  const router = useRouter();

  const categoryArry = [
    {
      image: images.nft_image_1,
      category: "Sports",
    },
    {
      image: images.nft_image_2,
      category: "Arts",
    },
    {
      image: images.nft_image_3,
      category: "Music",
    },
    {
      image: images.nft_image_1,
      category: "Digital",
    },
    {
      image: images.nft_image_2,
      category: "Time",
    },
    {
      image: images.nft_image_3,
      category: "Photography",
    },
  ];

  return (
    <div className={""}>
      <DropZone
        title="JPG, PNG, WEBM , MAX 100MB"
        heading="Drag & drop file"
        subHeading="or Browse media on your device"
        name={name}
        website={website}
        description={description}
        royalties={royalties}
        fileSize={fileSize}
        category={category}
        properties={properties}
        setImage={setImage}
        uploadToIPFS={uploadToIPFS}
      />

      <div className={""}>
        <div className={"mt-1.5"}>
          <label htmlFor="nft" className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 ">Item Name</label>
          <input
            type="text"
            placeholder="shoaib bhai"
            className={"block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 "}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 ">
          <label htmlFor="website" className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 ">Website</label>
          <div className={"formStyle.Form_box_input_box"}>
            <div className={"formStyle.Form_box_input_box_icon"}>
              <MdOutlineHttp />
            </div>

            <input
              type="text"
              className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
              placeholder="website"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <p className={" p-4"}>
            Ciscrypt will include a link to this URL on this items detail page,
            so that users can click to learn more about it. You are welcome to
            link to your own webpage with more details.
          </p>
        </div>

        <div className="my-8"> 
        <div className="nc-Label text-base  font-medium text-neutral-900 dark:text-neutral-200 ">
          <label htmlFor="description">Description</label>
          
          <p>
            The description will be included on the items detail page
            underneath its image. Markdown syntax is supported.
          </p>
        </div>
        <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            placeholder="something about yourself in few words"
            className="block w-full text-sm rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 mt-1.5"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 ">
          <label htmlFor="name">Choose collection</label>
          <p className={"text-neutral-500 dark:text-neutral-400 text-sm"}>
            Choose an exiting collection or create a new one
          </p>

          <div className={" flex overflow-auto py-2 space-x-4 customScrollBar "}>
            {categoryArry.map((el, i) => (
              <div
                className={`${" rounded-lg p-4 cursor-pointer border"} ${
                  active == i + 1 ? " bg-cyan-300" : ""
                }`}
                key={i + 1}
                onClick={() => (setActive(i + 1), setCategory(el.category))}
              >
                <div className={" flex items-center justify-between w-full"}>
                  <div className={" flex items-center"}>
                    <Image
                      src={el.image}
                      alt="background image"
                      width={70}
                      height={70}
                      className={" rounded-3xl"}
                    />
                  </div>
                  <div className={" grid p-2 rounded-3xl bg-cyan-500"}>
                    <TiTick />
                  </div>
                </div>
                <p className="font-semibold mt-3  text-black">Crypto Legend - {el.category} </p>
              </div>
            ))}
          </div>
        </div>

        <div className={"grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-2.5"}>
          <div className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 ">
           
            <div className={"mt-1.5 flex items-center gap-3 p-3"}>
            <label className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 " htmlFor="Royalties">Royalties</label>
            <FaPercent />
           
            </div>
            <input className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                type="text"
                placeholder="20%"
                onChange={(e) => setRoyalties(e.target.value)}
              />
          </div>
          <div className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 ">
           
            <div className={"mt-1.5 flex items-center gap-3 p-3"}>
              <div className={"formStyle.Form_box_input_box_icon"}>
              <label className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 " htmlFor="size">Size</label>
                <MdOutlineAttachFile />
              </div>
              <input className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                type="text"
                placeholder="165MB"
                onChange={(e) => setFileSize(e.target.value)}
              />
            </div>
          </div>
          <div className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 ">
            <div className={"mt-1.5 flex items-center gap-3 p-3"}>
              <div className={"formStyle.Form_box_input_box_icon"}>
                
            <label htmlFor="Propertie">Properties</label>
                <AiTwotonePropertySafety />
              </div>
              <input className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                type="text"
                placeholder="Properties"
                onChange={(e) => setProperties(e.target.value)}
              />
            </div>
          </div>

          <div className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 ">
            <div className={"mt-1.5 flex items-center gap-3 p-3 "}>
              <div className={"formStyle.Form_box_input_box_icon"}>
                
            <label htmlFor="Price">Price</label>
                <AiTwotonePropertySafety />
              </div>
              <input className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 "
                type="text"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={"pt-2 flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-0 sm:space-x-3 mt-16 "}>
            <button  className={"nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonSecondary border bg-cyan-700 border-neutral-200 text-white dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"}> Up-load </button>
            
            <button  className={" nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonSecondary border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"}> Preview </button>
          {/* <Button
            btnName="Up load"
            handleClick={async () =>
              createNFT(
                name,
                price,
                image,
                description,
                router
                // website,
                // royalties,
                // fileSize,
                // category,
                // properties
              )
            }
         
          /> */}
          {/* <Button
            btnName="Preview"
            handleClick={() => {}}
            classStyle={"w-full grid self-center text-3xl"}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default UloadNFT;
