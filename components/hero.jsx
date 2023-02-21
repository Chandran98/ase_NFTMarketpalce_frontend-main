/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Button from "./Button/button"
import {useContext} from "react";

import {Asecontext }from "../context/Asecontext";

export default function Hero() {
  const {title} = useContext(Asecontext);
  return (
    <div className=" lg:flex bg-white p-24  ">
      <div className="  flex-1 h-screen mt-8  ">
        <h1 className=" font-semibold  text-start text-[50px] ">{title}<br/> 
        </h1>
        <h3 className=" text-lg text-start mt-7 ">
          Discover the most outstanding NTFs in all topics of life.<br/>
          Creative your NTFs and sell them
        </h3>
        <Button buttontext="Start Search" btcolor=" bg-cyan-400" />
      </div>
      <div className=" flex-1 ">
        <img src="https://chisnghiax.com/ciscryp/static/media/hero-right-3.2c590fa44020b6330821.png" alt=""/>
      </div>
    </div>
  );
}
