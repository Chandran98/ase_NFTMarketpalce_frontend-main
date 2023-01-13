import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

//INTERNAL IMPORT
import images from "../../img";

const DaysComponents = ({ el, i }) => {
  return (
    <div
      className={
        "w-full rounded-2xl cursor-pointer transition hover:transition-all ease-in"
      }
    >
      <div
        className={
          " transition hover:transition-all ease-in-out  rounded-lg bg-white p-2"
        }
      >
        <div className={"rounded-2xl"}>
          <Image
            src={el.background}
            className={"aspect-w-8 aspect-h-8"}
            alt="profile background"
            width={500}
            height={300}
            // objectFit="covers"
          />
        </div>

        <div className={"grid grid-cols-3 gap-1.5 mt-1.5"}>
          <Image
            src={images[`creatorbackground${i + 2}`]}
            alt="profile"
            width={200}
            height={200}
            className={"nc-NcImage w-full h-28"}
            objectFit="covers"
          />
          <Image
            src={images[`creatorbackground${i + 4}`]}
            alt="profile"
            width={200}
            height={200}
            className={"w-full h-28"}
            objectFit="covers"
          />
          <Image
            src={images[`creatorbackground${i + 3}`]}
            alt="profile"
            width={200}
            height={200}
            className={"w-full h-28"}
            objectFit="covers"
          />
        </div>

        <div className={"relative mt-5"}>
          <h2 className="font-semibold text-2xl group-hover:text-primary-500 transition-colors">
            Amazing Collection
          </h2>
          <div className={"mt-2 flex justify-between"}>
            <div className={"flex items-center  truncate"}>
              <Image
                src={el.user}
                alt="profile"
                width={30}
                height={30}
                objectFit="covers"
                className={
                  " wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-6 w-6 ring-1 ring-white dark:ring-neutral-900"
                }
              />

              <p className=" ml-2 text-sm truncate flex items-center gap-2">
                Creator Shoaib Bhai
                <small>
                  <MdVerified />
                </small>
              </p>
            </div>

            <div
              className={
                "mb-0.5 ml-2 inline-flex justify-center text-green-500 border-green-500 items-center px-2 py-1.5 border-2 border-secondary-500 text-secondary-500 rounded-md text-xs !leading-none font-medium"
              }
            >
              <small>{i + 4}.255 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponents;
