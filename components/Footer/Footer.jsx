/* eslint-disable react/jsx-key */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Discoverdata, Helpcenterdata }from "../Data/data"
import { BsWhatsapp } from "react-icons/bs";
import { FiMail, FiSend } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Footer() {



  return (
    <div className=" h-80 bg-white  flex-row lg:flex  hidden">
      <div className="  flex-[10%]">
        <Image
          src="/../public/favicon.ico"
          className="img-fluid d-3 mt-4 ml-4 "
          alt="#"
          width={35}
          height={100}
        />
        <p className="p-4 text-justify text-sm">
          Contrary to popular beoots in a piece of classical Latin literature
          from 45 BC, making it over 2000 source. The first line of Lorem
          Ipsum, comes from a line in section 1.10.32.
        </p>
        <div className=" flex flex-row p-2 gap-8 items-center px-5">
          <FaLinkedin
            className="  h-6 w-6 "
            
          />
          <FcGoogle
            className="  h-6 w-6 "
            
          />
          <BsTwitter
            className=" h-6 w-6 "
            
          />
          <BsFacebook
            className=" h-6 w-6 "
            
          />
          <FiMail
            className=" h-6 w-6 "
            
          />
        </div>
      </div>
      <div className="p-3 mt-3 ml-6 flex-[1%]">
        <h1 className="font-bold">Discover</h1>
        <div className="dropdown flex-col absolute p-4 bg-white w-300px rounded-lg  ">
          <Discoverdata classPrps=" text-xs"/>
        </div>
      </div>
      <div className=" flex-[2%]">
        <div className="p-3 mt-3 ml-6 flex-[1%]">
          <h1 className="font-bold">Help Center</h1>
          <div className="dropdown flex-col absolute p-4 bg-white w-300px rounded-lg  ">
           <Helpcenterdata classProps="text-xs"/>
          </div>
        </div>
      </div>
      <div className="flex-[10%]">
        <h1 className="p-3 mt-3 ml-6 font-bold"> Subscribe </h1>
        <div className="h-12 mt-4 bg-gray-600 items-center flex justify-between rounded-full w-3/4 ml-6 px-5 py-3 text-white">
          Enter your e-mail*
          <FiSend
            className="  w-6 "
            
          />
        </div>
        <p className=" text-xs px-8 mt-6 ml-1">
          To popular beoots in a piece of classical Latin literature from 45 BC,
          making it over 2000 source. Lorem Ipsum comes
        </p>
      </div>
    </div>
  );
}
