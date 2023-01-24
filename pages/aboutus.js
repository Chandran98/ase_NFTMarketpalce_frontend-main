/* eslint-disable react/jsx-key */
import React from "react";
import Image from "next/image";

import Brand from "../components/brand";
import images from "../img";  
import Footer from "../components/Footer/Footer";

const aboutus = () => {
  const founderArray = [
    {
      name: "Niamh O'Shea",
      position: "Co-founder and Chief Executive",
      images: images.founder1,
    },
    {
      name: "Danien Jame",
      position: "Co-founder and Chief Executive",
      images: images.founder2,
    },
    {
      name: "Orla Dwyer",
      position: "Co-founder, Chairman",
      images: images.founder3,
    },
    {
      name: "Dara Frazier",
      position: "Co-Founder, Chief Strategy Officer",
      images: images.founder4,
    },
  ];

  const factsArray = [
    {
      title: "10 million",
      info: "Articles have been public around the world (as of Sept. 30, 2021)",
    },
    {
      title: "100,000",
      info: "Registered users account (as of Sept. 30, 2021)",
    },
    {
      title: "220+",
      info: "Countries and regions have our presence (as of Sept. 30, 2021",
    },
  ];
  return (
  <>
    <div className={"relative  "}>
      <div className={"container py-16 space-y-16 p-20  "}>
        <div className={" flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left"}>
          <div className={"w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7"}>
            <h1 className="flex items-center  flex-wrap  text-3xl md:text-4xl font-semibold">👋 About Us.</h1>
            <p className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
              We’re impartial and independent, and every day we create
              distinctive, world-class programmes and content which inform,
              educate and entertain millions of people in the around the world.
            </p>
          </div>
          <div className={""}>
            <Image src={images.hero2} />
          </div>
        </div>

        <div className={"relative"}>
          <h2 className="flex items-center  flex-wrap  text-3xl md:text-4xl font-semibold">⛱ Founder</h2>
          <p className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400 mt-5">
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>

        <div className={"flex-row flex"}>
          <div className={" flex gap-4"}>
            {founderArray.map((el, i) => (
              <div className={"max-w-sm "}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={500}
                  height={500}
                  objectFit="cover"
                  className={" object"}
                />
                <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">{el.name}ds</h3>
                <p className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">{el.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={"nc-Section-Heading relative   sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 text-neutral-900 dark:text-neutral-50"}>
          <h2 className="flex items-center  flex-wrap  text-3xl md:text-4xl font-semibold">🚀 Fast Facts</h2>
          <p className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>

        <div className={"flex "}>
          <div className={"grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8"}>
            {factsArray.map((el, i) => (
              <div className={"p-6  bg-neutral-100 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800"}>
                <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200">{el.title}</h3>
                <p className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </div>
    
  <Footer/>
    </>
  );
};

export default aboutus;
