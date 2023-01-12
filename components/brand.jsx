import React from "react";
import Image from "next/image";
import { DiJqueryLogo } from "react-icons/di";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import images from "../img";
import Button from "../components/Button/button";
import Link from "next/link";

const Brand = () => {
  const router = useRouter();
  return (
    <div
      className={
        "m-20  p-24 relative xl:max-w-[1340px] 2xl:max-w-screen-2xl xl:rounded-[40px] z-0 bg-neutral-100/80 dark:bg-black/20 "
      }
    >
      <div className={" relative flex flex-col lg:flex-row items-center  "}>
        <div className={"flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5"}>
          
          <div className=" flex gap-6 text-primary-6000 ">
            <Link href="/">
            <Image src={images.logo2} alt="brand logo" width={100} height={100} />
            </Link>
            {/* <h1 className="font-bold text-3xl">Obito</h1> */}
          </div>
          <h1 className="font-semibold text-lg sm:text-4xl xl:text-6xl mt-6 sm:mt-10 !leading-[1.112] tracking-tight">
            Earn free crypto with Ciscrypt
          </h1>
          <p className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
            A creative agency that lead and inspire.
          </p>

          <div className={"flex space-x-2 sm:space-x-5 mt-6 sm:mt-12"}>
            <button className="nc-Button w-36 bg-cyan-700 relative items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 ">
              Create
            </button>
            <button className="nc-Button w-36 relative items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonSecondary border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 ">
              Discover
            </button>
          </div>
        </div>
        <div className={"flex-grow"}>
          <Image
            src={images.earn}
            alt="brand logo"
            width={700}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Brand;
